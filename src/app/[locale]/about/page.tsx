// import Image from "next/image";
// import Link from "next/link";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "About Us - Cargonz Logistics",
//     description: "Cargonz - Transportation & Logistics NextJs Template",
// };

// export default function Page() {
//     return (
//         <>
//             <section className="page-header" style={{ backgroundImage: "url('/images/img(2).jpg')" }}>
//                 <div className="container page-header-content">
//                     <h1 className="page-title">About Us</h1>
//                     <div className="breadcrumb">
//                         <Link href="/" >Home</Link>
//                         <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
//                         <span>About Us</span>
//                     </div>
//                 </div>
//             </section>


//             <section className="section-padding">
//                 <div className="container">
//                     <div className="row align-items-stretch">
//                         <div className="col-lg-6 mb-5 mb-lg-0">
//                             <div className="about-image-col">
//                                 <Image src="/images/img(7).jpg" alt="About Cargonz" className="about-image" unoptimized width={1920} height={1080} sizes="100vw" />
//                                 <div className="year-badge">
//                                     <span>19</span>
//                                     Years Exp
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 ps-lg-5">
//                             <span className="section-label no-line">Who We Are</span>
//                             <h2 className="section-title">We Are Logistics & Transport Company</h2>
//                             <p className="section-description mb-4">RCS Logistics is a leading logistics provider specializing in international air and ocean freight forwarding, supply chain management, domestic transportation, distribution, customs brokerage, and other 3PL logistics solutions. Established in Hong Kong and operating in Cambodia since 2007.</p>
//                             <p className="mb-4">Our mission is to provide reliable, efficient, and customer-focused logistics solutions that connect Cambodia to global markets. We are committed to delivering high-quality freight forwarding, warehousing, and buyer consolidation services that help our customers optimize their supply chains, reduce logistics costs, and grow their businesses with confidence.</p>

//                             <ul className="check-list dark-text">
//                                 <li><i className="fa-solid fa-check"></i><span>Head Office in Hong Kong, Operating in Cambodia since 2007</span></li>
//                                 <li><i className="fa-solid fa-check"></i><span>Member of CLA — Global Logistics Network</span></li>
//                                 <li><i className="fa-solid fa-check"></i><span>Certified Professional Team</span></li>
//                             </ul>

//                             <div className="mt-5">
//                                 <a href="#" className="btn-hero btn-primary" data-hover="Our Services"><span>Our Services</span></a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             <section className="track-stats-section p-0">
//                 <div className="stats-box space-5xl">
//                     <Image src="/images/img(10).jpg" alt="Company Statistics" unoptimized width={1920} height={1080} sizes="100vw" />
//                     <div className="stats-overlay"></div>
//                     <div className="container">
//                         <div className="stats-grid">
//                             <div className="stat-card">
//                                 <div className="stat-value"><span className="counter-animate" data-target="2500">0</span>+</div>
//                                 <div className="stat-label">Professional Workers</div>
//                             </div>
//                             <div className="stat-card">
//                                 <div className="stat-value"><span className="counter-animate" data-target="205">0</span>+</div>
//                                 <div className="stat-label">Countries Covered</div>
//                             </div>
//                             <div className="stat-card">
//                                 <div className="stat-value"><span className="counter-animate" data-target="180">0</span>+</div>
//                                 <div className="stat-label">Corporate Clients</div>
//                             </div>
//                             <div className="stat-card">
//                                 <div className="stat-value"><span className="counter-animate" data-target="450">0</span>+</div>
//                                 <div className="stat-label">Owned Vehicles</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             <section className="section-padding">
//                 <div className="container">
//                     <div className="section-header">
//                         <span className="section-label">Our Team</span>
//                         <h2 className="section-title">Meet Our Experts</h2>
//                         <p className="section-description">Dedicated professionals working together to deliver excellence.</p>
//                     </div>

//                     <div className="swiper team-slider">
//                         <div className="swiper-wrapper">

//                             <div className="swiper-slide">
//                                 <div className="team-card">
//                                     <div className="team-image">
//                                         <Image src="/images/avatar-big2.jpg" alt="David Morgan" unoptimized fill sizes="100vw" />
//                                         <div className="team-overlay"></div>
//                                         <div className="team-badge">
//                                             <i className="fa-solid fa-star"></i>
//                                         </div>
//                                     </div>
//                                     <div className="team-info">
//                                         <h3 className="team-name">David Morgan</h3>
//                                         <span className="team-role">CEO & Founder</span>
//                                         <p className="team-bio">Leading with 15+ years of logistics excellence</p>
//                                         <div className="social-links justify-content-center">
//                                             <a href="#" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
//                                             <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
//                                             <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
//                                         </div>
//                                     </div>
//                                     <div className="card-shine"></div>
//                                 </div>
//                             </div>

