// import Image from "next/image";
// import Link from "next/link";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "Air Cargo Details - Cargonz Logistics",
//     description: "Cargonz - Transportation & Logistics NextJs Template",
// };

// export default function Page() {
//     return (
//         <>
//             <section className="page-header" style={{ backgroundImage: "url('/images/img(9).jpg')" }}>
//                 <div className="container page-header-content">
//                     <h1 className="page-title">Sea Freight</h1>
//                     <div className="breadcrumb">
//                         <Link href="/" >Home</Link>
//                         <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
//                         <Link href="/services" >Services</Link>
//                         <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
//                         <span>Sea Freight</span>
//                     </div>
//                 </div>
//             </section>


//             <section className="section-padding">
//                 <div className="container">
//                     <div className="row">
//                         <h2 className="visually-hidden">Page Content</h2>

//                         <div className="col-lg-4 mb-5 mb-lg-0 order-2 order-lg-1">


//                             <div className="sidebar-widget">
//                                 <h2 className="widget-title">All Services</h2>
//                                 <ul className="cat-list service-list-widget">
//                                     <li><Link href="/service-air-freight" >Air Freight <i className="fa-solid fa-arrow-right"></i></Link></li>
//                                     <li><Link href="/service-sea-freight" className="active">Sea Freight<i className="fa-solid fa-arrow-right"></i></Link></li>
//                                     <li><Link href="/service-warehouse" >Warehouse & Distribution<i className="fa-solid fa-arrow-right"></i></Link></li>
//                                     <li><Link href="/service-bayer-consolidation" >Bayer Consolidation<i className="fa-solid fa-arrow-right"></i></Link></li>
//                                     <li><Link href="/service-project-cargo" >Project Cargo<i className="fa-solid fa-arrow-right"></i></Link></li>
//                                     <li><Link href="/service-custom-brokerage">Customs Brokerage<i className="fa-solid fa-arrow-right"></i></Link></li>
//                                 </ul>
//                             </div>


//                             <div className="sidebar-widget">
//                                 <h2 className="widget-title">Downloads</h2>
//                                 <div className="brochure-box">
//                                     <a href="#" className="brochure-btn">
//                                         <span className="icon"><i className="fa-regular fa-file-pdf"></i></span>
//                                         <span className="text">
//                                             <span className="title">Service Brochure</span>
//                                             <span className="size">PDF, 2.5MB</span>
//                                         </span>
//                                         <span className="download"><i className="fa-solid fa-download"></i></span>
//                                     </a>
//                                     <a href="#" className="brochure-btn mt-3">
//                                         <span className="icon"><i className="fa-regular fa-file-word"></i></span>
//                                         <span className="text">
//                                             <span className="title">Company Profile</span>
//                                             <span className="size">DOC, 1.2MB</span>
//                                         </span>
//                                         <span className="download"><i className="fa-solid fa-download"></i></span>
//                                     </a>
//                                 </div>
//                             </div>


//                             <div className="sidebar-widget p-0 overflow-hidden text-center position-relative">
//                                 <Image src="/images/img(9).jpg" alt="Ad" className="img-fluid h-100 w-100" unoptimized width={1920} height={1080} sizes="100vw" />
//                                 <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-75 text-white p-4">

//                                     <h3>Need Help?</h3>
//                                     <p>Call us for any logistics questions.</p>
//                                     <h3 className="mb-4 text-white">+62 812-9000-2211</h3>
//                                     <a href="#" className="btn btn-primary" data-hover="Contact Us">Contact Us</a>
//                                 </div>
//                             </div>

//                         </div>


//                         <div className="col-lg-8 ps-lg-5 order-1 order-lg-2">
//                             <div className="service-detail-image mb-5">
//                                 <Image src="/images/img(9).jpg" alt="Air Cargo" className="img-fluid h-100 rounded" unoptimized width={1920} height={1080} sizes="100vw" />
//                             </div>

//                             <div className="service-detail-content">
//                                 <h2 className="mb-4">Sea Freight Service</h2>
//                                 <p>RCS Logistics Cambodia provides reliable sea freight solutions, including FCL, LCL, and buyer consolidation services, helping customers optimize export logistics from Cambodia to global markets.</p>
//                                 {/* <p>Cargonz partners with leading airlines to provide competitive rates and flexible scheduling. From airport-to-airport to door-to-door delivery, we handle every aspect of your air shipment with precision and care.</p> */}

