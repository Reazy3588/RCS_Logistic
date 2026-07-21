import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cargonz - Global Logistics Partner",
    description: "Cargonz - Transportation & Logistics NextJs Template",
};

export default function Page() {
    return (
        <>
            <section className="hero-section hero-centered">
                <div className="hero-bg" style={{ backgroundImage: "url('/images/img(5).jpg')" }}></div>
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content hero-enter">
                        <div className="hero-label">
                            <span className="label-line"></span>
                            <span className="label-text">Next Gen Logistics</span>
                            <span className="label-line"></span>
                        </div>
                        <h1 className="hero-title mb-4">
                            Connecting The World One Shipment at a Time
                        </h1>
                        <p className="hero-description mx-auto">Experience seamless global shipping with our advanced logistics network. We deliver efficiency, transparency, and reliability for every cargo.</p>
                        <div className="hero-buttons">
                            <Link href="/get-quote" className="btn-hero btn-primary" data-hover="Get Started"><span>Get Started</span></Link>
                            <Link href="/about" className="btn-hero btn-secondary">Our Story</Link>
                        </div>
                    </div>
                </div>
            </section>


            <section className="features-section">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon"><i className="fa-solid fa-clock"></i></div>
                            <div className="feature-content">
                                <h2 className="feature-title">On-Time Delivery</h2>
                                <p className="feature-description">We prioritize punctuality with optimized routing and real-time scheduling.</p>
                            </div>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><i className="fa-solid fa-hand-holding-dollar"></i></div>
                            <div className="feature-content">
                                <h2 className="feature-title">Cost Effective</h2>
                                <p className="feature-description">Competitive rates without compromising on service quality or safety.</p>
                            </div>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><i className="fa-solid fa-headset"></i></div>
                            <div className="feature-content">
                                <h2 className="feature-title">24/7 Support</h2>
                                <p className="feature-description">Expert support team ready to assist you round the clock with any queries.</p>
                            </div>
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
                        <Image src="/images/img(10).jpg" alt="Logistics Statistics" unoptimized width={1920} height={1080} sizes="100vw" />
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


            <section className="process-section section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <span className="section-label no-line">How We Work</span>
                            <h2 className="section-title">Streamlined Shipping Process</h2>
                            <p className="mb-4">Our simplified 4-step process ensures your cargo moves smoothly from origin to destination without unnecessary delays or paperwork.</p>
                            <Link href="/contact" className="btn btn-primary" data-hover="Start Shipping"><span>Start Shipping</span></Link>
                        </div>
                        <div className="col-lg-7 ps-lg-5">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="process-step p-4 border rounded bg-white h-100">
                                        <div className="process-icon mb-3 text-primary fs-2"><i className="fa-solid fa-file-signature"></i></div>
                                        <h3 className="h4-style h5">1. Booking</h3>
                                        <p className="small text-muted mb-0">Easy online booking and documentation setup.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="process-step p-4 border rounded bg-white h-100">
                                        <div className="process-icon mb-3 text-primary fs-2"><i className="fa-solid fa-box-open"></i></div>
                                        <h3 className="h4-style h5">2. Packing</h3>
                                        <p className="small text-muted mb-0">Professional packaging and labeling services.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="process-step p-4 border rounded bg-white h-100">
                                        <div className="process-icon mb-3 text-primary fs-2"><i className="fa-solid fa-plane"></i></div>
                                        <h3 className="h4-style h5">3. Transit</h3>
                                        <p className="small text-muted mb-0">Fast and secure transportation via chosen mode.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="process-step p-4 border rounded bg-white h-100">
                                        <div className="process-icon mb-3 text-primary fs-2"><i className="fa-solid fa-location-dot"></i></div>
                                        <h3 className="h4-style h5">4. Delivery</h3>
                                        <p className="small text-muted mb-0">Safe arrival at the final destination doorstep.</p>
                                    </div>
                                </div>
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
                                <Image src="/images/img(10).jpg" alt="Ocean Freight" unoptimized fill sizes="100vw" />
                                <div className="service-overlay"></div>
                                <div className="service-icon"><i className="fa-solid fa-ship"></i></div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">Ocean Freight</h3>
                                <p className="service-description">Comprehensive sea freight services for FCL and LCL shipments to global destinations with competitive rates.</p>
                                <Link href="/service-details" className="service-link"><span>Learn More</span><i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-image">
                                <Image src="/images/img(10).jpeg" alt="Air Cargo" unoptimized fill sizes="100vw" />
                                <div className="service-overlay"></div>
                                <div className="service-icon"><i className="fa-solid fa-plane-departure"></i></div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">Air Cargo</h3>
                                <p className="service-description">Expedited air transport solutions for time-sensitive and high-value goods with priority handling.</p>
                                <Link href="/service-details-air" className="service-link"><span>Learn More</span><i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-image">
                                <Image src="/images/img(1).jpeg" alt="Land Transport" unoptimized fill sizes="100vw" />
                                <div className="service-overlay"></div>
                                <div className="service-icon"><i className="fa-solid fa-truck"></i></div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">Land Transport</h3>
                                <p className="service-description">Flexible trucking and rail options for domestic and cross-border distribution with real-time tracking.</p>
                                <Link href="/service-details-land" className="service-link"><span>Learn More</span><i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-image">
                                <Image src="/images/img(7).jpg" alt="Warehousing" unoptimized fill sizes="100vw" />
                                <div className="service-overlay"></div>
                                <div className="service-icon"><i className="fa-solid fa-warehouse"></i></div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">Warehousing</h3>
                                <p className="service-description">State-of-the-art storage facilities with inventory management and distribution services.</p>
                                <Link href="/service-details-warehousing" className="service-link"><span>Learn More</span><i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-image">
                                <Image src="/images/img(9).jpeg" alt="Customs Clearance" unoptimized fill sizes="100vw" />
                                <div className="service-overlay"></div>
                                <div className="service-icon"><i className="fa-solid fa-file-shield"></i></div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">Customs Clearance</h3>
                                <p className="service-description">Expert assistance with documentation and regulatory compliance for international shipments.</p>
                                <Link href="/service-details-customs" className="service-link"><span>Learn More</span><i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-image">
                                <Image src="/images/img1.jpg" alt="Special Cargo" unoptimized fill sizes="100vw" />
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
                                <Image src="/images/img(1).jpg" alt="Global Supply Chain Trends" unoptimized fill sizes="100vw" />
                                <span className="blog-date">Oct 24, 2026</span>
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title"><Link href="/blog-details" >Global Supply Chain Trends to Watch in 2027</Link></h3>
                                <p className="blog-desc">Explore the key technologies and strategies shaping the future of global logistics and supply chain management.</p>
                                <Link href="/blog-details" className="blog-link">Read More <i className="fa-solid fa-arrow-right-long"></i></Link>
                            </div>
                        </div>


                        <div className="blog-card">
                            <div className="blog-image">
                                <Image src="/images/img(2).jpg" alt="Optimizing Cargo for Safer Transport" unoptimized fill sizes="100vw" />
                                <span className="blog-date">Oct 18, 2026</span>
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title"><Link href="/blog-details" >Optimizing Your Cargo for Safer Transport</Link></h3>
                                <p className="blog-desc">Essential tips on packaging, labeling, and securing your goods to ensure they arrive safely at their destination.</p>
                                <Link href="/blog-details" className="blog-link">Read More <i className="fa-solid fa-arrow-right-long"></i></Link>
                            </div>
                        </div>


                        <div className="blog-card">
                            <div className="blog-image">
                                <Image src="/images/img(3).jpg" alt="Benefits of Modern Warehousing Solutions" unoptimized fill sizes="100vw" />
                                <span className="blog-date">Oct 12, 2026</span>
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title"><Link href="/blog-details" >The Benefits of Modern Warehousing Solutions</Link></h3>
                                <p className="blog-desc">How smart warehousing and inventory management can reduce costs and improve delivery speed for your business.</p>
                                <Link href="/blog-details" className="blog-link">Read More <i className="fa-solid fa-arrow-right-long"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
