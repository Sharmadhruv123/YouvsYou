/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Meditation() {
  return (
    <section className="py-32 bg-luxury-black relative overflow-hidden border-t border-border-gray">
      {/* Background Spiritual visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-orange/5 rounded-full blur-[200px]" />
        
        {/* Breathing Circle */}
        <motion.div 
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-orange/10 rounded-full"
        />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ 
            duration: 8, 
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side Text Content */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5 }}
             className="max-w-2xl relative z-20"
          >
            <div className="w-12 h-12 border border-orange/30 rounded-full mb-10 flex items-center justify-center bg-luxury-black shadow-[0_0_20px_rgba(242,101,34,0.1)]">
              <motion.div 
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-orange"
              />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 tracking-tight">
              ONE EXCLUSIVE <br className="hidden md:block" />
              <span className="font-script orange-gradient-text text-glow text-3xl md:text-5xl lowercase">meditation</span> EXPERIENCE
            </h2>
            
            <p className="text-text-gray text-lg md:text-xl font-light leading-loose mb-12">
              At the heart of YOU v/s YOU lies a specially designed guided emotional meditation. This is not ordinary meditation. <br className="hidden md:block" /> <span className="text-white font-bold uppercase tracking-widest text-xs mt-2 block">This is emotional detoxification.</span>
            </p>

            <div className="grid grid-cols-2 gap-4 mb-16">
              {[
                "Release Baggage",
                "Let go of Guilt",
                "Heal Pain",
                "Calm Chaos",
                "Remove Toxicity",
                "Find Peace",
                "Gain Clarity",
                "Deep Silence"
              ].map((benefit, idx) => (
                <div key={idx} className="bg-elevated-black border border-border-gray p-4 rounded-xl text-[9px] uppercase tracking-widest font-black text-white/40">
                  {benefit}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-12 mt-12">
              {[
                { label: "Breathe the Fact", duration: "4s" },
                { label: "Accept the Battle", duration: "4s" },
                { label: "Find the Peace", duration: "8s" }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.2 }}
                  className="flex flex-col items-start"
                >
                  <div className="text-white font-heading font-black text-3xl mb-2">{step.duration}</div>
                  <div className="text-orange uppercase tracking-[0.3em] text-[9px] font-bold">{step.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Side Image Space */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
      
      {/* Right Side Absolute Background Image */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0 opacity-40 lg:opacity-70 pointer-events-none overflow-hidden">
        {/* Fade from the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/60 to-transparent z-10" />
        {/* Fades on top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black z-10" />
        <img 
          src="/images/meditation.jpg" 
          alt="Meditation" 
          className="w-full h-full object-cover object-left" 
        />
      </div>

      {/* Floating Light Rays */}
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-orange/10 to-transparent blur-sm" />
      <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent blur-sm" />
    </section>
  );
}
