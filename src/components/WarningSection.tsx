/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { AlertTriangle } from "lucide-react";

export default function WarningSection() {
  return (
    <section className="py-32 bg-luxury-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto border border-yellow-500/20 p-12 md:p-20 rounded-3xl relative bg-elevated-black overflow-hidden group">
          {/* Background Glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px] group-hover:bg-yellow-500/10 transition-all duration-700" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 5 }}
              className="text-yellow-500 mb-8"
            >
              <AlertTriangle size={64} strokeWidth={1.5} />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-heading font-black mb-10 tracking-tighter uppercase relative">
              Warning <span className="absolute -top-6 -right-12 font-script text-yellow-500 text-2xl lowercase rotate-12">Critical</span>
            </h2>

            <p className="text-xl md:text-2xl text-white font-medium mb-12 leading-relaxed">
              This experience is not for people looking for <span className="font-script text-yellow-500 text-2xl md:text-3xl">temporary motivation.</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left w-full mb-12">
              {[
                "Challenge your thinking",
                "Expose hidden emotions",
                "Break emotional walls",
                "Reconnect broken relationships",
                "Force you to face your true self"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4 border-l border-yellow-500/30 pl-4 py-2">
                  <span className="text-yellow-500 font-bold text-xs">!</span>
                  <span className="text-text-gray font-light text-sm uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-yellow-500 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
              But if you are ready… This may become one of the most life-changing experiences of your life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
