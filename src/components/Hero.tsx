/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen py-32 w-full flex items-center justify-center overflow-hidden bg-luxury-black">
      {/* Background Image + Animated Elements */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-rich-dark-gray/80 via-luxury-black/60 to-elevated-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(242,101,34,0.03),transparent_70%)]" />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange/10 blur-xl"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              width: Math.random() * 80 + 30,
              height: Math.random() * 80 + 30
            }}
            animate={{
              y: ["-10%", "110%"],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p 
          initial={{ opacity: 0, tracking: "0.1em" }}
          animate={{ opacity: 1, tracking: "0.4em" }}
          transition={{ duration: 1.5 }}
          className="text-orange uppercase text-[10px] md:text-xs font-sans mb-8 font-black"
        >
          A Once-In-A-Lifetime Transformational Experience
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="text-5xl md:text-8xl font-heading font-black tracking-tight mb-8 leading-[0.95] max-w-6xl mx-auto"
        >
          STOP FIGHTING THE WORLD… <br />
          <span className="text-glow orange-gradient-text font-script text-4xl md:text-7xl block mt-4">When the Real Battle is Within You.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="text-white text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
        >
          This is not just a motivational program. <br className="hidden md:block" />
          <span className="text-orange font-script text-2xl md:text-4xl">This is an emotional awakening.</span>
        </motion.p>

        {/* Animated Process Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 mb-20 w-full max-w-3xl mx-auto relative flex items-center justify-between text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-text-gray/40"
        >
          <div className="relative z-10 px-4 bg-luxury-black">HEAL</div>
          <div className="relative z-10 px-4 bg-luxury-black">TRANSFORM</div>
          <div className="relative z-10 px-4 bg-luxury-black">RECONNECT</div>
          
          <motion.div 
            className="relative z-10 px-4 bg-luxury-black"
            initial={{ color: "rgba(156, 163, 175, 0.4)", textShadow: "0 0 0px transparent" }}
            animate={{ 
              color: ["rgba(156, 163, 175, 0.4)", "rgba(242,101,34,1)", "rgba(242,101,34,0.8)", "rgba(156, 163, 175, 0.4)"],
              textShadow: ["0 0 0px transparent", "0 0 20px rgba(242,101,34,0.8)", "0 0 10px rgba(242,101,34,0.4)", "0 0 0px transparent"]
            }}
            transition={{ duration: 2.5, delay: 2.3, repeat: Infinity, repeatDelay: 2.5 }}
          >
            AWAKEN
          </motion.div>

          {/* Background Track */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 z-0" />
          
          {/* Traveling Lightning Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 z-0 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full w-[25%] bg-gradient-to-r from-transparent via-orange to-transparent shadow-[0_0_15px_rgba(242,101,34,1)]"
              initial={{ left: "-25%" }}
              animate={{ left: "100%" }}
              transition={{
                duration: 1.5,
                ease: "easeIn",
                delay: 1,
                repeat: Infinity,
                repeatDelay: 3.5
              }}
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(242, 101, 34, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-orange text-white font-black uppercase tracking-widest rounded-full flex items-center shadow-2xl transition-all"
          >
            JOIN THE JOURNEY
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 border border-border-gray text-white font-black uppercase tracking-widest rounded-full flex items-center transition-all"
          >
            <Play className="mr-3 fill-current text-orange" size={18} />
            WATCH THE FILM
          </motion.button>
        </motion.div>
      </div>

      {/* Hero Foot Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 cinematic-overlay" />
    </section>
  );
}