//                             <div className="swiper-slide">
//                                 <div className="team-card">
//                                     <div className="team-image">
//                                         <Image src="/images/avatar-big1.jpg" alt="Sarah Jenkins" unoptimized fill sizes="100vw" />
//                                         <div className="team-overlay"></div>
//                                         <div className="team-badge">
//                                             <i className="fa-solid fa-medal"></i>
//                                         </div>
//                                     </div>
//                                     <div className="team-info">
//                                         <h3 className="team-name">Sarah Jenkins</h3>
//                                         <span className="team-role">Operations Director</span>
//                                         <p className="team-bio">Streamlining operations across global networks</p>
//                                         <div className="social-links justify-content-center">
//                                             <a href="#" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
//                                             <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
//                                             <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
//                                         </div>
//                                     </div>
//                                     <div className="card-shine"></div>
//                                 </div>
//                             </div>

//                             <div className="swiper-slide">
//                                 <div className="team-card">
//                                     <div className="team-image">
//                                         <Image src="/images/avatar-big3.jpg" alt="Michael Chen" unoptimized fill sizes="100vw" />
//                                         <div className="team-overlay"></div>
//                                         <div className="team-badge">
//                                             <i className="fa-solid fa-crown"></i>
//                                         </div>
//                                     </div>
//                                     <div className="team-info">
//                                         <h3 className="team-name">Michael Chen</h3>
//                                         <span className="team-role">Head of Logistics</span>
//                                         <p className="team-bio">Innovating supply chain solutions worldwide</p>
//                                         <div className="social-links justify-content-center">
//                                             <a href="#" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
//                                             <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
//                                             <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
//                                         </div>
//                                     </div>
//                                     <div className="card-shine"></div>
//                                 </div>
//                             </div>

//                             <div className="swiper-slide">
//                                 <div className="team-card">
//                                     <div className="team-image">
//                                         <Image src="/images/avatar-big4.jpg" alt="James Wilson" unoptimized fill sizes="100vw" />
//                                         <div className="team-overlay"></div>
//                                         <div className="team-badge">
//                                             <i className="fa-solid fa-shield-halved"></i>
//                                         </div>
//                                     </div>
//                                     <div className="team-info">
//                                         <h3 className="team-name">James Wilson</h3>
//                                         <span className="team-role">Transport Manager</span>
//                                         <p className="team-bio">Ensuring safe and timely deliveries daily</p>
//                                         <div className="social-links justify-content-center">
//                                             <a href="#" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
//                                             <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
//                                             <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
//                                         </div>
//                                     </div>
//                                     <div className="card-shine"></div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="swiper-pagination position-relative mt-5"></div>
//                     </div>
//                 </div>
//             </section>

//             <section className="blog-section">
//                 <div className="why-choose-bg" style={{ backgroundImage: "url('/images/img(10).jpg')" }}></div>
//                 <div className="why-choose-overlay"></div>
//                 <div className="container">
//                     <div className="section-header">
//                         <span className="section-label light">Latest News</span>
//                         <h2 className="section-title light">Logistics Insights & Updates</h2>
//                         <p className="section-description light">Stay informed with the latest trends, tips, and news from the transportation industry.</p>
//                     </div>

//                     <div className="blog-grid">

//                         <div className="blog-card">
//                             <div className="blog-image">
//                                 <Image src="/images/img(1).jpg" alt="Global Supply Chain Trends" unoptimized fill sizes="100vw" />
//                                 <span className="blog-date">Oct 24, 2026</span>
//                             </div>
//                             <div className="blog-content">x
//                                 <h3 className="blog-title"><Link href="/blog-details" >Global Supply Chain Trends to Watch in 2027</Link></h3>
//                                 <p className="blog-desc">Explore the key technologies and strategies shaping the future of global logistics and supply chain management.</p>
//                                 <Link href="/blog-details" className="blog-link">Read More <i className="fa-solid fa-arrow-right-long"></i></Link>
//                             </div>
//                         </div>


