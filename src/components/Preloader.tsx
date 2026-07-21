import Image from "next/image";

export default function Preloader() {
  return (
    <div id="preloader">
      <div className="loader-content">
        <div className="loader-logo">
          <Image src="/images/RCS.png" alt="logo" className="logo" unoptimized width={220} height={62} />
        </div>
        <div className="loader-progress-wrap">
          <div className="loader-progress-bar" />
        </div>
      </div>
    </div>
  );
}
