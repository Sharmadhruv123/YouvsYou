/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

const scenarios = [
  {
    title: "The Silent Burden",
    desc: "Imagine sitting silently… holding emotions you never expressed for years… And suddenly… You break down into tears of relief.",
    img: "/images/The%20Silent%20Burden.jpeg"
  },
  {
    title: "The Reconnection",
    desc: "Imagine hugging your parents after years of emotional distance. Imagine forgiving yourself. Reconnecting with the REAL YOU.",
    img: "/images/The%20Reconnection.jpeg"
  },
  {
    title: "The Mental Shift",
    desc: "Imagine feeling mentally lighter after carrying emotional pressure for so long. Finally breathing without the weight of expectations.",
    img: "/images/The%20Mental%20Shift.jpeg"
  }
];

export default function ImagineSection() {
  return (
    <section className="py-32 bg-luxury-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl font-heading font-black mb-6">IMAGINE...</h2>
            <p className="text-text-gray text-xl font-script text-orange text-3xl">That is the power of YOU v/s YOU.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-glow">
          {scenarios.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative h-[600px] overflow-hidden rounded-3xl border border-border-gray shadow-2xl"
            >
              <img 
                src={item.img} 
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 brightness-50 group-hover:brightness-75"
                alt={item.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h3 className="text-2xl font-heading font-black text-white mb-4 uppercase">{item.title}</h3>
                <p className="text-text-gray group-hover:text-white transition-colors leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
