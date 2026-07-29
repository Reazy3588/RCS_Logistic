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
                  <h1 className="page-title">Senior Logistics Coordinator</h1>
                  <div className="breadcrumb">
                      <Link href="/" >Home</Link>
                      <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                      <Link href="/careers" >Careers</Link>
                      <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                      <span>Job Details</span>
                  </div>
              </div>
          </section>
      
          
          <section className="section-padding">
              <div className="container">
                  <div className="row g-5">
                      
                      
                      <div className="col-lg-8 pe-lg-5">
                          <div className="mb-5">
                              <span className="badge bg-primary px-3 py-2 text-uppercase tracking-widest mb-3">Full Time</span>
                              <h2 className="mb-4">Role Overview</h2>
                              <p className="mb-4">As a Senior Logistics Coordinator at Cargonz, you will play a critical role in managing and optimizing our daily transport operations. You will be responsible for ensuring that all shipments are planned, executed, and tracked efficiently, while maintaining the highest standards of customer satisfaction and operational excellence.</p>
                              <p>We are looking for a proactive problem-solver who thrives in a fast-paced environment and has a deep understanding of cross-border logistics, documentation, and supply chain dynamics.</p>
                          </div>
      
                          <div className="mb-5">
                              <h3 className="mb-4">Key Responsibilities</h3>
                              <ul className="check-list dark-text">
                                  <li><i className="fa-solid fa-check"></i><span>Lead daily transport planning and coordinate with fleet operators.</span></li>
                                  <li><i className="fa-solid fa-check"></i><span>Manage cross-border documentation and ensure customs compliance.</span></li>
                                  <li><i className="fa-solid fa-check"></i><span>Monitor shipment progress in real-time and resolve any transit issues proactively.</span></li>
                                  <li><i className="fa-solid fa-check"></i><span>Prepare and analyze operational reports to identify areas for cost reduction and efficiency improvements.</span></li>
                                  <li><i className="fa-solid fa-check"></i><span>Liaise closely with clients to provide updates and handle inquiries professionally.</span></li>
                              </ul>
                          </div>
      
                          <div className="mb-5">
                              <h3 className="mb-4">Qualifications & Requirements</h3>
                              <ul className="check-list dark-text">
                                  <li><i className="fa-solid fa-check"></i><span>Minimum 5 years of experience in logistics, freight forwarding, or supply chain management.</span></li>
                                  <li><i className="fa-solid fa-check"></i><span>Strong knowledge of international shipping regulations and documentation.</span></li>
                                  <li><i className="fa-solid fa-check"></i><span>Proficiency in logistics software and Transport Management Systems (TMS).</span></li>
                                  <li><i className="fa-solid fa-check"></i><span>Excellent communication and negotiation skills.</span></li>
                                  <li><i className="fa-solid fa-check"></i><span>Bachelor’s degree in Supply Chain, Business Administration, or a related field.</span></li>
                              </ul>
                          </div>
      
                          <div>
                              <h3 className="mb-4">What We Offer</h3>
                              <ul className="check-list dark-text">
                                  <li><i className="fa-solid fa-check"></i><span>Competitive salary and performance-based bonuses.</span></li>
                                  <li><i className="fa-solid fa-check"></i><span>Comprehensive health insurance and wellness benefits.</span></li>
                                  <li><i className="fa-solid fa-check"></i><span>Clear career progression and leadership training.</span></li>
                                  <li><i className="fa-solid fa-check"></i><span>A modern, collaborative, and innovative work environment.</span></li>
                              </ul>
                          </div>
                      </div>
      
                      
                      <div className="col-lg-4">
                          <div className="sidebar-widget bg-light p-4 rounded mb-4">
                              <h2 className="widget-title mb-4">Job Summary</h2>
                              <ul className="list-unstyled mb-0">
                                  <li className="d-flex align-items-center mb-3 pb-3 border-bottom">
                                      <div className="text-primary me-3 fs-4"><i className="fa-solid fa-location-dot"></i></div>
                                      <div>
                                          <small className="text-muted d-block">Location</small>
                                          <strong className="text-dark">Jakarta, Indonesia</strong>
                                      </div>
                                  </li>
                                  <li className="d-flex align-items-center mb-3 pb-3 border-bottom">
                                      <div className="text-primary me-3 fs-4"><i className="fa-solid fa-briefcase"></i></div>
                                      <div>
                                          <small className="text-muted d-block">Job Type</small>
                                          <strong className="text-dark">Full Time</strong>
                                      </div>
                                  </li>
                                  <li className="d-flex align-items-center mb-3 pb-3 border-bottom">
                                      <div className="text-primary me-3 fs-4"><i className="fa-solid fa-layer-group"></i></div>
                                      <div>
                                          <small className="text-muted d-block">Department</small>
                                          <strong className="text-dark">Operations</strong>
                                      </div>
                                  </li>
                                  <li className="d-flex align-items-center">
                                      <div className="text-primary me-3 fs-4"><i className="fa-solid fa-calendar-days"></i></div>
                                      <div>
                                          <small className="text-muted d-block">Date Posted</small>
                                          <strong className="text-dark">October 28, 2026</strong>
                                      </div>
                                  </li>
                              </ul>
                          </div>
      
                          <div className="sidebar-widget p-0 overflow-hidden text-center position-relative">
                              <Image src="/images/img(10).jpg" alt="Ad" className="img-fluid h-100 w-100"  unoptimized width={1920} height={1080} sizes="100vw" />
                              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-75 text-white p-4">
                              <h3 className="mb-3 text-white">Ready to Join Us?</h3>
                              <p className="mb-4 opacity-75">Send your CV and a brief cover letter outlining why you are the perfect fit for this role.</p>
                              <Link href="/contact"  className="btn btn-light w-100 fw-bold">Apply Now</Link>
                          </div>
                      </div>
                  </div>
      
                  </div>
              </div>
          </section>
</>
  );
}
