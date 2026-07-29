import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "fleet" });
    return {
        title: `${t("pageTitle")} - RCS Logistics Cambodia`,
        description: t("heroDesc")
    };
}

export default function Page() {
    const t = useTranslations("fleet");
    const tNav = useTranslations("breadcrumb");

    return (
        <>
            <section className="page-header" style={{ backgroundImage: "url('/images/img(8).jpg')" }}>
                <div className="container page-header-content">
                    <h1 className="page-title">{t("pageTitle")}</h1>
                    <div className="breadcrumb">
                        <Link href="/">{tNav("home")}</Link>
                        <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                        <span>{t("breadcrumbFleet")}</span>
                    </div>
                </div>
            </section>

            <section className="section-padding fleet-hero-split py-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 px-0 fleet-hero-media-col">
                            <Image src="/images/img(11).jpg" alt="Cargonz Fleet" className="img-fluid fleet-hero-image" unoptimized width={1920} height={1080} sizes="100vw" />
                        </div>
                        <div className="col-lg-6 px-0">
                            <div className="fleet-hero-content-col m-5">
                                <span className="section-label no-line">{t("excellenceLabel")}</span>
                                <h2 className="section-title">{t("heroTitle")}</h2>
                                <p className="section-description mb-4">{t("heroDesc")}</p>
                                <ul className="check-list dark-text mt-4">
                                    <li><i className="fa-solid fa-check"></i><span>{t("checkGPS")}</span></li>
                                    <li><i className="fa-solid fa-check"></i><span>{t("checkInsurance")}</span></li>
                                    <li><i className="fa-solid fa-check"></i><span>{t("checkWeeklyInspection")}</span></li>
                                    <li><i className="fa-solid fa-check"></i><span>{t("checkDrivers")}</span></li>
                                </ul>
                                <div className="mt-5">
                                    <a href="#" className="btn-hero btn-primary" data-hover={t("requestQuoteBtn")}><span>{t("requestQuoteBtn")}</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">{t("categoriesLabel")}</span>
                        <h2 className="section-title">{t("categoriesTitle")}</h2>
                        <p className="section-description">{t("categoriesDesc")}</p>
                    </div>
                    <div className="fleet-grid">
                        <div className="fleet-card">
                            <div className="fleet-icon"><i className="fa-solid fa-truck-front"></i></div>
                            <h3 className="h4-style">{t("headTrucksTitle")}</h3>
                            <p>{t("headTrucksDesc")}</p>
                            <span>50 {t("unitsLabel")}</span>
                        </div>
                        <div className="fleet-card">
                            <div className="fleet-icon"><i className="fa-solid fa-truck-ramp-box"></i></div>
                            <h3 className="h4-style">{t("trailersTitle")}</h3>
                            <p>{t("trailersDesc")}</p>
                            <span>75 {t("unitsLabel")}</span>
                        </div>
                        <div className="fleet-card">
                            <div className="fleet-icon"><i className="fa-solid fa-snowflake"></i></div>
                            <h3 className="h4-style">{t("boxTrucksTitle")}</h3>
                            <p>{t("boxTrucksDesc")}</p>
                            <span>30 {t("unitsLabel")}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="track-stats-section fleet-stats-section py-0">
                <div className="stats-box fleet-stats-box space-5xl">
                    <Image src="/images/img(10).jpg" alt="Fleet Statistics" unoptimized width={1920} height={1080} sizes="100vw" />
                    <div className="stats-overlay"></div>
                    <div className="container stats-box-inner">
                        <div className="stats-grid fleet-stats-grid">
                            <div className="stat-card">
                                <div className="stat-value">155 {t("unitsLabel")}</div>
                                <div className="stat-label">{t("statTotalFleet")}</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-value">24/7 CCTV</div>
                                <div className="stat-label">{t("statMonitoring")}</div>
                            </div>
                            {/* <div className="stat-card">
                                <div className="stat-value">99.2%</div>
                                <div className="stat-label">{t("statOnTime")}</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-value">8M+</div>
                                <div className="stat-label">{t("statKm")}</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="fleet-compliance-wrap">
                                <h3 className="mb-4">{t("complianceTitle")}</h3>
                                <ul className="check-list dark-text">
                                    <li><i className="fa-solid fa-check"></i><span>{t("checkWeeklyInspection")}</span></li>
                                    <li><i className="fa-solid fa-check"></i><span>{t("checkGPS")}</span></li>
                                    <li><i className="fa-solid fa-check"></i><span>{t("checkISO")}</span></li>
                                    <li><i className="fa-solid fa-check"></i><span>{t("checkEmergency")}</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="fleet-media-grid">
                                <Image src="/images/img(6).jpg" alt="Fleet Safety" className="img-fluid rounded-4" unoptimized width={1920} height={1080} sizes="100vw" />
                                <Image src="/images/img(4).jpg" alt="Fleet Dispatch" className="img-fluid rounded-4" unoptimized width={1920} height={1080} sizes="100vw" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}