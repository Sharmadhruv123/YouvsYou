/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

const stats = [
  { value: "1M+", label: "Souls Impacted" },
  { value: "500+", label: "Transformational Events" },
  { value: "20+", label: "Countries Touched" },
  { value: "15+", label: "Years of Service" }
];

import { Globe } from "lucide-react";

export default function Impact() {
  return (
    <section className="py-32 bg-rich-dark-gray border-y border-border-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-heading font-black mb-6"
          >
            IMPACT CREATED <br /> <span className="orange-gradient-text font-script text-glow text-3xl md:text-6xl">Across Millions</span>
          </motion.h2>
          <p className="text-text-gray max-w-2xl mx-auto font-light">
            Behind every number is a soul reconnected, a family healed, and a life transformed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Lives Impacted", value: "16M+", sub: "Students, Parents & Leaders" },
            { label: "Families Reconnected", value: "100K+", sub: "Healing across generations" },
            { label: "Students Inspired", value: "Millions", sub: "Redefining life vision" },
            { label: "Healing Experiences", value: "Thousands", sub: "Conducted across India" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-elevated-black border border-border-gray p-12 rounded-3xl text-center relative overflow-hidden group shadow-xl"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe size={60} />
              </div>
              <div className="text-4xl md:text-5xl font-heading font-black text-white mb-4 group-hover:text-orange transition-colors">
                {stat.value}
              </div>
              <div className="text-orange text-[10px] uppercase tracking-[0.3em] font-black mb-4">
                {stat.label}
              </div>
              <p className="text-text-gray/50 text-[9px] uppercase tracking-[0.2em] font-bold leading-tight">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center flex flex-col items-center"
        >
          <p className="text-white/30 text-[10px] uppercase tracking-[0.5em] font-black mb-8">
            Trusted by schools, organizations & communities nationwide
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(242, 101, 34, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-orange text-white font-black uppercase tracking-widest rounded-full shadow-2xl transition-all"
          >
            BE PART OF THE IMPACT
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
