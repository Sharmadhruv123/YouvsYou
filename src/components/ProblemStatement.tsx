/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function ProblemStatement() {
  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-100 pointer-events-none"
        style={{ backgroundImage: "url('/images/phase.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/90 via-luxury-black/30 to-luxury-black/90 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-8 uppercase tracking-tighter">
              The Biggest Battle Is <span className="text-orange font-script text-3xl md:text-5xl ml-2">Never Outside</span>
            </h2>
            <div className="w-24 h-1 bg-orange mx-auto rounded-full mb-12 opacity-50" />
            <p className="text-text-gray max-w-2xl mx-auto font-light leading-relaxed">
              YOU v/s YOU is crafted to help you face that battle honestly, emotionally, and powerfully.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-12 w-full">
            {[
              { title: "Who You Are", desc: "The raw, unfiltered truth of your existence." },
              { title: "Who You Pretend To Be", desc: "The masks we wear to survive the world." },
              { title: "Who You Are Capable Of Becoming", desc: "The version of you waiting to be liberated." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-elevated-black border border-border-gray p-8 rounded-sm text-center flex flex-col justify-center"
              >
                <div className="text-orange text-xs uppercase tracking-[0.3em] font-bold mb-4">Phase {idx + 1}</div>
                <h3 className="text-xl font-heading font-black mb-4 text-white">{item.title}</h3>
                <p className="text-text-gray text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange/5 rounded-full blur-[150px] -z-10" />
    </section>
  );
}
