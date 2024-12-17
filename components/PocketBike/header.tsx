"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useAnimate, motion } from "framer-motion"; // AnimationScopeを削除
import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import Link from "next/link";

export default function Header() {
  return <GlassNavigation />;
}

const GlassNavigation = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [scope, animate] = useAnimate();
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = ({ offsetX, offsetY, target }: MouseEvent) => {
    // @ts-ignore
    const isNavElement = target.classList?.contains("glass-nav");
    if (isNavElement) {
      setHovered(true);

      const top = offsetY + "px";
      const left = offsetX + "px";

      animate(scope.current, { top, left }, { duration: 0 });
    } else {
      setHovered(false);
    }
  };

  useEffect(() => {
    navRef.current?.addEventListener("mousemove", handleMouseMove);
    return () =>
      navRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <nav
      ref={navRef}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: hovered ? "none" : "auto",
      }}
      className="glass-nav fixed left-2 right-2 top-2 sm:left-4 sm:right-4 sm:top-4 z-50 mx-auto max-w-6xl overflow-hidden border-[1px] border-purple-300/20 bg-gradient-to-br from-purple-400/20 to-purple-600/20 backdrop-blur rounded-xl sm:rounded-2xl shadow-lg"
    >
      <div className="glass-nav flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 lg:py-6 bg-gradient-to-r from-purple-400/10 to-purple-600/10 relative">
        <Cursor hovered={hovered} scope={scope} />

        <Links />

        <Logo />

        <Buttons setMenuOpen={setMenuOpen} />
      </div>

      <MobileMenu menuOpen={menuOpen} />
    </nav>
  );
};

const Cursor = ({
  hovered,
  scope,
}: {
  hovered: boolean;
  scope: React.RefObject<HTMLElement>; // AnimationScopeから変更
}) => {
  return (
    <motion.span
      initial={false}
      animate={{
        opacity: hovered ? 1 : 0,
        transform: `scale(${
          hovered ? 1 : 0
        }) translateX(-50%) translateY(-50%)`,
      }}
      transition={{ duration: 0.15 }}
      ref={scope}
      className="pointer-events-none absolute z-0 grid h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[50px] md:w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-lg sm:text-xl md:text-2xl"
    >
      <FiArrowUpRight className="text-white" />
    </motion.span>
  );
};

const Logo = () => (
  <Link
    href="/"
    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-2xl sm:text-3xl md:text-4xl font-black text-white mix-blend-overlay whitespace-nowrap"
  >
    PocketBike
  </Link>
);

const Links = () => (
  <div className="hidden md:flex items-center gap-1 lg:gap-2">
    <GlassLink text="料金" href="#pricing" />
    <GlassLink text="予約/Q&A" href="#reservation" />
  </div>
);

const GlassLink = ({ text, href }: { text: string; href: string }) => (
  <Link
    href={href}
    className="group relative scale-100 overflow-hidden rounded-lg px-2 lg:px-4 py-1 lg:py-2 transition-transform hover:scale-105 active:scale-95 text-sm lg:text-base"
    onClick={(e) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
      {text}
    </span>
    <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
  </Link>
);

const TextLink = ({ text, href }: { text: string; href: string }) => (
  <Link
    href={href}
    className="text-white/90 transition-colors hover:text-white text-sm sm:text-base"
    onClick={(e) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    {text}
  </Link>
);

const Buttons = ({
  setMenuOpen,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => (
  <div className="flex items-center gap-2 sm:gap-4 ml-auto">
    <div className="hidden md:block">
      <SignInButton />
    </div>

    <a
      href="https://line.me/R/ti/p/@273smptm"
      className="relative scale-100 overflow-hidden rounded-lg bg-gradient-to-br from-purple-500/50 to-purple-700/50 px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm md:text-base font-medium text-white transition-transform hover:scale-105 active:scale-95"
    >
      予約
    </a>

    <button
      onClick={() => setMenuOpen((pv) => !pv)}
      className="ml-1 sm:ml-2 block scale-100 text-xl sm:text-2xl md:text-3xl text-white/90 transition-all hover:scale-105 hover:text-white active:scale-95 md:hidden"
    >
      <FiMenu />
    </button>
  </div>
);

const SignInButton = () => (
  <a
    href="tel:070-2164-3618"
    className="group relative scale-100 overflow-hidden rounded-lg px-2 lg:px-4 py-1 lg:py-2 transition-transform hover:scale-105 active:scale-95 text-sm lg:text-base"
  >
    <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
      070-2164-3618
    </span>
    <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
  </a>
);

const MobileMenu = ({ menuOpen }: { menuOpen: boolean }) => {
  const [ref, { height }] = useMeasure();
  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? height : "0px",
      }}
      className="block overflow-hidden md:hidden"
    >
      <div
        ref={ref}
        className="flex flex-col sm:flex-row items-center justify-between px-4 py-2 sm:py-3"
      >
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-2 sm:mb-0">
          <TextLink text="料金" href="#pricing" />
          <TextLink text="予約" href="#reservation" />
          <TextLink text="Q＆A" href="#faq" />
        </div>
        <SignInButton />
      </div>
    </motion.div>
  );
};
