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
            <section className="page-header" style={{ backgroundImage: "url('/images/img(11).jpg')" }}>
                <div className="container page-header-content">
                    <h1 className="page-title">Project Cargo</h1>
                    <div className="breadcrumb">
                        <Link href="/" >Home</Link>
                        <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                        <Link href="/services" >Services</Link>
                        <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                        <span>Project Cargo</span>
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
                                    <li><Link href="/service-air-freight">Air Freight<i className="fa-solid fa-arrow-right"></i></Link></li>
                                    <li><Link href="/service-sea-freight" >Sea Freight<i className="fa-solid fa-arrow-right"></i></Link></li>
                                    <li><Link href="/service-warehouse" >Warehouse & Distribution<i className="fa-solid fa-arrow-right"></i></Link></li>
                                    <li><Link href="/service-buyer-consolidation" >Bayer Consolidation<i className="fa-solid fa-arrow-right"></i></Link></li>
                                    <li><Link href="/service-project-cargo" className="active">Project Cargo<i className="fa-solid fa-arrow-right"></i></Link></li>
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
                                <Image src="/images/img(11).jpg" alt="Ad" className="img-fluid h-100 w-100" unoptimized width={1920} height={1080} sizes="100vw" />
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
                                <Image src="/images/img(11).jpg" alt="Customs Clearance" className="img-fluid w-100 h-100 rounded" unoptimized width={1920} height={1080} sizes="100vw" />
                            </div>

                            <div className="service-detail-content">
                                <h2 className="mb-4">Project Cargo Services</h2>
                                <p>RCS Logistics Cambodia provides specialized Project Cargo Handling Services for oversized, heavy-lift, and complex shipments requiring customized logistics planning and execution.</p>
                                <p>We support customers with professional solutions for transporting large-scale industrial and infrastructure cargo safely and efficiently within Cambodia and across international markets.</p>
                                <div className="row my-5">
                                    <div className="col-md-6 mb-4 mb-md-0">
                                        <Image src="/images/img(12).jpg" alt="Feature" className="img-fluid h-100 rounded img-vertical-height" unoptimized width={1920} height={1080} sizes="100vw" />
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="mb-3">Why Choose Project Cargo</h3>
                                        <p>We provide end-to-end management for heavy-lift, oversized, and high-value cargo, handling complex route planning, specialized equipment, and regulatory permits for seamless project delivery.</p>
                                        <ul className="check-list dark-text mt-4">
                                            <li><i className="fa-solid fa-check"></i><span>Specialized Heavy-Lift & OOG Equipment</span></li>
                                            <li><i className="fa-solid fa-check"></i><span>Comprehensive Feasibility & Route Surveys</span></li>
                                            <li><i className="fa-solid fa-check"></i><span>Turnkey Logistics & Site-to-Site Transport</span></li>
                                            <li><i className="fa-solid fa-check"></i><span>Regulatory Permits & Escort Coordination</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="mb-4">How It Works</h3>
                                <p className="mb-5">Our project cargo execution is built on meticulous engineering and planning, delivering heavy equipment and oversized shipments safely to your job site on schedule.</p>

                                {/* <div className="accordion" id="serviceAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
                                                1. Documentation Review
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#serviceAccordion">
                                            <div className="accordion-body">
                                                We review your commercial invoices, packing lists, and other documents to ensure they meet all regulatory requirements.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                                2. Declaration Submission
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
                                            <div className="accordion-body">
                                                We electronically submit your customs declaration to the relevant authorities, calculating applicable duties and taxes.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                                3. Clearance & Release
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
                                            <div className="accordion-body">
                                                Once cleared, your cargo is released for final delivery. We provide you with all the necessary entry documents for your records.
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