//                         <div className="blog-card">
//                             <div className="blog-image">
//                                 <Image src="/images/img(2).jpg" alt="Optimizing Cargo for Safer Transport" unoptimized fill sizes="100vw" />
//                                 <span className="blog-date">Oct 18, 2026</span>
//                             </div>
//                             <div className="blog-content">
//                                 <h3 className="blog-title"><Link href="/blog-details" >Optimizing Your Cargo for Safer Transport</Link></h3>
//                                 <p className="blog-desc">Essential tips on packaging, labeling, and securing your goods to ensure they arrive safely at their destination.</p>
//                                 <Link href="/blog-details" className="blog-link">Read More <i className="fa-solid fa-arrow-right-long"></i></Link>
//                             </div>
//                         </div>


//                         <div className="blog-card">
//                             <div className="blog-image">
//                                 <Image src="/images/img(3).jpg" alt="Benefits of Modern Warehousing Solutions" unoptimized fill sizes="100vw" />
//                                 <span className="blog-date">Oct 12, 2026</span>
//                             </div>
//                             <div className="blog-content">
//                                 <h3 className="blog-title"><Link href="/blog-details" >The Benefits of Modern Warehousing Solutions</Link></h3>
//                                 <p className="blog-desc">How smart warehousing and inventory management can reduce costs and improve delivery speed for your business.</p>
//                                 <Link href="/blog-details" className="blog-link">Read More <i className="fa-solid fa-arrow-right-long"></i></Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }


// ================>>

// import Image from "next/image";
// import Link from "next/link";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "RCS LOGISTICS CAMBODIA LTD",
//     description: "LOGISTICS FOR A GLOBAL ECONOMY",
// };

// export default function Page() {
//     return (
//         <>
//             <section className="page-header" style={{ backgroundImage: "url('/images/img(2).jpg')" }}>
//                 <div className="container page-header-content">
//                     <h1 className="page-title">About Us</h1>
//                     <div className="breadcrumb">
//                         <Link href="/" >Home</Link>
//                         <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
//                         <span>About Us</span>
//                     </div>
//                 </div>
//             </section>


//             {/* ============================================================
//                 NEW SECTION — "Why Cambodia" (from Slide 3-4: Cambodian Map & Snapshot)
//                 TODO: replace /images/cambodia-map.jpg with the map image exported from the pptx (Slide 3)
//             ============================================================ */}
//             <section className="section-padding">
//                 <div className="container">
//                     <div className="row align-items-center">
//                         <div className="col-lg-6 mb-5 mb-lg-0">
//                             <div className="d-flex flex-column gap-3">
//                                 <Image
//                                     src="/images/cambodia-map.jpg"
//                                     alt="Map of the Kingdom of Cambodia"
//                                     unoptimized
//                                     width={720}
//                                     height={600}
//                                     sizes="100vw"
//                                     style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: "8px" }}
//                                 />
//                                 <Image
//                                     src="/images/royal-palace-phnom-penh.jpg"
//                                     alt="Royal Palace, Phnom Penh"
//                                     unoptimized
//                                     width={720}
//                                     height={400}
//                                     sizes="100vw"
//                                     style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "8px" }}
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-6 ps-lg-5">
//                             <span className="section-label no-line">Why Cambodia</span>
//                             <h2 className="section-title">Your Gateway to Southeast Asia</h2>
//                             <p className="section-description mb-4">
//                                 Strategically located in the heart of Southeast Asia, Cambodia connects RCS Logistics
//                                 customers to key regional and global trade routes, offering reliable, cost-effective
//                                 access to international markets.
//                             </p>

