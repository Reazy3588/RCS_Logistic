"use client";
import { useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

type SwiperCtor = new (selector: string, options: Record<string, unknown>) => unknown;
type FormResponse = { success?: boolean; message?: string };

// ============= HELPERS =============

/** Clear multiple timers at once */
const clearTimers = (timers: Array<{ timer?: number; key: string }>, appState: Record<string, unknown>) => {
  timers.forEach(({ timer, key }) => {
    if (timer) {
      window.clearTimeout(timer);
      appState[key] = undefined;
    }
  });
};

/** Throttle scroll events to 16ms (60fps) */
const useThrottle = (callback: () => void, delay: number) => {
  const lastRun = useRef<number>(0);
  
  return useCallback(() => {
    const now = Date.now();
    if (now - lastRun.current >= delay) {
      callback();
      lastRun.current = now;
    }
  }, [callback, delay]);
};

// ============= SWIPER CONFIG =============

const SWIPER_CONFIGS = {
  testimonials: {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } },
  },
  team: {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: { 576: { slidesPerView: 2 }, 992: { slidesPerView: 3 }, 1200: { slidesPerView: 3 } },
  },
  hero: {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    speed: 1100,
    autoplay: { delay: 5200, disableOnInteraction: false },
    pagination: { el: ".hero-slider-pagination", clickable: true },
    navigation: { nextEl: ".hero-slider-next", prevEl: ".hero-slider-prev" },
  },
} as const;

