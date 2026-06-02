/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Parent Participant",
    role: "Family Attendee",
    content: "I came for motivation… but I walked out emotionally healed."
  },
  {
    name: "Family Attendee",
    role: "Community Member",
    content: "After this session, our family communication completely changed. The distance just vanished."
  },
  {
    name: "Student Participant",
    role: "University Student",
    content: "This was not a seminar. It felt like a mirror to my life. I finally know who I am."
  },
  {
    name: "Corporate Professional",
    role: "Strategy Lead",
    content: "I cried, laughed, reflected, and healed in just 3 hours. It's the most high-impact investment I've made in myself."
  },
  {
    name: "Young Entrepreneur",
    role: "Startup Founder",
    content: "For years I chased success but ignored myself. This session helped me reconnect with the person behind the ambition."
  },
  {
    name: "Homemaker & Mother",
    role: "Life Participant",
    content: "I entered carrying silent pain and emotional exhaustion. I left feeling lighter, stronger, and finally understood."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-rich-dark-gray relative border-y border-border-gray">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
              VOICES OF <span className="orange-gradient-text font-script text-3xl md:text-5xl lowercase">Liberation</span>
            </h2>
            <p className="text-text-gray">Real echoes from souls who stopped looking for answers outside and started finding them inside.</p>
          </motion.div>

          <div className="hidden md:block">
            <div className="w-16 h-16 rounded-2xl border border-orange/20 flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity cursor-pointer">
              <Quote className="text-orange" size={24} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-3xl relative group bg-elevated-black shadow-2xl"
            >
              <Quote className="text-orange/10 absolute top-8 right-8 group-hover:text-orange/20 transition-colors" size={32} />

              <div className="flex items-center space-x-4 mb-8">
                <div>
                  <h4 className="font-heading font-black text-white tracking-tight uppercase text-sm">{t.name}</h4>
                  <p className="text-orange text-[9px] uppercase tracking-[0.2em] font-bold">{t.role}</p>
                </div>
              </div>

              <p className="text-text-gray leading-relaxed font-light italic text-sm">
                "{t.content}"
              </p>

              {/* <div className="mt-8 pt-8 border-t border-border-gray flex items-center text-[9px] uppercase tracking-[0.3em] text-text-gray/50 font-bold">
                FACT: SUSTAINED EMOTIONAL CHANGE
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
