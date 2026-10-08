"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { useLanguage } from "../context/LanguageContext";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const { language } = useLanguage();
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        });
    });

    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    {language === "en" ? "Welcome to Zentry" : "ゼントリーへようこそ"}
                </p>

                <AnimatedTitle title={language === "en" ? "Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>deventure" : "世界最大の共有 <br /> アドベンチ<b>ャ</b>ーを発見する"}
                containerClass="mt-5 !text-black text-center"
             />

                <div className="about-subtext">
                    <p>{language === "en" ? "The Game of Games begins-your-life, now an epic MMORPG" : "ゲームの中のゲームが始まる - あなたの人生が、今や壮大なMMORPGに"}</p>
                    <p className="text-gray-900">
                        {language === "en" ? "Zentry unites every player from countless games and paltforms, both" : ""}
                        {language === "en" ? "digital and physical, into a unified Play Economy" : "ゼントリーは、無数のゲームやプラットフォームから、デジタル・フィジカル問わず全プレイヤーを一つのプレイエコノミーに統合します"}
                    </p>
                </div>
            </div>

             <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
        </div>
    );
};

export default About
