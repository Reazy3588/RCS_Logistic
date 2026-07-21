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
            <section className="page-header" style={{ backgroundImage: "url('/images/img(9).jpg')" }}>
                <div className="container page-header-content">
                    <h1 className="page-title">Contact Us</h1>
                    <div className="breadcrumb">
                        <Link href="/" >Home</Link>
                        <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                        <span>Contact</span>
                    </div>
                </div>
            </section>


            <section className="map-section section-padding pb-0">
                <div className="container">
                    <iframe className="contact-map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d289949.08196813136!2d104.86085780670453!3d11.52128094831344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109511ac75aa479%3A0x2bcbaced9e2aa59d!2sRCS%20Logistics%20Cambodia%20Co.%2C%20LTD!5e1!3m2!1sen!2skh!4v1784436664645!5m2!1sen!2skh" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>

            <section className="process-section pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="px-3 mb-0">
                                <h2 className="widget-title">Get In Touch</h2>
                                <p className="mb-3">We are here to support your logistics needs with fast response and reliable solutions.</p>
                                <div className="contact-info-item mb-3">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <div>
                                        <strong>Office</strong>
                                        Flat 703, 7/F KT Tower No.23, Street  112,Sangkat Phsar Depo3, Khan Tuol Kork. Phnom Penh , Cambodia
                                    </div>
                                </div>
                                <div className="contact-info-item mb-3">
                                    <i className="fa-solid fa-phone"></i>
                                    <div>
                                        <strong>Phone</strong>
                                        Tel: +(855) 23 883 886/887<br></br>
                                        Fax: +(855) 23 883 889
                                    </div>
                                </div>
                                <div className="contact-info-item mb-4">
                                    <i className="fa-solid fa-envelope"></i>
                                    <div>
                                        <strong>Email</strong>
                                        Email : suor-cam@rcs-asia.com
                                    </div>
                                </div>
                                <div className="contact-info-item mb-4">
                                    <i className="fa-solid fa-globe"></i>
                                    <div>
                                        <strong>Website</strong>
                                        Website: www.rcslogistics.biz
                                    </div>
                                </div>
                                <h3 className="mb-3 h5-style">Working Hours</h3>
                                <ul className="footer-links">
                                    <li className="mb-1">Monday - Friday: 08:00 - 18:00</li>
                                    <li className="mb-1">Saturday: 08:00 - 15:00</li>
                                    <li className="mb-1">Sunday by reservation</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="px-3 mb-0">
                                <h2 className="widget-title pt-lg-0 pt-5">Send Us a Message</h2>
                                <form id="contact-form" className="row g-3" action="/mail-contact.php" method="POST">
                                    <input type="hidden" name="form_type" value="contact_form" />
                                    <div className="col-md-6">
                                        <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="phone" className="form-control" placeholder="Phone Number" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="company" className="form-control" placeholder="Company Name" />
                                    </div>
                                    <div className="col-12">
                                        <select name="service" className="form-select" defaultValue="Not Specified">
                                            <option value="Not Specified">Service Needed</option>
                                            <option value="Ocean Freight">Ocean Freight</option>
                                            <option value="Air Cargo">Air Cargo</option>
                                            <option value="Land Transport">Land Transport</option>
                                            <option value="Warehousing">Warehousing</option>
                                            <option value="Customs Clearance">Customs Clearance</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <textarea name="message" className="form-control" rows={6} placeholder="Tell us about your shipment requirements" required></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn-hero btn-primary mt-3" data-hover="Send Message"><span>Send Message</span></button>
                                    </div>
                                    <div className="col-12 form-message"></div>
                                </form>
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
            </section> */}
        </>
    );
}
