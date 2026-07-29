import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "home" });
    return {
        title: "RCS LOGISTICS CAMBODIA LTD",
        description: t("heroDesc")
    };
}

export default function Page() {
    const t = useTranslations("home");
    const locale = useLocale();
    const withLocale = (path: string) => `/${locale}${path}`;

    return (
        <>
            <section className="hero-section">
                <div className="hero-bg" style={{ backgroundImage: "url('/images/img(2).jpg')" }}></div>
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content hero-enter">
                        <div className="hero-label">
                            <span className="label-line"></span>
                            <span className="label-text">{t("heroLabel")}</span>
                        </div>
                        <h1 className="hero-title">
                            <span className="title-line">{t("heroTitleLine1")}</span>
                            <span className="title-line title-line-accent">{t("heroTitleLine2")}</span>
                        </h1>
                        <p className="hero-description">{t("heroDesc")}</p>
                        <div className="hero-buttons">
                            <Link href={withLocale("/services")} className="btn-hero btn-primary" data-hover={t("exploreServicesBtn")}><span>{t("exploreServicesBtn")}</span></Link>
                        </div>
                        <div className="hero-stats">
                            {/* <div className="stat-item"><span className="stat-number"><span className="counter-animate" data-target="15">0</span>K+</span><span className="stat-label">{t("statShipments")}</span></div>
                            <div className="stat-divider"></div>
                            <div className="stat-item"><span className="stat-number"><span className="counter-animate" data-target="50">0</span>+</span><span className="stat-label">{t("statCountriesServed")}</span></div>
                            <div className="stat-divider"></div> */}
                            <div className="stat-item"><span className="stat-number"><span className="counter-animate" data-target="24">0</span>/7</span><span className="stat-label">{t("statSupport")}</span></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon"><i className="fa-solid fa-truck-fast"></i></div>
                            <div className="feature-content">
                                <h2 className="feature-title">{t("feature1Title")}</h2>
                                <p className="feature-description">{t("feature1Desc")}</p>
                            </div>
                            <div className="feature-number">01</div>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><i className="fa-solid fa-shield-halved"></i></div>
                            <div className="feature-content">
                                <h2 className="feature-title">{t("feature2Title")}</h2>
                                <p className="feature-description">{t("feature2Desc")}</p>
                            </div>
                            <div className="feature-number">02</div>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><i className="fa-solid fa-earth-americas"></i></div>
                            <div className="feature-content">
                                <h2 className="feature-title">{t("feature3Title")}</h2>
                                <p className="feature-description">{t("feature3Desc")}</p>
                            </div>
                            <div className="feature-number">03</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="track-stats-section pt-0 pb-0" id="tracking">
                <div className="track-stats-container">
                    <div className="stats-box">
                        <Image src="/images/img(10).jpg" alt="Logistics Statistics" unoptimized width={1920} height={1080} sizes="100vw" />
                        <div className="stats-overlay"></div>
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-value"><span className="counter-animate" data-target="19">0</span>Y</div>
                                <div className="stat-label">{t("statYears")}</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-value">{t("statWorkers")}</div>
                                <div className="stat-label">{t("statWorkers")}</div>
                            </div>
                            {/* <div className="stat-card">
                                <div className="stat-value"><span className="counter-animate" data-target="80">0</span>%</div>
                                <div className="stat-label">{t("statAreas")}</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-value"><span className="counter-animate" data-target="205">0</span>+</div>
                                <div className="stat-label">{t("statCountries")}</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-value"><span className="counter-animate" data-target="180">0</span>+</div>
                                <div className="stat-label">{t("statClients")}</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-value"><span className="counter-animate" data-target="155">0</span>+</div>
                                <div className="stat-label">{t("statVehicles")}</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-section" id="services">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">{t("servicesLabel")}</span>
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
                                <Link href={withLocale("/service-air-freight")} className="service-link"><span>{t("learnMore")}</span><i className="fa-solid fa-arrow-right"></i></Link>
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

            <section className="why-choose-section">
                <div className="why-choose-bg" style={{ backgroundImage: "url('/images/img(7).jpg')" }}></div>
                <div className="why-choose-overlay"></div>
                <div className="container">
                    <div className="why-choose-content">
                        <span className="section-label no-line light">{t("whyChooseLabel")}</span>
                        <h2 className="section-title light">{t("whyChooseTitle")}</h2>
                        <p className="why-choose-desc">{t("whyChooseDesc")}</p>
                        <ul className="check-list light-text">
                            <li><i className="fa-solid fa-check"></i><span>{t("checkTracking")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("checkPricing")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("checkSupport")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("checkNetwork")}</span></li>
                        </ul>
                        <Link href={withLocale("/about")} className="btn-hero btn-primary" data-hover={t("learnMoreAboutUsBtn")}><span>{t("learnMoreAboutUsBtn")}</span></Link>
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
