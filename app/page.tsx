"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import ProductTextOverlays from "@/components/ProductTextOverlays";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const product = products[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
    // Dynamic background setting
    document.documentElement.style.setProperty("--product-gradient", product.gradient);
  }, [currentIndex, product]);

  const nextFlavor = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const prevFlavor = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <main className="relative min-h-screen selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* Orchestration */}
      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-full"
        >
          {/* Hero Scroll Section */}
          <div className="relative w-full">
            <ProductBottleScroll product={product} isActive={true} />
            <ProductTextOverlays product={product} />
          </div>

          {/* Details Section */}
          <section id="process" className="py-32 px-6 overflow-hidden relative z-10 bg-black/40 backdrop-blur-3xl border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-8"
              >
                <h2 className="text-4xl md:text-6xl font-black text-white">{product.detailsSection.title}</h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                  {product.detailsSection.description}
                </p>
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                  {product.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-sm text-gray-400 mb-1">{stat.label}</span>
                      <span className="text-xl font-bold text-white tracking-widest">{stat.val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full flex justify-center aspect-square md:aspect-[4/3] bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/10 p-12 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
                {/* Fallback illustrative div if custom image is missing. User provides them via public folders. */}
                <div
                  className="w-full h-full rounded-2xl shadow-2xl relative bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url(${product.folderPath}/ezgif-frame-060.jpg)`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
                  title={product.detailsSection.imageAlt}
                />
              </motion.div>
            </div>
          </section>

          {/* Freshness & Buy Section */}
          <section id="flavors" className="py-32 px-6 relative z-10 bg-black/60 backdrop-blur-xl border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center space-y-16">

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-6xl font-black text-white">{product.freshnessSection.title}</h2>
                <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
                  {product.freshnessSection.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-lg flex flex-col md:flex-row items-center justify-between gap-8 text-left"
              >
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{product.name}</h3>
                  <div className="flex gap-3 mb-6 flex-wrap">
                    {product.buyNowSection.processingParams.map((param, i) => (
                      <span key={i} className="text-xs font-semibold px-3 py-1 bg-white/10 rounded-full text-white/80 border border-white/10">
                        {param}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 max-w-sm mb-2">{product.buyNowSection.deliveryPromise}</p>
                  <p className="text-xs text-orange-500 font-medium">{product.buyNowSection.returnPolicy}</p>
                </div>

                <div className="flex flex-col items-end gap-6 w-full md:w-auto">
                  <div className="text-right">
                    <div className="text-5xl font-black text-white tracking-tighter">{product.buyNowSection.price}</div>
                    <div className="text-sm text-gray-400 mt-1">{product.buyNowSection.unit}</div>
                  </div>
                  <button className="w-full md:w-auto px-10 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold tracking-wide rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)]">
                    Add to Cart
                  </button>
                </div>
              </motion.div>

            </div>
          </section>

          {/* Next Flavor Transition Wrapper */}
          <section className="py-24 px-6 relative z-10 bg-black flex justify-center border-t border-white/5">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={nextFlavor}
              className="group relative overflow-hidden bg-white/5 border border-white/20 hover:border-orange-500/50 rounded-2xl px-12 py-8 transition-all hover:bg-white/10 w-full max-w-2xl"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500/10 to-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Continue the journey</span>
                <span className="text-3xl md:text-4xl font-black text-white bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-600 transition-all duration-300">
                  Next Flavor ➔
                </span>
              </div>
            </motion.button>
          </section>
        </motion.div>
      </AnimatePresence>

      <Footer />

      {/* Fixed Navigation Elements */}
      <div className="fixed top-1/2 left-4 md:left-8 -translate-y-1/2 z-50">
        <button onClick={prevFlavor} className="w-12 h-12 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center backdrop-blur-md hover:bg-white hover:text-black transition-all hover:scale-110">
          ←
        </button>
      </div>
      <div className="fixed top-1/2 right-4 md:right-8 -translate-y-1/2 z-50">
        <button onClick={nextFlavor} className="w-12 h-12 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center backdrop-blur-md hover:bg-white hover:text-black transition-all hover:scale-110">
          →
        </button>
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center p-1.5 bg-black/50 backdrop-blur-xl border border-white/20 rounded-full gap-2">
        {products.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setCurrentIndex(idx)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${currentIndex === idx
              ? "bg-white text-black shadow-lg"
              : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
          >
            {p.name}
          </button>
        ))}
      </div>
    </main>
  );
}
