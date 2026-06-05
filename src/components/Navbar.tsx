/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-transparent backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-heading font-bold tracking-widest text-white"
      >
        SAJAN <span className="text-orange">SHAH</span>
      </motion.div>

      <div className="hidden md:flex space-x-8 items-center">
        {["Home", "About", "The Journey", "Testimonials", "FAQ"].map((item, idx) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            className="text-xs font-sans uppercase tracking-[0.2em] text-text-gray hover:text-orange transition-colors"
          >
            {item}
          </motion.a>
        ))}
        <motion.button
          onClick={() => window.dispatchEvent(new Event('open-booking-popup'))}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="px-6 py-2 bg-orange/10 border border-orange/50 text-orange text-xs uppercase tracking-widest rounded-sm hover:bg-orange hover:text-white transition-all font-bold inline-block"
        >
          Book Now
        </motion.button>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="absolute top-20 left-0 w-full bg-black/95 p-8 flex flex-col space-y-6 md:hidden border-b border-white/10"
        >
          {["Home", "About", "The Journey", "Testimonials", "FAQ"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsOpen(false)}
              className="text-lg font-heading tracking-widest uppercase text-center text-white hover:text-orange transition-colors"
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              window.dispatchEvent(new Event('open-booking-popup'));
            }}
            className="w-full py-4 bg-orange text-white font-bold uppercase tracking-widest rounded-full text-center inline-block"
          >
            Book Experience
          </button>
        </motion.div>
      )}
    </nav>
  );
}
