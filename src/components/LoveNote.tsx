import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const LoveNote: React.FC = () => {
  return (
    <div className="py-24 px-6 bg-white relative overflow-hidden flex justify-center items-center">
      {/* Decorative background flourishes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-rose/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-lavender/20 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl w-full relative z-10"
      >
        <div className="text-center space-y-8">
          <Quote className="w-12 h-12 text-brand-plum/20 mx-auto rotate-180 mb-2" />
          
            "හදවත් දෙකක්, ආත්මයන් දෙකක්, එක් සුන්දර ගමනක්..."
          
          <div className="space-y-6 text-stone-600 font-sans text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto px-4 font-light">
            <p>
              හදවත පිරි ආදරයෙන් සහ දෑස පිරි සිහින සමඟින්, අපි අපගේ ජීවිතයේ නව පරිච්ඡේදයක් ආරම්භ කරමු. ජීවිතයේ සෑම සතුටක්ම සහ සෑම සුන්දර මොහොතක්ම අත්වැල් බැඳගෙන ගෙවා දැමීමට අප පොරොන්දු වන මේ මොහොතේ, අපගේ ආදරණීයයන් අප අසල සිටීම අපට මහත් ආශිර්වාදයකි.
            </p>
            <p>
              අපගේ සදාකාලික ගමන ආරම්භ වන මෙම සුන්දර මොහොතේ සාක්ෂිකරුවන් වීමට ඔබටත් ආරාධනා කරමු.
            </p>
          </div>
          
          <div className="pt-8 flex justify-center items-center gap-6">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-brand-plum/30" />
            <div className="w-2 h-2 rounded-full bg-brand-plum/40" />
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-brand-plum/30" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