//                                 <div className="row my-5">
//                                     <div className="col-md-6 mb-4 mb-md-0">
//                                         <Image src="/images/img(3).jpg" alt="Feature" className="img-fluid rounded img-vertical-height" unoptimized width={1920} height={1080} sizes="100vw" />
//                                     </div>
//                                     <div className="col-md-6">
//                                         <h3 className="mb-3">Why Choose Air Cargo?</h3>
//                                         <p>Air freight is the fastest way to transport goods globally, making it ideal for time-sensitive shipments and high-value inventory.</p>
//                                         <ul className="check-list dark-text mt-4">
//                                             <li><i className="fa-solid fa-check"></i><span>Fastest Delivery Times</span></li>
//                                             <li><i className="fa-solid fa-check"></i><span>Global Airport Network</span></li>
//                                             <li><i className="fa-solid fa-check"></i><span>High Security Standards</span></li>
//                                             <li><i className="fa-solid fa-check"></i><span>Reliable Schedules</span></li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                                 <h3 className="mb-4">How It Works</h3>
//                                 <p className="mb-5">Our air cargo process is streamlined for speed and efficiency. We ensure your shipment moves quickly through every stage of the journey.</p>

//                                 <div className="accordion" id="serviceAccordion">
//                                     <div className="accordion-item">
//                                         <h2 className="accordion-header">
//                                             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
//                                                 1. Booking & Compliance Check
//                                             </button>
//                                         </h2>
//                                         <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#serviceAccordion">
//                                             <div className="accordion-body">
//                                                 We review your cargo details to ensure compliance with air transport regulations and book the most suitable flight.
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="accordion-item">
//                                         <h2 className="accordion-header">
//                                             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
//                                                 2. Airport Transfer & Screening
//                                             </button>
//                                         </h2>
//                                         <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
//                                             <div className="accordion-body">
//                                                 Your goods are transported to the airport, undergo security screening, and are loaded onto the aircraft.
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="accordion-item">
//                                         <h2 className="accordion-header">
//                                             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
//                                                 3. Flight & Delivery
//                                             </button>
//                                         </h2>
//                                         <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
//                                             <div className="accordion-body">
//                                                 Upon arrival, we handle customs clearance and arrange for final delivery to the destination.
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }


// =================>>>>

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "RCS LOGISTICS CAMBODIA LTD",
    description: "LOGISTICS FOR A GLOBAL ECONOMY",
};

