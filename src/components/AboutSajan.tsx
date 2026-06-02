/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function AboutSajan() {
  return (
    <section id="about" className="py-32 bg-luxury-black relative overflow-hidden border-t border-border-gray">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-10"
          >
            <div>
              <span className="text-orange tracking-[0.4em] uppercase text-[10px] font-black mb-6 block">The Visionary</span>
              <h2 className="text-4xl md:text-6xl font-heading font-black mb-10 leading-tight">
                CRAFTED BY <br /> <span className="orange-gradient-text font-script text-3xl md:text-6xl">SAJAN SHAH</span>
              </h2>

              <p className="text-text-gray text-lg md:text-xl font-light leading-relaxed mb-10">
                India’s Leading Motivational Speaker and Speaker at the World Religion Parliament — Sajan Shah has designed this transformational experience from 16 years of deep human understanding after impacting more than <span className="text-white font-bold text-glow">16 Million+ lives</span> across students, parents, teachers, professionals, and families.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                {[
                  "Author of 8 Books",
                  "3 Times TEDx Speaker",
                  "Founder of United First",
                  "Creator of Multiple Programs",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center space-x-4 border-b border-border-gray py-4 group"
                  >
                    <div className="w-1.5 h-1.5 bg-orange group-hover:scale-150 transition-transform" />
                    <span className="text-[10px] uppercase tracking-widest font-black text-white/70">{item}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-text-gray/60 text-sm font-light leading-relaxed italic border-l-2 border-orange/30 pl-6 mb-12">
                Known for his emotional, neuroscience-backed, and life-changing sessions, YOU v/s YOU is one of his most emotionally immersive and transformational experiences ever created.
              </p>

              <motion.button
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-orange group"
              >
                <span className="text-xs font-black uppercase tracking-[0.3em]">Full Professional Journey</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-border-gray/50 shadow-2xl group">
              <img
                src="/images/sajansir .png"
                alt="Sajan Shah Profile"
                className="w-full h-full object-cover filter contrast-125 brightness-90 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-60" />
            </div>

            {/* Quick Stats Overlay */}
            <div className="absolute -bottom-10 -left-10 md:-left-20 bg-luxury-black border border-border-gray p-8 rounded-2xl shadow-2xl z-20 hidden md:block">
              <div className="flex flex-col space-y-8">
                <div className="flex items-center space-x-6">
                  <span className="text-4xl font-heading font-black orange-gradient-text">16M+</span>
                  <span className="text-[9px] uppercase tracking-[0.3em] font-black text-text-gray leading-tight">Lives <br /> Impacted</span>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="text-4xl font-heading font-black orange-gradient-text">16Y+</span>
                  <span className="text-[9px] uppercase tracking-[0.3em] font-black text-text-gray leading-tight">Deep <br /> Experience</span>
                </div>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -z-10 -top-20 -right-20 w-80 h-80 bg-orange/5 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
