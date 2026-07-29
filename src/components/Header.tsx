// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useLocale } from "next-intl";
// import LanguageSwitcher from "./LanguageSwitcher";

// export default function Header() {
//   const pathname = usePathname();
//   const locale = useLocale();

//   // Strip the locale prefix (e.g. "/en/about" -> "/about") before comparing
//   const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
//   const normalizedPathname =
//     pathWithoutLocale !== "/" && pathWithoutLocale.endsWith("/")
//       ? pathWithoutLocale.slice(0, -1)
//       : pathWithoutLocale;

//   const isOverlayHome = normalizedPathname === "/home-video" || normalizedPathname === "/home-centered";
//   const shouldHideHeader = normalizedPathname === "/404";
//   const isCareersPage = normalizedPathname === "/careers";
//   const headerCtaLabel = isCareersPage ? "Join Our Team" : "Get Quote";
//   const headerCtaHref = isCareersPage ? "#" : `/${locale}/get-quote`;

//   // Helper to build locale-aware links
//   const withLocale = (path: string) => `/${locale}${path === "/" ? "" : path}`;

//   if (shouldHideHeader) {
//     return null;
//   }

//   return (
//     <>
//       {!isOverlayHome && (
//         <div className="cargo-topbar">
//           <div className="container">
//             <div className="topbar-grid">
//               <div className="topbar-left">
//                 <span className="topbar-item">
//                   <i className="fa-solid fa-earth-americas"></i>
//                   <span>Global Logistics Excellence</span>
//                 </span>
//                 <span className="topbar-divider"></span>
//                 <span className="topbar-item">
//                   <i className="fa-regular fa-clock"></i>
//                   <span>Mon - Sat: 08:00 - 18:00</span>
//                 </span>
//               </div>
//               <div className="topbar-right">
//                 <div className="social-links">
//                   <a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
//                   <a href="#" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
//                   <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
//                 </div>
//                 <span className="topbar-divider"></span>
//                 <span className="topbar-item topbar-phone">
//                   <i className="fa-solid fa-phone"></i>
//                   <span>+(855) 23 883 886/887</span>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <header className={`cargo-header${isOverlayHome ? " top-15" : ""}`}>
//         <div className="container">
//           <div className="header-grid">
//             <Link href={withLocale("/")} className="logo">
//               <Image src="/images/RCS.png" alt="logo" className="logo" unoptimized width={120} height={40} />
//               <Image src="/images/RCS.png" alt="logo" className="logo-dark" unoptimized width={120} height={40} />
//             </Link>

//             <nav className="main-nav">
//               <ul className="nav-menu">
//                 <li><Link href={withLocale("/")} className="nav-link">Home</Link></li>
//                 <li className="has-child">
//                   <Link href={withLocale("/services")} className="nav-link">Services</Link>
//                   <button type="button" className="submenu-toggle" aria-label="Toggle Services submenu">
//                     <i className="fa-solid fa-chevron-down"></i>
//                   </button>
//                   <ul>
//                     <li><Link href={withLocale("/service-air-freight")}>Airfright</Link></li>
//                     <li><Link href={withLocale("/service-sea-freight")}>Sea Freight</Link></li>
//                     <li><Link href={withLocale("/service-warehouse")}>Warehouse & Distribution</Link></li>
//                     <li><Link href={withLocale("/service-buyer-consolidation")}>Buyer Consolidation</Link></li>
//                     <li><Link href={withLocale("/service-project-cargo")}>Project Cargo</Link></li>
//                     <li><Link href={withLocale("/service-custom-brokerage")}>Customs Brokerage</Link></li>
//                   </ul>
//                 </li>
//                 <li className="has-child">
//                   <Link href={withLocale("/about")} className="nav-link">Company</Link>
//                   <button type="button" className="submenu-toggle" aria-label="Toggle Company submenu">
//                     <i className="fa-solid fa-chevron-down"></i>
//                   </button>
//                   <ul>
//                     <li><Link href={withLocale("/about")}>About Us</Link></li>
//                     <li><Link href={withLocale("/our-fleet")}>Our Fleet</Link></li>
//                   </ul>
//                 </li>
//                 <li><Link href={withLocale("/contact")} className="nav-link">Contact</Link></li>
//               </ul>
//             </nav>

//             <div className="header-actions d-flex align-items-center gap-4">
//               <LanguageSwitcher />
//               <Link href={headerCtaHref} className="btn-header" data-hover={headerCtaLabel}><span>{headerCtaLabel}</span></Link>
//               <div id="btn-extra" className="d-none d-lg-block">
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </div>
//               <div className="menu-toggle">
//                 <i className="fa-solid fa-bars"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div id="extra-wrap">
//         <div id="btn-close">
//           <span></span>
//           <span></span>
//         </div>

//         <div id="extra-content">
//           <Link href={withLocale("/")} className="logo mb-4 d-block">
//             <Image src="/images/RCS.png" alt="logo" className="logo" unoptimized width={220} height={62} />
//           </Link>

