import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "service" });
    return {
        title: `${t("pageTitle")} - RCS Logistics Cambodia`,
    };
}

export default async function Page({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "service" });
    const tNav = await getTranslations({ locale, namespace: "breadcrumb" });
    const withLocale = (path: string) => `/${locale}${path}`;
    return (
        <>
            <section className="page-header" style={{ backgroundImage: "url('/images/img(10).jpg')" }}>
                <div className="container page-header-content">
                    <h1 className="page-title">{t("pageTitle")}</h1>
                    <div className="breadcrumb">
                        <Link href="/">{tNav("home")}</Link>
                        <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                        <span>{t("breadcrumbServices")}</span>
                    </div>
                </div>
            </section>

            <section className="services-section" id="services">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">{t("whatWeOfferLabel")}</span>
                        <h2 className="section-title">{t("servicesTitle")}</h2>
                        <p className="section-description">{t("servicesDesc")}</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-image">
                                <Image src="/images/img(10).jpg" alt="Ocean Freight" unoptimized fill sizes="100vw" />
                                <div className="service-overlay"></div>

                                <div className="service-icon"><i className="fa-solid fa-plane-departure"></i></div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">{t("airFreightTitle")}</h3>
                                <p className="service-description">{t("airFreightDesc")}</p>
                                <Link href={withLocale("/service-air-freight")} className="service-link"><span>{t("learnMore")}</span><i className="fa-solid  fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-image">
                                <Image src="/images/img(10).jpeg" alt="Air Cargo" unoptimized fill sizes="100vw" />
                                <div className="service-overlay"></div>
                                <div className="service-icon"><i className="fa-solid fa-ship"></i></div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">{t("seaFreightTitle")}</h3>
                                <p className="service-description">{t("seaFreightDesc")}</p>
                                <Link href={withLocale("/service-sea-freight")} className="service-link"><span>{t("learnMore")}</span><i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-image">
                                <Image src="/images/img(1).jpeg" alt="Land Transport" unoptimized fill sizes="100vw" />
                                <div className="service-overlay"></div>

                                <div className="service-icon"><i className="fa-solid fa-warehouse"></i></div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">{t("warehouseTitle")}</h3>
                                <p className="service-description">{t("warehouseDesc")}</p>
                                <Link href={withLocale("/service-warehouse")} className="service-link"><span>{t("learnMore")}</span><i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-image">
                                <Image src="/images/img(7).jpg" alt="Warehousing" unoptimized fill sizes="100vw" />
                                <div className="service-overlay"></div>
                                <div className="service-icon"><i className="fa-solid fa-truck"></i></div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">{t("buyerConsolidationTitle")}</h3>
                                <p className="service-description">{t("buyerConsolidationDesc")}</p>
                                <Link href={withLocale("/service-buyer-consolidation")} className="service-link"><span>{t("learnMore")}</span><i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-image">
                                <Image src="/images/img(9).jpeg" alt="Customs Clearance" unoptimized fill sizes="100vw" />
                                <div className="service-overlay"></div>
                                <div className="service-icon"><i className="fa-solid fa-file-shield"></i></div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">{t("projectCargoTitle")}</h3>
                                <p className="service-description">{t("projectCargoDesc")}</p>
                                <Link href={withLocale("/service-project-cargo")} className="service-link"><span>{t("learnMore")}</span><i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-image">
                                <Image src="/images/img1.jpg" alt="Special Cargo" unoptimized fill sizes="100vw" />
                                <div className="service-overlay"></div>
                                <div className="service-icon"><i className="fa-solid fa-box-archive"></i></div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">{t("customsBrokerageTitle")}</h3>
                                <p className="service-description">{t("customsBrokerageDesc")}</p>
                                <Link href={withLocale("/service-custom-brokerage")} className="service-link"><span>{t("learnMore")}</span><i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="process-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">{t("howItWorksLabel")}</span>
                        <h2 className="section-title">{t("processTitle")}</h2>
                        <p className="section-description">{t("processDesc")}</p>
                    </div>
                    <div className="process-grid">
                        <div className="process-step"><div className="process-icon"><i className="fa-solid fa-file-lines"></i><div className="process-number">1</div></div><h3 className="process-title">{t("step1Title")}</h3><p className="process-desc">{t("step1Desc")}</p></div>
                        <div className="process-step"><div className="process-icon"><i className="fa-solid fa-box"></i><div className="process-number">2</div></div><h3 className="process-title">{t("step2Title")}</h3><p className="process-desc">{t("step2Desc")}</p></div>
                        <div className="process-step"><div className="process-icon"><i className="fa-solid fa-ship"></i><div className="process-number">3</div></div><h3 className="process-title">{t("step3Title")}</h3><p className="process-desc">{t("step3Desc")}</p></div>
                        <div className="process-step"><div className="process-icon"><i className="fa-solid fa-circle-check"></i><div className="process-number">4</div></div><h3 className="process-title">{t("step4Title")}</h3><p className="process-desc">{t("step4Desc")}</p></div>
                    </div>
                </div>
            </section>
        </>
    );
}
