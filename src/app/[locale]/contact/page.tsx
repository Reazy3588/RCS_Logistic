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
    const t = await getTranslations({ locale, namespace: "contact" });
    return {
        title: `${t("pageTitle")} - RCS Logistics Cambodia`,
        description: t("getInTouchDesc")
    };
}

export default function Page() {
    const t = useTranslations("contact");
    const tNav = useTranslations("breadcrumb");

    return (
        <>
            <section className="page-header" style={{ backgroundImage: "url('/images/img(9).jpg')" }}>
                <div className="container page-header-content">
                    <h1 className="page-title">{t("pageTitle")}</h1>
                    <div className="breadcrumb">
                        <Link href="/">{tNav("home")}</Link>
                        <span className="breadcrumb-icon"><i className="fa-solid fa-angle-right"></i></span>
                        <span>{t("breadcrumbContact")}</span>
                    </div>
                </div>
            </section>

            <section className="map-section section-padding pb-0">
                <div className="container">
                    <iframe className="contact-map-iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d613.9238982085194!2d104.9033636!3d11.569424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109516d81348271%3A0xf53a5247c27c1d72!2sKT%20Tower%2C%20St%20112%2C%20Phnom%20Penh!5e1!3m2!1sen!2skh!4v1784735126845!5m2!1sen!2skh" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>

            <section className="process-section pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="px-3 mb-0">
                                <h2 className="widget-title">{t("getInTouch")}</h2>
                                <p className="mb-3">{t("getInTouchDesc")}</p>
                                <div className="contact-info-item mb-3">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <div>
                                        <strong>{t("officeLabel")}</strong>
                                        {t("officeValue")}
                                    </div>
                                </div>
                                <div className="contact-info-item mb-3">
                                    <i className="fa-solid fa-phone"></i>
                                    <div>
                                        <strong>{t("phoneLabel")}</strong>
                                        {t("telLabel")}: +(855) 23 883 886/887<br />
                                        {t("faxLabel")}: +(855) 23 883 889
                                    </div>
                                </div>
                                <div className="contact-info-item mb-4">
                                    <i className="fa-solid fa-envelope"></i>
                                    <div>
                                        <strong>{t("emailLabel")}</strong>
                                        {t("emailValue")}: suor-cam@rcs-asia.com
                                    </div>
                                </div>
                                <div className="contact-info-item mb-4">
                                    <i className="fa-solid fa-globe"></i>
                                    <div>
                                        <strong>{t("websiteLabel")}</strong>
                                        {t("websiteLabel")}: www.rcslogistics.biz
                                    </div>
                                </div>
                                <h3 className="mb-3 h5-style">{t("workingHours")}</h3>
                                <ul className="footer-links">
                                    <li className="mb-1">{t("hoursWeekday")}</li>
                                    <li className="mb-1">{t("hoursSaturday")}</li>
                                    <li className="mb-1">{t("hoursSunday")}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="px-3 mb-0">
                                <h2 className="widget-title pt-lg-0 pt-5">{t("sendMessage")}</h2>
                                <form id="contact-form" className="row g-3" action="/mail-contact.php" method="POST">
                                    <input type="hidden" name="form_type" value="contact_form" />
                                    <div className="col-md-6">
                                        <input type="text" name="name" className="form-control" placeholder={t("namePlaceholder")} required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" name="email" className="form-control" placeholder={t("emailPlaceholder")} required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="phone" className="form-control" placeholder={t("phonePlaceholder")} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="company" className="form-control" placeholder={t("companyPlaceholder")} />
                                    </div>
                                    <div className="col-12">
                                        <select name="service" className="form-select" defaultValue="Not Specified">
                                            <option value="Not Specified">{t("serviceNeeded")}</option>
                                            <option value="Ocean Freight">{t("serviceOcean")}</option>
                                            <option value="Air Cargo">{t("serviceAir")}</option>
                                            <option value="Land Transport">{t("serviceLand")}</option>
                                            <option value="Warehousing">{t("serviceWarehousing")}</option>
                                            <option value="Customs Clearance">{t("serviceCustoms")}</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <textarea name="message" className="form-control" rows={6} placeholder={t("messagePlaceholder")} required></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn-hero btn-primary mt-3" data-hover={t("sendButton")}><span>{t("sendButton")}</span></button>
                                    </div>
                                    <div className="col-12 form-message"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}