//           <h2 className="mb-3 h5-style">Our Services</h2>
//           <ul className="ul-check mb-4">
//             <li><Link href={withLocale("/service-air-freight")}>Air Freight</Link></li>
//             <li><Link href={withLocale("/service-sea-freight")}>Sea Freight</Link></li>
//             <li><Link href={withLocale("/service-warehouse")}>Warehouse & Distribution</Link></li>
//             <li><Link href={withLocale("/service-buyer-consolidation")}>Buyer Consolidation</Link></li>
//             <li><Link href={withLocale("/service-project-cargo")}>Project Cargo</Link></li>
//             <li><Link href={withLocale("/service-custom-brokerage")}>Customs Brokerage</Link></li>
//           </ul>

//           <h2 className="mb-3 h5-style">Contact Info</h2>
//           <div className="contact-info-item">
//             <i className="fa fa-clock"></i>
//             <div>
//               <strong>Opening Hours</strong>
//               Mon - Fri: 08.00 - 18.00
//             </div>
//           </div>
//           <div className="contact-info-item">
//             <i className="fa fa-map-marker"></i>
//             <div>
//               <strong>Address</strong>
//               Flat 703, 7/F KT Tower No.23, Street  112,Sangkat Phsar Depo3, Khan Tuol Kork. Phnom Penh , Cambodia
//             </div>
//           </div>
//           <div className="contact-info-item mb-4">
//             <i className="fa fa-envelope"></i>
//             <div>
//               <strong>Email</strong>
//               suor-cam@rcs-asia.com
//             </div>
//           </div>

//           <h2 className="mb-3 h5-style">About RCS LOGISTICS CAMBODIA LTD</h2>
//           <p className="mb-4">We are a leading logistics provider committed to delivering excellence in every shipment. Trust us to move your business forward.</p>

