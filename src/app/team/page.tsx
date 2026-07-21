import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team - Cargonz Logistics",
  description: "Cargonz - Transportation & Logistics NextJs Template",
};

export default function Page() {
  return (
    <>
<section className="page-header" style={{ backgroundImage: "url('/images/img(2).jpg')" }}>
              <div className="container page-header-content">
                  <h1 className="page-title">Our Team</h1>
                  <div className="breadcrumb">
                      <Link href="/" >Home</Link>
                      <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                      <Link href="/about" >Company</Link>
                      <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                      <span>Team</span>
                  </div>
              </div>
          </section>
      
          <section className="section-padding pb-0">
              <div className="container">
                  <div className="row g-4">
                      <div className="col-lg-4">
                          <div className="feature-card">
                              <div className="feature-icon"><i className="fa-solid fa-user-shield"></i></div>
                              <h3 className="h4-style feature-title">Certified Professionals</h3>
                              <p className="feature-description">Our managers and specialists hold recognized certifications in transport, customs, and supply chain operations.</p>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="feature-card">
                              <div className="feature-icon"><i className="fa-solid fa-headset"></i></div>
                              <h3 className="h4-style feature-title">Dedicated Support</h3>
                              <p className="feature-description">A responsive team that proactively communicates shipment status and resolves issues with speed and clarity.</p>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="feature-card">
                              <div className="feature-icon"><i className="fa-solid fa-chart-line"></i></div>
                              <h3 className="h4-style feature-title">Performance Focus</h3>
                              <p className="feature-description">Continuous KPI monitoring helps us optimize transit times, reduce risks, and increase service reliability.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          
          <section className="section-padding">
              <div className="container">
                  <div className="section-header">
                      <span className="section-label">Our Team</span>
                      <h2 className="section-title">Meet Our Experts</h2>
                      <p className="section-description">Dedicated professionals working together to deliver excellence.</p>
                  </div>
                  
                  <div className="swiper team-slider">
                      <div className="swiper-wrapper">
                          
                          <div className="swiper-slide">
                              <div className="team-card">
                                  <div className="team-image"><Image src="/images/avatar-big2.jpg" alt="David Morgan"  unoptimized fill sizes="100vw" /></div>
                                  <div className="team-info">
                                      <h3 className="team-name">David Morgan</h3>
                                      <span className="team-role">CEO & Founder</span>
                                      <div className="social-links justify-content-center">
                                          <a href="#" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
                                          <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          
                          <div className="swiper-slide">
                              <div className="team-card">
                                  <div className="team-image"><Image src="/images/avatar-big1.jpg" alt="Sarah Jenkins"  unoptimized fill sizes="100vw" /></div>
                                  <div className="team-info">
                                      <h3 className="team-name">Sarah Jenkins</h3>
                                      <span className="team-role">Operations Director</span>
                                      <div className="social-links justify-content-center">
                                          <a href="#" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
                                          <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          
                          <div className="swiper-slide">
                              <div className="team-card">
                                  <div className="team-image"><Image src="/images/avatar-big3.jpg" alt="Michael Chen"  unoptimized fill sizes="100vw" /></div>
                                  <div className="team-info">
                                      <h3 className="team-name">Michael Chen</h3>
                                      <span className="team-role">Head of Logistics</span>
                                      <div className="social-links justify-content-center">
                                          <a href="#" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
                                          <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                           
                           <div className="swiper-slide">
                              <div className="team-card">
                                  <div className="team-image"><Image src="/images/avatar-big4.jpg" alt="James Wilson"  unoptimized fill sizes="100vw" /></div>
                                  <div className="team-info">
                                      <h3 className="team-name">James Wilson</h3>
                                      <span className="team-role">Transport Manager</span>
                                      <div className="social-links justify-content-center">
                                          <a href="#" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
                                          <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="swiper-pagination position-relative mt-5"></div>
                  </div>
              </div>
          </section>
      
          
          <section className="blog-section">
              <div className="why-choose-bg" style={{ backgroundImage: "url('/images/img(10).jpg')" }}></div>
              <div className="why-choose-overlay"></div>
              <div className="container">
                  <div className="section-header">
                      <span className="section-label light">Latest News</span>
                      <h2 className="section-title light">Logistics Insights & Updates</h2>
                      <p className="section-description light">Stay informed with the latest trends, tips, and news from the transportation industry.</p>
                  </div>
                  
                  <div className="blog-grid">
                      
                      <div className="blog-card">
                          <div className="blog-image">
                              <Image src="/images/img(1).jpg" alt="Global Supply Chain Trends"  unoptimized fill sizes="100vw" />
                              <span className="blog-date">Oct 24, 2026</span>
                          </div>
                          <div className="blog-content">
                              <h3 className="blog-title"><Link href="/blog-details" >Global Supply Chain Trends to Watch in 2027</Link></h3>
                              <p className="blog-desc">Explore the key technologies and strategies shaping the future of global logistics and supply chain management.</p>
                              <Link href="/blog-details"  className="blog-link">Read More <i className="fa-solid fa-arrow-right-long"></i></Link>
                          </div>
                      </div>
                      
                      
                      <div className="blog-card">
                          <div className="blog-image">
                              <Image src="/images/img(2).jpg" alt="Optimizing Cargo for Safer Transport"  unoptimized fill sizes="100vw" />
                              <span className="blog-date">Oct 18, 2026</span>
                          </div>
                          <div className="blog-content">
                              <h3 className="blog-title"><Link href="/blog-details" >Optimizing Your Cargo for Safer Transport</Link></h3>
                              <p className="blog-desc">Essential tips on packaging, labeling, and securing your goods to ensure they arrive safely at their destination.</p>
                              <Link href="/blog-details"  className="blog-link">Read More <i className="fa-solid fa-arrow-right-long"></i></Link>
                          </div>
                      </div>
                      
                      
                      <div className="blog-card">
                          <div className="blog-image">
                              <Image src="/images/img(3).jpg" alt="Benefits of Modern Warehousing Solutions"  unoptimized fill sizes="100vw" />
                              <span className="blog-date">Oct 12, 2026</span>
                          </div>
                          <div className="blog-content">
                              <h3 className="blog-title"><Link href="/blog-details" >The Benefits of Modern Warehousing Solutions</Link></h3>
                              <p className="blog-desc">How smart warehousing and inventory management can reduce costs and improve delivery speed for your business.</p>
                              <Link href="/blog-details"  className="blog-link">Read More <i className="fa-solid fa-arrow-right-long"></i></Link>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
</>
  );
}
