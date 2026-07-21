import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest News - Cargonz Logistics",
  description: "Cargonz - Transportation & Logistics NextJs Template",
};

export default function Page() {
  return (
    <>
<section className="page-header" style={{ backgroundImage: "url('/images/img(1).jpg')" }}>
              <div className="container page-header-content">
                  <h1 className="page-title">Latest News</h1>
                  <div className="breadcrumb">
                      <Link href="/" >Home</Link>
                      <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                      <span>Blog</span>
                  </div>
              </div>
          </section>
      
          
          <section className="section-padding">
              <div className="container">
                  <h2 className="visually-hidden">Latest Articles</h2>
                  <div className="row">
                      
                      <div className="col-lg-4 col-md-6 mb-4">
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
                      </div>
                      
                      
                      <div className="col-lg-4 col-md-6 mb-4">
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
                      </div>
                      
                      
                      <div className="col-lg-4 col-md-6 mb-4">
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
      
                      
                      <div className="col-lg-4 col-md-6 mb-4">
                          <div className="blog-card">
                              <div className="blog-image">
                                  <Image src="/images/img(4).jpg" alt="Sustainable Logistics"  unoptimized fill sizes="100vw" />
                                  <span className="blog-date">Oct 05, 2026</span>
                              </div>
                              <div className="blog-content">
                                  <h3 className="blog-title"><Link href="/blog-details" >Sustainable Logistics: Going Green</Link></h3>
                                  <p className="blog-desc">Why eco-friendly shipping practices are becoming a necessity and how we are implementing them.</p>
                                  <Link href="/blog-details"  className="blog-link">Read More <i className="fa-solid fa-arrow-right-long"></i></Link>
                              </div>
                          </div>
                      </div>
      
                      
                      <div className="col-lg-4 col-md-6 mb-4">
                          <div className="blog-card">
                              <div className="blog-image">
                                  <Image src="/images/img(5).jpg" alt="Understanding Customs Regulations"  unoptimized fill sizes="100vw" />
                                  <span className="blog-date">Sep 28, 2026</span>
                              </div>
                              <div className="blog-content">
                                  <h3 className="blog-title"><Link href="/blog-details" >Understanding Customs Regulations</Link></h3>
                                  <p className="blog-desc">A comprehensive guide to navigating complex international customs laws and avoiding delays.</p>
                                  <Link href="/blog-details"  className="blog-link">Read More <i className="fa-solid fa-arrow-right-long"></i></Link>
                              </div>
                          </div>
                      </div>
      
                      
                      <div className="col-lg-4 col-md-6 mb-4">
                          <div className="blog-card">
                              <div className="blog-image">
                                  <Image src="/images/img(6).jpg" alt="Future of Air Freight"  unoptimized fill sizes="100vw" />
                                  <span className="blog-date">Sep 20, 2026</span>
                              </div>
                              <div className="blog-content">
                                  <h3 className="blog-title"><Link href="/blog-details" >The Future of Air Freight</Link></h3>
                                  <p className="blog-desc">New aircraft technologies and routes that are making air cargo faster and more efficient.</p>
                                  <Link href="/blog-details"  className="blog-link">Read More <i className="fa-solid fa-arrow-right-long"></i></Link>
                              </div>
                          </div>
                      </div>
                  </div>
      
                  
                  <div className="row mt-5">
                      <div className="col-12 text-center">
                          <div className="blog-pagination">
                              <a href="#" className="page-link active">1</a>
                              <a href="#" className="page-link">2</a>
                              <a href="#" className="page-link">3</a>
                              <a href="#" className="page-link"><i className="fa-solid fa-angle-right"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
</>
  );
}
