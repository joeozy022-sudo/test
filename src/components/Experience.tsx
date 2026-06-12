import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, Moon, Sun, Flame, MessageCircle, Heart } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  horseImage: string;
  nightImage: string;
}

export default function Experience({ horseImage, nightImage }: ExperienceProps) {
  const [selectedTopic, setSelectedTopic] = useState<string>('nomad');

  const experiences: ExperienceItem[] = [
    {
      id: 'nomad',
      category: 'COMMUNITY',
      title: 'Nomadic Coexistence',
      description: 'You are not a tourist watching from an artificial glass bubble. You are positioned alongside local herder families whose lineage has herded livestock in these identical valleys for generations. Wake up with them at dawn. Learn the craft of stitching felt covers, milking, and reading the weather from the alignment of distant peaks.',
      quote: "The nomads do not conquer the grasslands; they are in constant conversation with them.",
      image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1200' // High-quality editorial landscape
    },
    {
      id: 'horse',
      category: 'MOVEMENT',
      title: 'Steppe Equine Freedom',
      description: 'Ride horses that belong to the soil. There are no saddles of artificial constraint, no manicured fences, and no predetermined paths. Feel the raw muscle power of the legendary Mongolian horse beneath you as you gallop across high-altitude pastures where the only border is the blue horizon.',
      quote: "To know the soul of Mongolia, you must move at the speed of their stallions.",
      image: horseImage
    },
    {
      id: 'food',
      category: 'SUSTENANCE',
      title: 'The Ancestral Earth-Kettle',
      description: 'Sustain your body through high-altitude nutrition. Fresh curds, steaming hand-rolled dumplings (buuz), stone-roasted wild sheep meat (khorkhog), and salted wild tea boiled in a heavy cauldron. Raw, mineral-rich dining that prepares you for the windy days and starry nights on the high steppe.',
      quote: "Food is not a luxury here; it is hot, salted fire tailored to the steppe frost.",
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800' // Traditional culinary aesthetic
    },
    {
      id: 'stargazing',
      category: 'COSMOLOGY',
      title: 'Pre-Modern Astronomy',
      description: 'With zero atmospheric haze and no city grid for five hundred miles, the night sky over the Altan camp is a dense curtain of stars. Watch the core of the Milky Way ascend behind the curves of the mountains. Peer into the raw cosmos looking through the central crown wheel (Toono) of your ger while nestled in organic wool blanketing.',
      quote: "Here, you realize the night is not black; it is lit by a trillion old fires.",
      image: nightImage
    },
    {
      id: 'silence',
      category: 'RESONANCE',
      title: 'Celestial Digital Detox',
      description: 'We do not sell internet connectivity, nor do we host digital monitors. Experience the absolute acoustic landscape where the wind murmurs through high sagebrush and the ground hums. The human nervous system recalibrates in days; deep sleep becomes automatic and natural.',
      quote: "Your ears will adjust. The silence does not feel empty; it is thick with peace.",
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200' // Epic mountain stillness
    }
  ];

  const currentExp = experiences.find(e => e.id === selectedTopic) || experiences[0];

  return (
    <section id="the-experience" className="relative py-24 md:py-36 bg-[#F5F2ED] border-b border-[#DED9D0] overflow-hidden text-[#1A1A1A]">
      
      {/* Delicate organic soft backing glow */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-[#5A5A40]/5 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Intro Story-driven copy Block like premium high-end catalog */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24 md:mb-32">
          
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#5A5A40] uppercase font-bold">
              THE PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] tracking-tight font-light leading-snug">
              An invitation to exit the high-frequency grid.
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 text-[#1A1A1A]/75 font-sans text-base md:text-lg leading-relaxed font-light">
            <p>
              In our cities, we live at a simulated, fragmented pace. We fill every second with digital noise, fluorescent ceilings, and constant notifications. Over time, we forget our physical grounding. We lose the feeling of cold wind against wood, of natural darkness, and the vast scale of raw grassland pasture.
            </p>
            <p className="border-l border-[#5A5A40] pl-6 my-2 italic font-serif text-[#5A5A40] text-lg">
              "We took away the locks, the paved roads, and the cellular networks. We left only the wool-insulated shelter, a warm wood stove, swift horses, and the endless Mongolian sky."
            </p>
            <p>
              The Altan Ger Camp experience is not a resort excursion. It is a portal into pre-industrial essentialism. Spend seven organic days living in high valleys under the guidance of the wind, the rise of the sun, and the massive quiet of the steppe landscape.
            </p>
          </div>

        </div>

        {/* What You'll Experience (Scroll and Select Section) */}
        <div className="flex flex-col gap-10">
          
          <div className="flex flex-col gap-2 border-b border-[#DED9D0] pb-6">
            <span className="font-mono text-xs tracking-widest text-[#5A5A40] font-bold">INTERACTIVE PORTALS</span>
            <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] font-light">Dimensions of the Steppe</h3>
          </div>

          {/* Interactive Interface Split Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-stretch">
            
            {/* Left Nav menu selector (Apple-style product tabs) */}
            <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
              {experiences.map((exp) => {
                const isSelected = exp.id === selectedTopic;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedTopic(exp.id)}
                    className={`text-left p-6 rounded-2xl transition-all duration-350 border flex flex-col gap-1 cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#DED9D0] shadow-sm text-[#1A1A1A]'
                        : 'bg-transparent border-transparent text-[#1A1A1A]/55 hover:text-[#1A1A1A] hover:bg-black/5'
                    }`}
                  >
                    <span className="font-mono text-[9px] tracking-[0.25em] block mb-1 font-bold text-[#5A5A40]/80">
                      {exp.category}
                    </span>
                    <span className="font-serif text-xl md:text-2xl font-light">
                      {exp.title}
                    </span>
                    {isSelected && (
                      <motion.span
                        layoutId="activeUnderline"
                        className="h-[1.5px] bg-[#5A5A40] mt-3 w-12 rounded"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Display Card (Nike Showcase Visual Layout) */}
            <div className="lg:col-span-7 flex flex-col bg-white rounded-3xl border border-[#DED9D0] overflow-hidden transition-all duration-500 relative min-h-[480px] shadow-sm">
              
              {/* Image Banner top half */}
              <div className="h-44 sm:h-56 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentExp.id}
                    className="w-full h-full object-cover select-none"
                    src={currentExp.image}
                    alt={currentExp.title}
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 0.95, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                {/* Fading bottom overlay into pure white card background */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                <span className="absolute top-6 left-6 font-mono text-[10px] tracking-widest bg-[#F5F2ED] py-1.5 px-3 rounded-full text-[#5A5A40] uppercase border border-[#DED9D0] font-bold">
                  {currentExp.category}
                </span>
              </div>

              {/* Text Description bottom half */}
              <div className="p-8 flex-1 flex flex-col justify-between gap-6 bg-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentExp.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-4"
                  >
                    <h4 className="font-serif text-3xl font-light tracking-tight text-[#1A1A1A]">
                      {currentExp.title}
                    </h4>
                    <p className="font-sans text-[#1A1A1A]/75 font-light leading-relaxed text-sm md:text-base">
                      {currentExp.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Poetic Quote block */}
                <div className="border-t border-[#DED9D0]/60 pt-6 flex items-start gap-3">
                  <Compass className="w-5 h-5 text-[#5A5A40] mt-1 flex-shrink-0" />
                  <p className="font-serif italic text-sm md:text-base text-[#5A5A40]/80">
                    "{currentExp.quote}"
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
