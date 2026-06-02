/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Users, GraduationCap, Heart, Briefcase, School, UserCircle } from "lucide-react";

const targetGroups = [
  { name: "Families", icon: <Users size={24} />, image: "/images/Families.png" },
  { name: "Students", icon: <GraduationCap size={24} />, image: "/images/Students.png" },
  { name: "Parents", icon: <UserCircle size={24} />, image: "/images/Parents.png" },
  { name: "Couples", icon: <Heart size={24} />, image: "/images/Couples.png" },
  { name: "Corporate Teams", icon: <Briefcase size={24} />, image: "/images/Corporate Teams.jpg" },
  { name: "Teachers", icon: <Users size={24} />, image: "/images/teachers.jpg" },
  { name: "Educational Institutions", icon: <School size={24} />, image: "/images/educational institutions.jpg" },
  { name: "Communities", icon: <Users size={24} />, image: "/images/Communities.png" }
];

export default function TargetAudience() {
  return (
    <section className="py-32 bg-rich-dark-gray border-y border-border-gray relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-black mb-8"
          >
            WHO IS THIS <span className="orange-gradient-text italic font-serif">PROGRAM FOR?</span>
          </motion.h2>
          <p className="text-text-gray max-w-2xl mx-auto font-light">
            An experience designed for every soul seeking emotional alignment and deep transformation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {targetGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-luxury-black border border-border-gray w-full aspect-square rounded-full flex flex-col items-center justify-center text-center group hover:border-orange/30 transition-all p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                <img src={group.image} alt={group.name} className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10 text-white/20 group-hover:text-orange transition-colors mb-4 group-hover:scale-110 transition-transform bg-black/40 p-2 rounded-full backdrop-blur-sm">
                {group.icon}
              </div>
              <h3 className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-white/70 group-hover:text-white max-w-[80%] bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                {group.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
