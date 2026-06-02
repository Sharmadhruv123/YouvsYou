/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from 'react';
import LegalModal from './LegalModal';
import { TermsContent, PrivacyContent, TermsOfServiceContent } from './LegalContent';
import { Instagram, Twitter, Youtube, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'Terms' | 'Privacy' | 'TermsOfService' | null>(null);

  const handleLinkClick = (e: React.MouseEvent, item: string) => {
    e.preventDefault();
    if (item === 'Terms & Conditions') {
      setActiveModal('Terms');
    } else if (item === 'Privacy Policy') {
      setActiveModal('Privacy');
    } else if (item === 'Terms of Service') {
      setActiveModal('TermsOfService');
    }
  };

  return (
    <footer className="py-20 bg-luxury-black border-t border-border-gray relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex flex-wrap justify-center items-center gap-6 md:space-x-8">
            {["Privacy Policy", "Terms & Conditions", "Terms of Service"].map(item => (
              <a
                key={item}
                href="#"
                onClick={(e) => handleLinkClick(e, item)}
                className="text-sm text-text-gray hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://www.instagram.com/sajan_shahh/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border-gray flex items-center justify-center text-text-gray hover:text-white hover:border-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="https://www.youtube.com/@SajanShah" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border-gray flex items-center justify-center text-text-gray hover:text-white hover:border-white transition-all">
              <Youtube size={18} />
            </a>
            <a href="https://www.linkedin.com/in/sajan-shah-7840244a/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border-gray flex items-center justify-center text-text-gray hover:text-white hover:border-white transition-all">
              <Linkedin size={18} />
            </a>
            <a href="https://www.facebook.com/SajanShahPage" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border-gray flex items-center justify-center text-text-gray hover:text-white hover:border-white transition-all">
              <Facebook size={18} />
            </a>
            <a href="https://x.com/sajanofficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border-gray flex items-center justify-center text-text-gray hover:text-white hover:border-white transition-all">
              <Twitter size={18} />
            </a>
          </div>

          <div className="text-text-gray text-xs">
            © 2026 Sajan Shah Foundation. All rights reserved.
          </div>
        </div>
      </div>

      <LegalModal
        isOpen={activeModal === 'Terms'}
        onClose={() => setActiveModal(null)}
        title="Terms & Conditions"
        content={<TermsContent />}
      />

      <LegalModal
        isOpen={activeModal === 'Privacy'}
        onClose={() => setActiveModal(null)}
        title="Privacy Policy"
        content={<PrivacyContent />}
      />

      <LegalModal
        isOpen={activeModal === 'TermsOfService'}
        onClose={() => setActiveModal(null)}
        title="Terms of Service"
        content={<TermsOfServiceContent />}
      />
    </footer>
  );
}