//                             <div className="row">
//                                 <div className="col-sm-6 mb-3">
//                                     <strong>Land Area</strong>
//                                     <p className="mb-0">181,035 km² (Land: 176,520 km², Water: 4,515 km²)</p>
//                                 </div>
//                                 <div className="col-sm-6 mb-3">
//                                     <strong>Location</strong>
//                                     <p className="mb-0">Borders Vietnam, Laos and Thailand, on the Gulf of Thailand</p>
//                                 </div>
//                                 <div className="col-sm-6 mb-3">
//                                     <strong>Population</strong>
//                                     <p className="mb-0">17+ Million</p>
//                                 </div>
//                                 <div className="col-sm-6 mb-3">
//                                     <strong>Climate</strong>
//                                     <p className="mb-0">Tropical — Rainy (May–Nov), Dry (Dec–Apr)</p>
//                                 </div>
//                                 <div className="col-sm-6 mb-3">
//                                     <strong>Language</strong>
//                                     <p className="mb-0">Khmer (English &amp; Chinese for business)</p>
//                                 </div>
//                                 <div className="col-sm-6 mb-3">
//                                     <strong>Government</strong>
//                                     <p className="mb-0">Democracy under a Constitutional Monarchy</p>
//                                 </div>
//                                 <div className="col-sm-6 mb-3">
//                                     <strong>Capital</strong>
//                                     <p className="mb-0">Phnom Penh (Government &amp; Commercial Capital)</p>
//                                 </div>
//                                 <div className="col-sm-6 mb-3">
//                                     <strong>Currency</strong>
//                                     <p className="mb-0">Riel (KHR)</p>
//                                 </div>
//                                 <div className="col-sm-6 mb-3">
//                                     <strong>Measurement</strong>
//                                     <p className="mb-0">Metric (French) System</p>
//                                 </div>
//                                 <div className="col-sm-6 mb-3">
//                                     <strong>Time Zone</strong>
//                                     <p className="mb-0">GMT +7</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             <section className="section-padding bg-light">
//                 <div className="container">
//                     <div className="row align-items-stretch">
//                         <div className="col-lg-6 mb-5 mb-lg-0">
//                             <div className="about-image-col">
//                                 <Image src="/images/img(7).jpg" alt="About RCS Logistics" className="about-image" unoptimized width={1920} height={1080} sizes="100vw" />
//                                 <div className="year-badge">
//                                     <span>19</span>
//                                     Years Exp
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 ps-lg-5">
//                             <span className="section-label no-line">Who We Are</span>
//                             <h2 className="section-title">We Are Logistics & Transport Company</h2>
//                             <p className="section-description mb-4">RCS Logistics is a leading logistics provider specializing in international air and ocean freight forwarding, supply chain management, domestic transportation, distribution, customs brokerage, and other 3PL logistics solutions. Established in Hong Kong and operating in Cambodia since 2007.</p>
//                             <p className="mb-3"><strong>Mission:</strong> Our mission is to provide reliable, efficient, and customer-focused logistics solutions that connect Cambodia to global markets. We are committed to delivering high-quality freight forwarding, warehousing, and buyer consolidation services that help our customers optimize their supply chains, reduce logistics costs, and grow their businesses with confidence.</p>
//                             <p className="mb-4"><strong>Vision:</strong> Our vision is to become a leading and trusted logistics service provider in Cambodia, recognized for excellence in freight forwarding, warehousing, and buyer consolidation services. We aim to be the preferred logistics partner for local and international customers by delivering innovative, reliable, and integrated supply chain solutions that support business growth and global connectivity.</p>

//                             <ul className="check-list dark-text">
//                                 <li><i className="fa-solid fa-check"></i><span>Head Office in Hong Kong, Operating in Cambodia since 2007</span></li>
//                                 <li><i className="fa-solid fa-check"></i><span>Member of CLA — Global Logistics Network</span></li>
//                                 <li><i className="fa-solid fa-check"></i><span>Certified Professional Team</span></li>
//                             </ul>

//                             <div className="mt-5">
//                                 <a href="#" className="btn-hero btn-primary" data-hover="Our Services"><span>Our Services</span></a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             {/* ============================================================
//                 NEW SECTION — "Our Approach to Business" (from Slide 7)
//             ============================================================ */}
//             <section className="section-padding">
//                 <div className="container">
//                     <div className="section-header">
//                         <span className="section-label">Our Approach</span>
//                         <h2 className="section-title">Our Approach to Business</h2>
//                         <p className="section-description">Customer Satisfaction — sustained through continuous improvement.</p>
//                     </div>

