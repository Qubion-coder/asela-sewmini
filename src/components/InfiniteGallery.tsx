import React from 'react';

const PRE_IMAGES = [
  "/pre/pexels-bonaventure-fernandez-744363-34299860.jpg",
  "/pre/pexels-rebornfilmes-38048311.jpg",
  "/pre/pexels-vinicius-quaresma-511530024-32532551.jpg",
  "/pre/pexels-vinicius-quaresma-511530024-32532557.jpg",
];

export const InfiniteGallery: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white py-16">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
      


      <style>{`
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: scrollRight 40s linear infinite;
        }
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="animate-scroll-right flex gap-6 px-3">
        {/* We duplicate the array to allow for seamless infinite scrolling */}
        {[...PRE_IMAGES, ...PRE_IMAGES].map((src, index) => (
          <div 
            key={index} 
            className="w-64 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden flex-shrink-0 shadow-[0_15px_30px_rgba(176,137,104,0.2)] border border-brand-lavender/30 relative group"
          >
            <div className="absolute inset-0 bg-brand-plum/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
            <img 
              src={src} 
              alt="Pre-shoot memory" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
