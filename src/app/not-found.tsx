import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found Cargonz Logistics",
  description: "Cargonz - Transportation & Logistics NextJs Template",
};

export default function NotFound() {
  return (
    <section className="section-padding d-flex align-items-center" id="NotFound">
    <div className="why-choose-bg" style={{ backgroundImage: "url('/images/img(5).jpg')" }}></div>
    <div className="why-choose-overlay"></div>
      <div className="container text-center">
        <h1 className="color">404</h1>
        <h2 className="section-title mb-3">Oops! Page Not Found</h2>
        <p className="section-description mx-auto mb-5">
          The page you are looking for may have been moved, renamed, or temporarily unavailable. Let’s get your shipment
          journey back on track.
        </p>
        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
          <Link href="/" className="btn btn-primary px-4 py-2" data-hover="Back to Home">
            Back to Home
          </Link>
          <Link href="/contact" className="btn btn-outline-primary px-4 py-2" data-hover="Contact Support">
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
