/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Calendar, Star } from "lucide-react";

export default function Booking() {
  return (
    <section id="booking" className="py-32 relative overflow-hidden bg-white">
      {/* Background Watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <img
          src="/images/logo.png"
          alt="Watermark"
          className="w-full h-full object-contain p-4 md:p-12 opacity-10 mix-blend-multiply pointer-events-none"
        />
        {/* Strong wash to dull the background */}
        <div className="absolute inset-0 bg-white/70 pointer-events-none" />
        {/* Top fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto rounded-sm p-12 md:p-24 overflow-hidden relative bg-transparent">
          {/* Glowing Accents */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange/5 rounded-full blur-[100px]" />

          <div className="flex flex-col items-center text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-heading font-black mb-8 leading-[0.9] text-black"
            >
              YOU HAVE FOUGHT THE WORLD ENOUGH… <br />
              <span className="text-orange font-script text-2xl md:text-5xl block mt-4">Now it’s time to win the battle within.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 text-lg md:text-xl max-w-3xl mb-16 leading-relaxed font-light"
            >
              This premium transformational experience is arranged exclusively on special request for organizations, institutions, communities, and private groups.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mb-16">
              {[
                "Organization / Group Name",
                "Contact Person",
                "City & Venue",
                "Expected Audience Size",
                "Preferred Date",
                "Purpose Of The Event"
              ].map((field, idx) => (
                <div key={idx} className="flex items-center space-x-4 border border-gray-200 p-4 rounded-xl bg-gray-50/80 group hover:border-orange/30 transition-all">
                  <div className="w-1 h-1 bg-orange rounded-full" />
                  <span className="text-[10px] uppercase tracking-widest font-black text-gray-500">{field}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 w-full md:w-auto">
              <motion.button
                onClick={() => window.dispatchEvent(new Event('open-booking-popup'))}
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(242, 101, 34, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-16 py-6 bg-orange text-white font-black uppercase tracking-[0.3em] rounded-full flex items-center justify-center group text-sm"
              >
                REQUEST BOOKING <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={18} />
              </motion.button>

              <div className="flex flex-col items-center md:items-start text-gray-500 gap-3">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-orange" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black">Upcoming Transformations</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {["July 2026", "Sep 2026", "Nov 2026"].map((date, i) => (
                    <span key={i} className="px-3 py-1.5 border border-gray-200 rounded-md text-[9px] font-bold uppercase tracking-widest bg-gray-50/80 hover:border-orange/30 transition-colors shadow-sm">
                      {date}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-20 pt-12 border-t border-gray-200 w-full flex flex-wrap justify-center gap-12 md:gap-16 opacity-60 hover:opacity-100 transition-all text-black">
              {[
                { highlight: "TATA", rest: "Chemicals Limited" },
                { highlight: "TEDx", rest: "" },
                { highlight: "PARLIAMENT", rest: "of the World's Religions" },
                { highlight: "KHUSHI", rest: "Ambient Media Solutions" },
                { highlight: "ZYDUS", rest: "Hospitals" }
              ].map((brand, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center">
                  <span className="font-heading font-black text-lg md:text-xl tracking-[0.2em]">{brand.highlight}</span>
                  {brand.rest && (
                    <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-500 font-bold mt-1">
                      {brand.rest}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
