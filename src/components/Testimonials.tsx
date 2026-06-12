import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Quote, ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const list: Testimonial[] = [
    {
      id: 'testimonial-1',
      quote: 'I arrived with a mind buzzing with push notifications, numbers, and corporate status updates. On my third night in the Altan ger, listening to the logs click in the cast-iron hearth, I stared through the crown ceiling wheel up at the Milky Way galaxy. I realized how small my anxieties were. I slept nine hours a night. My creative focus came back effortlessly.',
      author: 'Elena Lindqvist',
      role: 'Creative Director',
      country: 'Stockholm, Sweden',
      stayDate: 'Stayed June 2025',
      avatarLetter: 'E'
    },
    {
      id: 'testimonial-2',
      quote: 'In Tokyo, we are encased in artificial concrete vectors and predetermined subway lines. Riding horses across the Gorkhi grasslands beside a local herder who holds his entire geographical map in his body taught me more about intuition than any machine ever could. I did not look at a single digital monitor for seven days. When I returned, everyone said my eyes looked completely clear.',
      author: 'Hyun-Woo Park',
      role: 'Architect',
      country: 'Seoul, Korea',
      stayDate: 'Stayed August 2025',
      avatarLetter: 'H'
    },
    {
      id: 'testimonial-3',
      quote: 'No corners. In a circular room, the mind behaves differently. Ideas do not get stuck in geometric dead-ends. The warmth originates in the exact center and spreads outward. Sleeping in this sanctuary, under a triple felt wrap in an absolute acoustic vacuum, is a form of deep neural healing everyone needs.',
      author: 'Marcus Vance',
      role: 'Anthropologist',
      country: 'San Francisco, USA',
      stayDate: 'Stayed September 2025',
      avatarLetter: 'M'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  const activeTest = list[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 md:py-36 bg-[#F5F2ED] text-[#1A1A1A] border-b border-[#DED9D0] overflow-hidden">
      
      {/* Decorative Backing Glow */}
      <div className="absolute top-[20%] left-[30%] w-[420px] h-[420px] bg-[#5A5A40]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Category Tag */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <span className="font-mono text-[10px] tracking-[0.4em] text-[#5A5A40] font-bold uppercase flex items-center gap-1.5 justify-center">
            <Quote className="w-3.5 h-3.5 text-[#5A5A40]" />
            HUMAN REBOOTS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-[#1A1A1A] max-w-2xl">
            Realities of the Decelerated Mind.
          </h2>
        </div>

        {/* Cinematic Single-Card Slider with Big Elegant Typography */}
        <div className="relative bg-white border border-[#DED9D0] rounded-3xl p-8 md:p-16 flex flex-col justify-between items-start min-h-[400px] shadow-sm">
          
          {/* Quote Mark Decoration in top right */}
          <div className="absolute top-10 right-10 opacity-[0.03] select-none hidden sm:block pointer-events-none">
            <Quote className="w-48 h-48 text-[#5A5A40]" />
          </div>

          {/* Testimonial Quote Panel */}
          <div className="flex-1 w-full mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTest.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-8"
              >
                
                {/* 5-star indicators */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#5A5A40] text-[#5A5A40]" />
                  ))}
                </div>

                {/* Main Quote text */}
                <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed text-[#1A1A1A] max-w-4xl">
                  "{activeTest.quote}"
                </p>

                {/* Author specifications */}
                <div className="flex items-center gap-4 border-t border-[#DED9D0]/60 pt-6 mt-2">
                  
                  {/* Custom Graphic Avatar */}
                  <div className="w-12 h-12 rounded-full bg-[#F5F2ED] text-[#1A1A1A] font-bold flex items-center justify-center font-mono text-lg border border-[#DED9D0]">
                    {activeTest.avatarLetter}
                  </div>

                  <div className="flex flex-col">
                    <span className="font-serif text-lg font-light text-[#1A1A1A]">
                      {activeTest.author}
                    </span>
                    <span className="font-mono text-[10px] text-[#1A1A1A]/60 tracking-wider font-semibold">
                      {activeTest.role} • {activeTest.country}
                    </span>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls Bar */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#DED9D0]/60 pt-8">
            
            <span className="font-mono text-xs text-[#1A1A1A]/40 tracking-widest font-semibold">
              {activeTest.stayDate}
            </span>

            {/* Toggle Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-[#F5F2ED] border border-[#DED9D0] hover:bg-black/5 flex items-center justify-center text-[#1A1A1A] active:scale-95 transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 h-4 text-[#1A1A1A]" />
              </button>
              
              {/* Index indicators */}
              <div className="flex items-center gap-1.5 px-4 font-mono text-xs text-[#1A1A1A] font-bold">
                <span>{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="opacity-30">/</span>
                <span className="opacity-45">{String(list.length).padStart(2, '0')}</span>
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-[#F5F2ED] border border-[#DED9D0] hover:bg-black/5 flex items-center justify-center text-[#1A1A1A] active:scale-95 transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 h-4 text-[#1A1A1A]" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
