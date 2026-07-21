import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ - Cargonz Logistics",
    description: "Cargonz - Transportation & Logistics NextJs Template",
};

export default function Page() {
    return (
        <>
            <section className="page-header" style={{ backgroundImage: "url('/images/img(9).jpg')" }}>
                <div className="container page-header-content">
                    <h1 className="page-title">Frequently Asked Questions</h1>
                    <div className="breadcrumb">
                        <Link href="/" >Home</Link>
                        <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                        <span>FAQ</span>
                    </div>
                </div>
            </section>


            <section className="faq-section section-padding">
                <div className="container">
                    <div className="row align-items-start">

                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <div className="sidebar-sticky-top">
                                <span className="section-label no-line">Everything You Need to Know</span>
                                <h2 className="section-title mb-4">Common Questions<br />About Our Services</h2>
                                <p className="mb-4">Can't find the answer you're looking for? Please contact our friendly support team.</p>
                                <Link href="/contact" className="btn btn-primary" data-hover="Contact Support">Contact Support</Link>
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

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            How do I request a quote?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            You can easily request a quote by clicking the "Get Quote" button in our menu and filling out the form with your shipment details. Our team will get back to you with a competitive price within 24 hours.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                            What documents are required for customs clearance?
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Typically, you will need a Commercial Invoice, Packing List, Bill of Lading (or Airway Bill), and Certificate of Origin. Additional documents may be required depending on the commodity and destination country.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <section className="blog-section">
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
          </section> */}
        </>
    );
}
