/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Lock, Unlock } from "lucide-react";

const impactData = [
  {
    before: "Emotionally blocked",
    beforeDesc: "Carrying hidden pain, emotional heaviness, and unexpressed feelings for years.",
    after: "Emotionally free",
    afterDesc: "Release years of suppressed pain, trauma, and emotional baggage."
  },
  {
    before: "Overthinking",
    beforeDesc: "Constant mental noise, confusion, and exhausting self-doubt taking over daily life.",
    after: "Inner clarity",
    afterDesc: "Quiet the mental noise and find your true north with peace."
  },
  {
    before: "Family disconnection",
    beforeDesc: "Feeling emotionally distant from loved ones despite living together.",
    after: "Emotional bonding",
    afterDesc: "Rebuild bridges, heal distances, and restore warmth in homes."
  },
  {
    before: "Mental pressure",
    beforeDesc: "Living under stress, anxiety, and the burden of constant expectations.",
    after: "Inner peace",
    afterDesc: "Transform toxic stress into resilient, calm mental power."
  },
  {
    before: "Living mechanically",
    beforeDesc: "Following routines without truly feeling joy, presence, or purpose in life.",
    after: "Living consciously",
    afterDesc: "Stop merely existing. Start experiencing every moment fully."
  },
  {
    before: "Confused mindset",
    beforeDesc: "Feeling directionless, uncertain, and disconnected from your real path.",
    after: "Clear life vision",
    afterDesc: "Align your goals with your soul's real purpose and truth."
  }
];

export default function Transformation() {
  return (
    <section className="py-32 bg-rich-dark-gray relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black mb-6 uppercase"
          >
            The <span className="orange-gradient-text font-script text-3xl md:text-5xl lowercase">YOU v/s YOU</span> Shift
          </motion.h2>
          <p className="text-text-gray max-w-2xl mx-auto font-light">
            True growth isn't about becoming someone else. It's about letting go of the version of you that was never real.
          </p>
        </div>

        <div className="flex justify-center w-full max-w-5xl mx-auto [perspective:2000px] mt-12">
          <div className="group relative w-full min-h-[650px] lg:min-h-[600px]">
            <div className="w-full h-full relative [transform-style:preserve-3d] transition-all duration-[1200ms] ease-in-out origin-center group-hover:[transform:rotateY(-180deg)] cursor-pointer">

              {/* Front Side: ALL BEFORES */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-[#1a1a1a] rounded-3xl border border-border-gray p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col">
                <div className="text-center mb-10">
                  <Lock size={40} className="text-white/20 mx-auto mb-4" />
                  <h3 className="text-3xl md:text-4xl font-heading font-black text-text-gray tracking-widest uppercase">The Struggle</h3>
                  <p className="text-xs uppercase tracking-widest text-text-gray/50 mt-2 font-mono">Chapter 1: The Past Facts</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 px-4 md:px-8 pb-4 flex-grow">
                  {impactData.map((item, idx) => (
                    <div key={idx} className="space-y-2 group/item">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-red-500/30 group-hover/item:bg-red-500/50 transition-colors flex-shrink-0" />
                        <p className="text-lg md:text-xl font-heading font-semibold text-text-gray line-through decoration-white/20 decoration-2">
                          {item.before}
                        </p>
                      </div>
                      <p className="text-sm text-text-gray/60 font-light leading-relaxed pl-5">
                        {item.beforeDesc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center text-orange animate-pulse flex items-center justify-center text-[10px] uppercase tracking-widest font-bold">
                  Hover to Turn Page <ArrowRight size={12} className="ml-2" />
                </div>
              </div>

              {/* Back Side: ALL AFTERS */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-luxury-black rounded-3xl border border-orange/30 p-8 md:p-12 shadow-[0_20px_50px_rgba(242,101,34,0.15)] flex flex-col [transform:rotateY(180deg)] overflow-hidden">

                <div className="text-center mb-8 relative z-10">
                  <Unlock size={40} className="text-orange mx-auto mb-4 drop-shadow-[0_0_10px_rgba(242,101,34,0.4)]" />
                  <h3 className="text-3xl md:text-4xl font-heading font-black orange-gradient-text tracking-widest uppercase">The Shift</h3>
                  <p className="text-xs uppercase tracking-widest text-orange/60 mt-2 font-mono">Chapter 2: The New Reality</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 px-4 md:px-8 relative z-10 flex-grow pb-4">
                  {impactData.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-orange shadow-[0_0_10px_rgba(242,101,34,0.5)] flex-shrink-0" />
                        <p className="text-xl md:text-2xl font-heading font-black text-white/90">
                          {item.after}
                        </p>
                      </div>
                      <p className="text-sm text-text-gray font-light leading-relaxed pl-5">
                        {item.afterDesc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 bg-orange/5" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-orange/10 rounded-full blur-[100px] -z-10" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
