"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-44 overflow-hidden min-h-screen bg-black">
      
      {/* Background Video Layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Subtle Overlay to ensure text pops */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      {/* Content Layer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl"
      >
        {/* Headline: Uses tracking-tighter and leading-tight to match the tight spacing in the image */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] text-white">
          The AI layer that brings <br />
          {/* "clarity" uses font-light and italic for that specific contrast */}
          <span className="italic font-light text-white/90">clarity</span> to complexity.
        </h1>

        {/* Subtext: Font size lowered and weight set to light */}
        <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
          Our platform integrates seamlessly into your stack to deliver 
          real-time understanding, not just predictions.
        </p>

        {/* Buttons: Clean black and white design */}
        <div className="mt-12 flex justify-center gap-4">
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold text-sm hover:bg-gray-200 transition-all active:scale-95">
            Get started
          </button>
          <button className="bg-[#111111] border border-white/10 px-8 py-3 rounded-full text-white text-sm font-medium hover:bg-white/5 transition-all active:scale-95">
            Learn more
          </button>
        </div>
      </motion.div>

    </section>
  );
}