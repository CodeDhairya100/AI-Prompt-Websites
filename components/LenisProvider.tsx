"use client";

import { ReactLenis } from '@studio-freight/react-lenis';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
            {children as any}
        </ReactLenis>
    );
}
