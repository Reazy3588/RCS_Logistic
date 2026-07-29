import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Shipment - Cargonz Logistics",
  description: "Cargonz - Transportation & Logistics NextJs Template",
};

export default function Page() {
  return (
    <>
<section className="page-header" style={{ backgroundImage: "url('/images/img(10).jpg')" }}>
              <div className="container page-header-content">
                  <h1 className="page-title">Track Shipment</h1>
                  <div className="breadcrumb">
                      <Link href="/" >Home</Link>
                      <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                      <span>Tracking</span>
                  </div>
              </div>
          </section>
      
          
          <section className="section-padding">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-8">
                          <div className="tracking-search-box text-center mb-5">
                              <h2 className="section-title mb-4">Enter Your Tracking Number</h2>
                              <form className="track-form-large">
                                  <div className="input-group">
                                      <input type="text" placeholder="e.g. CRGZ-8829100" className="form-control" defaultValue="CRGZ-8829100" />
                                      <button type="button" className="btn btn-primary" data-hover="Track Result">Track Result</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
      
                  
                  <div className="tracking-result mt-5">
                      <div className="row">
                          
                          <div className="col-lg-4 mb-5 mb-lg-0">
                              <div className="shipment-info-card">
                                  <h3 className="h4-style mb-4">Shipment Details</h3>
                                  <ul className="shipment-list">
                                      <li>
                                          <span className="label">Tracking ID:</span>
                                          <span className="value">CRGZ-8829100</span>
                                      </li>
                                      <li>
                                          <span className="label">Service Type:</span>
                                          <span className="value">Ocean Freight</span>
                                      </li>
                                      <li>
                                          <span className="label">Weight:</span>
                                          <span className="value">2,500 KG</span>
                                      </li>
                                      <li>
                                          <span className="label">Dimensions:</span>
                                          <span className="value">20x8x8 ft</span>
                                      </li>
                                      <li>
                                          <span className="label">Shipped Date:</span>
                                          <span className="value">Oct 20, 2026</span>
                                      </li>
                                      <li>
                                          <span className="label">Estimated Delivery:</span>
                                          <span className="value">Oct 28, 2026</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
      
                          
                          <div className="col-lg-8 ps-lg-5">
                              <h3 className="h4-style mb-4">Shipment Progress</h3>
                              <div className="tracking-timeline">
                                  
                                  <div className="timeline-item completed">
                                      <div className="timeline-marker">
                                          <i className="fa-solid fa-box"></i>
                                      </div>
                                      <div className="timeline-content">
                                          <span className="date">Oct 20, 2026 - 09:30 AM</span>
                                          <h3 className="h5-style title">Package Received</h3>
                                          <p className="desc">Shipment received at Shanghai Origin Facility.</p>
                                      </div>
                                  </div>
                                  
                                  
                                  <div className="timeline-item completed">
                                      <div className="timeline-marker">
                                          <i className="fa-solid fa-truck-loading"></i>
                                      </div>
                                      <div className="timeline-content">
                                          <span className="date">Oct 21, 2026 - 14:15 PM</span>
                                          <h3 className="h5-style title">Departure from Origin</h3>
                                          <p className="desc">Shipment has left the origin facility and is en route to the port.</p>
                                      </div>
                                  </div>
      
                                  
                                  <div className="timeline-item active">
                                      <div className="timeline-marker">
                                          <i className="fa-solid fa-ship"></i>
                                      </div>
                                      <div className="timeline-content">
                                          <span className="date">Oct 24, 2026 - 11:00 AM</span>
                                          <h3 className="h5-style title">In Transit (Ocean)</h3>
                                          <p className="desc">Vessel departed from Port of Shanghai. Currently in transit to Jakarta.</p>
                                      </div>
                                  </div>
      
                                  
                                  <div className="timeline-item">
                                      <div className="timeline-marker">
                                          <i className="fa-solid fa-warehouse"></i>
                                      </div>
                                      <div className="timeline-content">
                                          <span className="date">Expected: Oct 27, 2026</span>
                                          <h3 className="h5-style title">Arrival at Destination Port</h3>
                                          <p className="desc">Vessel scheduled to arrive at Tanjung Priok Port.</p>
                                      </div>
                                  </div>
      
                                  
                                  <div className="timeline-item">
                                      <div className="timeline-marker">
                                          <i className="fa-solid fa-check"></i>
                                      </div>
                                      <div className="timeline-content">
                                          <span className="date">Expected: Oct 28, 2026</span>
                                          <h3 className="h5-style title">Delivered</h3>
                                          <p className="desc">Package delivered to the recipient.</p>
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
