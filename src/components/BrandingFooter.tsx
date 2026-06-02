/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function BrandingFooter() {
  return (
    <section className="py-32 bg-luxury-black relative overflow-hidden text-center border-t border-border-gray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-8xl font-heading font-black mb-12 flex items-center justify-center tracking-tighter">
            YOU <span className="font-script orange-gradient-text mx-4 text-glow lowercase">v/s</span> YOU
          </h2>
          
          <p className="text-text-gray text-lg md:text-2xl max-w-3xl mx-auto mb-20 font-light leading-relaxed">
            A premium transformational experience by Sajan Shah. This is not just a motivational program. <span className="text-white font-medium">This is an emotional awakening.</span>
          </p>

          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {["HEAL", "TRANSFORM", "RECONNECT", "AWAKEN"].map((word, idx) => (
              <motion.div
                key={word}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="text-[10px] md:text-xs font-black tracking-[0.5em] text-text-gray/40 hover:text-orange transition-colors cursor-default"
              >
                {word}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-orange/5 rounded-full blur-[150px] -z-10" />
    </section>
  );
}
