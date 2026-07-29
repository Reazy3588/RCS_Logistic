import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Video — Cargonz Logistics",
  description: "Cargonz - Transportation & Logistics NextJs Template",
};

export default function Page() {
  return (
    <>
          <section className="hero-section home-video-hero">
              <video className="hero-video" autoPlay muted loop playsInline preload="auto">
                  <source src="/video/video.mp4" type="video/mp4" />
              </video>
              <div className="hero-overlay"></div>
              <div className="container">
                  <div className="hero-content hero-enter">
                      <div className="hero-label">
                          <span className="label-line"></span>
                          <span className="label-text">Cargonz Signature Video Experience</span>
                      </div>
                      <h1 className="hero-title">
                          <span className="title-line">Premium Global Logistics</span>
                          <span className="title-line title-line-accent">Driven by Precision</span>
                      </h1>
                      <p className="hero-description">A modern logistics partner with real-time visibility, secure cargo handling, and elite operational control across sea, air, and land corridors.</p>
                      <div className="hero-buttons">
                          <Link href="/services"  className="btn-hero btn-primary" data-hover="Explore Services"><span>Explore Services</span></Link>
                          <Link href="/tracking"  className="btn-hero btn-secondary">Track Shipment</Link>
                      </div>
                      <div className="hero-stats">
                          <div className="stat-item"><span className="stat-number">18K+</span><span className="stat-label">Annual Shipments</span></div>
                          <div className="stat-divider"></div>
                          <div className="stat-item"><span className="stat-number">70+</span><span className="stat-label">Strategic Ports</span></div>
                          <div className="stat-divider"></div>
                          <div className="stat-item"><span className="stat-number">99.2%</span><span className="stat-label">On-time Delivery</span></div>
                      </div>
                  </div>
              </div>
          </section>
      
         
          <section className="features-section">
              <div className="container">
                  <div className="features-grid">
                      <div className="feature-card">
                          <div className="feature-icon"><i className="fa-solid fa-truck-fast"></i></div>
                          <div className="feature-content">
                              <h2 className="feature-title">Express Delivery</h2>
                              <p className="feature-description">Optimized routes and dedicated fleet ensure your cargo arrives on time, every single time.</p>
                          </div>
                          <div className="feature-number">01</div>
                      </div>
                      <div className="feature-card">
                          <div className="feature-icon"><i className="fa-solid fa-shield-halved"></i></div>
                          <div className="feature-content">
                              <h2 className="feature-title">Secure Transport</h2>
                              <p className="feature-description">Advanced tracking and security protocols keep your valuable goods safe during transit.</p>
                          </div>
                          <div className="feature-number">02</div>
                      </div>
                      <div className="feature-card">
                          <div className="feature-icon"><i className="fa-solid fa-earth-americas"></i></div>
                          <div className="feature-content">
                              <h2 className="feature-title">Global Network</h2>
                              <p className="feature-description">Connected with major ports and hubs worldwide for seamless international trade.</p>
                          </div>
                          <div className="feature-number">03</div>
                      </div>
                  </div>
              </div>
          </section>
      
          
          <section className="track-stats-section pt-0 pb-0" id="tracking">
              <div className="track-stats-container">
                  
                  <div className="track-box">
                      <div className="track-content">
                          <div className="track-icon">
                              <i className="fa-solid fa-truck-fast"></i>
                          </div>
                          <h2 className="track-title">Track Your Order</h2>
                          <p className="track-subtitle">Enter your Track Id For Instant Search</p>
                          
                          <form className="track-form">
                              <div className="input-group">
                                  <input type="text" placeholder="Tracking ID" className="track-input" />
                                  <button type="submit" className="track-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                              </div>
                          </form>
                          
                          <div className="track-socials">
                              <a href="#"><i className="fa-brands fa-twitter"></i></a>
                              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                              <a href="#"><i className="fa-brands fa-google-plus-g"></i></a>
                          </div>
                      </div>
                  </div>
                  
                  
                  <div className="stats-box">
                      <Image src="/images/img(10).jpg" alt="Logistics Statistics"  unoptimized width={1920} height={1080} sizes="100vw" />
                      <div className="stats-overlay"></div>
                      <div className="stats-grid">
                          <div className="stat-card">
                              <div className="stat-value"><span className="counter-animate" data-target="60">0</span></div>
                              <div className="stat-label">Years Experience</div>
                          </div>
                          <div className="stat-card">
                              <div className="stat-value"><span className="counter-animate" data-target="2500">0</span>+</div>
                              <div className="stat-label">Professional Workers</div>
                          </div>
                          <div className="stat-card">
                              <div className="stat-value"><span className="counter-animate" data-target="80">0</span>%</div>
                              <div className="stat-label">Areas Covered</div>
                          </div>
                          <div className="stat-card">
                              <div className="stat-value"><span className="counter-animate" data-target="205">0</span>+</div>
                              <div className="stat-label">Countries Covered</div>
                          </div>
                          <div className="stat-card">
                              <div className="stat-value"><span className="counter-animate" data-target="180">0</span>+</div>
                              <div className="stat-label">Corporate Clients</div>
                          </div>
                          <div className="stat-card">
                              <div className="stat-value"><span className="counter-animate" data-target="450">0</span>+</div>
                              <div className="stat-label">Owned Vehicles</div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          
          <section className="services-section" id="services">
              <div className="container">
                  <div className="section-header">
                      <span className="section-label">What We Offer</span>
                      <h2 className="section-title">Our Premium Logistics Services</h2>
                      <p className="section-description">Comprehensive transportation solutions tailored to meet your specific business requirements</p>
                  </div>
                  <div className="services-grid">
                      <div className="service-card">
                          <div className="service-image">
                              <Image src="/images/img(10).jpg" alt="Ocean Freight"  unoptimized fill sizes="100vw" />
                              <div className="service-overlay"></div>
                              <div className="service-icon"><i className="fa-solid fa-ship"></i></div>
                          </div>
                          <div className="service-content">
                              <h3 className="service-title">Ocean Freight</h3>
                              <p className="service-description">Comprehensive sea freight services for FCL and LCL shipments to global destinations with competitive rates.</p>
                              <Link href="/service-details"  className="service-link"><span>Learn More</span><i className="fa-solid fa-arrow-right"></i></Link>
                          </div>
                      </div>
                      <div className="service-card">
                          <div className="service-image">
                              <Image src="/images/img(10).jpeg" alt="Air Cargo"  unoptimized fill sizes="100vw" />
                              <div className="service-overlay"></div>
                              <div className="service-icon"><i className="fa-solid fa-plane-departure"></i></div>
                          </div>
                          <div className="service-content">
                              <h3 className="service-title">Air Cargo</h3>
                              <p className="service-description">Expedited air transport solutions for time-sensitive and high-value goods with priority handling.</p>
                              <Link href="/service-details-air"  className="service-link"><span>Learn More</span><i className="fa-solid fa-arrow-right"></i></Link>
                          </div>
                      </div>
                      <div className="service-card">
                          <div className="service-image">
                              <Image src="/images/img(1).jpeg" alt="Land Transport"  unoptimized fill sizes="100vw" />
                              <div className="service-overlay"></div>
                              <div className="service-icon"><i className="fa-solid fa-truck"></i></div>
                          </div>
                          <div className="service-content">
                              <h3 className="service-title">Land Transport</h3>
                              <p className="service-description">Flexible trucking and rail options for domestic and cross-border distribution with real-time tracking.</p>
                              <Link href="/service-details-land"  className="service-link"><span>Learn More</span><i className="fa-solid fa-arrow-right"></i></Link>
                          </div>
                      </div>
                      <div className="service-card">
                          <div className="service-image">
                              <Image src="/images/img(7).jpg" alt="Warehousing"  unoptimized fill sizes="100vw" />
                              <div className="service-overlay"></div>
                              <div className="service-icon"><i className="fa-solid fa-warehouse"></i></div>
                          </div>
                          <div className="service-content">
                              <h3 className="service-title">Warehousing</h3>
                              <p className="service-description">State-of-the-art storage facilities with inventory management and distribution services.</p>
                              <Link href="/service-details-warehousing"  className="service-link"><span>Learn More</span><i className="fa-solid fa-arrow-right"></i></Link>
                          </div>
                      </div>
                      <div className="service-card">
                          <div className="service-image">
                              <Image src="/images/img(9).jpeg" alt="Customs Clearance"  unoptimized fill sizes="100vw" />
                              <div className="service-overlay"></div>
                              <div className="service-icon"><i className="fa-solid fa-file-shield"></i></div>
                          </div>
                          <div className="service-content">
                              <h3 className="service-title">Customs Clearance</h3>
                              <p className="service-description">Expert assistance with documentation and regulatory compliance for international shipments.</p>
                              <Link href="/service-details-customs"  className="service-link"><span>Learn More</span><i className="fa-solid fa-arrow-right"></i></Link>
                          </div>
                      </div>
                      <div className="service-card">
                          <div className="service-image">
                              <Image src="/images/img1.jpg" alt="Special Cargo"  unoptimized fill sizes="100vw" />
                              <div className="service-overlay"></div>
                              <div className="service-icon"><i className="fa-solid fa-box-archive"></i></div>
                          </div>
                          <div className="service-content">
                              <h3 className="service-title">Special Cargo</h3>
                              <p className="service-description">Specialized handling for oversized, hazardous, and temperature-controlled cargo shipments.</p>
                              <a href="#" className="service-link"><span>Learn More</span><i className="fa-solid fa-arrow-right"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
      
          
          <section className="why-choose-section">
              <div className="why-choose-bg" style={{ backgroundImage: "url('/images/img(7).jpg')" }}></div>
              <div className="why-choose-overlay"></div>
              <div className="container">
                  <div className="why-choose-content">
                      <span className="section-label no-line light">Why Choose Us</span>
                      <h2 className="section-title light">We Create Opportunities to Reach Your Full Potential</h2>
                      <p className="why-choose-desc">With over 25 years of experience in the logistics industry, we have built a reputation for reliability, efficiency, and customer satisfaction.</p>
                      <ul className="check-list light-text">
                          <li><i className="fa-solid fa-check"></i><span>Real-time tracking for all shipments</span></li>
                          <li><i className="fa-solid fa-check"></i><span>Transparent pricing with no hidden fees</span></li>
                          <li><i className="fa-solid fa-check"></i><span>Dedicated support team available 24/7</span></li>
                          <li><i className="fa-solid fa-check"></i><span>Global network of trusted partners</span></li>
                      </ul>
                      <a href="#" className="btn-hero btn-primary" data-hover="Learn More About Us"><span>Learn More About Us</span></a>
                  </div>
              </div>
          </section>
      
          
          <section className="process-section">
              <div className="container">
                  <div className="section-header">
                      <span className="section-label">How It Works</span>
                      <h2 className="section-title">Simple Shipping Process</h2>
                      <p className="section-description">Four easy steps to get your cargo delivered safely and efficiently</p>
                  </div>
                  <div className="process-grid">
                      <div className="process-step"><div className="process-icon"><i className="fa-solid fa-file-lines"></i><div className="process-number">1</div></div><h3 className="process-title">Request Quote</h3><p className="process-desc">Fill out our simple form to get a competitive rate.</p></div>
                      <div className="process-step"><div className="process-icon"><i className="fa-solid fa-box"></i><div className="process-number">2</div></div><h3 className="process-title">Prepare Cargo</h3><p className="process-desc">We help you with packaging and documentation.</p></div>
                      <div className="process-step"><div className="process-icon"><i className="fa-solid fa-ship"></i><div className="process-number">3</div></div><h3 className="process-title">Shipment</h3><p className="process-desc">Your goods are transported via optimal routes.</p></div>
                      <div className="process-step"><div className="process-icon"><i className="fa-solid fa-circle-check"></i><div className="process-number">4</div></div><h3 className="process-title">Delivery</h3><p className="process-desc">Safe arrival at the final destination.</p></div>
                  </div>
              </div>
          </section>
      
          
          <section className="testimonials-section">
              <div className="container-fluid">
                  <div className="section-header text-center">
                      <span className="section-label">Testimonials</span>
                      <h2 className="section-title">What Our Clients Say</h2>
                  </div>
                  
                  <div className="swiper testimonials-slider">
                      <div className="swiper-wrapper">
                          
                          <div className="swiper-slide">
                              <div className="testimonial-card">
                                  <div className="quote-icon"><i className="fa-solid fa-quote-left"></i></div>
                                  <div className="testimonial-author">
                                      <div className="author-image"><Image src="/images/avatar1.jpg" alt="Robert L."  unoptimized fill sizes="100vw" /></div>
                                      <div className="author-info">
                                          <h3 className="author-name">Robert L.</h3>
                                          <span className="author-pos">Supply Chain Manager</span>
                                      </div>
                                  </div>
                                  <p className="testimonial-text">"Cargonz helped us streamline international shipments with clear communication and reliable ETAs. The tracking updates are accurate, and deliveries consistently arrive on schedule."</p>
                              </div>
                          </div>
                          
                          <div className="swiper-slide">
                              <div className="testimonial-card">
                                  <div className="quote-icon"><i className="fa-solid fa-quote-left"></i></div>
                                  <div className="testimonial-author">
                                      <div className="author-image"><Image src="/images/avatar2.jpg" alt="Jake M."  unoptimized fill sizes="100vw" /></div>
                                      <div className="author-info">
                                          <h3 className="author-name">Jake M.</h3>
                                          <span className="author-pos">E-commerce Owner</span>
                                      </div>
                                  </div>
                                  <p className="testimonial-text">"Our weekly deliveries are smoother since switching to Cargonz. Their team handles pickup, documentation, and last-mile coordination without surprises, and support is always responsive."</p>
                              </div>
                          </div>
                          
                          <div className="swiper-slide">
                              <div className="testimonial-card">
                                  <div className="quote-icon"><i className="fa-solid fa-quote-left"></i></div>
                                  <div className="testimonial-author">
                                      <div className="author-image"><Image src="/images/avatar3.jpg" alt="Alex P."  unoptimized fill sizes="100vw" /></div>
                                      <div className="author-info">
                                          <h3 className="author-name">Alex P.</h3>
                                          <span className="author-pos">Import Coordinator</span>
                                      </div>
                                  </div>
                                  <p className="testimonial-text">"Customs clearance was handled professionally and the paperwork was correct from the start. We got proactive updates whenever there was a checkpoint change, which saved us a lot of time."</p>
                              </div>
                          </div>
                          
                          <div className="swiper-slide">
                              <div className="testimonial-card">
                                  <div className="quote-icon"><i className="fa-solid fa-quote-left"></i></div>
                                  <div className="testimonial-author">
                                      <div className="author-image"><Image src="/images/avatar4.jpg" alt="Robert L."  unoptimized fill sizes="100vw" /></div>
                                      <div className="author-info">
                                          <h3 className="author-name">Robert L.</h3>
                                          <span className="author-pos">Supply Chain Manager</span>
                                      </div>
                                  </div>
                                  <p className="testimonial-text">"Cargonz helped us streamline international shipments with clear communication and reliable ETAs. The tracking updates are accurate, and deliveries consistently arrive on schedule."</p>
                              </div>
                          </div>
                          
                          <div className="swiper-slide">
                              <div className="testimonial-card">
                                  <div className="quote-icon"><i className="fa-solid fa-quote-left"></i></div>
                                  <div className="testimonial-author">
                                      <div className="author-image"><Image src="/images/avatar1.jpg" alt="Jake M."  unoptimized fill sizes="100vw" /></div>
                                      <div className="author-info">
                                          <h3 className="author-name">Jake M.</h3>
                                          <span className="author-pos">E-commerce Owner</span>
                                      </div>
                                  </div>
                                  <p className="testimonial-text">"Our weekly deliveries are smoother since switching to Cargonz. Their team handles pickup, documentation, and last-mile coordination without surprises, and support is always responsive."</p>
                              </div>
                          </div>
                          
                          <div className="swiper-slide">
                              <div className="testimonial-card">
                                  <div className="quote-icon"><i className="fa-solid fa-quote-left"></i></div>
                                  <div className="testimonial-author">
                                      <div className="author-image"><Image src="/images/avatar2.jpg" alt="Alex P."  unoptimized fill sizes="100vw" /></div>
                                      <div className="author-info">
                                          <h3 className="author-name">Alex P.</h3>
                                          <span className="author-pos">Import Coordinator</span>
                                      </div>
                                  </div>
                                  <p className="testimonial-text">"Customs clearance was handled professionally and the paperwork was correct from the start. We got proactive updates whenever there was a checkpoint change, which saved us a lot of time."</p>
                              </div>
                          </div>
                      </div>
                      
                      <div className="swiper-pagination"></div>
                  </div>
              </div>
          </section>
      
          
          <section className="faq-section">
              <div className="container">
                  <div className="row align-items-start">
                      
                      <div className="col-lg-5 mb-5 mb-lg-0">
                          <div>
                              <span className="section-label no-line">Everything You Need to Know</span>
                              <h2 className="section-title mb-4">Frequently Asked<br />Questions</h2>
                          </div>
                      </div>
                      
                      
                      <div className="col-lg-7 ps-lg-5">
                          <div className="accordion" id="faqAccordion">
                              
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingOne">
                                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                          How often should I check my shipment status?
                                      </button>
                                  </h2>
                                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          We recommend checking your shipment status every 24-48 hours for international freight. Our real-time tracking system updates automatically at every major checkpoint.
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingTwo">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          What should I do if my cargo is delayed?
                                      </button>
                                  </h2>
                                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Delays can happen due to weather or customs. If your tracking shows a delay, please contact our 24/7 support team immediately. We will investigate and provide you with an updated delivery schedule.
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingThree">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                          Do you offer specialized services for fragile items?
                                      </button>
                                  </h2>
                                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes, we have specialized packaging and handling protocols for fragile and high-value items. Please mention this when requesting a quote so we can arrange the appropriate care.
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingFour">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                          What are my options for international shipping?
                                      </button>
                                  </h2>
                                  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          We offer Air Freight for speed, Ocean Freight for cost-effectiveness, and Multimodal Transport for a balance of both. We can help you choose the best option based on your budget and timeline.
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingFive">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                          Is cargo insurance mandatory?
                                      </button>
                                  </h2>
                                  <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          While not legally mandatory for all shipments, we strongly advise it. Carrier liability is often limited, so our comprehensive insurance ensures you are fully covered against unforeseen events.
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
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
