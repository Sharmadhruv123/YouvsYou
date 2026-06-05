import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, User, Calendar, Users, Mail, MessageSquare } from "lucide-react";

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    member: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-booking-popup', handleOpen);
    return () => window.removeEventListener('open-booking-popup', handleOpen);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, age, member, email, message } = formData;
    
    try {
      // Send to MySQL backend
      await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'popup' })
      });
    } catch (err) {
      console.error("Failed to save to database:", err);
    }

    const waMessage = `*New Inquiry - YOU v/s YOU*\n\n*Name:* ${name}\n*Age:* ${age}\n*Member:* ${member}\n*Email:* ${email}\n*Message:* ${message}`;
    
    window.open(`https://wa.me/918511363376?text=${encodeURIComponent(waMessage)}`, '_blank');
    setIsOpen(false);
    setFormData({ name: "", age: "", member: "", email: "", message: "" });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-elevated-black border border-white/10 rounded-3xl p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange/10 rounded-full blur-[80px] pointer-events-none" />

            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h3 className="text-3xl font-heading font-black text-white mb-2 uppercase">Request Booking</h3>
            <p className="text-sm text-gray-400 mb-8 font-light">Fill out the details below to join the journey.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input 
                  type="text" name="name" required placeholder="Name" 
                  value={formData.name} onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:border-orange/50 transition-colors placeholder:text-gray-600 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  <input 
                    type="text" name="age" required placeholder="Age" 
                    value={formData.age} onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:border-orange/50 transition-colors placeholder:text-gray-600 text-sm"
                  />
                </div>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  <input 
                    type="text" name="member" required placeholder="Members" 
                    value={formData.member} onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:border-orange/50 transition-colors placeholder:text-gray-600 text-sm"
                  />
                </div>
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input 
                  type="email" name="email" required placeholder="Email (Gmail)" 
                  value={formData.email} onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:border-orange/50 transition-colors placeholder:text-gray-600 text-sm"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-gray-500" size={16} />
                <textarea 
                  name="message" required placeholder="Your Message" rows={4}
                  value={formData.message} onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:border-orange/50 transition-colors placeholder:text-gray-600 text-sm resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(242, 101, 34, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 mt-4 bg-orange text-white font-black uppercase tracking-widest rounded-xl flex items-center justify-center text-xs group"
              >
                Submit <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
