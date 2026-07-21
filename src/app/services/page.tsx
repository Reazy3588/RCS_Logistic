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
            <section className="page-header" style={{ backgroundImage: "url('/images/img(10).jpeg')" }}>
                <div className="container page-header-content">
                    <h1 className="page-title">Our Services</h1>
                    <div className="breadcrumb">
                        <Link href="/" >Home</Link>
                        <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                        <span>Services</span>
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

                                <div className="service-icon"><i className="fa-solid fa-plane-departure"></i></div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">Air Freight</h3>
                                <p className="service-description">RCS Logistics Cambodia delivers flexible airfreight solutions tailored to urgent and high-value cargo</p>
                                <Link href="/service-air-freight" className="service-link"><span>Learn More</span><i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-image">
                                <Image src="/images/img(10).jpeg" alt="Air Cargo" unoptimized fill sizes="100vw" />
                                <div className="service-overlay"></div>
                                <div className="service-icon"><i className="fa-solid fa-ship"></i></div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">Sea Freight</h3>
                                <p className="service-description">RCS Logistics Cambodia provides reliable sea freight solutions, including FCL, LCL, and buyer consolidation services, </p>
                                <Link href="/service-sea-freight" className="service-link"><span>Learn More</span><i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-image">
                                <Image src="/images/img(1).jpeg" alt="Land Transport" unoptimized fill sizes="100vw" />
                                <div className="service-overlay"></div>

                                <div className="service-icon"><i className="fa-solid fa-warehouse"></i></div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">Warehouse & Distribution</h3>
                                <p className="service-description">RCS Logistics Cambodia operates a 4,800 square meter warehouse facility strategically located in Phnom Penh, </p>
                                <Link href="/service-warehouse" className="service-link"><span>Learn More</span><i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-image">
                                <Image src="/images/img(7).jpg" alt="Warehousing" unoptimized fill sizes="100vw" />
                                <div className="service-overlay"></div>
                                <div className="service-icon"><i className="fa-solid fa-truck"></i></div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">Buyer Consolidation</h3>
                                <p className="service-description">RCS Logistics Cambodia provides professional Buyer Consolidation services that help international customers reduce logistics costs</p>
                                <Link href="/service-buyer-consolidation" className="service-link"><span>Learn More</span><i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-image">
                                <Image src="/images/img(9).jpeg" alt="Customs Clearance" unoptimized fill sizes="100vw" />
                                <div className="service-overlay"></div>
                                <div className="service-icon"><i className="fa-solid fa-file-shield"></i></div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">Project Cargo</h3>
                                <p className="service-description">RCS Logistics Cambodia provides specialized Project Cargo Handling Services for oversized.</p>
                                <Link href="/service-project-cargo" className="service-link"><span>Learn More</span><i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-image">
                                <Image src="/images/img1.jpg" alt="Special Cargo" unoptimized fill sizes="100vw" />
                                <div className="service-overlay"></div>
                                <div className="service-icon"><i className="fa-solid fa-box-archive"></i></div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">Customs Brokerage</h3>
                                <p className="service-description">RCS Logistics Cambodia provides reliable customs brokerage services, </p>
                                <a href="/service-custom-brokerage" className="service-link"><span>Learn More</span><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
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
        </>
    );
}
