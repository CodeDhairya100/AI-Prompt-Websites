"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useSpring } from "framer-motion";
import { Product } from "@/data/products";

interface Props {
    product: Product;
    isActive: boolean;
}

export default function ProductBottleScroll({ product, isActive }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const frameCount = 200;

    // Create a scroll context for this specific [500vh] container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // 1. Preload sequence
    useEffect(() => {
        let isCancelled = false;
        const loadedImages: HTMLImageElement[] = [];

        // We load the sequence from ezgif-frame-001.jpg to ezgif-frame-200.jpg
        let loadedCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const paddedNumber = String(i).padStart(3, '0');
            img.src = `${product.folderPath}/ezgif-frame-${paddedNumber}.jpg`;
            img.onload = () => {
                if (isCancelled) return;
                loadedCount++;
                if (loadedCount === frameCount) {
                    setImages(loadedImages);
                }
            };
            loadedImages.push(img);
        }

        return () => {
            isCancelled = true;
        };
    }, [product.folderPath]);

    // 2. Render sequence onto Canvas using scroll progress
    useEffect(() => {
        if (images.length === 0 || !isActive) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const render = () => {
            // current progress 0..1
            const progress = smoothProgress.get();

            // Calculate index (1 to 120 mapped as 0 to 119 in array)
            const frameIndex = Math.min(
                frameCount - 1,
                Math.max(0, Math.floor(progress * frameCount))
            );

            const img = images[frameIndex];
            if (img && img.complete) {
                // Handle responsive canvas sizing
                const parent = canvas.parentElement;
                if (parent) {
                    canvas.width = parent.clientWidth;
                    canvas.height = parent.clientHeight;
                }

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // "object-fit: cover" math
                const hRatio = canvas.width / img.width;
                const vRatio = canvas.height / img.height;
                const ratio = Math.max(hRatio, vRatio);

                const centerShift_x = (canvas.width - img.width * ratio) / 2;
                const centerShift_y = (canvas.height - img.height * ratio) / 2;

                ctx.drawImage(
                    img,
                    0,
                    0,
                    img.width,
                    img.height,
                    centerShift_x,
                    centerShift_y,
                    img.width * ratio,
                    img.height * ratio
                );
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [images, smoothProgress, isActive]);

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full z-0 bg-black">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full opacity-100 will-change-transform"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
            </div>
        </div>
    );
}
