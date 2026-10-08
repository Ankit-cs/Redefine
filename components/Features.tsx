"use client";
import { useState, useRef, MouseEvent, ReactNode } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }: { children: ReactNode, className?: string }): any => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: any) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current?.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon, jpTitle, jpDescription }: any) => {
  const { language } = useLanguage();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: any) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border border-white/20 relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">{language === "en" ? "coming soon" : "近日公開"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => {
  const { language } = useLanguage();
  return (
    <section className="bg-black pb-52" data-animate="fade-up">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            {language === "en" ? "Into the Metagame Layer" : "メタゲームレイヤーへ"}
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            {language === "en" ? "Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world." : "あなたの世界に重なる、活気に満ちた製品群が融合する、豊かで拡大し続ける宇宙に没入してください。"}
          </p>
        </div>

        <BentoTilt className="border border-white/20 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]" data-animate="fade-up" data-delay="0.2">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              language === "en" ? (
                <>radia<b>n</b>t</>
              ) : (
                <>ラディ<b>ア</b>ント</>
              )
            }
            description={language === "en" ? "A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure." : "Web2とWeb3のゲームでのアクティビティをやりがいのある冒険に変える、クロスプラットフォームのメタゲームアプリ。"}
            isComingSoon
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="relative border border-white/20 col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 md:col-span-1 md:row-span-2" data-animate="fade-left" data-delay="0.3">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                language === "en" ? (
                  <>zig<b>m</b>a</>
                ) : (
                  <>ジグ<b>マ</b></>
                )
              }
              description={language === "en" ? "An anime and gaming-inspired NFT collection - the IP primed for expansion." : "アニメとゲームにインスパイアされたNFTコレクション - 拡張に備えたIP。"}
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="relative border border-white/20 col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 ms-32 md:col-span-1 md:ms-0" data-animate="fade-right" data-delay="0.4">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                language === "en" ? (
                  <>n<b>e</b>xus</>
                ) : (
                  <>ネク<b>サ</b>ス</>
                )
              }
              description={language === "en" ? "A gamified social hub, adding a new dimension of play to social interaction for Web3 communities." : "Web3コミュニティの社会的交流に新しいプレイの次元を追加する、ゲーミフィケーションされたソーシャルハブ。"}
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="relative border border-white/20 col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out me-14 md:col-span-1 md:me-0" data-animate="fade-left" data-delay="0.5">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                language === "en" ? (
                  <>az<b>u</b>l</>
                ) : (
                  <>アズ<b>ー</b>ル</>
                )
              }
              description={language === "en" ? "A cross-world AI Agent - elevating your gameplay to be more fun and productive." : "クロスワールドAIエージェント - ゲームプレイをより楽しく生産的なものに引き上げます。"}
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out" data-animate="fade-up" data-delay="0.6">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                {language === "en" ? (
                  <>M<b>o</b>re co<b>m</b>ing s<b>o</b>on.</>
                ) : (
                  <>さらに<b>多</b>くが間<b>も</b>なく登場しま<b>す</b>。</>
                )}
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>

          <BentoTilt className="relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out" data-animate="fade-up" data-delay="0.7">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;

