/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    title: "The Unmasking",
    desc: "A raw, honest look at the emotional layers we build to protect ourselves.",
    icon: "01",
    image: "/images/Unmasking.jpeg"
  },
  {
    title: "Emotional Detox",
    desc: "Cleansing the subconscious of limiting beliefs and past disappointments.",
    icon: "02",
    image: "/images/Emotional%20Detox.jpeg"
  },
  {
    title: "The Inner Mirror",
    desc: "Facing the self with compassion and understanding of our shadow side.",
    icon: "03",
    image: "/images/The%20Inner%20Mirror.jpeg"
  },
  {
    title: "Resurrection",
    desc: "Rebuilding a life based on truth, emotional strength, and purpose.",
    icon: "04",
    image: "/images/Resurrection.jpeg"
  }
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="the-journey" ref={containerRef} className="py-32 bg-luxury-black relative overflow-hidden">
      {/* Scroll-linked progress line */}
      <div className="absolute left-1/2 top-[15%] bottom-[5%] w-[2px] bg-white/5 hidden lg:block -translate-x-1/2">
        <motion.div
          className="absolute top-0 left-0 w-full bg-orange origin-top shadow-[0_0_15px_rgba(242,101,34,0.5)]"
          style={{ height: "100%", scaleY }}
        />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-orange tracking-[0.4em] uppercase text-[10px] font-black mb-4 block">The Narrative</span>
          <h2 className="text-4xl md:text-6xl font-heading font-black">STORYTELLING <span className="italic font-serif orange-gradient-text">THROUGH SOULS</span></h2>
        </motion.div>

        <div className="flex flex-col space-y-24 lg:space-y-0">
          {steps.map((step, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center justify-between group ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''} lg:mb-32 last:mb-0`}>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-[45%] mb-12 lg:mb-0"
              >
                <div className="text-8xl font-heading font-black text-white/5 absolute -top-12 -left-8 -z-10 group-hover:text-orange/5 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-3xl font-heading font-black mb-6 text-orange flex items-center">
                  <span className="lg:hidden w-8 h-[1px] bg-orange mr-4" />
                  {step.title}
                </h3>
                <p className="text-text-gray text-lg leading-relaxed font-light">
                  {step.desc}
                </p>
              </motion.div>

              <div className="hidden lg:flex w-12 h-12 rounded-full bg-black border border-orange/40 z-20 items-center justify-center relative shadow-[0_0_20px_rgba(242,101,34,0.1)]">
                <div className="w-2 h-2 bg-orange animate-pulse rounded-full" />
                <div className="absolute inset-0 border border-orange scale-100 opacity-20 rounded-full" />
                <div className="absolute inset-0 border border-orange scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-30 transition-all duration-700 rounded-full" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-[45%] h-[300px] rounded-sm overflow-hidden relative glass-card p-1 shadow-2xl border-orange/10"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-8">
                  <p className="text-text-gray text-[10px] uppercase tracking-widest font-bold">Chapter {step.icon}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