//           <div className="social-icons-group">
//             <a href="#" className="social-icon-box"><i className="fa-brands fa-facebook"></i></a>
//             <a href="#" className="social-icon-box"><i className="fa-brands fa-twitter"></i></a>
//             <a href="#" className="social-icon-box"><i className="fa-brands fa-instagram"></i></a>
//             <a href="#" className="social-icon-box"><i className="fa-brands fa-linkedin"></i></a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// =============>>>

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("header");

  const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
  const normalizedPathname =
    pathWithoutLocale !== "/" && pathWithoutLocale.endsWith("/")
      ? pathWithoutLocale.slice(0, -1)
      : pathWithoutLocale;

  const isOverlayHome = normalizedPathname === "/home-video" || normalizedPathname === "/home-centered";
  const shouldHideHeader = normalizedPathname === "/404";
  const isCareersPage = normalizedPathname === "/careers";
  const headerCtaLabel = isCareersPage ? t("joinTeam") : t("getQuote");
  const headerCtaHref = isCareersPage ? "#" : `/${locale}/get-quote`;

  const withLocale = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  // ---- Active state helpers ----
  const isExactActive = (path: string) => normalizedPathname === path;

  const servicePaths = [
    "/services",
    "/service-air-freight",
    "/service-sea-freight",
    "/service-warehouse",
    "/service-buyer-consolidation",
    "/service-project-cargo",
    "/service-custom-brokerage",
  ];
  const isServicesActive = servicePaths.includes(normalizedPathname);

  const companyPaths = ["/about", "/our-fleet"];
  const isCompanyActive = companyPaths.includes(normalizedPathname);

  const isHomeActive = normalizedPathname === "/";
  const isContactActive = normalizedPathname === "/contact";

  const navLinkClass = (active: boolean) => `nav-link${active ? " active" : ""}`;
  const subLinkClass = (path: string) => (isExactActive(path) ? "active" : "");

  if (shouldHideHeader) {
    return null;
  }

  return (
    <>
      {!isOverlayHome && (
        <div className="cargo-topbar">
          <div className="container">
            <div className="topbar-grid">
              <div className="topbar-left">
                <span className="topbar-item">
                  <i className="fa-solid fa-earth-americas"></i>
                  <span>{t("topbarTagline")}</span>
                </span>
                <span className="topbar-divider"></span>
                <span className="topbar-item">
                  <i className="fa-regular fa-clock"></i>
                  <span>{t("topbarHours")}</span>
                </span>
              </div>
              <div className="topbar-right">
                <div className="social-links">
                  <a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <span className="topbar-divider"></span>
                <span className="topbar-item topbar-phone">
                  <i className="fa-solid fa-phone"></i>
                  <span>+(855) 23 883 886/887</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className={`cargo-header${isOverlayHome ? " top-15" : ""}`}>
        <div className="container">
          <div className="header-grid">
            <Link href={withLocale("/")} className="logo">
              <Image src="/images/RCS.png" alt="logo" className="logo" unoptimized width={120} height={40} />
              <Image src="/images/RCS.png" alt="logo" className="logo-dark" unoptimized width={120} height={40} />
            </Link>

            <nav className="main-nav">
              <ul className="nav-menu">
                <li><Link href={withLocale("/")} className={navLinkClass(isHomeActive)}>{t("navHome")}</Link></li>
                <li className={`has-child${isServicesActive ? " active" : ""}`}>
                  <Link href={withLocale("/services")} className={navLinkClass(isServicesActive)}>{t("navServices")}</Link>
                  <button type="button" className="submenu-toggle" aria-label="Toggle Services submenu">
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                  <ul>
                    <li><Link href={withLocale("/service-air-freight")} className={subLinkClass("/service-air-freight")}>{t("subAirFreight")}</Link></li>
                    <li><Link href={withLocale("/service-sea-freight")} className={subLinkClass("/service-sea-freight")}>{t("subSeaFreight")}</Link></li>
                    <li><Link href={withLocale("/service-warehouse")} className={subLinkClass("/service-warehouse")}>{t("subWarehouse")}</Link></li>
                    <li><Link href={withLocale("/service-buyer-consolidation")} className={subLinkClass("/service-buyer-consolidation")}>{t("subBuyerConsolidation")}</Link></li>
                    <li><Link href={withLocale("/service-project-cargo")} className={subLinkClass("/service-project-cargo")}>{t("subProjectCargo")}</Link></li>
                    <li><Link href={withLocale("/service-custom-brokerage")} className={subLinkClass("/service-custom-brokerage")}>{t("subCustomsBrokerage")}</Link></li>
                  </ul>
                </li>
                <li className={`has-child${isCompanyActive ? " active" : ""}`}>
                  <Link href={withLocale("/about")} className={navLinkClass(isCompanyActive)}>{t("navCompany")}</Link>
                  <button type="button" className="submenu-toggle" aria-label="Toggle Company submenu">
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                  <ul>
                    <li><Link href={withLocale("/about")} className={subLinkClass("/about")}>{t("subAboutUs")}</Link></li>
                    <li><Link href={withLocale("/our-fleet")} className={subLinkClass("/our-fleet")}>{t("subOurFleet")}</Link></li>
                  </ul>
                </li>
                <li><Link href={withLocale("/contact")} className={navLinkClass(isContactActive)}>{t("navContact")}</Link></li>
              </ul>
            </nav>

            <div className="header-actions d-flex align-items-center gap-4">
              <LanguageSwitcher />
              <Link href={headerCtaHref} className="btn-header" data-hover={headerCtaLabel}><span>{headerCtaLabel}</span></Link>
              <div id="btn-extra" className="d-none d-lg-block">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="menu-toggle">
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="extra-wrap">
        <div id="btn-close">
          <span></span>
          <span></span>
        </div>

        <div id="extra-content">
          <Link href={withLocale("/")} className="logo mb-4 d-block">
            <Image src="/images/RCS.png" alt="logo" className="logo" unoptimized width={220} height={62} style={{ width: "auto", height: "62px" }} />
          </Link>

          <h2 className="mb-3 h5-style">{t("sidebarServicesTitle")}</h2>
          <ul className="ul-check mb-4">
            <li><Link href={withLocale("/service-air-freight")} className={subLinkClass("/service-air-freight")}>{t("subAirFreight")}</Link></li>
            <li><Link href={withLocale("/service-sea-freight")} className={subLinkClass("/service-sea-freight")}>{t("subSeaFreight")}</Link></li>
            <li><Link href={withLocale("/service-warehouse")} className={subLinkClass("/service-warehouse")}>{t("subWarehouse")}</Link></li>
            <li><Link href={withLocale("/service-buyer-consolidation")} className={subLinkClass("/service-buyer-consolidation")}>{t("subBuyerConsolidation")}</Link></li>
            <li><Link href={withLocale("/service-project-cargo")} className={subLinkClass("/service-project-cargo")}>{t("subProjectCargo")}</Link></li>
            <li><Link href={withLocale("/service-custom-brokerage")} className={subLinkClass("/service-custom-brokerage")}>{t("subCustomsBrokerage")}</Link></li>
          </ul>

          <h2 className="mb-3 h5-style">{t("sidebarContactTitle")}</h2>
          <div className="contact-info-item">
            <i className="fa fa-clock"></i>
            <div>
              <strong>{t("sidebarOpeningHours")}</strong>
              {t("sidebarHoursValue")}
            </div>
          </div>
          <div className="contact-info-item">
            <i className="fa fa-map-marker"></i>
            <div>
              <strong>{t("sidebarAddressLabel")}</strong>
              {t("sidebarAddressValue")}
            </div>
          </div>
          <div className="contact-info-item mb-4">
            <i className="fa fa-envelope"></i>
            <div>
              <strong>{t("sidebarEmailLabel")}</strong>
              suor-cam@rcs-asia.com
            </div>
          </div>

          <h2 className="mb-3 h5-style">{t("sidebarAboutTitle")}</h2>
          <p className="mb-4">{t("sidebarAboutDesc")}</p>

          <div className="social-icons-group">
            <a href="#" className="social-icon-box"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="social-icon-box"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="social-icon-box"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="social-icon-box"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </>
  );
}