/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What exactly is YOU v/s YOU?",
    a: "YOU v/s YOU is a powerful 3-hour transformational experience designed to help individuals reconnect with themselves, release emotional baggage, gain clarity, strengthen relationships, and experience a deeper understanding of life through reality-based insights, interactive experiences, and a guided meditation journey."
  },
  {
    q: "Is this a motivational seminar?",
    a: "No. While motivation is a part of the experience, YOU v/s YOU goes far beyond motivation. It is an emotional, introspective, and transformational journey designed to create lasting inner shifts rather than temporary excitement."
  },
  {
    q: "Who should attend this program?",
    a: "This program is ideal for: Families, Parents, Students, Teachers, Couples, Corporate Teams, Educational Institutions, Community Groups, Youth Organizations — and anyone seeking personal growth and emotional clarity."
  },
  {
    q: "What makes YOU v/s YOU different from other motivational programs?",
    a: "Most motivational programs focus on external success. YOU v/s YOU focuses on inner transformation. Participants experience emotional breakthroughs, self-reflection, relationship healing, life clarity, and a specially designed guided meditation that helps release accumulated emotional stress and negativity."
  },
  {
    q: "What can participants expect during the session?",
    a: "Participants may experience deep self-reflection, powerful life realizations, emotional healing moments, interactive activities, guided meditation, laughter and celebration, emotional breakthroughs, and renewed motivation and clarity. Every session is designed to be engaging, emotional, inspiring, and transformational."
  },
  {
    q: "Is the program suitable for families attending together?",
    a: "Absolutely. In fact, families often experience the greatest transformation because the program helps improve understanding, communication, emotional connection, and mutual respect between generations."
  },
  {
    q: "Will there be meditation in the program?",
    a: "Yes. One of the highlights of YOU v/s YOU is a specially designed emotional meditation experience that helps participants relax, release emotional burdens, and reconnect with their inner peace."
  },
  {
    q: "Is the program religious or spiritual?",
    a: "No. The program is designed for people from all backgrounds and beliefs. The focus is on human emotions, personal growth, relationships, self-awareness, and emotional well-being."
  },
  {
    q: "How long is the program?",
    a: "The standard duration is approximately 3 hours. However, customization may be possible depending on the audience type and event requirements."
  },
  {
    q: "Can schools, colleges, organizations, or communities book this program?",
    a: "Yes. YOU v/s YOU is available exclusively on request and can be organized for Schools, Colleges, Universities, Corporate Organizations, Associations, NGOs, Communities, Leadership Groups, and Private Events."
  },
  {
    q: "Is the content customized for different audiences?",
    a: "Yes. The session can be customized based on the audience profile, age group, event objectives, and organizational requirements."
  },
  {
    q: "What is the ideal audience size?",
    a: "The program can be conducted for small groups as well as large audiences. The format can be adapted based on the venue and event objectives."
  },
  {
    q: "Is this program available online?",
    a: "The most impactful version of YOU v/s YOU is conducted in person because emotional engagement and audience interaction are key elements of the experience. Online formats may be considered on special request."
  },
  {
    q: "How far in advance should we book?",
    a: "Since the program is conducted exclusively on request and dates are limited, early booking is strongly recommended to secure preferred dates."
  },
  {
    q: "How do we book YOU v/s YOU?",
    a: "To request a booking, please share: Organization / Group Name, Contact Person, City & Venue, Expected Audience Size, Preferred Date, and Event Objective. Our team will connect with you to discuss customization and availability."
  },
  {
    q: "What transformation can participants expect after attending?",
    a: "Participants commonly report: Greater emotional clarity, Reduced mental stress, Improved relationships, Better communication with family members, Stronger self-awareness, Renewed life vision, Increased inner peace, and Higher motivation to live consciously and purposefully."
  },
  {
    q: "Why is it called YOU v/s YOU?",
    a: "Because the greatest battle in life is rarely with circumstances, people, or situations. The real battle is between your fears and your potential, your excuses and your dreams, your current self and your best self. YOU v/s YOU helps participants win that battle from within."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section 
      id="faq" 
      className="py-32 relative border-t border-border-gray overflow-hidden bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/FAQ.jpeg')" }}
    >
      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-luxury-black/85 z-0" />
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange/5 rounded-full blur-[200px] z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-orange text-[10px] uppercase tracking-[0.3em] font-black block mb-4">CLARITY</span>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 leading-tight">
            FREQUENTLY ASKED <br />
            <span className="orange-gradient-text font-script text-3xl md:text-5xl lowercase">Questions</span>
          </h2>
          <p className="text-text-gray text-lg font-light leading-relaxed">
            Everything you need to know before taking the most important step — the one within.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-md ${
                isOpen
                  ? "border-orange/40 bg-elevated-black/80 shadow-[0_0_30px_rgba(242,101,34,0.08)]"
                  : "border-border-gray bg-elevated-black/60 hover:border-orange/20"
              }`}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between px-8 py-6 text-left group"
              >
                <div className="flex items-center space-x-5 pr-6">
                  <span className={`text-[10px] font-black tracking-widest shrink-0 transition-colors ${isOpen ? "text-orange" : "text-text-gray/40"}`}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className={`font-heading font-black text-sm md:text-base uppercase tracking-wide transition-colors ${isOpen ? "text-white" : "text-text-gray group-hover:text-white"}`}>
                    {faq.q}
                  </span>
                </div>
                <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                  isOpen ? "border-orange bg-orange/10 text-orange rotate-0" : "border-border-gray text-text-gray group-hover:border-orange/40"
                }`}>
                  {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 pl-[4.5rem]">
                      <div className="border-t border-border-gray pt-6">
                        <p className="text-text-gray leading-relaxed font-light text-sm md:text-base">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
