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
    const t = await getTranslations({ locale, namespace: "getQuote" });
    return {
        title: `${t("pageTitle")} - RCS Logistics Cambodia`,
        description: t("shipmentInfoDesc")
    };
}

export default function Page() {
    const t = useTranslations("getQuote");
    const tNav = useTranslations("breadcrumb");
    const locale = useLocale();
    const withLocale = (path: string) => `/${locale}${path === "/" ? "" : path}`;

    return (
        <>
            <section className="page-header" style={{ backgroundImage: "url('/images/img(9).jpg')" }}>
                <div className="container page-header-content">
                    <h1 className="page-title">{t("pageTitle")}</h1>
                    <div className="breadcrumb">
                        <Link href={withLocale("/")}>{tNav("home")}</Link>
                        <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                        <span>{t("breadcrumbRequestQuote")}</span>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="sidebar-widget quote-sidebar-widget p-5 mb-0">
                                <div className="text-center mb-5">
                                    <h2 className="widget-title">{t("shipmentInfoTitle")}</h2>
                                    <p>{t("shipmentInfoDesc")}</p>
                                </div>

                                <form id="quote-form" className="row g-4" action="/mail-quote.php" method="POST">
                                    <input type="hidden" name="form_type" value="quote_form" />

                                    <div className="col-12"><h3 className="h5-style mb-0 text-primary">{t("section1Title")}</h3></div>
                                    <div className="col-md-6">
                                        <label className="form-label">{t("fullNameLabel")}</label>
                                        <input type="text" name="name" className="form-control" placeholder={t("fullNamePlaceholder")} required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">{t("companyNameLabel")}</label>
                                        <input type="text" name="company" className="form-control" placeholder={t("companyNamePlaceholder")} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">{t("emailLabel")}</label>
                                        <input type="email" name="email" className="form-control" placeholder={t("emailPlaceholder")} required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">{t("phoneLabel")}</label>
                                        <input type="text" name="phone" className="form-control" placeholder={t("phonePlaceholder")} />
                                    </div>

                                    <div className="col-12 mt-5"><h3 className="h5-style mb-0 text-primary">{t("section2Title")}</h3></div>
                                    <div className="col-md-6">
                                        <label className="form-label">{t("originLabel")}</label>
                                        <input type="text" name="origin" className="form-control" placeholder={t("originPlaceholder")} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">{t("destinationLabel")}</label>
                                        <input type="text" name="destination" className="form-control" placeholder={t("destinationPlaceholder")} />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">{t("transportModeLabel")}</label>
                                        <select name="transport" className="form-select" defaultValue="Not Specified">
                                            <option value="Not Specified">{t("selectModeOption")}</option>
                                            <option value="Ocean Freight (FCL)">{t("oceanFCL")}</option>
                                            <option value="Ocean Freight (LCL)">{t("oceanLCL")}</option>
                                            <option value="Air Freight">{t("airFreightOption")}</option>
                                            <option value="Land Transport">{t("landTransportOption")}</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">{t("incotermsLabel")}</label>
                                        <select name="incoterms" className="form-select" defaultValue="Not Specified">
                                            <option value="Not Specified">{t("selectIncotermOption")}</option>
                                            <option value="FOB">{t("incotermFOB")}</option>
                                            <option value="EXW">{t("incotermEXW")}</option>
                                            <option value="CIF">{t("incotermCIF")}</option>
                                            <option value="DDP">{t("incotermDDP")}</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">{t("shipmentDateLabel")}</label>
                                        <input type="date" name="date" className="form-control" />
                                    </div>

                                    <div className="col-12 mt-5"><h3 className="h5-style mb-0 text-primary">{t("section3Title")}</h3></div>
                                    <div className="col-md-6">
                                        <label className="form-label">{t("commodityLabel")}</label>
                                        <input type="text" name="commodity" className="form-control" placeholder={t("commodityPlaceholder")} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">{t("weightLabel")}</label>
                                        <input type="number" name="weight" className="form-control" placeholder="0" />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">{t("lengthLabel")}</label>
                                        <input type="number" name="length" className="form-control" placeholder="0" />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">{t("widthLabel")}</label>
                                        <input type="number" name="width" className="form-control" placeholder="0" />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">{t("heightLabel")}</label>
                                        <input type="number" name="height" className="form-control" placeholder="0" />
                                    </div>

                                    <div className="col-12 mt-4">
                                        <label className="form-label">{t("instructionsLabel")}</label>
                                        <textarea name="instructions" className="form-control" rows={4} placeholder={t("instructionsPlaceholder")}></textarea>
                                    </div>
                                    <div className="col-12 text-center mt-4">
                                        <button type="submit" className="btn btn-primary" data-hover={t("submitBtn")}><span>{t("submitBtn")}</span></button>
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