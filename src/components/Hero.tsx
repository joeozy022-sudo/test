import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, ChevronDown, Check, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  heroImage: string;
}

export default function Hero({ onOpenBooking, heroImage }: HeroProps) {
  // Let the user toggle the Copywriting Vibe like a premium layout tool
  const [activeVibe, setActiveVibe] = useState<'nike' | 'apple' | 'literary'>('nike');

  const copyVariations = {
    nike: {
      vibeLabel: "The Spirit",
      tagline: "NOMADIC FREEDOM // STRENGTH",
      headline: "Sovereignty of",
      italicWord: "Space.",
      subheadline: "No fences. No artificial roads. Seven days of absolute silence in the embrace of the ancient steppe. Rediscover the scale of your existence.",
      cta: "Seize the Steppe",
      focusText: "Transformation focus: Liberation through absolute horizon."
    },
    apple: {
      vibeLabel: "The Sanctuary",
      tagline: "ESTABLISHED ARCHITECTURE",
      headline: "Crafted in wool,",
      italicWord: "wood & sky.",
      subheadline: "A circular home unchanged for three thousand years. Engineered to exist in perfect harmony with the cold wind and the open grass. Solitude, refined.",
      cta: "Experience the Design",
      focusText: "Transformation focus: Essentialism of living in round architecture."
    },
    literary: {
      vibeLabel: "The Odyssey",
      tagline: "NOMADIC HERITAGE // TIME",
      headline: "Where the road ends,",
      italicWord: "silence begins.",
      subheadline: "Wake to the mist of wild horses. Sleep beneath five thousand unpolluted stars. Walk alongside nomadic families who live of the wind, fire, and grass.",
      cta: "Begin Your 7-Day Stay",
      focusText: "Transformation focus: Deep anthropological immersion."
    }
  };

  const currentCopy = copyVariations[activeVibe];

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#F5F2ED] text-[#1A1A1A] pt-24 pb-12 overflow-hidden px-6 md:px-12 lg:px-24">
      {/* Decorative Warm Accent Ambient lines */}
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-[#5A5A40]/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-[#DED9D0]/40 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Main Grid: Editorial Split-Screen Layout */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center flex-1">
        
        {/* Left Column: Narrative storytelling (Col 1 to 6) */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-8 z-10">
          
          {/* Accent Line of the Editorial Theme */}
          <div className="w-12 h-[1px] bg-[#5A5A40]" />
          
          <div className="space-y-4">
            {/* Tagline */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${activeVibe}-tagline`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-[#5A5A40] font-bold uppercase block"
                >
                  {currentCopy.tagline}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Georgia Serif Headings */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`${activeVibe}-headline`}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.95] tracking-tighter text-[#1A1A1A] font-light"
                >
                  {currentCopy.headline} <br />
                  <span className="italic text-[#5A5A40]">{currentCopy.italicWord}</span>
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>

          {/* Emotional subheadline */}
          <div className="max-w-md">
            <AnimatePresence mode="wait">
              <motion.p
                key={`${activeVibe}-sub`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base md:text-lg text-[#1A1A1A]/80 leading-relaxed font-sans font-light"
              >
                {currentCopy.subheadline}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Premium Luxury CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onOpenBooking}
              className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-xs font-mono uppercase tracking-[0.2em] font-bold hover:bg-[#333333] transition-all duration-350 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-black/10 cursor-pointer"
            >
              {currentCopy.cta}
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('the-experience');
                if (element) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = element.getBoundingClientRect().top;
                  window.scrollTo({
                    top: elementRect - bodyRect - offset,
                    behavior: 'smooth'
                  });
                }
              }}
              className="border border-[#1A1A1A]/15 text-[#1A1A1A] px-8 py-4 rounded-full text-xs font-mono uppercase tracking-[0.15em] hover:bg-[#1A1A1A]/5 transition-all duration-350 cursor-pointer"
            >
              The Philosophy
            </button>
          </div>

          {/* Copywriting Vibe Controller (Interactive feature) */}
          <div className="pt-6 border-t border-[#1A1A1A]/10 max-w-sm">
            <div className="flex items-center gap-1.5 mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#5A5A40]" />
              <span className="font-mono text-[9px] tracking-widest text-[#5A5A40] font-bold uppercase">
                EDITORIAL VOICE PROFILE (INTERACTIVE)
              </span>
            </div>
            <div className="flex bg-[#DED9D0]/20 border border-[#1A1A1A]/5 rounded-lg p-1 gap-1">
              {(['nike', 'apple', 'literary'] as const).map((vibe) => (
                <button
                  key={vibe}
                  onClick={() => setActiveVibe(vibe)}
                  className={`flex-1 py-1 px-2.5 rounded text-[10px] uppercase font-mono tracking-wider transition-all duration-200 ${
                    activeVibe === vibe
                      ? 'bg-[#1A1A1A] text-white font-bold'
                      : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5'
                  }`}
                >
                  {copyVariations[vibe].vibeLabel}
                </button>
              ))}
            </div>
            <p className="font-mono text-[9px] text-[#5A5A40]/70 mt-2 italic">
              {currentCopy.focusText}
            </p>
          </div>

        </div>

        {/* Right Column: High-end Visual Showcase (Col 7 to 12) */}
        <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex flex-col z-0">
          
          {/* Main Rounded Image Container */}
          <div className="w-full flex-1 bg-[#DED9D0] rounded-[40px] relative overflow-hidden border border-[#1A1A1A]/10 shadow-lg group">
            <img
              src={heroImage}
              alt="Traditional white luxury yurt nestled in the golden-hour Mongolian grassland"
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-[10s] ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Gentle gradient gradient to keep the bottom caption highly readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent pointer-events-none" />
            
            {/* Elegant Top Right Icon Badge */}
            <div className="absolute top-6 right-6 font-mono text-[9px] tracking-widest bg-[#F5F2ED] text-[#1A1A1A] py-1.5 px-3 rounded-full uppercase font-bold border border-[#1A1A1A]/10">
              STATION NO. 01
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-white z-10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest font-bold text-white/90">
                  Orkhon Valley
                </p>
                <p className="font-serif text-sm opacity-80 font-light italic">
                  UNESCO World Heritage Site
                </p>
              </div>
              
              <div className="flex flex-col items-end">
                <span className="font-mono text-xl font-light tracking-wide text-[#F5F2ED]">
                  47.5° N
                </span>
                <span className="font-mono text-[8px] uppercase tracking-widest opacity-60">
                  LATITUDE COORD
                </span>
              </div>
            </div>
          </div>

          {/* Little secondary details beneath image */}
          <div className="hidden sm:flex items-center justify-between mt-3 px-4 text-xs font-mono tracking-wider text-[#1A1A1A]/40 uppercase">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#5A5A40]" />
              <span>GORKHI REGION MOUNTAINS</span>
            </div>
            <span>ELEVATION: 1,600M</span>
          </div>

        </div>

      </div>

    </section>
  );
}
