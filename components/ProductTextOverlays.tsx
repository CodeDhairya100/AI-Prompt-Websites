"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Product } from "@/data/products";

export default function ProductTextOverlays({ product }: { product: Product }) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Section 1: Intro (fades out as we scroll down)
    const o1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

    // Section 2: Middle phase (fades in, stays, fades out)
    const o2 = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.55], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.6], [50, 0, 0, -50]);

    // Section 3: Third phase
    const o3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.9], [50, 0, 0, -50]);

    // Section 4: Outro phase (appears at the end of the scroll)
    const o4 = useTransform(scrollYProgress, [0.85, 0.95, 1], [0, 1, 1]);
    const y4 = useTransform(scrollYProgress, [0.85, 0.95, 1], [50, 0, 0]);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-6">

                {/* Section 1 */}
                <motion.div
                    style={{ opacity: o1, y: y1 }}
                    className="absolute text-center max-w-4xl mx-auto flex flex-col gap-4"
                >
                    <h1 className="text-6xl md:text-8xl font-black tracking-tight drop-shadow-2xl text-white">
                        {product.section1.title}
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-200 font-medium drop-shadow-xl">
                        {product.section1.subtitle}
                    </p>
                </motion.div>

                {/* Section 2 */}
                <motion.div
                    style={{ opacity: o2, y: y2 }}
                    className="absolute text-center max-w-4xl mx-auto flex flex-col gap-4"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight drop-shadow-2xl text-white">
                        {product.section2.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-200 mt-2 font-light max-w-2xl mx-auto drop-shadow-xl">
                        {product.section2.subtitle}
                    </p>
                </motion.div>

                {/* Section 3 */}
                <motion.div
                    style={{ opacity: o3, y: y3 }}
                    className="absolute text-center max-w-4xl mx-auto flex flex-col gap-4"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight drop-shadow-2xl text-white">
                        {product.section3.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-200 mt-2 font-light max-w-2xl mx-auto drop-shadow-xl">
                        {product.section3.subtitle}
                    </p>
                </motion.div>

                {/* Section 4 */}
                <motion.div
                    style={{ opacity: o4, y: y4 }}
                    className="absolute text-center max-w-4xl mx-auto flex flex-col gap-4"
                >
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tight drop-shadow-2xl text-white bg-clip-text">
                        {product.section4.title}
                    </h2>
                    {product.section4.subtitle && (
                        <p className="text-xl md:text-2xl text-gray-200 mt-2 font-light drop-shadow-xl">
                            {product.section4.subtitle}
                        </p>
                    )}
                </motion.div>

            </div>
        </div>
    );
}