//                     <div className="row text-center g-4">
//                         <div className="col-md-3 col-sm-6">
//                             <div className="approach-box p-4">
//                                 <i className="fa-solid fa-handshake fa-2x mb-3"></i>
//                                 <h3 className="h5 mb-0">Commercial Excellence</h3>
//                             </div>
//                         </div>
//                         <div className="col-md-3 col-sm-6">
//                             <div className="approach-box p-4">
//                                 <i className="fa-solid fa-gears fa-2x mb-3"></i>
//                                 <h3 className="h5 mb-0">Operational Excellence</h3>
//                             </div>
//                         </div>
//                         <div className="col-md-3 col-sm-6">
//                             <div className="approach-box p-4">
//                                 <i className="fa-solid fa-users fa-2x mb-3"></i>
//                                 <h3 className="h5 mb-0">Human Capital</h3>
//                                 <p className="mb-0 small">Efficient Work Force</p>
//                             </div>
//                         </div>
//                         <div className="col-md-3 col-sm-6">
//                             <div className="approach-box p-4">
//                                 <i className="fa-solid fa-robot fa-2x mb-3"></i>
//                                 <h3 className="h5 mb-0">Automation</h3>
//                                 <p className="mb-0 small">Efficient System</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             {/* ============================================================
//                 NEW SECTION — "Cold Warehouse Storage" (from Slide 16)
//                 TODO: replace /images/cold-storage.jpg with the warehouse photo exported from the pptx
//             ============================================================ */}
//             <section className="section-padding bg-light">
//     <div className="container">
//         <div className="row align-items-center">
//             <div className="col-lg-6 mb-5 mb-lg-0">
//                 <div className="d-flex align-items-center">
//                     <Image
//                         src="/images/cold-storage.jpg"
//                         alt="RCS Cold Warehouse Storage"
//                         unoptimized
//                         width={720}
//                         height={480}
//                         sizes="100vw"
//                         style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "8px" }}
//                     />
//                 </div>
//             </div>
//             <div className="col-lg-6">
//                 <span className="section-label no-line">Cold Storage</span>
//                 <h2 className="section-title">Cold Warehouse Storage</h2>
//                 <p className="section-description mb-4">
//                     RCS Logistics Cambodia provides cold warehouse storage solutions equipped with
//                     modern facilities to handle temperature-sensitive products such as food, beverages,
//                     pharmaceuticals, and other perishable goods. Our cold storage ensures proper
//                     temperature control, product safety, and compliance with international handling
//                     standards, supporting customers with reliable storage and distribution services
//                     in Cambodia.
//                 </p>

//                 <ul className="check-list dark-text mb-4">
//                     <li><i className="fa-solid fa-check"></i><span>Advanced temperature-controlled storage system</span></li>
//                     <li><i className="fa-solid fa-check"></i><span>Suitable for frozen and chilled products</span></li>
//                     <li><i className="fa-solid fa-check"></i><span>24/7 temperature monitoring and security/CCTV</span></li>
//                     <li><i className="fa-solid fa-check"></i><span>Professional inventory management</span></li>
//                     <li><i className="fa-solid fa-check"></i><span>Safe handling and distribution support</span></li>
//                 </ul>

//                 <p className="mb-0">
//                     <strong>Address:</strong><br />
//                     Lot#404, Road 16M, Sangkat Krang Thnong, Khan Sen Sok, Phnom Penh, Cambodia
//                 </p>
//             </div>
//         </div>

//         <div className="row mt-5">
//             <div className="col-12">
//                 <div className="table-responsive">
//                     <table className="table table-bordered align-middle text-center">
//                         <thead className="table-primary">
//                             <tr>
//                                 <th>No.</th>
//                                 <th>Room Type</th>
//                                 <th>Temperature</th>
//                                 <th>Room Size</th>
//                                 <th>Room Capacity</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>1</td>
//                                 <td>Chilled loading area</td>
//                                 <td>0°C to +5°C</td>
//                                 <td>9m x 60m</td>
//                                 <td>540.00 m²</td>
//                             </tr>
//                             <tr>
//                                 <td>2</td>
//                                 <td>Freezer Room #A</td>
//                                 <td>-20°C</td>
//                                 <td>10.48m x 10.90m</td>
//                                 <td>114.23 m²</td>
//                             </tr>
//                             <tr>
//                                 <td>3</td>
//                                 <td>Freezer Room #B</td>
//                                 <td>-20°C</td>
//                                 <td>10.48m x 10.90m</td>
//                                 <td>114.23 m²</td>
//                             </tr>
//                             <tr>
//                                 <td>4</td>
//                                 <td>Freezer Room #C</td>
//                                 <td>-20°C</td>
//                                 <td>19m x 15.30m</td>
//                                 <td>290.70 m²</td>
//                             </tr>
//                             <tr>
//                                 <td>5</td>
//                                 <td>Freezer Room #D</td>
//                                 <td>-20°C</td>
//                                 <td>19m x 15.30m</td>
//                                 <td>290.70 m²</td>
//                             </tr>
//                             <tr>
//                                 <td>6</td>
//                                 <td>Freezer Room #E</td>
//                                 <td>-20°C</td>
//                                 <td>20m x 15m</td>
//                                 <td>300 m²</td>
//                             </tr>
//                             <tr>
//                                 <td>7</td>
//                                 <td>Freezer Room #F</td>
//                                 <td>-20°C</td>
//                                 <td>20m x 15m</td>
//                                 <td>300 m²</td>
//                             </tr>
//                             <tr>
//                                 <td>8</td>
//                                 <td>Freezer Room #G</td>
//                                 <td>-20°C</td>
//                                 <td>20m x 15m</td>
//                                 <td>300 m²</td>
//                             </tr>
//                             <tr>
//                                 <td>9</td>
//                                 <td>Freezer Room #H</td>
//                                 <td>-20°C</td>
//                                 <td>20m x 15m</td>
//                                 <td>300 m²</td>
//                             </tr>
//                         </tbody>
//                         <tfoot>
//                             <tr className="table-primary fw-bold">
//                                 <td colSpan={4} className="text-end">Total Capacity</td>
//                                 <td>2,549 m²</td>
//                             </tr>
//                         </tfoot>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>


