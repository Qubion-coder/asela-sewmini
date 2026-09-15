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
          
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-names text-brand-plum italic leading-relaxed px-4">
            "Two hearts, two souls, and one beautiful journey…"
          </h3>
          
          <div className="space-y-6 text-stone-600 font-sans text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto px-4 font-light">
            <p>
              With love in our hearts and dreams in our eyes, we are beginning a new chapter of our lives together. We would be truly blessed to have our loved ones beside us as we promise to walk hand in hand, through every joy, every challenge, and every beautiful moment that life brings.
            </p>
            <p>
              Our forever begins with a <span className="font-names text-2xl text-brand-plum">"Yes,"</span> and we would love for you to be there to witness the beginning of our happily ever after.
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
