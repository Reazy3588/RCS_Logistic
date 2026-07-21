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
            <section className="page-header" style={{ backgroundImage: "url('/images/img(5).jpg')" }}>
                <div className="container page-header-content">
                    <h1 className="page-title">Bayer Consolidation</h1>
                    <div className="breadcrumb">
                        <Link href="/" >Home</Link>
                        <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                        <Link href="/services" >Services</Link>
                        <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                        <span>Bayer Consolidation</span>
                    </div>
                </div>
            </section>


            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <h2 className="visually-hidden">Page Content</h2>

                        <div className="col-lg-4 mb-5 mb-lg-0 order-2 order-lg-1">


                            <div className="sidebar-widget">
                                <h2 className="widget-title">All Services</h2>
                                <ul className="cat-list service-list-widget">
                                    <li><Link href="/service-air-freight" >Air Freight<i className="fa-solid fa-arrow-right"></i></Link></li>
                                    <li><Link href="/service-sea-freight" >Sea Freight <i className="fa-solid fa-arrow-right"></i></Link></li>
                                    <li><Link href="/service-warehouse" >Warehouse & Distribution<i className="fa-solid fa-arrow-right"></i></Link></li>
                                    <li><Link href="/service-buyer-consolidation" className="active">Bayer Consolidation<i className="fa-solid fa-arrow-right"></i></Link></li>
                                    <li><Link href="/service-project-cargo" >Project Cargo<i className="fa-solid fa-arrow-right"></i></Link></li>
                                    <li><Link href="/service-custom-brokerage">Customs Brokerage<i className="fa-solid fa-arrow-right"></i></Link></li>
                                </ul>
                            </div>


                            <div className="sidebar-widget">
                                <h2 className="widget-title">Downloads</h2>
                                <div className="brochure-box">
                                    <a href="#" className="brochure-btn">
                                        <span className="icon"><i className="fa-regular fa-file-pdf"></i></span>
                                        <span className="text">
                                            <span className="title">Service Brochure</span>
                                            <span className="size">PDF, 2.5MB</span>
                                        </span>
                                        <span className="download"><i className="fa-solid fa-download"></i></span>
                                    </a>
                                    <a href="#" className="brochure-btn mt-3">
                                        <span className="icon"><i className="fa-regular fa-file-word"></i></span>
                                        <span className="text">
                                            <span className="title">Company Profile</span>
                                            <span className="size">DOC, 1.2MB</span>
                                        </span>
                                        <span className="download"><i className="fa-solid fa-download"></i></span>
                                    </a>
                                </div>
                            </div>


                            <div className="sidebar-widget p-0 overflow-hidden text-center position-relative">
                                <Image src="/images/img(5).jpg" alt="Ad" className="img-fluid h-100 w-100" unoptimized width={1920} height={1080} sizes="100vw" />
                                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-75 text-white p-4">

                                    <h3>Need Help?</h3>
                                    <p>Call us for any logistics questions.</p>
                                    <h3 className="mb-4 text-white">Tel: +(855) 23 883 886/887</h3>
                                    <a href="#" className="btn btn-primary" data-hover="Contact Us">Contact Us</a>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-8 ps-lg-5 order-1 order-lg-2">
                            <div className="service-detail-image mb-5">
                                <Image src="/images/img(5).jpg" alt="Warehousing" className="img-fluid h-100 rounded" unoptimized width={1920} height={1080} sizes="100vw" />
                            </div>

                            <div className="service-detail-content">
                                <h2 className="mb-4">Bayer Consolidation</h2>
                                <p>RCS Logistics Cambodia provides professional Buyer Consolidation services that help international customers reduce logistics costs, simplify supplier coordination, ensure cargo quality, and achieve more efficient global shipping from Cambodia.</p>
                                <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem', color: '#000' }}>
                                    Benefits of Buyer Consolidation by RCS Logistics Cambodia
                                </h3>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: 1.6, fontSize: '1.05rem', fontWeight: 500 }}>
                                    <li>Cost Saving on Shipping</li>
                                    <li>One-Stop Coordination</li>
                                    <li>Quality Control & Cargo Inspection</li>
                                    <li>Flexible Warehousing & Shipping Solutions</li>
                                    <li>Faster, Reliable Supply Chain</li>
                                </ul>
                                <div className="row my-5">
                                    <div className="col-md-6 mb-4 mb-md-0">
                                        <Image src="/images/img(6).jpg" alt="Feature" className="img-fluid rounded img-vertical-height" unoptimized width={1920} height={1080} sizes="100vw" />
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="mb-3">Why Choose Bayer Consolidation?</h3>
                                        <p>Optimize your international trade supply chain with customized consolidation services that maximize container space, lower transit risks, and simplify your import logistics.</p>
                                        <ul className="check-list dark-text mt-4">
                                            <li><i className="fa-solid fa-check"></i><span>Multi-Vendor Cargo Collection</span></li>
                                            <li><i className="fa-solid fa-check"></i><span>Full Container Load (FCL) Savings</span></li>
                                            <li><i className="fa-solid fa-check"></i><span>Centralized Warehouse Storage</span></li>
                                            <li><i className="fa-solid fa-check"></i><span>Efficient Final Destination Delivery</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="mb-4">How It Works</h3>
                                <p className="mb-5">Our buyer consolidation process aggregates shipments from multiple suppliers into a single dedicated container, streamlining handling and cutting transit costs.</p>

                                {/* <div className="accordion" id="serviceAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
                                                1. Receiving & Inspection
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#serviceAccordion">
                                            <div className="accordion-body">
                                                We receive your inbound cargo, inspect it for quality and quantity, and log it into our inventory system.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                                2. Storage & Management
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
                                            <div className="accordion-body">
                                                Goods are stored in optimal conditions. You can monitor stock levels remotely via our client portal.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                                3. Order Fulfillment & Dispatch
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
                                            <div className="accordion-body">
                                                Upon request, we pick, pack, and ship your orders to their final destination efficiently.
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
