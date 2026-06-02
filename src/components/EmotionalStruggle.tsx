/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

const struggles = [
  "People smile outside but feel broken inside.",
  "Families stay together but feel emotionally disconnected.",
  "Children stop expressing.",
  "Parents stop understanding.",
  "Relationships lose emotional warmth.",
  "Stress becomes normal.",
  "Overthinking becomes permanent.",
  "Happiness becomes temporary.",
  "Life becomes mechanical."
];

export default function EmotionalStruggle() {
  return (
    <section className="py-32 bg-luxury-black relative overflow-hidden border-b border-border-gray">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-16 text-white">Sometimes...</h2>
          
          <div className="space-y-10 mb-24">
            {struggles.map((text, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-xl md:text-4xl font-serif italic text-text-gray/70 hover:text-white transition-colors cursor-default tracking-wide leading-relaxed"
              >
                {text}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="pt-12 border-t border-border-gray"
          >
            <p className="text-xl md:text-2xl font-light text-text-gray">
              And <span className="text-orange italic font-serif">slowly…</span>
            </p>
            <h3 className="text-4xl md:text-6xl font-heading font-black mt-4 text-white uppercase tracking-tighter">
              People forget who they <span className="orange-gradient-text italic font-serif">truly are.</span>
            </h3>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Subtle background texture */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
