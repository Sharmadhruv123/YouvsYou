import { X } from 'lucide-react';
import React, { useEffect } from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export default function LegalModal({ isOpen, onClose, title, content }: LegalModalProps) {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-luxury-black border border-border-gray/30 shadow-2xl rounded-sm flex flex-col z-10 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-end p-4 md:p-6 pb-0">
          <button 
            onClick={onClose}
            className="p-2 text-text-gray hover:text-orange transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto text-text-gray space-y-6 text-sm md:text-base leading-relaxed [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {content}
        </div>
      </div>
    </div>
  );
}
