"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const normalizedPathname = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const isOverlayHome = normalizedPathname === "/home-video" || normalizedPathname === "/home-centered";
  const shouldHideHeader = normalizedPathname === "/404";
  const isCareersPage = normalizedPathname === "/careers";
  const headerCtaLabel = isCareersPage ? "Join Our Team" : "Get Quote";
  const headerCtaHref = isCareersPage ? "#" : "/get-quote";

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
                  <span>Global Logistics Excellence</span>
                </span>
                <span className="topbar-divider"></span>
                <span className="topbar-item">
                  <i className="fa-regular fa-clock"></i>
                  <span>Mon - Sat: 08:00 - 18:00</span>
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
            <Link href="/" className="logo">
              {/* <Image src="/images/logo-white.png" alt="logo" className="logo" unoptimized width={220} height={62} /> */}
              <Image src="/images/RCS.png" alt="logo" className="logo" unoptimized width={120} height={40} />
              {/* <Image src="/images/logo.png" alt="logo" className="logo-dark" unoptimized width={220} height={62} /> */}
              <Image src="/images/RCS.png" alt="logo" className="logo-dark" unoptimized width={120} height={40} />
            </Link>

            <nav className="main-nav">
              <ul className="nav-menu">
                <li><Link href="/" className="nav-link">Home</Link>
                  {/* <ul>
                    <li><Link href="/">Home Default</Link></li>
                    <li><Link href="/home-video">Home Video</Link></li>
                    <li><Link href="/home-slider">Home Slider</Link></li>
                    <li><Link href="/home-split">Home Split Screen</Link></li>
                    <li><Link href="/home-centered">Home Centered</Link></li>
                  </ul> */}
                </li>
                <li className="has-child"><Link href="/services" className="nav-link">Services</Link>
                  <ul>
                    <li><Link href="/service-air-freight">Airfright</Link></li>
                    <li><Link href="/service-sea-freight">Sea Freight</Link></li>
                    <li><Link href="/service-warehouse">Warehouse & Distribution</Link></li>
                    <li><Link href="/service-buyer-consolidation">Buyer Consolidation</Link></li>
                    <li><Link href="/service-project-cargo">Project Cargo</Link></li>
                    <li><Link href="/service-custom-brokerage">Customs Brokerage</Link></li>
                  </ul>
                </li>
                {/* <li className="has-child"><Link href="/tracking" className="nav-link">Tracking</Link>
                  <ul>
                    <li><Link href="/tracking">Tracking Default</Link></li>
                    <li><Link href="/tracking-alt">Tracking 2</Link></li>
                  </ul>
                </li> */}
                <li className="has-child"><Link href="/about" className="nav-link">Company</Link>
                  <ul>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/our-fleet">Our Fleet</Link></li>
                    {/* <li><Link href="/team">Team</Link></li> */}
                    {/* <li><Link href="/careers">Careers</Link></li> */}
                    {/* <li><Link href="/faq">FAQ</Link></li> */}
                  </ul>
                </li>
                {/* <li className="has-child"><Link href="/blog" className="nav-link">Blog</Link>
                  <ul>
                    <li><Link href="/blog">Blog List</Link></li>
                    <li><Link href="/blog-details">Blog Details</Link></li>
                  </ul>
                </li> */}
                <li><Link href="/contact" className="nav-link">Contact</Link></li>
              </ul>
            </nav>

            <div className="header-actions d-flex align-items-center gap-4">
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
          <Link href="/" className="logo mb-4 d-block">
            <Image src="/images/RCS.png" alt="logo" className="logo" unoptimized width={220} height={62} />
          </Link>

          <h2 className="mb-3 h5-style">Our Services</h2>
          <ul className="ul-check mb-4">
            <li><Link href="/service-air-freight">Air Freight</Link></li>
            <li><Link href="/service-sea-freight">Sea Freight</Link></li>
            <li><Link href="/service-warehouse">Warehouse & Distribution</Link></li>
            <li><Link href="/service-buyer-consolidation">Buyer Consolidation</Link></li>
            <li><Link href="/service-project-cargo">Project Cargo</Link></li>
            <li><Link href="/service-custom-brokerage">Customs Brokerage</Link></li>
          </ul>

          <h2 className="mb-3 h5-style">Contact Info</h2>
          <div className="contact-info-item">
            <i className="fa fa-clock"></i>
            <div>
              <strong>Opening Hours</strong>
              Mon - Fri: 08.00 - 18.00
            </div>
          </div>
          <div className="contact-info-item">
            <i className="fa fa-map-marker"></i>
            <div>
              <strong>Address</strong>
              Flat 703, 7/F KT Tower No.23, Street  112,Sangkat Phsar Depo3, Khan Tuol Kork. Phnom Penh , Cambodia
            </div>
          </div>
          <div className="contact-info-item mb-4">
            <i className="fa fa-envelope"></i>
            <div>
              <strong>Email</strong>
              suor-cam@rcs-asia.com
            </div>
          </div>

          <h2 className="mb-3 h5-style">About RCS LOGISTICS CAMBODIA LTD</h2>
          <p className="mb-4">We are a leading logistics provider committed to delivering excellence in every shipment. Trust us to move your business forward.</p>

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
