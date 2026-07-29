"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const languages = [
    { code: "en", label: "English", short: "EN", flag: "🇬🇧" },
    { code: "km", label: "ខ្មែរ", short: "ខ្មែរ", flag: "🇰🇭" },
    { code: "zh", label: "中文", short: "中文", flag: "🇨🇳" }
];

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const current = languages.find((l) => l.code === locale) || languages[0];

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    function handleChange(newLocale: string) {
        const segments = pathname.split("/");
        segments[1] = newLocale;
        // Full page reload so the root layout re-executes with the new locale.
        window.location.assign(segments.join("/"));
    }

    return (
        <div className="lang-dropdown" ref={ref}>
            <button className="lang-dropdown-toggle" onClick={() => setOpen(!open)}>
                <span>{current.flag} {current.short}</span>
                <i className="fa-solid fa-angle-down"></i>
            </button>
            {open && (
                <ul className="lang-dropdown-menu">
                    {languages.map((lang) => (
                        <li key={lang.code}>
                            <button
                                className={locale === lang.code ? "active" : ""}
                                onClick={() => handleChange(lang.code)}
                            >
                                <span>{lang.flag}</span> {lang.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