//             <section className="track-stats-section p-0">
//                 <div className="stats-box space-5xl">
//                     <Image src="/images/img(10).jpg" alt="Company Statistics" unoptimized width={1920} height={1080} sizes="100vw" />
//                     <div className="stats-overlay"></div>
//                     <div className="container">
//                         <div className="stats-grid">
//                             {/* TODO: confirm real figures with the client — Slide does not provide these three numbers */}
//                             <div className="stat-card">
//                                 <div className="stat-value"><span className="counter-animate" data-target="2500">0</span>+</div>
//                                 <div className="stat-label">Professional Workers</div>
//                             </div>
//                             <div className="stat-card">
//                                 <div className="stat-value"><span className="counter-animate" data-target="205">0</span>+</div>
//                                 <div className="stat-label">Countries Covered</div>
//                             </div>
//                             <div className="stat-card">
//                                 <div className="stat-value"><span className="counter-animate" data-target="180">0</span>+</div>
//                                 <div className="stat-label">Corporate Clients</div>
//                             </div>
//                             {/* Updated from Slide 15: Head trucks (50) + Trailers (75) + Dry/Cold Box trucks (30) = 155 */}
//                             <div className="stat-card">
//                                 <div className="stat-value"><span className="counter-animate" data-target="155">0</span>+</div>
//                                 <div className="stat-label">Owned Vehicles</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             {/* ============================================================
//                 NEW SECTION — "Our Global Networks" (from Slide 17)
//                 TODO: replace /images/global-network-map.jpg with a world map graphic,
//                 and /images/cla-logo.png, /images/jctrans-logo.png with the real logos exported from the pptx
//             ============================================================ */}
//             <section className="section-padding bg-light">
//                 <div className="container">
//                     <div className="section-header">
//                         <span className="section-label">Global Reach</span>
//                         <h2 className="section-title">Our Global Networks</h2>
//                         <p className="section-description">Connecting Cambodia to trusted logistics partners worldwide.</p>
//                     </div>

//                     <div className="row align-items-center mb-5">
//                         <div className="col-lg-12">
//                             <Image
//                                 src="/images/global-network-map.jpg"
//                                 alt="RCS Logistics Global Network"
//                                 className="about-image"
//                                 unoptimized
//                                 width={1920}
//                                 height={900}
//                                 sizes="100vw"
//                             />
//                         </div>
//                     </div>

//                     <div className="row align-items-center justify-content-center text-center g-4">
//                         <div className="col-sm-4">
//                             <Image src="/images/cla-logo.png" alt="Member of CLA" unoptimized width={150} height={150} />
//                             <p className="mt-2 mb-0"><strong>Member of CLA</strong><br />Cambodia Logistics Association</p>
//                         </div>
//                         <div className="col-sm-4">
//                             <Image src="/images/jctrans-logo.png" alt="JCTrans ID 160087 JC Premium" unoptimized width={200} height={100} />
//                             <p className="mt-2 mb-0"><strong>JCTrans</strong><br />ID 160087 — JC Premium</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//         </>
//     );
// }


// =============>>>>>>>

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "about" });
    return {
        title: `${t("pageTitle")} - RCS Logistics Cambodia`,
        description: t("whoWeAreDesc")
    };
}

