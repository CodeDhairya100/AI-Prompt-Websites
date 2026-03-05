"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 ${isScrolled ? "bg-black/40 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="flex items-center gap-3 cursor-pointer">
                {/* Abstract Lightning / Bean SVG */}
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                        fill="url(#paint0_linear)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="3"
                            y1="12"
                            x2="21"
                            y2="12"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#f97316" />
                            <stop offset="1" stopColor="#78350f" />
                        </linearGradient>
                    </defs>
                </svg>
                <span className="font-bold text-xl tracking-wide bg-gradient-to-r from-orange-500 to-amber-800 bg-clip-text text-transparent">
                    Nano Brew
                </span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
                <a href="#flavors" className="hover:text-white transition-colors">Flavors</a>
                <a href="#process" className="hover:text-white transition-colors">Process</a>
                <a href="#about" className="hover:text-white transition-colors">About</a>
            </div>

            <button className="relative group overflow-hidden rounded-full px-6 py-2.5 bg-white/10 text-white text-sm font-semibold tracking-wide border border-white/20 transition-all hover:border-orange-500/50 hover:bg-white/20">
                <span className="relative z-10">Order Now</span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
            </button>
        </motion.nav>
    );
}
