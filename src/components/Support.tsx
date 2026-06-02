import { motion } from "motion/react";
import { Building2, MapPin, Phone, Mail } from "lucide-react";

export default function Support() {
  return (
    <section id="support" className="py-32 bg-rich-dark-gray relative border-t border-border-gray">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange text-[10px] uppercase tracking-[0.3em] font-black block mb-4">CONNECT</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-white">Support & Offices</h2>
            <p className="text-text-gray text-lg">We are here to assist you! Get in touch with our team for support.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Office Info */}
          <div className="space-y-6">
            {/* Head Office */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl bg-elevated-black border border-border-gray hover:border-orange/30 transition-all"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="text-orange" size={20} />
                <h3 className="text-orange font-heading font-bold text-xl">Head Office</h3>
              </div>
              <p className="text-text-gray leading-relaxed text-sm">
                8 Deepawali Centre, Opp. Old High Court, Income Tax Under Bridge,<br className="hidden md:block"/>
                Ashram Road, Ahmedabad – 380014
              </p>
            </motion.div>

            {/* Branch Offices */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 rounded-3xl bg-elevated-black border border-border-gray hover:border-orange/30 transition-all"
            >
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="text-orange" size={20} />
                <h3 className="text-orange font-heading font-bold text-xl">Branch Offices</h3>
              </div>
              
              <div className="space-y-4">
                <div className="text-sm">
                  <span className="font-bold text-white">Mumbai:</span> <span className="text-text-gray">Live to Inspire, 88, 8th Floor, B Wing, Mittal Towers, Nariman Point, Mumbai – 400021</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold text-white">Delhi:</span> <span className="text-text-gray">Ahimsa Vishwa Bharti, 63/1, Old Rajinder Nagar, Near Karol Bagh Metro Station, New Delhi – 110060</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold text-white">New York:</span> <span className="text-text-gray">218 Webster Avenue, Brooklyn, New York – 11230</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold text-white">Australia:</span> <span className="text-text-gray">1A Launder Street, Hawthorn, Melbourne, Victoria – 3122</span>
                </div>
              </div>
            </motion.div>

            {/* Support Coordinators */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 rounded-3xl bg-elevated-black border border-border-gray hover:border-orange/30 transition-all"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="text-orange" size={20} />
                <h3 className="text-orange font-heading font-bold text-xl">Support Coordinators</h3>
              </div>
              <p className="text-text-gray text-sm mb-6">For any queries, booking assistance, or school bookings, call us:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {["Ritu: +91 85113 63376", "Rika: +91 94268 61925", "Mittal: +91 7801986496", "Ruthika: +91 70439 53846"].map((person, idx) => (
                  <div key={idx} className="border border-border-gray rounded-xl p-3 flex items-center space-x-3 bg-rich-dark-gray hover:border-orange/30 transition-colors">
                    <Phone size={14} className="text-text-gray" />
                    <span className="text-white text-sm font-bold">{person}</span>
                  </div>
                ))}
              </div>

              <div className="text-center pt-6 border-t border-border-gray">
                <a href="mailto:info@sajanshah.com" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-bold text-sm">
                  <Mail size={16} />
                  <span>info@sajanshah.com</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden border border-border-gray glass-card grayscale hover:grayscale-0 transition-all duration-500"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.696328329618!2d72.5684725760824!3d23.034898779165213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e845c43d78901%3A0xc0d2b7d27e268f7b!2sSajan%20Shah%20Foundation!5e0!3m2!1sen!2sin!4v1716301321045!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
