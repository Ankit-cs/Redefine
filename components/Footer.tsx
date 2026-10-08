"use client";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";

const socialLinks = [
    { href: "https://x.com/ankr08", icon: <FaXTwitter /> },
    { href: "https://github.com/Ankit-cs", icon: <FaGithub /> },
    { href: "https://ankr.me/", icon: <FaGlobe /> },
];

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="w-screen bg-[#5542ff] py-4 text-white">
            <div className="mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm font-light md:text-left">
                    {t("copyright")}
                </p>

                <div className="flex justify-center gap-4 md:justify-start">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white transition-colors duration-500 ease-in-out hover:text-gray-300"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <a
                    href="/privacy-policy"
                    className="text-center text-sm font-light hover:underline md:text-right"
                >
                    {t("privacyPolicy")}
                </a>
            </div>
        </footer>
    );
};

export default Footer;

