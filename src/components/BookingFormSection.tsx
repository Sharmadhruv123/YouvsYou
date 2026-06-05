import { motion } from "motion/react";
import { Send, Calendar, Users, MapPin, Building, User, Target, Mail } from "lucide-react";
import React, { useState } from "react";

export default function BookingFormSection() {
  const [formData, setFormData] = useState({
    orgName: "",
    contactPerson: "",
    email: "",
    city: "",
    audienceSize: "",
    date: "",
    objective: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { orgName, contactPerson, email, city, audienceSize, date, objective } = formData;
    
    try {
      // Send to MySQL backend
      await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'form' })
      });
    } catch (err) {
      console.error("Failed to save to database:", err);
    }
    
    const message = `*New Booking Request - YOU v/s YOU*\n\n*Organization/Group Name:* ${orgName}\n*Contact Person:* ${contactPerson}\n*Email:* ${email}\n*City & Venue:* ${city}\n*Expected Audience Size:* ${audienceSize}\n*Preferred Date:* ${date}\n*Event Objective:* ${objective}`;
    
    window.open(`https://wa.me/918511363376?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="booking-form" className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-script text-orange mb-6 text-center">
              How do we book YOU v/s YOU?
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              To request a booking, please share the details below and our team will get in touch with you.
            </p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full bg-elevated-black p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Organization */}
              <div className="space-y-2 relative">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400 ml-1">Organization / Group Name</label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input 
                    type="text" 
                    name="orgName"
                    value={formData.orgName}
                    onChange={handleChange}
                    required
                    placeholder="E.g. Acme Corp" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-orange/50 transition-colors placeholder:text-gray-600"
                  />
                </div>
              </div>

              {/* Contact Person */}
              <div className="space-y-2 relative">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400 ml-1">Contact Person</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input 
                    type="text" 
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    placeholder="Full Name" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-orange/50 transition-colors placeholder:text-gray-600"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-2 relative">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="contact@example.com" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-orange/50 transition-colors placeholder:text-gray-600"
                  />
                </div>
              </div>

              {/* City & Venue */}
              <div className="space-y-2 relative">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400 ml-1">City & Venue</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Location Details" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-orange/50 transition-colors placeholder:text-gray-600"
                  />
                </div>
              </div>

              {/* Expected Audience Size */}
              <div className="space-y-2 relative">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400 ml-1">Expected Audience Size</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input 
                    type="text" 
                    name="audienceSize"
                    value={formData.audienceSize}
                    onChange={handleChange}
                    required
                    placeholder="E.g. 500+" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-orange/50 transition-colors placeholder:text-gray-600"
                  />
                </div>
              </div>

              {/* Preferred Date */}
              <div className="space-y-2 relative">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400 ml-1">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-orange/50 transition-colors text-gray-400"
                  />
                </div>
              </div>

              {/* Event Objective */}
              <div className="space-y-2 relative">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400 ml-1">Event Objective</label>
                <div className="relative">
                  <Target className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input 
                    type="text" 
                    name="objective"
                    value={formData.objective}
                    onChange={handleChange}
                    required
                    placeholder="Goal of the event" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-orange/50 transition-colors placeholder:text-gray-600"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(242, 101, 34, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 bg-orange text-white font-black uppercase tracking-[0.2em] rounded-xl flex items-center justify-center group w-full md:w-auto"
              >
                Submit Request <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