export default function ClientEnhancements() {
  const pathname = usePathname();

  // Cache DOM elements with useRef to avoid repeated queries
  const elementsRef = useRef({
    sitePreloader: null as HTMLElement | null,
    headerElement: null as HTMLElement | null,
    progressPathElement: null as SVGPathElement | null,
    progressWrapElement: null as HTMLElement | null,
    menuToggleButton: null as HTMLElement | null,
    mainNavigation: null as HTMLElement | null,
    btnExtra: null as HTMLElement | null,
    btnClose: null as HTMLElement | null,
    extraWrap: null as HTMLElement | null,
  });

  const appStateRef = useRef<typeof window & {
    __cargonzPreloaderActive?: boolean;
    __cargonzPreloaderLoadedTimer?: number;
    __cargonzPreloaderHideTimer?: number;
    __cargonzPreloaderFinalizeTimer?: number;
    __cargonzNavigationInProgress?: boolean;
    __cargonzEnhancementBooted?: boolean;
  } | null>(null);

  const isComponentDisposedRef = useRef(false);


  // Helpers
  const clearAllTimers = useCallback(() => {
    if (!appStateRef.current) return;
    const appState = appStateRef.current as unknown as Record<string, unknown>;
    clearTimers(
      [
        { timer: appState.__cargonzPreloaderLoadedTimer as number | undefined, key: "__cargonzPreloaderLoadedTimer" },
        { timer: appState.__cargonzPreloaderHideTimer as number | undefined, key: "__cargonzPreloaderHideTimer" },
        { timer: appState.__cargonzPreloaderFinalizeTimer as number | undefined, key: "__cargonzPreloaderFinalizeTimer" },
      ],
      appState
    );
  }, []);

  const hidePreloaderNow = useCallback(() => {
    const appState = appStateRef.current;
    if (!appState) return;
    
    const sitePreloader = elementsRef.current.sitePreloader;
    
    appState.__cargonzPreloaderActive = false;
    clearAllTimers();

    document.body.classList.add("loaded");
    document.body.classList.remove("mobile-menu-open");

    appState.__cargonzPreloaderFinalizeTimer = window.setTimeout(() => {
      appState.__cargonzNavigationInProgress = false;
      if (sitePreloader) {
        sitePreloader.style.display = "none";
      }
      const mainNavigation = elementsRef.current.mainNavigation;
      const menuToggleButton = elementsRef.current.menuToggleButton;
      const extraWrap = elementsRef.current.extraWrap;
      if (mainNavigation) mainNavigation.classList.remove("mobile-open");
      if (menuToggleButton) menuToggleButton.classList.remove("active");
      if (extraWrap) extraWrap.classList.remove("open");
      window.dispatchEvent(new Event("preloader:complete"));
      appState.__cargonzPreloaderFinalizeTimer = undefined;
    }, 900);

  }, [clearAllTimers]);

  const runPreloaderSequence = useCallback(() => {
    const appState = appStateRef.current;
    if (!appState) return;
    if (appState.__cargonzPreloaderActive) return;
    
    const sitePreloader = elementsRef.current.sitePreloader;
    
    if (!sitePreloader) return;

    if (appState.__cargonzPreloaderFinalizeTimer) {
      window.clearTimeout(appState.__cargonzPreloaderFinalizeTimer);
      appState.__cargonzPreloaderFinalizeTimer = undefined;
    }

    sitePreloader.style.display = "";
    sitePreloader.classList.remove("preloader-start");
    document.body.classList.remove("loaded");

    const progressBar = sitePreloader.querySelector<HTMLElement>(".loader-progress-bar");
    appState.__cargonzPreloaderActive = true;

    if (appState.__cargonzPreloaderLoadedTimer) {
      window.clearTimeout(appState.__cargonzPreloaderLoadedTimer);
      appState.__cargonzPreloaderLoadedTimer = undefined;
    }

    appState.__cargonzNavigationInProgress = true;

    if (appState.__cargonzPreloaderHideTimer) {
      window.clearTimeout(appState.__cargonzPreloaderHideTimer);
      appState.__cargonzPreloaderHideTimer = undefined;
    }

    if (progressBar) progressBar.style.width = "0%";
    sitePreloader.getBoundingClientRect();
    sitePreloader.classList.add("preloader-start");

    window.requestAnimationFrame(() => {
      if (progressBar) progressBar.style.width = "100%";
    });

    appState.__cargonzPreloaderLoadedTimer = window.setTimeout(() => {
      document.body.classList.add("loaded");
    }, 900);

    appState.__cargonzPreloaderHideTimer = window.setTimeout(hidePreloaderNow, 1800);
  }, [hidePreloaderNow]);

  const onDocumentClick = useCallback((event: MouseEvent) => {
    const appState = appStateRef.current;
    if (!appState) return;
    
    const clickedElement = event.target as HTMLElement | null;
    const linkElement = clickedElement?.closest("a[href]") as HTMLAnchorElement | null;
    
    if (!linkElement) return;

    const linkHref = linkElement.getAttribute("href") ?? "";
    const isInternalLink = linkHref.startsWith("/");
    const isSamePageHash = linkHref.startsWith("#");
    const isNewTab = linkElement.target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    const isSamePath = linkHref === pathname || linkHref === `${pathname}/`;

    if (!isInternalLink || isSamePageHash || isNewTab) return;
    if (isSamePath) return;
    if (appState.__cargonzNavigationInProgress) return;

    appState.__cargonzNavigationInProgress = true;
    runPreloaderSequence();
  }, [pathname, runPreloaderSequence]);

  const updateStickyHeader = useCallback(() => {
    const headerElement = elementsRef.current.headerElement;
    if (!headerElement) return;
    
    if (window.scrollY > 50) headerElement.classList.add("header-sticky");
    else headerElement.classList.remove("header-sticky");
  }, []);

  const updateProgress = useCallback(() => {
    const progressPathElement = elementsRef.current.progressPathElement;
    const progressWrapElement = elementsRef.current.progressWrapElement;
    
    if (!progressPathElement) return;

    const pathLength = progressPathElement.getTotalLength();
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressOffset = pathLength - (scrollPosition * pathLength) / Math.max(documentHeight, 1);
    
    progressPathElement.style.strokeDashoffset = `${progressOffset}`;

    if (!progressWrapElement) return;

    if (scrollPosition > 50) progressWrapElement.classList.add("active-progress");
    else progressWrapElement.classList.remove("active-progress");
  }, []);

  // Throttled scroll handlers
  const throttledStickyHeader = useThrottle(updateStickyHeader, 16);
  const throttledProgress = useThrottle(updateProgress, 16);

  const onProgressClick = useCallback((event: Event) => {
    event.preventDefault();
    const start = window.scrollY;
    if (start <= 0) return;
    const duration = 550;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, Math.floor(start * (1 - eased)));
      if (progress < 1) window.requestAnimationFrame(animate);
    };

    window.requestAnimationFrame(animate);
  }, []);

  const onMenuToggle = useCallback((event: Event) => {
    const menuToggleButton = elementsRef.current.menuToggleButton;
    const mainNavigation = elementsRef.current.mainNavigation;
    
    if (!menuToggleButton || !mainNavigation) return;
    event.preventDefault();
    
    mainNavigation.classList.toggle("mobile-open");
    menuToggleButton.classList.toggle("active");
    document.body.classList.toggle("mobile-menu-open", mainNavigation.classList.contains("mobile-open"));
  }, []);

  const onExtraWrapToggle = useCallback((event: Event) => {
    event.preventDefault();
    const extraWrap = document.getElementById("extra-wrap");
    if (extraWrap) {
      extraWrap.classList.toggle("open");
    }
  }, []);

  const onExtraWrapClose = useCallback((event: Event) => {
    event.preventDefault();
    const extraWrap = document.getElementById("extra-wrap");
    if (extraWrap) {
      extraWrap.classList.remove("open");
    }
  }, []);

  const onContactFormSubmit = useCallback(async (event: Event) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement | null;
    if (!form) return;

    const messageDiv = form.querySelector<HTMLElement>(".form-message");
    const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (!submitButton) return;

    const originalButtonHtml = submitButton.innerHTML;
    if (messageDiv) messageDiv.innerHTML = "";
    submitButton.innerHTML = "<span>Sending Message...</span>";
    submitButton.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const data = (await response.json()) as FormResponse;
      const isSuccess = Boolean(data.success);
      const message = data.message ?? (isSuccess ? "Message sent successfully." : "Failed to send message.");

      if (messageDiv) {
        messageDiv.innerHTML = `<div class="alert ${isSuccess ? "alert-success" : "alert-danger"} mt-3 form-alert-message">${message}</div>`;
      }
      if (isSuccess) form.reset();
    } catch {
      if (messageDiv) {
        messageDiv.innerHTML = '<div class="alert alert-danger mt-3 form-alert-message">An error occurred. Please try again.</div>';
      }
    } finally {
      submitButton.innerHTML = originalButtonHtml;
      submitButton.disabled = false;
    }
  }, []);

  const onQuoteFormSubmit = useCallback(async (event: Event) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement | null;
    if (!form) return;

    const messageDiv = form.querySelector<HTMLElement>(".form-message");
    const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (!submitButton) return;

    const originalButtonHtml = submitButton.innerHTML;
    if (messageDiv) messageDiv.innerHTML = "";
    submitButton.innerHTML = "<span>Sending Request...</span>";
    submitButton.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const data = (await response.json()) as FormResponse;
      const isSuccess = Boolean(data.success);
      const message = data.message ?? (isSuccess ? "Quote request sent successfully." : "Failed to send quote request.");

      if (messageDiv) {
        messageDiv.innerHTML = `<div class="alert ${isSuccess ? "alert-success" : "alert-danger"} mt-3 form-alert-message">${message}</div>`;
      }
      if (isSuccess) form.reset();
    } catch {
      if (messageDiv) {
        messageDiv.innerHTML = '<div class="alert alert-danger mt-3 form-alert-message">An error occurred. Please try again.</div>';
      }
    } finally {
      submitButton.innerHTML = originalButtonHtml;
      submitButton.disabled = false;
    }
  }, []);

  const initSwipers = useCallback(async () => {
    if (isComponentDisposedRef.current) return;

    const swiperImport = await import("swiper/bundle");
    const Swiper = swiperImport.default as SwiperCtor;
    
    if (!Swiper || isComponentDisposedRef.current) return;

    // Initialize testimonials slider
    const testimonialSliderElement = document.querySelector(".testimonials-slider") as { swiper?: unknown } | null;
    if (testimonialSliderElement && !testimonialSliderElement.swiper) {
      new Swiper(".testimonials-slider", SWIPER_CONFIGS.testimonials);
    }

    // Initialize team slider
    const teamSliderElement = document.querySelector(".team-slider") as { swiper?: unknown } | null;
    if (teamSliderElement && !teamSliderElement.swiper) {
      new Swiper(".team-slider", SWIPER_CONFIGS.team);
    }

    // Initialize hero slider
    const homeHeroSliderElement = document.querySelector(".home-hero-slider") as { swiper?: unknown } | null;
    if (homeHeroSliderElement && !homeHeroSliderElement.swiper) {
      new Swiper(".home-hero-slider", SWIPER_CONFIGS.hero);
    }
  }, []);

  useEffect(() => {
    // Initialize app state ref on client
    if (!appStateRef.current) {
      appStateRef.current = window as typeof window & {
        __cargonzPreloaderActive?: boolean;
        __cargonzPreloaderLoadedTimer?: number;
        __cargonzPreloaderHideTimer?: number;
        __cargonzPreloaderFinalizeTimer?: number;
        __cargonzNavigationInProgress?: boolean;
        __cargonzEnhancementBooted?: boolean;
      };
    }

    // Cache DOM elements once on mount
    elementsRef.current = {
      sitePreloader: document.getElementById("preloader"),
      headerElement: document.querySelector<HTMLElement>(".cargo-header"),
      progressPathElement: document.querySelector<SVGPathElement>(".progress-wrap path"),
      progressWrapElement: document.querySelector<HTMLElement>(".progress-wrap"),
      menuToggleButton: document.querySelector<HTMLElement>(".menu-toggle"),
      mainNavigation: document.querySelector<HTMLElement>(".main-nav"),
      btnExtra: document.getElementById("btn-extra"),
      btnClose: document.getElementById("btn-close"),
      extraWrap: document.getElementById("extra-wrap"),
    };

    const appState = appStateRef.current;
    const elements = elementsRef.current;
    const contactFormElement = document.getElementById("contact-form");
    const quoteFormElement = document.getElementById("quote-form");
    isComponentDisposedRef.current = false;
    window.scrollTo(0, 0);
    document.body.classList.remove("mobile-menu-open");
    if (elements.headerElement) {
      elements.headerElement.classList.remove("header-sticky");
    }

    // Initialize progress path stroke styles
    if (elements.progressPathElement) {
      const pathLength = elements.progressPathElement.getTotalLength();
      elements.progressPathElement.style.transition = "none";
      elements.progressPathElement.style.strokeDasharray = `${pathLength} ${pathLength}`;
      elements.progressPathElement.style.strokeDashoffset = `${pathLength}`;
      elements.progressPathElement.getBoundingClientRect();
      elements.progressPathElement.style.transition = "stroke-dashoffset 10ms linear";
    }

    // Initialize preloader state
    if (!appState.__cargonzEnhancementBooted) {
      appState.__cargonzEnhancementBooted = true;
      runPreloaderSequence();
    } else if (appState.__cargonzNavigationInProgress) {
      if (!appState.__cargonzPreloaderActive) runPreloaderSequence();
    } else {
      hidePreloaderNow();
    }

    const safetyTimer = window.setTimeout(() => {
      hidePreloaderNow();
    }, 2200);

    const counterElements = Array.from(document.querySelectorAll<HTMLElement>(".counter-animate[data-target]"));
    let scheduleCounterCheck: (() => void) | null = null;
    if (counterElements.length) {
      let ticking = false;

      const animateCounter = (element: HTMLElement) => {
        if (element.dataset.counted === "true") return;
        const target = Number(element.dataset.target);
        if (!Number.isFinite(target) || target <= 0) {
          element.textContent = "0";
          element.dataset.counted = "true";
          return;
        }

        element.dataset.counted = "true";
        const step = target / (2000 / 16);
        let current = 0;

        const tick = () => {
          current += step;
          if (current < target) {
            element.textContent = String(Math.ceil(current));
            window.requestAnimationFrame(tick);
            return;
          }
          element.textContent = String(target);
        };

        tick();
      };

      const isVisible = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= viewportHeight * 0.9 && rect.bottom >= 0;
      };

      const checkCounters = () => {
        if (!document.body.classList.contains("loaded")) return;

        counterElements.forEach((element) => {
          if (element.dataset.counted === "true") return;
          if (!isVisible(element)) return;
          animateCounter(element);
        });

        const hasPending = counterElements.some((element) => element.dataset.counted !== "true");
        if (hasPending) return;

        if (scheduleCounterCheck) {
          window.removeEventListener("scroll", scheduleCounterCheck);
          window.removeEventListener("resize", scheduleCounterCheck);
          window.removeEventListener("preloader:complete", scheduleCounterCheck);
        }
      };

      scheduleCounterCheck = () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(() => {
          checkCounters();
          ticking = false;
        });
      };

      scheduleCounterCheck();
      window.addEventListener("scroll", scheduleCounterCheck, { passive: true });
      window.addEventListener("resize", scheduleCounterCheck);
      window.addEventListener("preloader:complete", scheduleCounterCheck);
    }

    // Initial calls
    updateStickyHeader();
    updateProgress();

    const collapseShow = (panel: HTMLElement, trigger?: HTMLButtonElement | null) => {
      if (panel.classList.contains("show") || panel.classList.contains("collapsing")) return;
      panel.classList.remove("collapse");
      panel.classList.add("collapsing");
      panel.style.height = "0px";
      panel.getBoundingClientRect();
      panel.style.height = `${panel.scrollHeight}px`;

      if (trigger) {
        trigger.classList.remove("collapsed");
        trigger.setAttribute("aria-expanded", "true");
      }

      const finalize = () => {
        panel.classList.remove("collapsing");
        panel.classList.add("collapse");
        panel.classList.add("show");
        panel.style.height = "";
      };

      const onEnd = (event: TransitionEvent) => {
        if (event.target !== panel) return;
        panel.removeEventListener("transitionend", onEnd);
        finalize();
      };

      panel.addEventListener("transitionend", onEnd);
      window.setTimeout(() => {
        panel.removeEventListener("transitionend", onEnd);
        if (!panel.classList.contains("show")) finalize();
      }, 450);
    };

    const collapseHide = (panel: HTMLElement, trigger?: HTMLButtonElement | null) => {
      if (!panel.classList.contains("show") || panel.classList.contains("collapsing")) return;
      panel.style.height = `${panel.getBoundingClientRect().height}px`;
      panel.getBoundingClientRect();
      panel.classList.remove("collapse");
      panel.classList.remove("show");
      panel.classList.add("collapsing");
      panel.style.height = "0px";

      if (trigger) {
        trigger.classList.add("collapsed");
        trigger.setAttribute("aria-expanded", "false");
      }

      const finalize = () => {
        panel.classList.remove("collapsing");
        panel.classList.add("collapse");
        panel.style.height = "";
      };

      const onEnd = (event: TransitionEvent) => {
        if (event.target !== panel) return;
        panel.removeEventListener("transitionend", onEnd);
        finalize();
      };

      panel.addEventListener("transitionend", onEnd);
      window.setTimeout(() => {
        panel.removeEventListener("transitionend", onEnd);
        finalize();
      }, 450);
    };

    const onAccordionClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLButtonElement>('button[data-bs-toggle="collapse"]') ?? null;
      if (!trigger) return;

      const selector = trigger.getAttribute("data-bs-target");
      if (!selector) return;

      const panel = document.querySelector<HTMLElement>(selector);
      if (!panel) return;

      event.preventDefault();

      const parentSelector = panel.getAttribute("data-bs-parent");
      if (parentSelector) {
        const parent = document.querySelector<HTMLElement>(parentSelector);
        if (parent) {
          const openPanels = Array.from(parent.querySelectorAll<HTMLElement>(".accordion-collapse.show"));
          openPanels.forEach((openPanel) => {
            if (openPanel === panel) return;
            const openId = openPanel.id;
            const openTrigger =
              (openId
                ? parent.querySelector<HTMLButtonElement>(`button[data-bs-toggle="collapse"][data-bs-target="#${openId}"]`)
                : null) ?? null;
            collapseHide(openPanel, openTrigger);
          });
        }
      }

      if (panel.classList.contains("show")) collapseHide(panel, trigger);
      else collapseShow(panel, trigger);
    };

    // Attach event listeners with passive flag for scroll events
    window.addEventListener("scroll", throttledStickyHeader, { passive: true });
    window.addEventListener("scroll", throttledProgress, { passive: true });
    document.addEventListener("click", onDocumentClick, true);
    document.addEventListener("click", onAccordionClick);

    if (elements.progressWrapElement) {
      elements.progressWrapElement.addEventListener("click", onProgressClick);
    }

    if (elements.menuToggleButton && elements.mainNavigation) {
      elements.menuToggleButton.addEventListener("click", onMenuToggle);
    }

    if (elements.btnExtra) {
      elements.btnExtra.addEventListener("click", onExtraWrapToggle);
    }

    if (elements.btnClose) {
      elements.btnClose.addEventListener("click", onExtraWrapClose);
    }

    if (contactFormElement) {
      contactFormElement.addEventListener("submit", onContactFormSubmit);
    }

    if (quoteFormElement) {
      quoteFormElement.addEventListener("submit", onQuoteFormSubmit);
    }

    // Initialize Swiper sliders
    void initSwipers();

    // Cleanup function
    return () => {
      isComponentDisposedRef.current = true;
      window.clearTimeout(safetyTimer);

      // Remove all event listeners
      window.removeEventListener("scroll", throttledStickyHeader);
      window.removeEventListener("scroll", throttledProgress);
      document.removeEventListener("click", onDocumentClick, true);
      document.removeEventListener("click", onAccordionClick);

      if (elements.progressWrapElement) {
        elements.progressWrapElement.removeEventListener("click", onProgressClick);
      }

      if (elements.menuToggleButton && elements.mainNavigation) {
        elements.menuToggleButton.removeEventListener("click", onMenuToggle);
      }

      if (elements.btnExtra) {
        elements.btnExtra.removeEventListener("click", onExtraWrapToggle);
      }

      if (elements.btnClose) {
        elements.btnClose.removeEventListener("click", onExtraWrapClose);
      }

      if (contactFormElement) {
        contactFormElement.removeEventListener("submit", onContactFormSubmit);
      }

      if (quoteFormElement) {
        quoteFormElement.removeEventListener("submit", onQuoteFormSubmit);
      }

      if (scheduleCounterCheck) {
        window.removeEventListener("scroll", scheduleCounterCheck);
        window.removeEventListener("resize", scheduleCounterCheck);
        window.removeEventListener("preloader:complete", scheduleCounterCheck);
      }

    };
  }, [
    pathname,
    runPreloaderSequence,
    hidePreloaderNow,
    updateStickyHeader,
    updateProgress,
    throttledStickyHeader,
    throttledProgress,
    onDocumentClick,
    onProgressClick,
    onMenuToggle,
    onExtraWrapToggle,
    onExtraWrapClose,
    onContactFormSubmit,
    onQuoteFormSubmit,
    clearAllTimers,
    initSwipers,
  ]);

  return null;
}