export default function Page() {
    // Array for your 9 partner airline logo filenames
    const airlineLogos = [
        { name: "CMA CGM", src: "/images/cma_cgm.png" },
        { name: "Hapag Lloyd", src: "/images/hapag_lloyd.png" },
        { name: "Oocl", src: "/images/oocl.png" },
        { name: "Cosco", src: "/images/cosco.png" },
        { name: "Maersk", src: "/images/maersk.png" },
        { name: "One Ocean ", src: "/images/one_ocean.png" },
        { name: "MSC", src: "/images/msc.png" },
    ];

    return (
        <>
            <section className="page-header" style={{ backgroundImage: "url('/images/img(9).jpg')" }}>
                <div className="container page-header-content">
                    <h1 className="page-title">Sea Freight</h1>
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                        <Link href="/services">Services</Link>
                        <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                        <span>Sea Freight</span>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <h2 className="visually-hidden">Page Content</h2>

                        {/* ========================================================= */}
                        {/* LEFT SIDEBAR (The partner section moves here!) */}
                        {/* ========================================================= */}
                        <div className="col-lg-4 mb-5 mb-lg-0 order-2 order-lg-1">
                            <div className="sidebar-widget">
                                <h2 className="widget-title">All Services</h2>
                                <ul className="cat-list service-list-widget">
                                    <li><Link href="/service-air-freight">Air Freight<i className="fa-solid fa-arrow-right"></i></Link></li>
                                    <li><Link href="/service-sea-freight" className="active">Sea Freight <i className="fa-solid fa-arrow-right"></i></Link></li>
                                    <li><Link href="/service-warehouse">Warehouse & Distribution<i className="fa-solid fa-arrow-right"></i></Link></li>
                                    <li><Link href="/service-buyer-consolidation">Buyer Consolidation<i className="fa-solid fa-arrow-right"></i></Link></li>
                                    <li><Link href="/service-project-cargo">Project Cargo<i className="fa-solid fa-arrow-right"></i></Link></li>
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

                            <div className="sidebar-widget p-0 overflow-hidden text-center position-relative mb-4">
                                <Image src="/images/img(10).jpg" alt="Ad" className="img-fluid h-100 w-100" unoptimized width={1920} height={1080} sizes="100vw" />
                                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-75 text-white p-4">
                                    <h3>Need Help?</h3>
                                    <p>Call us for any logistics questions.</p>
                                    <h3 className="mb-4 text-white">Tel: +(855) 23 883 886/887</h3>
                                    <a href="#" className="btn btn-primary" data-hover="Contact Us">Contact Us</a>
                                </div>
                            </div>

                            {/* ---> AIRLINE PARTNERS NOW IN SIDEBAR <--- */}
                            <div className="sidebar-widget p-4 border rounded bg-light">
                                <h3 className="mb-3 text-primary d-flex align-items-center" style={{ fontSize: "1.25rem" }}>
                                    <span style={{ marginRight: "8px", color: "#0d6efd" }}>❖</span>
                                    <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Main Shipping Line</span>
                                </h3>
                                {/* 3x3 Responsive Grid for 9 Partners */}
                                <div className="row row-cols-3 g-2 align-items-center justify-content-center bg-white p-2 rounded border">
                                    {airlineLogos.map((airline, idx) => (
                                        <div key={idx} className="col p-2 text-center d-flex justify-content-center align-items-center" style={{ minHeight: "60px" }}>
                                            <Image
                                                src={airline.src}
                                                alt={airline.name}
                                                width={90}
                                                height={45}
                                                style={{ objectFit: 'contain', width: '100%', height: 'auto', maxHeight: '40px' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* ----------------------------------------- */}
                        </div>

                        {/* ========================================================= */}
                        {/* MAIN RIGHT COLUMN */}
                        {/* ========================================================= */}
                        <div className="col-lg-8 ps-lg-5 order-1 order-lg-2">
                            <div className="service-detail-image mb-5">
                                <Image src="/images/img(10).jpg" alt="Ocean Freight" className="img-fluid rounded" unoptimized width={1920} height={1080} sizes="100vw" />
                            </div>

                            <div className="service-detail-content">
                                <h2 className="mb-4">Air Freight Product</h2>
                                <p>RCS Logistics Cambodia provides reliable sea freight solutions, including FCL, LCL, and buyer consolidation services, helping customers optimize export logistics from Cambodia to global markets.</p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '13px' }}>
                                    <li>Door-to-door service for LCL and FCL</li>
                                    <li>Sea/Truck service from HCM to PNH</li>
                                    <li>Customs brokerage</li>
                                    <li>Handling of dangerous goods, project cargo and perishable goods</li>
                                    <li>Break bulk service</li>
                                    <li>Warehousing and storage</li>
                                    <li>Export packaging and crating</li>
                                    <li>Complete documentation services</li>
                                </ul>

                                <div className="row my-5">
                                    <div className="col-md-6 mb-4 mb-md-0">
                                        <Image src="/images/img(2).jpg" alt="Feature" className="img-fluid rounded img-vertical-height" unoptimized width={1920} height={1080} sizes="100vw" />
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="mb-3">Why Choose Air Freight?</h3>
                                        <ul className="check-list dark-text mt-4">
                                            <li><i className="fa-solid fa-check"></i><span>Best for time-sensitive cargo.</span></li>
                                            <li><i className="fa-solid fa-check"></i><span>Direct access to worldwide markets.</span></li>
                                            <li><i className="fa-solid fa-check"></i><span>Low risk of damage or theft.</span></li>
                                            <li><i className="fa-solid fa-check"></i><span>Highly dependable flight schedules.</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="mb-4">How It Works</h3>
                                <p className="mb-5">Our air cargo process is streamlined for speed and efficiency. We ensure your shipment moves quickly through every stage of the journey.</p>

                                <div className="accordion" id="serviceAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
                                                1. Booking & Documentation
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#serviceAccordion">
                                            <div className="accordion-body">
                                                We assist you with all necessary documentation including Bill of Lading, Commercial Invoice, and Packing List to ensure smooth customs clearance.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                                2. Cargo Collection & Loading
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
                                            <div className="accordion-body">
                                                We arrange for the pickup of your goods from your warehouse or supplier and handle the secure loading into containers.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                                3. Air Transit & Tracking
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
                                            <div className="accordion-body">
                                                Your cargo is shipped via our premium carrier partners. You can track your shipment in real-time using our advanced tracking system.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}