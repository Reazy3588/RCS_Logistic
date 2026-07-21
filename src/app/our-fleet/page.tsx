import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "RCS LOGISTICS CAMBODIA LTD",
    description: "LOGISTICS FOR A GLOBAL ECONOMY",
};

export default function Page() {
    return (
        <>
            <section className="page-header" style={{ backgroundImage: "url('/images/img(8).jpg')" }}>
                <div className="container page-header-content">
                    <h1 className="page-title">Our Fleet</h1>
                    <div className="breadcrumb">
                        <Link href="/" >Home</Link>
                        <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                        <span>Our Fleet</span>
                    </div>
                </div>
            </section>

            <section className="section-padding fleet-hero-split py-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 px-0 fleet-hero-media-col">
                            <Image src="/images/img(11).jpg" alt="Cargonz Fleet" className="img-fluid fleet-hero-image" unoptimized width={1920} height={1080} sizes="100vw" />
                        </div>
                        <div className="col-lg-6 px-0">
                            <div className="fleet-hero-content-col m-5">
                                <span className="section-label no-line">Fleet Excellence</span>
                                <h2 className="section-title">Modern Assets Built for Every Cargo Profile</h2>
                                <p className="section-description mb-4">RCS Logistics Cambodia utilizes all types of trucking solutions through affiliated companies in Cambodia. This includes container head trucks, trailers, dry/cold box trucks to support various logistics and supply chain operations.</p>
                                <ul className="check-list dark-text mt-4">
                                    <li><i className="fa-solid fa-check"></i><span>GPS tracking</span></li>
                                    <li><i className="fa-solid fa-check"></i><span>Insurance</span></li>
                                    <li><i className="fa-solid fa-check"></i><span>Weekly maintenance inspection</span></li>
                                    <li><i className="fa-solid fa-check"></i><span>Licensed and Experienced Drivers</span></li>
                                </ul>
                                <div className="mt-5">
                                    <a href="#" className="btn-hero btn-primary" data-hover="Request Fleet Quote"><span>Request Fleet Quote</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Fleet Categories</span>
                        <h2 className="section-title">Coverage for Every Operational Need</h2>
                        <p className="section-description">A balanced, specialized fleet that keeps your cargo moving with precision across domestic and international corridors.</p>
                    </div>
                    <div className="fleet-grid">
                        <div className="fleet-card">
                            <div className="fleet-icon"><i className="fa-solid fa-truck-front"></i></div>
                            <h3 className="h4-style">Head trucks</h3>
                            <p>High-capacity trucks for container and long-distance overland operations.</p>
                            <span> 30 units</span>
                        </div>
                        <div className="fleet-card">
                            <div className="fleet-icon"><i className="fa-solid fa-truck-ramp-box"></i></div>
                            <h3 className="h4-style">Trailers</h3>
                            <p>Secure enclosed transport for retail, FMCG, and e-commerce distribution.</p>
                            <span>30 units</span>
                        </div>
                        <div className="fleet-card">
                            <div className="fleet-icon"><i className="fa-solid fa-snowflake"></i></div>
                            <h3 className="h4-style">Dry/Cold Box Trucks</h3>
                            <p>Temperature-controlled delivery for pharmaceutical and food-grade cargo.</p>
                            <span>65 Units</span>
                        </div>
                        {/* <div className="fleet-card">
                            <div className="fleet-icon"><i className="fa-solid fa-van-shuttle"></i></div>
                            <h3 className="h4-style">Urban Vans</h3>
                            <p>Agile same-day delivery vehicles for city distribution and B2C routes.</p>
                            <span>240 Units</span>
                        </div>
                        <div className="fleet-card">
                            <div className="fleet-icon"><i className="fa-solid fa-trailer"></i></div>
                            <h3 className="h4-style">Flatbed & Lowbed</h3>
                            <p>Specialized trailers for oversized and heavy machinery transportation.</p>
                            <span>48 Units</span>
                        </div>
                        <div className="fleet-card">
                            <div className="fleet-icon"><i className="fa-solid fa-boxes-stacked"></i></div>
                            <h3 className="h4-style">Last-Mile Units</h3>
                            <p>Optimized route fleet for high-volume parcel and fulfillment operations.</p>
                            <span>300+ Units</span>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className="track-stats-section fleet-stats-section py-0">
                <div className="stats-box fleet-stats-box space-5xl">
                    <Image src="/images/img(10).jpg" alt="Fleet Statistics" unoptimized width={1920} height={1080} sizes="100vw" />
                    <div className="stats-overlay"></div>
                    <div className="container stats-box-inner">
                        <div className="stats-grid fleet-stats-grid">
                            <div className="stat-card">
                                <div className="stat-value">155 units</div>
                                <div className="stat-label">Total Active Fleet</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-value">24/7 CCTV</div>
                                <div className="stat-label">Fleet Monitoring</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-value">99.2%</div>
                                <div className="stat-label">On-Time Dispatch</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-value">8M+</div>
                                <div className="stat-label">Km Covered Yearly</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="fleet-compliance-wrap">
                                <h3 className="mb-4">Maintenance, Safety & Compliance</h3>
                                {/* <p className="mb-4">Each vehicle follows a proactive maintenance schedule supported by centralized diagnostics, tire and brake monitoring, and strict pre-trip inspection protocols. We prioritize uptime without compromising safety.</p> */}
                                <ul className="check-list dark-text">
                                    <li><i className="fa-solid fa-check"></i><span>Weekly maintenance inspection</span></li>
                                    <li><i className="fa-solid fa-check"></i><span>GPS tracking</span></li>
                                    <li><i className="fa-solid fa-check"></i><span>ISO-aligned safety and operating procedures</span></li>
                                    <li><i className="fa-solid fa-check"></i><span>Dedicated emergency response support</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="fleet-media-grid">
                                <Image src="/images/img(6).jpg" alt="Fleet Safety" className="img-fluid rounded-4" unoptimized width={1920} height={1080} sizes="100vw" />
                                <Image src="/images/img(4).jpg" alt="Fleet Dispatch" className="img-fluid rounded-4" unoptimized width={1920} height={1080} sizes="100vw" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="section-padding pt-0">
                <div className="container">
                    <div className="fleet-cta">
                        <h3>Need Dedicated Fleet Capacity for Your Operation?</h3>
                        <p>Talk to our logistics consultants and we will design a fleet deployment model aligned with your cargo profile, route density, and SLA goals.</p>
                        <a href="#" className="btn-hero btn-primary" data-hover="Talk to Fleet Team"><span>Talk to Fleet Team</span></a>
                    </div>
                </div>
            </section> */}
        </>
    );
}
