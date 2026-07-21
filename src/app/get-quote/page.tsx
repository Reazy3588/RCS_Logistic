import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote - Cargonz Logistics",
  description: "Cargonz - Transportation & Logistics NextJs Template",
};

export default function Page() {
  return (
    <>
<section className="page-header" style={{ backgroundImage: "url('/images/img(9).jpg')" }}>
              <div className="container page-header-content">
                  <h1 className="page-title">Request a Quote</h1>
                  <div className="breadcrumb">
                      <Link href="/" >Home</Link>
                      <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                      <span>Request Quote</span>
                  </div>
              </div>
          </section>
      
          <section className="section-padding">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-10">
                          <div className="sidebar-widget quote-sidebar-widget p-5 mb-0">
                              <div className="text-center mb-5">
                                  <h2 className="widget-title">Shipment Information</h2>
                                  <p>Please fill out the form below to receive a customized shipping quote.</p>
                              </div>
                              
                              <form id="quote-form" className="row g-4" action="/mail-quote.php" method="POST">
                                  <input type="hidden" name="form_type" value="quote_form" />
                                  
                                  <div className="col-12"><h3 className="h5-style mb-0 text-primary">01. Contact Details</h3></div>
                                  <div className="col-md-6">
                                      <label className="form-label">Full Name</label>
                                      <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label className="form-label">Company Name</label>
                                      <input type="text" name="company" className="form-control" placeholder="Company Name (Optional)" />
                                  </div>
                                  <div className="col-md-6">
                                      <label className="form-label">Email Address</label>
                                      <input type="email" name="email" className="form-control" placeholder="email@domain.com" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label className="form-label">Phone Number</label>
                                      <input type="text" name="phone" className="form-control" placeholder="+62 812..." />
                                  </div>
      
                                  
                                  <div className="col-12 mt-5"><h3 className="h5-style mb-0 text-primary">02. Shipment Route</h3></div>
                                  <div className="col-md-6">
                                      <label className="form-label">Origin (City/Port)</label>
                                      <input type="text" name="origin" className="form-control" placeholder="e.g. Shanghai, China" />
                                  </div>
                                  <div className="col-md-6">
                                      <label className="form-label">Destination (City/Port)</label>
                                      <input type="text" name="destination" className="form-control" placeholder="e.g. Jakarta, Indonesia" />
                                  </div>
                                  <div className="col-md-4">
                                      <label className="form-label">Transport Mode</label>
                                      <select name="transport" className="form-select" defaultValue="Not Specified">
                                          <option value="Not Specified">Select Mode</option>
                                          <option value="Ocean Freight (FCL)">Ocean Freight (FCL)</option>
                                          <option value="Ocean Freight (LCL)">Ocean Freight (LCL)</option>
                                          <option value="Air Freight">Air Freight</option>
                                          <option value="Land Transport">Land Transport</option>
                                      </select>
                                  </div>
                                  <div className="col-md-4">
                                      <label className="form-label">Incoterms</label>
                                      <select name="incoterms" className="form-select" defaultValue="Not Specified">
                                          <option value="Not Specified">Select Incoterm</option>
                                          <option value="FOB">FOB - Free on Board</option>
                                          <option value="EXW">EXW - Ex Works</option>
                                          <option value="CIF">CIF - Cost, Insurance & Freight</option>
                                          <option value="DDP">DDP - Delivered Duty Paid</option>
                                      </select>
                                  </div>
                                   <div className="col-md-4">
                                      <label className="form-label">Est. Shipment Date</label>
                                      <input type="date" name="date" className="form-control" />
                                  </div>
      
                                  
                                  <div className="col-12 mt-5"><h3 className="h5-style mb-0 text-primary">03. Cargo Details</h3></div>
                                  <div className="col-md-6">
                                      <label className="form-label">Commodity Type</label>
                                      <input type="text" name="commodity" className="form-control" placeholder="e.g. Electronics, Furniture" />
                                  </div>
                                  <div className="col-md-6">
                                      <label className="form-label">Total Weight (kg)</label>
                                      <input type="number" name="weight" className="form-control" placeholder="0" />
                                  </div>
                                  <div className="col-md-4">
                                      <label className="form-label">Length (cm)</label>
                                      <input type="number" name="length" className="form-control" placeholder="0" />
                                  </div>
                                  <div className="col-md-4">
                                      <label className="form-label">Width (cm)</label>
                                      <input type="number" name="width" className="form-control" placeholder="0" />
                                  </div>
                                  <div className="col-md-4">
                                      <label className="form-label">Height (cm)</label>
                                      <input type="number" name="height" className="form-control" placeholder="0" />
                                  </div>
      
                                  <div className="col-12 mt-4">
                                      <label className="form-label">Additional Message / Instructions</label>
                                    <textarea name="instructions" className="form-control" rows={4} placeholder="Any specific requirements..."></textarea>
                                  </div>
                                  <div className="col-12 text-center mt-4">
                                      <button type="submit" className="btn btn-primary" data-hover="Request Quote"><span>Submit Quote Request</span></button>
                                  </div>
                                  <div className="col-12 form-message text-center mt-3"></div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
</>
  );
}
