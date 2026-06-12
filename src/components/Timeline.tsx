import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Calendar, Timer, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { DayTimelineItem } from '../types';

export default function Timeline() {
  const [selectedDayNum, setSelectedDayNum] = useState<number>(1);

  const days: DayTimelineItem[] = [
    {
      day: 1,
      title: 'Dismount & Acclimatize',
      poeticSubtitle: 'The severing of static.',
      description: 'Leave the concrete geometry of Ulaanbaatar by private overland vehicle. Ride deep into the roadless, unfenced valley. Cross thresholds into your private wood-frame sanctuary, strike the first birch-bark fire, and succumb to the dense, absolute quiet of the grasslands.',
      ritual: 'The First Hearth Induction',
      duration: '4-hour overland transition'
    },
    {
      day: 2,
      title: 'Alignment with Grass and Wind',
      poeticSubtitle: 'The horizon as your primary anchor.',
      description: 'Wake to soft golden sun rays pouring through the high cylinder Toono. Step bare-toed onto wild steppe sage damp with crisp morning dew. Stand beneath the immense blue dome of the atmosphere as herds of native horses graze at the stream.',
      ritual: 'Grassland Sunrise Reflection',
      duration: 'Full-day orientation'
    },
    {
      day: 3,
      title: 'The Untamed Saddle',
      poeticSubtitle: 'Movement without artificial engines.',
      description: 'Meet your hosts’ steppe stallions. Master the raw, simple communication of the heavy horse blanket and the short rein. Ride unchecked through narrow, red granite mountain ravines and expansive green valleys, experiencing wild speed as a form of absolute freedom.',
      ritual: 'The Equestrian Breath Alignment',
      duration: '4-hour wilderness horse trek'
    },
    {
      day: 4,
      title: 'Heritage Sustenance',
      poeticSubtitle: 'Life tailormade by grazing pasture.',
      description: 'Participate in the ancient rhythms of herder productivity. Help separate warm cream, stitch hand-scraped wool felt covers under the dry sun, and simmer high-altitude salted tea in a silver cauldron. Experience culinary preparation where food is treated as sacred fuel.',
      ritual: 'The Silver Cauldron Brew',
      duration: '3-hour herder craft session'
    },
    {
      day: 5,
      title: 'Absolute Digital Silence',
      poeticSubtitle: 'Recalibrating the modern sensory system.',
      description: 'A complete suspension of scheduled action. No phones, no clocks, and no destinations. Rest within the circle walls of your sanctuary reading, writing, or resting, allowing your central nervous system to synchronize with natural high-plateau earth frequencies.',
      ritual: '8-Hour Solitary Sopor',
      duration: 'Full day self-directed retreat'
    },
    {
      day: 6,
      title: 'Deep Cosmology',
      poeticSubtitle: 'The galaxy above the crown.',
      description: 'Ride at violet winter dusk to an ancient granite ridge of historic stone structures (Ovoos). Sit silently as the twilight fades and the Milky Way exposes its blinding cluster of stars, undisturbed by modern artificial light.',
      ritual: 'Midnight Toono Star Vigil',
      duration: '3-hour celestial observation'
    },
    {
      day: 7,
      title: 'The Salt-cairn Integration',
      poeticSubtitle: 'Carrying the vast horizon back to the grid.',
      description: 'Take part in the farewell ritual of salted milk with your herder hosts. Bid goodbye to the pasture that held you, returning to the modern world with an internal clarity that cannot be shaken by office walls.',
      ritual: 'Nomadic Blue Scarf Ceremony',
      duration: '4-hour return overland transition'
    }
  ];

  const currentDay = days.find(d => d.day === selectedDayNum) || days[0];

  return (
    <section id="journey-timeline" className="relative py-24 md:py-36 bg-[#F5F2ED] border-b border-[#DED9D0] overflow-hidden text-[#1A1A1A]">
      
      {/* Decorative Warm Accent Glows */}
      <div className="absolute top-[40%] right-[10%] w-[355px] h-[355px] bg-[#5A5A40]/5 rounded-full filter blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-b border-[#DED9D0] pb-8">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#5A5A40] font-bold uppercase flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#5A5A40]" />
              THE 7-DAY IMMERSION TEMPLATE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-[#1A1A1A]">
              The Deceleration Curve.
            </h2>
          </div>
          <p className="max-w-md font-sans text-[#1A1A1A]/75 font-light leading-relaxed text-sm md:text-base">
            Carefully structured to transition your focus from urban anxiety to physical embodiment, cosmic scale, and lasting integration. 
          </p>
        </div>

        {/* Stepper Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Day Numbers Vertical Menu (Col 1 to 4) */}
          <div className="lg:col-span-4 flex flex-col justify-start gap-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {days.map((d) => {
              const isSelected = d.day === selectedDayNum;
              return (
                <button
                  key={d.day}
                  onClick={() => setSelectedDayNum(d.day)}
                  className={`text-left p-4 rounded-xl transition-all duration-350 border flex items-center gap-4 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#DED9D0] text-[#1A1A1A] shadow-sm'
                      : 'bg-transparent border-[#DED9D0]/30 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-black/5'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-md font-mono text-xs flex items-center justify-center font-bold relative transition-colors ${
                    isSelected ? 'bg-[#1A1A1A] text-white' : 'bg-[#DED9D0]/50 text-[#1A1A1A]'
                  }`}>
                    {String(d.day).padStart(2, '0')}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase block opacity-60 font-semibold text-[#5A5A40]">
                      STATED PHASE
                    </span>
                    <span className="font-serif text-base font-light block truncate">
                      {d.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 opacity-50 justify-self-end ${isSelected ? 'translate-x-1 text-[#5A5A40]' : ''} transition-transform`} />
                </button>
              );
            })}
          </div>

          {/* Day Description Focus Panel (Col 5 to 12) */}
          <div className="lg:col-span-8 bg-white border border-[#DED9D0] rounded-3xl p-8 md:p-12 flex flex-col justify-between items-start min-h-[420px] shadow-sm relative">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDayNum}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-8 w-full"
              >
                
                {/* Header indicators */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DED9D0]/60 pb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-5xl md:text-6xl text-[#5A5A40] font-light tracking-tight pb-1">
                      Day {selectedDayNum}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] text-[#5A5A40] tracking-[0.2em] font-bold uppercase">IMMERSION STEP</span>
                      <span className="font-sans text-xs text-[#1A1A1A]/70 font-light italic truncate max-w-xs">{currentDay.poeticSubtitle}</span>
                    </div>
                  </div>
                  
                  {/* Duration pill */}
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F5F2ED] border border-[#DED9D0] rounded-full">
                    <Timer className="w-3.5 h-3.5 text-[#5A5A40]" />
                    <span className="font-mono text-[10px] text-[#1A1A1A]/80 tracking-wider font-semibold">
                      {currentDay.duration}
                    </span>
                  </div>
                </div>

                {/* Core Narrative Text */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] font-light leading-snug">
                    {currentDay.title}
                  </h3>
                  <p className="font-sans text-[#1A1A1A]/75 text-sm md:text-base font-light leading-relaxed">
                    {currentDay.description}
                  </p>
                </div>

                {/* Ritual Highlight Box */}
                <div className="flex flex-col sm:flex-row items-start gap-4 p-5 bg-[#F5F2ED] border border-[#DED9D0] rounded-2xl w-full">
                  <CheckCircle2 className="w-5 h-5 text-[#5A5A40] mt-1 flex-shrink-0" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[9px] text-[#5A5A40] tracking-widest font-bold uppercase">THE INTENTIONAL RITUAL</span>
                    <span className="font-serif text-lg text-[#1A1A1A] font-light">
                      {currentDay.ritual}
                    </span>
                    <p className="font-sans text-xs text-[#1A1A1A]/70 leading-relaxed font-light mt-1">
                      A curated non-compulsory practice led by your herder hosts to deeply mark the shift of state.
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>

    </section>
  );
}
