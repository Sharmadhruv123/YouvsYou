/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[100] bg-luxury-black flex flex-col items-center justify-center p-6"
        >
          {/* Background Watermark Image */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <img
              src="/images/you vs you.png"
              alt="Watermark"
              className="w-full h-full max-w-4xl object-contain object-center"
            />
            {/* Side Fades - Stronger to hide borders */}
            <div className="absolute inset-y-0 left-0 w-1/3 md:w-5/12 bg-gradient-to-r from-luxury-black via-luxury-black/95 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/3 md:w-5/12 bg-gradient-to-l from-luxury-black via-luxury-black/95 to-transparent" />
          </motion.div>

          <div className="relative overflow-hidden z-10">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-2xl md:text-4xl font-heading font-black tracking-[0.5em] text-white"
            >
              YOU <span className="text-orange">v/s</span> YOU
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="mt-4 h-[1px] bg-orange origin-left"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
            className="mt-8 text-[10px] uppercase tracking-[0.4em] text-orange/60"
          >
            A Sajan Shah Experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
