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
    const t = await getTranslations({ locale, namespace: "buyerConsolidation" });
    return {
        title: `${t("pageTitle")} - RCS Logistics Cambodia`,
        description: t("productDesc")
    };
}
export default function Page() {
    const t = useTranslations("buyerConsolidation");
    const locale = useLocale();
    const withLocale = (path: string) => `/${locale}${path}`;
    return (
        <>
            <section className="page-header" style={{ backgroundImage: "url('/images/img(5).jpg')" }}>
                <div className="container page-header-content">
                    <h1 className="page-title">{t("pageTitle")}</h1>
                    <div className="breadcrumb">
                        <Link href={withLocale("/")}>{t("breadcrumbHome")}</Link>
                        <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                        <Link href={withLocale("/services")}>{t("breadcrumbServices")}</Link>
                        <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                        <span>{t("breadcrumbWarehouse")}</span>
                    </div>
                </div>
            </section>


            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <h2 className="visually-hidden">Page Content</h2>

                        <div className="col-lg-4 mb-5 mb-lg-0 order-2 order-lg-1">


                            <div className="sidebar-widget">
                                <h2 className="widget-title">{t("allServicesTitle")}</h2>
                                <ul className="cat-list service-list-widget">
                                    <li><Link href={withLocale("/service-air-freight")}>{t("navAirFreight")}<i className="fa-solid fa-arrow-right"></i></Link></li>
                                    <li><Link href={withLocale("/service-sea-freight")}>{t("navSeaFreight")} <i className="fa-solid fa-arrow-right"></i></Link></li>
                                    <li><Link href={withLocale("/service-warehouse")}>{t("navWarehouse")}<i className="fa-solid fa-arrow-right"></i></Link></li>
                                    <li><Link href={withLocale("/service-buyer-consolidation")} className="active">{t("navBuyerConsolidation")}<i className="fa-solid fa-arrow-right"></i></Link></li>
                                    <li><Link href={withLocale("/service-project-cargo")}>{t("navProjectCargo")}<i className="fa-solid fa-arrow-right"></i></Link></li>
                                    <li><Link href={withLocale("/service-custom-brokerage")}>{t("navCustomsBrokerage")}<i className="fa-solid fa-arrow-right"></i></Link></li>
                                </ul>
                            </div>


                            <div className="sidebar-widget">
                                <h2 className="widget-title">{t("downloadsTitle")}</h2>
                                <div className="brochure-box">
                                    <a href="#" className="brochure-btn">
                                        <span className="icon"><i className="fa-regular fa-file-pdf"></i></span>
                                        <span className="text">
                                            <span className="title">{t("brochureTitle")}</span>
                                            <span className="size">{t("brochureSize")}</span>
                                        </span>
                                        <span className="download"><i className="fa-solid fa-download"></i></span>
                                    </a>
                                    <a href="#" className="brochure-btn mt-3">
                                        <span className="icon"><i className="fa-regular fa-file-word"></i></span>
                                        <span className="text">
                                            <span className="title">{t("companyProfileTitle")}</span>
                                            <span className="size">{t("companyProfileSize")}</span>
                                        </span>
                                        <span className="download"><i className="fa-solid fa-download"></i></span>
                                    </a>
                                </div>
                            </div>


                            <div className="sidebar-widget p-0 overflow-hidden text-center position-relative">
                                <Image src="/images/img(5).jpg" alt="Ad" className="img-fluid h-100 w-100" unoptimized width={1920} height={1080} sizes="100vw" />
                                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-75 text-white p-4">
                                    <h3>{t("needHelpTitle")}</h3>
                                    <p>{t("needHelpDesc")}</p>
                                    <h3 className="mb-4 text-white">Tel: +(855) 23 883 886/887</h3>
                                    <a href="/contact" className="btn btn-primary" data-hover={t("contactUsBtn")}>{t("contactUsBtn")}</a>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-8 ps-lg-5 order-1 order-lg-2">
                            <div className="service-detail-image mb-5">
                                <Image src="/images/img(5).jpg" alt="Warehousing" className="img-fluid h-100 rounded" unoptimized width={1920} height={1080} sizes="100vw" />
                            </div>

                            <div className="service-detail-content">
                                <h2 className="mb-4">{t("BuyerConsolidationTitle")}</h2>
                                <p>{t("productDesc")}</p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '13px' }}>
                                    <li>{t("benefitsTitle")}</li>
                                    <li>{t("benefitCostSaving")}</li>
                                    <li>{t("benefitOneStop")}</li>
                                    <li>{t("benefitQuality")}</li>
                                    <li>{t("benefitFlexible")}</li>
                                    <li>{t("benefitFaster")}</li>
                                </ul>
                                <div className="row my-5">
                                    <div className="col-md-6 mb-4 mb-md-0">
                                        <Image src="/images/img(6).jpg" alt="Feature" className="img-fluid rounded img-vertical-height" unoptimized width={1920} height={1080} sizes="100vw" />
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="mb-3">{t("whyChooseTitle")}</h3>
                                        <p>{t("whyChooseDesc")}</p>
                                        <ul className="check-list dark-text mt-4">
                                            <li><i className="fa-solid fa-check"></i><span>{t("checkMultiVendor")}</span></li>
                                            <li><i className="fa-solid fa-check"></i><span>{t("checkFCL")}</span></li>
                                            <li><i className="fa-solid fa-check"></i><span>{t("checkStorage")}</span></li>
                                            <li><i className="fa-solid fa-check"></i><span>{t("checkDelivery")}</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="mb-4">{t("howItWorksTitle")}</h3>
                                <p className="mb-5">{t("howItWorksDesc")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
