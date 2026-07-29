import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers Cargonz Logistics",
  description: "Cargonz - Transportation & Logistics NextJs Template",
};

export default function Page() {
  return (
    <>
<section className="page-header" style={{ backgroundImage: "url('/images/img(6).jpg')" }}>
              <div className="container page-header-content">
                  <h1 className="page-title">Careers</h1>
                  <div className="breadcrumb">
                      <Link href="/" >Home</Link>
                      <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                      <Link href="/about" >Company</Link>
                      <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                      <span>Careers</span>
                  </div>
              </div>
          </section>
      
          <section className="section-padding pb-0">
              <div className="container">
                  <div className="row align-items-center g-5">
                      <div className="col-lg-6">
                          <span className="section-label no-line">Work With Us</span>
                          <h2 className="section-title">Build the Future of Logistics</h2>
                          <p className="section-description mb-4">At Cargonz, we believe great logistics is powered by great people. Join a fast-growing team where innovation, collaboration, and operational excellence drive every decision.</p>
                          <ul className="check-list dark-text mb-0">
                              <li><i className="fa-solid fa-check"></i><span>Clear career growth and leadership pathways</span></li>
                              <li><i className="fa-solid fa-check"></i><span>Modern systems and global project exposure</span></li>
                              <li><i className="fa-solid fa-check"></i><span>Performance culture with strong mentorship</span></li>
                          </ul>
                      </div>
                      <div className="col-lg-6">
                          <Image src="/images/img(8).jpg" alt="Careers" className="img-fluid rounded-4"  unoptimized width={1920} height={1080} sizes="100vw" />
                      </div>
                  </div>
              </div>
          </section>
      
          <section className="section-padding">
              <div className="container">
                  <div className="section-header">
                      <span className="section-label">Open Positions</span>
                      <h2 className="section-title">Current Opportunities</h2>
                      <p className="section-description">Explore roles that fit your expertise and passion.</p>
                  </div>
                  <div className="row g-4">
                      <div className="col-lg-4">
                          <div className="sidebar-widget h-100 p-5">
                              <h2 className="widget-title mb-3">Senior Logistics Coordinator</h2>
                              <p className="mb-3">Jakarta, Indonesia • Full Time</p>
                              <p className="mb-4">Lead daily transport planning, cross-border documentation, and operational reporting.</p>
                              <Link href="/career-details"  className="btn btn-primary btn-sm" data-hover="View Details">View Details</Link>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="sidebar-widget h-100 p-5">
                              <h2 className="widget-title mb-3">Customs Specialist</h2>
                              <p className="mb-3">Surabaya, Indonesia • Full Time</p>
                              <p className="mb-4">Ensure compliance, optimize declarations, and support import/export audits.</p>
                              <Link href="/career-details"  className="btn btn-primary btn-sm" data-hover="View Details">View Details</Link>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="sidebar-widget h-100 p-5">
                              <h2 className="widget-title mb-3">Bussdev Executive</h2>
                              <p className="mb-3">Jakarta, Indonesia • Hybrid</p>
                              <p className="mb-4">Grow strategic accounts, build proposals, and expand market partnerships.</p>
                              <Link href="/career-details"  className="btn btn-primary btn-sm" data-hover="View Details">View Details</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          <section className="section-padding space-5xl">
              <div className="why-choose-bg" style={{ backgroundImage: "url('/images/img(10).jpg')" }}></div>
              <div className="why-choose-overlay"></div>
              <div className="container-fluid px-0">
                  <div className="fleet-cta py-0">
                      <div className="position-relative">
                          <h3>Didn't Find Your Role?</h3>
                          <p>Send us your profile and portfolio. We review applications continuously for future openings across operations, tech, and commercial teams.</p>
                          <Link href="/contact"  className="btn-hero btn-primary" data-hover="Submit Application"><span>Submit Application</span></Link>
                      </div>
                  </div>
              </div>
          </section>
</>
  );
}
