/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Droplets, 
  Smile, 
  Music, 
  Wind, 
  Heart, 
  Flame, 
  User, 
  Zap,
  HandMetal,
  Sparkles
} from "lucide-react";

const activities = [
  { label: "Cry from the heart", icon: <Droplets size={24} /> },
  { label: "Laugh uncontrollably", icon: <Smile size={24} /> },
  { label: "Dance with freedom", icon: <Music size={24} /> },
  { label: "Clap with energy", icon: <HandMetal size={24} /> },
  { label: "Release emotional pressure", icon: <Wind size={24} /> },
  { label: "Heal inner wounds", icon: <Heart size={24} /> },
  { label: "Feel deeply motivated", icon: <Flame size={24} /> },
  { label: "Reconnect with yourself", icon: <User size={24} /> },
  { label: "Experience breakthroughs", icon: <Zap size={24} /> },
  { label: "Transform your life", icon: <Sparkles size={24} /> }
];

export default function ExperienceDetails() {
  return (
    <section className="py-32 bg-rich-dark-gray relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-100 pointer-events-none"
        style={{ backgroundImage: "url('/images/SEMINAR bg.png')" }}
      />
      <div className="absolute inset-0 bg-luxury-black/60 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-black mb-6"
          >
            THIS IS NOT A SEMINAR… <br />
            <span className="orange-gradient-text font-script text-3xl md:text-5xl lowercase">this is a deep emotional experience</span>
          </motion.h2>
          <p className="text-text-gray max-w-2xl mx-auto font-light">
            Throughout this powerful 3-hour journey, you will not just listen. You will feel. You will awaken.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {activities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-luxury-black border border-border-gray p-6 rounded-2xl text-center group cursor-default"
            >
              <div className="text-white/40 mb-4 group-hover:scale-125 group-hover:text-orange transition-all duration-500 flex justify-center">{item.icon}</div>
              <p className="text-[10px] uppercase tracking-widest font-black text-white/50 group-hover:text-orange transition-colors">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-text-gray/40 text-xs uppercase tracking-[0.4em] font-black italic">
            Every moment is intentionally designed to challenge your thinking.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