export default function Page() {
    const t = useTranslations("about");
    const tNav = useTranslations("breadcrumb");

    return (
        <>
            <section className="page-header" style={{ backgroundImage: "url('/images/img(2).jpg')" }}>
                <div className="container page-header-content">
                    <h1 className="page-title">{t("pageTitle")}</h1>
                    <div className="breadcrumb">
                        <Link href="/">{tNav("home")}</Link>
                        <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                        <span>{tNav("aboutUs")}</span>
                    </div>
                </div>
            </section>

            {/* Why Cambodia */}
            <section className="section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="d-flex flex-column gap-3">
                                <Image
                                    src="/images/cambodia-map.jpg"
                                    alt="Map of the Kingdom of Cambodia"
                                    unoptimized
                                    width={720}
                                    height={600}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: "8px" }}
                                />
                                <Image
                                    src="/images/royal-palace-phnom-penh.jpg"
                                    alt="Royal Palace, Phnom Penh"
                                    unoptimized
                                    width={720}
                                    height={400}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "8px" }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-5">
                            <span className="section-label no-line">{t("whyCambodiaLabel")}</span>
                            <h2 className="section-title">{t("whyCambodiaTitle")}</h2>
                            <p className="section-description mb-4">{t("whyCambodiaDesc")}</p>

                            <div className="row">
                                <div className="col-sm-6 mb-3">
                                    <strong>{t("landArea")}</strong>
                                    <p className="mb-0">{t("landAreaValue")}</p>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <strong>{t("location")}</strong>
                                    <p className="mb-0">{t("locationValue")}</p>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <strong>{t("population")}</strong>
                                    <p className="mb-0">{t("populationValue")}</p>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <strong>{t("climate")}</strong>
                                    <p className="mb-0">{t("climateValue")}</p>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <strong>{t("language")}</strong>
                                    <p className="mb-0">{t("languageValue")}</p>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <strong>{t("government")}</strong>
                                    <p className="mb-0">{t("governmentValue")}</p>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <strong>{t("capital")}</strong>
                                    <p className="mb-0">{t("capitalValue")}</p>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <strong>{t("currency")}</strong>
                                    <p className="mb-0">{t("currencyValue")}</p>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <strong>{t("measurement")}</strong>
                                    <p className="mb-0">{t("measurementValue")}</p>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <strong>{t("timeZone")}</strong>
                                    <p className="mb-0">{t("timeZoneValue")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="row align-items-stretch">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="about-image-col">
                                <Image src="/images/img(7).jpg" alt="About RCS Logistics" className="about-image" unoptimized width={1920} height={1080} sizes="100vw" />
                                <div className="year-badge">
                                    <span>19</span>
                                    {t("yearsExp")}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-5">
                            <span className="section-label no-line">{t("whoWeAreLabel")}</span>
                            <h2 className="section-title">{t("whoWeAreTitle")}</h2>
                            <p className="section-description mb-4">{t("whoWeAreDesc")}</p>
                            <p className="mb-3"><strong>{t("missionLabel")}</strong> {t("missionText")}</p>
                            <p className="mb-4"><strong>{t("visionLabel")}</strong> {t("visionText")}</p>

                            <ul className="check-list dark-text">
                                <li><i className="fa-solid fa-check"></i><span>{t("checkHeadOffice")}</span></li>
                                <li><i className="fa-solid fa-check"></i><span>{t("checkCLA")}</span></li>
                                <li><i className="fa-solid fa-check"></i><span>{t("JCTrans")}</span></li>
                                <li><i className="fa-solid fa-check"></i><span>{t("checkCertifiedTeam")}</span></li>
                            </ul>

                            <div className="mt-5">
                                <a href="/services" className="btn-hero btn-primary" data-hover={t("ourServicesBtn")}><span>{t("ourServicesBtn")}</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach to Business */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">{t("approachLabel")}</span>
                        <h2 className="section-title">{t("approachTitle")}</h2>
                        <p className="section-description">{t("approachDesc")}</p>
                    </div>

                    <div className="row text-center g-4">
                        <div className="col-md-3 col-sm-6">
                            <div className="approach-box p-4">
                                <i className="fa-solid fa-handshake fa-2x mb-3"></i>
                                <h3 className="h5 mb-0">{t("commercialExcellence")}</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="approach-box p-4">
                                <i className="fa-solid fa-gears fa-2x mb-3"></i>
                                <h3 className="h5 mb-0">{t("operationalExcellence")}</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="approach-box p-4">
                                <i className="fa-solid fa-users fa-2x mb-3"></i>
                                <h3 className="h5 mb-0">{t("humanCapital")}</h3>
                                <p className="mb-0 small">{t("humanCapitalSub")}</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="approach-box p-4">
                                <i className="fa-solid fa-robot fa-2x mb-3"></i>
                                <h3 className="h5 mb-0">{t("automation")}</h3>
                                <p className="mb-0 small">{t("automationSub")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cold Warehouse Storage */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="d-flex align-items-center">
                                <Image
                                    src="/images/cold-storage.jpg"
                                    alt="RCS Cold Warehouse Storage"
                                    unoptimized
                                    width={720}
                                    height={480}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "8px" }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <span className="section-label no-line">{t("coldStorageLabel")}</span>
                            <h2 className="section-title">{t("coldStorageTitle")}</h2>
                            <p className="section-description mb-4">{t("coldStorageDesc")}</p>

                            <ul className="check-list dark-text mb-4">
                                <li><i className="fa-solid fa-check"></i><span>{t("checkColdSystem")}</span></li>
                                <li><i className="fa-solid fa-check"></i><span>{t("checkColdSuitable")}</span></li>
                                <li><i className="fa-solid fa-check"></i><span>{t("checkColdMonitoring")}</span></li>
                                <li><i className="fa-solid fa-check"></i><span>{t("checkColdInventory")}</span></li>
                                <li><i className="fa-solid fa-check"></i><span>{t("checkColdHandling")}</span></li>
                            </ul>

                            <p className="mb-0">
                                <strong>{t("addressLabel")}</strong><br />
                                {t("addressValue")}
                            </p>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table table-bordered align-middle text-center">
                                    <thead className="table-primary">
                                        <tr>
                                            <th>{t("roomNo")}</th>
                                            <th>{t("roomType")}</th>
                                            <th>{t("roomTemp")}</th>
                                            <th>{t("roomSize")}</th>
                                            <th>{t("roomCapacity")}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>1</td><td>Chilled loading area</td><td>0°C to +5°C</td><td>9m x 60m</td><td>540.00 m²</td></tr>
                                        <tr><td>2</td><td>Freezer Room #A</td><td>-20°C</td><td>10.48m x 10.90m</td><td>114.23 m²</td></tr>
                                        <tr><td>3</td><td>Freezer Room #B</td><td>-20°C</td><td>10.48m x 10.90m</td><td>114.23 m²</td></tr>
                                        <tr><td>4</td><td>Freezer Room #C</td><td>-20°C</td><td>19m x 15.30m</td><td>290.70 m²</td></tr>
                                        <tr><td>5</td><td>Freezer Room #D</td><td>-20°C</td><td>19m x 15.30m</td><td>290.70 m²</td></tr>
                                        <tr><td>6</td><td>Freezer Room #E</td><td>-20°C</td><td>20m x 15m</td><td>300 m²</td></tr>
                                        <tr><td>7</td><td>Freezer Room #F</td><td>-20°C</td><td>20m x 15m</td><td>300 m²</td></tr>
                                        <tr><td>8</td><td>Freezer Room #G</td><td>-20°C</td><td>20m x 15m</td><td>300 m²</td></tr>
                                        <tr><td>9</td><td>Freezer Room #H</td><td>-20°C</td><td>20m x 15m</td><td>300 m²</td></tr>
                                    </tbody>
                                    <tfoot>
                                        <tr className="table-primary fw-bold">
                                            <td colSpan={4} className="text-end">{t("totalCapacity")}</td>
                                            <td>2,549 m²</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="track-stats-section p-0">
                <div className="stats-box space-5xl">
                    <Image src="/images/img(10).jpg" alt="Company Statistics" unoptimized width={1920} height={1080} sizes="100vw" />
                    <div className="stats-overlay"></div>
                    <div className="container-fluid">
                        <div className="stats-grid stats-grid-single-column">
                            <div className="stat-card">
                                <div className="stat-value"><span className="counter-animate" data-target="155">0</span>+</div>
                                <div className="stat-label">{t("statVehicles")}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Networks */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">{t("globalReachLabel")}</span>
                        <h2 className="section-title">{t("globalNetworksTitle")}</h2>
                        <p className="section-description">{t("globalNetworksDesc")}</p>
                    </div>

                    <div className="row align-items-center mb-5">
                        <div className="col-lg-12">
                            <Image
                                src="/images/global-network-map.jpg"
                                alt="RCS Logistics Global Network"
                                className="about-image"
                                unoptimized
                                width={1920}
                                height={900}
                                sizes="100vw"
                            />
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-center text-center g-4">
                        <div className="col-sm-4">
                            <Image src="/images/cla-logo.png" alt="Member of CLA" unoptimized width={150} height={150} />
                            <p className="mt-2 mb-0"><strong>{t("claMember")}</strong><br />{t("claDesc")}</p>
                        </div>
                        <div className="col-sm-4">
                            <Image src="/images/jctrans-logo.png" alt="JCTrans ID 160087 JC Premium" unoptimized width={200} height={100} />
                            <p className="mt-2 mb-0"><strong>JCTrans</strong><br />{t("jctransDesc")}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
