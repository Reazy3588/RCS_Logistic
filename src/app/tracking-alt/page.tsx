import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Shipment (Alternative) - Cargonz Logistics",
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
                      <span>Tracking Alt</span>
                  </div>
              </div>
          </section>
      
          
          <section className="section-padding bg-light">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-10">
                          
                          
                          <div className="tracking-search-alt shadow-sm bg-white p-4 p-md-5 rounded-4 mb-5 text-center position-relative overflow-hidden">
                              <div className="position-absolute top-0 end-0 opacity-10 p-4 d-lg-block d-none">
                                  <i className="fa-solid fa-box-open fa-6x text-primary"></i>
                              </div>
                              <span className="section-label no-line justify-content-center mb-2">Real-Time Updates</span>
                              <h2 className="mb-4 position-relative z-1">Track Your Parcel</h2>
                              <form className="position-relative z-1 mx-auto" style={{ maxWidth: "600px" }}>
                                  <div className="input-group shadow-sm rounded-pill overflow-hidden border">
                                      <span className="input-group-text bg-white border-0 ps-4 text-muted"><i className="fa-solid fa-magnifying-glass"></i></span>
                                      <input type="text" placeholder="Tracking Number (e.g. CRGZ-8829100)" className="form-control border-0 px-3 shadow-none" defaultValue="CRGZ-8829100" />
                                      <button type="button" className="btn btn-primary px-4 px-md-5 fw-bold" data-hover="Track Now">Track Now</button>
                                  </div>
                              </form>
                          </div>
      
                          
                          <div className="tracking-result-alt bg-white shadow-sm rounded-4 overflow-hidden">
                              
                              <div className="result-header bg-primary text-white p-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                                  <div>
                                      <p className="mb-1 text-white-50 small text-uppercase tracking-widest">Tracking Number</p>
                                      <h3 className="mb-0 text-white">#CRGZ-8829100</h3>
                                  </div>
                                  <div className="text-md-end">
                                      <p className="mb-1 text-white-50 small text-uppercase tracking-widest">Expected Delivery</p>
                                      <h3 className="h4-style mb-0 text-white"><i className="fa-regular fa-calendar-check me-2"></i>Oct 28, 2026</h3>
                                  </div>
                              </div>
      
                              
                              <div className="p-4 p-md-5">
                                  
                                  
                                  <div className="progress-track-alt mb-5 pb-4 border-bottom">
                                      <div className="d-flex justify-content-between position-relative">
                                          
                                          <div className="progress-line-bg position-absolute top-50 start-0 w-100 bg-light rounded-pill"></div>
                                          
                                          <div className="progress-line-active position-absolute top-50 start-0 bg-primary rounded-pill"></div>
                                          
                                          
                                          <div className="step-item text-center position-relative z-2">
                                              <div className="step-icon step-icon-done bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2">
                                                  <i className="fa-solid fa-check"></i>
                                              </div>
                                              <span className="step-label fw-bold d-block small">Processed</span>
                                          </div>
                                          
                                          <div className="step-item text-center position-relative z-2">
                                              <div className="step-icon step-icon-done bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2">
                                                  <i className="fa-solid fa-check"></i>
                                              </div>
                                              <span className="step-label fw-bold d-block small">Shipped</span>
                                          </div>
                                          
                                          <div className="step-item text-center position-relative z-2">
                                              <div className="step-icon step-icon-current bg-white text-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2">
                                                  <i className="fa-solid fa-truck-fast"></i>
                                              </div>
                                              <span className="step-label fw-bold d-block small text-primary">In Transit</span>
                                          </div>
                                          
                                          <div className="step-item text-center position-relative z-2 opacity-50">
                                              <div className="step-icon step-icon-pending bg-light text-muted rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2">
                                                  <i className="fa-solid fa-house-chimney"></i>
                                              </div>
                                              <span className="step-label fw-bold d-block small">Arrived</span>
                                          </div>
                                      </div>
                                  </div>
      
                                  <div className="row g-5">
                                      
                                      <div className="col-md-5">
                                          <h3 className="h5-style mb-4">Shipment Info</h3>
                                          <div className="info-list-alt">
                                              <div className="d-flex align-items-center mb-3">
                                                  <div className="icon-box-small bg-light text-primary rounded-circle me-3 d-flex align-items-center justify-content-center">
                                                      <i className="fa-solid fa-location-arrow"></i>
                                                  </div>
                                                  <div>
                                                      <small className="text-muted d-block lh-1">Origin</small>
                                                      <strong className="text-dark">Shanghai, China</strong>
                                                  </div>
                                              </div>
                                              <div className="d-flex align-items-center mb-3">
                                                  <div className="icon-box-small bg-light text-primary rounded-circle me-3 d-flex align-items-center justify-content-center">
                                                      <i className="fa-solid fa-location-dot"></i>
                                                  </div>
                                                  <div>
                                                      <small className="text-muted d-block lh-1">Destination</small>
                                                      <strong className="text-dark">Jakarta, Indonesia</strong>
                                                  </div>
                                              </div>
                                              <div className="d-flex align-items-center mb-3">
                                                  <div className="icon-box-small bg-light text-primary rounded-circle me-3 d-flex align-items-center justify-content-center">
                                                      <i className="fa-solid fa-weight-scale"></i>
                                                  </div>
                                                  <div>
                                                      <small className="text-muted d-block lh-1">Weight</small>
                                                      <strong className="text-dark">2,500 KG</strong>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
      
                                      
                                      <div className="col-md-7 border-start">
                                          <h3 className="h5-style mb-4 ps-3">Tracking History</h3>
                                          <div className="history-list-alt ps-3">
                                              
                                              
                                              <div className="history-item d-flex mb-4 position-relative">
                                                  <div className="history-time text-end me-3 flex-shrink-0">
                                                      <strong className="d-block text-primary">11:00</strong>
                                                      <small className="text-muted">Oct 24</small>
                                                  </div>
                                                  <div className="history-dot position-relative me-4">
                                                      <div className="history-dot-active bg-primary rounded-circle border border-3 border-white"></div>
                                                      <div className="history-line-active position-absolute bg-primary opacity-25"></div>
                                                  </div>
                                                  <div className="history-text pb-3">
                                                      <h6 className="mb-1 text-dark">In Transit (Ocean)</h6>
                                                      <p className="mb-0 text-muted small">Vessel departed from Port of Shanghai. Currently in transit to Jakarta.</p>
                                                      <span className="badge bg-light text-primary mt-2"><i className="fa-solid fa-ship me-1"></i> Ocean Freight</span>
                                                  </div>
                                              </div>
      
                                              
                                              <div className="history-item d-flex mb-4 position-relative">
                                                  <div className="history-time text-end me-3 flex-shrink-0">
                                                      <strong className="d-block text-dark">14:15</strong>
                                                      <small className="text-muted">Oct 21</small>
                                                  </div>
                                                  <div className="history-dot position-relative me-4">
                                                      <div className="history-dot-pending bg-secondary rounded-circle border border-3 border-white"></div>
                                                      <div className="history-line-pending position-absolute bg-secondary opacity-25"></div>
                                                  </div>
                                                  <div className="history-text pb-3">
                                                      <h6 className="mb-1 text-dark">Departure from Origin</h6>
                                                      <p className="mb-0 text-muted small">Shipment has left the origin facility and is en route to the port.</p>
                                                  </div>
                                              </div>
      
                                              
                                              <div className="history-item d-flex position-relative">
                                                  <div className="history-time text-end me-3 flex-shrink-0">
                                                      <strong className="d-block text-dark">09:30</strong>
                                                      <small className="text-muted">Oct 20</small>
                                                  </div>
                                                  <div className="history-dot position-relative me-4">
                                                      <div className="history-dot-pending bg-secondary rounded-circle border border-3 border-white"></div>
                                                  </div>
                                                  <div className="history-text">
                                                      <h6 className="mb-1 text-dark">Package Received</h6>
                                                      <p className="mb-0 text-muted small">Shipment received at Shanghai Origin Facility.</p>
                                                  </div>
                                              </div>
      
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
