// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Footer() {
//   const pathname = usePathname();
//   const normalizedPathname = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
//   const isCareersPage = normalizedPathname === "/careers";

//   if (normalizedPathname === "/404") {
//     return null;
//   }

//   return (
//     <>
//       <footer className="footer-main">
//         <div className="footer-top">
//           <div className="container">
//             <div className="footer-grid">
//               <div className="footer-col footer-about">
//                 <h3 className="footer-title">About  RCS  Logistic</h3>
//                 <p className="footer-desc">
//                   RCS Logistics is a leading logistics provider specializing in international air and ocean freight forwarding, supply chain management, domestic transportation, distribution, customs brokerage, and other 3PL logistics solutions.
//                 </p>
//                 <div className="social-links">
//                   <a href="#" className="social-icon">
//                     <i className="fa-brands fa-facebook-f"></i>
//                   </a>
//                   <a href="#" className="social-icon">
//                     <i className="fa-brands fa-linkedin-in"></i>
//                   </a>
//                   <a href="#" className="social-icon">
//                     <i className="fa-brands fa-instagram"></i>
//                   </a>
//                 </div>
//               </div>
//               <div className="footer-col">
//                 <h3 className="footer-title">Quick Links</h3>
//                 <ul className="footer-links">
//                   <li>
//                     <Link href="/about">About Us</Link>
//                   </li>
//                   <li>
//                     <Link href="/our-fleet">Our Fleet</Link>
//                   </li>
//                   {isCareersPage ? (
//                     <>
//                       <li>
//                         <Link href="/team">Our Team</Link>
//                       </li>
//                       <li>
//                         <Link href="/careers">Careers</Link>
//                       </li>
//                       <li>
//                         <Link href="/faq">FAQ</Link>
//                       </li>
//                     </>
//                   ) : (
//                     <>
//                       <li>
//                         <Link href="/services">Our Services</Link>
//                       </li>

//                       <li>
//                         <Link href="/blog">News & Blog</Link>
//                       </li>
//                     </>
//                   )}
//                   <li>
//                     <Link href="/contact">Contact</Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="footer-col">
//                 <h3 className="footer-title">Services</h3>
//                 <ul className="footer-links">
//                   <li>
//                     <Link href="/service-air-freight">Air Freight</Link>
//                   </li>
//                   <li>
//                     <Link href="/service-sea-freight">sea Freight</Link>
//                   </li>
//                   <li>
//                     <Link href="/service-warehouse">Warehouse & Distribution</Link>
//                   </li>
//                   <li>
//                     <Link href="/service-buyer-consolidation">Buyer Consolidation</Link>
//                   </li>
//                   <li>
//                     <Link href="/service-project-cargo">Project Cargo</Link>
//                   </li>
//                   <li>
//                     <Link href="/service-custom-brokerage">Customs Brokerage</Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="footer-col">
//                 <h3 className="footer-title">Contact Us</h3>
//                 <ul className="footer-links">
//                   <li>
//                     <i className="fa-solid fa-location-dot"></i> Flat 703, 7/F KT Tower No.23, Street  112,Sangkat Phsar Depo3, Khan Tuol Kork. Phnom Penh , Cambodi
//                   </li>
//                   <li>
//                     <i className="fa-solid fa-phone"></i> +(855) 23 883 886/887
//                   </li>
//                   <li>
//                     <i className="fa-solid fa-envelope"></i> suor-cam@rcs-asia.com
//                   </li>
//                   <li>
//                     <i className="fa-regular fa-clock"></i> Mon - Sat: 08:00 - 18:00
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <div className="container">
//             <p>
//               &copy; 2026 Cargonz Logistics. All rights reserved. <Link href="/faq">Privacy Policy</Link> |{" "}
//               <Link href="/faq">Terms of Service</Link>
//             </p>
//           </div>
//         </div>
//       </footer>

//       <div className="progress-wrap">
//         <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
//           <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
//         </svg>
//       </div>
//     </>
//   );
// }

// ===========>>>

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("footer");

  const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
  const normalizedPathname =
    pathWithoutLocale !== "/" && pathWithoutLocale.endsWith("/")
      ? pathWithoutLocale.slice(0, -1)
      : pathWithoutLocale;
  const isCareersPage = normalizedPathname === "/careers";

  const withLocale = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  if (normalizedPathname === "/404") {
    return null;
  }

  return (
    <>
      <footer className="footer-main">
        <div className="footer-top">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col footer-about">
                <h3 className="footer-title">{t("aboutTitle")}</h3>
                <p className="footer-desc">{t("aboutDesc")}</p>
                <div className="social-links">
                  <a href="#" className="social-icon">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="footer-col">
                <h3 className="footer-title">{t("quickLinksTitle")}</h3>
                <ul className="footer-links">
                  <li>
                    <Link href={withLocale("/about")}>{t("aboutUs")}</Link>
                  </li>
                  <li>
                    <Link href={withLocale("/our-fleet")}>{t("ourFleet")}</Link>
                  </li>
                  {isCareersPage ? (
                    <>
                      <li>
                        <Link href={withLocale("/team")}>{t("ourTeam")}</Link>
                      </li>
                      <li>
                        <Link href={withLocale("/careers")}>{t("careers")}</Link>
                      </li>
                      <li>
                        <Link href={withLocale("/faq")}>{t("faq")}</Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link href={withLocale("/services")}>{t("ourServices")}</Link>
                      </li>

                      {/* <li>
                        <Link href={withLocale("/blog")}>{t("newsBlog")}</Link>
                      </li> */}
                    </>
                  )}
                  <li>
                    <Link href={withLocale("/contact")}>{t("contact")}</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h3 className="footer-title">{t("servicesTitle")}</h3>
                <ul className="footer-links">
                  <li>
                    <Link href={withLocale("/service-air-freight")}>{t("airFreight")}</Link>
                  </li>
                  <li>
                    <Link href={withLocale("/service-sea-freight")}>{t("seaFreight")}</Link>
                  </li>
                  <li>
                    <Link href={withLocale("/service-warehouse")}>{t("warehouse")}</Link>
                  </li>
                  <li>
                    <Link href={withLocale("/service-buyer-consolidation")}>{t("buyerConsolidation")}</Link>
                  </li>
                  <li>
                    <Link href={withLocale("/service-project-cargo")}>{t("projectCargo")}</Link>
                  </li>
                  <li>
                    <Link href={withLocale("/service-custom-brokerage")}>{t("customsBrokerage")}</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h3 className="footer-title">{t("contactTitle")}</h3>
                <ul className="footer-links">
                  <li>
                    <i className="fa-solid fa-location-dot"></i> {t("addressValue")}
                  </li>
                  <li>
                    <i className="fa-solid fa-phone"></i> +(855) 23 883 886/887
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i> suor-cam@rcs-asia.com
                  </li>
                  <li>
                    <i className="fa-regular fa-clock"></i> {t("hoursValue")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>
              {t("copyright")} <Link href={withLocale("/faq")}>{t("privacyPolicy")}</Link> |{" "}
              <Link href={withLocale("/faq")}>{t("termsOfService")}</Link>
            </p>
          </div>
        </div>
      </footer>

      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
}