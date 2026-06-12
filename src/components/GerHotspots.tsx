import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Info, Eye, Compass, Home } from 'lucide-react';
import { Hotspot } from '../types';

interface GerHotspotsProps {
  interiorImage: string;
}

export default function GerHotspots({ interiorImage }: GerHotspotsProps) {
  const [activeHotspotId, setActiveHotspotId] = useState<string>('toono');

  const hotspots: Hotspot[] = [
    {
      id: 'toono',
      name: 'The Toono',
      x: 50,
      y: 18,
      symbolism: 'Portal to the Cosmos',
      description: 'The sacred wooden crown wheel acting as both a physical skylight and a spiritual sundial. Nomads read the time of day by observing how sunlight passes through the wheel spokes and casts shadows across the circular floor.',
      luxuryDetail: 'Finished with modern double-pane insulated UV glass and a remote copper-cladded felt retraction cover for absolute stargazing protection.'
    },
    {
      id: 'bagana',
      name: 'The Bagana Pillars',
      x: 42,
      y: 48,
      symbolism: 'Pillars of Balance',
      description: 'The two structural columns hosting the heavy weight of the crown wheel. In traditional cosmology, they represent the link between heaven (Deed Tenger) and earth. Crossing between them is respected as a sacred act.',
      luxuryDetail: 'Crafted from hand-scraped ancient larch timber, infused with natural cedarwood essential oils that gently perfume the yurt interior.'
    },
    {
      id: 'hana',
      name: 'The Hana Lattice',
      x: 15,
      y: 65,
      symbolism: 'Flexible Willow Core',
      description: 'The expandable willow wooden lattice wall that forms the resilient drum of the ger. It possesses an engineering flexibility that shrugs off the highest-altitude winds of the Gobi and northern mountain valleys.',
      luxuryDetail: 'Coated under three layers of dense organic felt insulation that breathes naturally, preventing drafts while retaining optimal internal humidity.'
    },
    {
      id: 'zukh',
      name: 'The Cast Hearth',
      x: 48,
      y: 82,
      symbolism: 'Fire and Continuity',
      description: 'The physical and social hearth of the home, home of the fire spirit (Gal). In heritage customs, a healthy fire symbolizes herder continuity, warmth, and generous protection for weary travelers.',
      luxuryDetail: 'Individually commissioned cast-iron wood burner with air-intake controls, feeding fragrant compressed birch logs for reliable, easy overnight heating.'
    },
    {
      id: "shiree",
      name: "The Resting Quarter",
      x: 82,
      y: 72,
      symbolism: "Sopor of the Steppes",
      description: "Tucked in the traditional north-west sector of the ger, aligning with historical positions of honored guests. A tranquil micro-climate of silence away from the entrance door.",
      luxuryDetail: "Outfitted with a heavy-timber low bedframe carrying a custom organic latex-wool core mattress, surrounded in deep 800-thread count raw linen linen sheets."
    }
  ];

  const currentHotspot = hotspots.find(h => h.id === activeHotspotId) || hotspots[0];

  return (
    <section id="the-ger" className="relative py-24 md:py-36 bg-[#F5F2ED] text-[#1A1A1A] border-b border-[#DED9D0] overflow-hidden">
      
      {/* Decorative Warm Backing Accent Glow */}
      <div className="absolute top-[30%] right-[5%] w-[400px] h-[400px] bg-[#5A5A40]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title elements */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-b border-[#DED9D0] pb-8">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#5A5A40] font-bold uppercase flex items-center gap-1.5">
              <Home className="w-3.5 h-3.5 text-[#5A5A40]" />
              THE SANCTUARY ARCHITECTURE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-[#1A1A1A]">
              An ancient geometry of rest.
            </h2>
          </div>
          <p className="max-w-md font-sans text-[#1A1A1A]/75 font-light leading-relaxed text-sm md:text-base">
            No corners. No harsh angles. Optimized over three thousand years to circulate heat, diffuse winds, and focus celestial energy. Experience the perfection of a perfect circle.
          </p>
        </div>

        {/* Interactive Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          
          {/* Main Interactive Image Frame (Col 1 to 7) */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#DED9D0] group aspect-[4/3] bg-[#E6E2D8] shadow-sm">
            <img
              src={interiorImage}
              alt="Luxury modern interior of a Mongolian Ger (yurt) highlighting cozy wooden craft"
              className="w-full h-full object-cover opacity-95 select-none transition-transform duration-[20s] ease-out"
              referrerPolicy="no-referrer"
            />
            {/* Gentle image overlay */}
            <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-all duration-700" />

            {/* Render Pulsing Hotspots over the image */}
            {hotspots.map((h) => {
              const isActive = h.id === activeHotspotId;
              return (
                <button
                  key={h.id}
                  onClick={() => setActiveHotspotId(h.id)}
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 group cursor-pointer"
                  aria-label={`Select ${h.name}`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Ring Pulse Element */}
                    <div className={`absolute w-8 h-8 rounded-full border bg-transparent transition-all duration-1000 ${
                      isActive 
                        ? 'animate-ping border-[#5A5A40]/60 bg-[#5A5A40]/10' 
                        : 'border-[#1A1A1A]/40 bg-white/30 group-hover:border-[#1A1A1A] group-hover:scale-110'
                    }`} />
                    
                    {/* Inner core circle pin */}
                    <div className={`w-3.5 h-3.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                      isActive 
                        ? 'bg-[#5A5A40] scale-110 shadow-md ring-2 ring-white' 
                        : 'bg-white ring-1 ring-black/45 group-hover:bg-[#1A1A1A] group-hover:ring-white'
                    }`}>
                      <Info className="w-1.5 h-1.5 text-white opacity-0" />
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Quick interactive floating manual overlay inside layout */}
            <div className="absolute bottom-6 left-6 font-mono text-[9px] tracking-wider bg-[#F5F2ED] border border-[#DED9D0] py-2 px-3 rounded-md flex items-center gap-2 shadow-sm text-[#1A1A1A]">
              <Eye className="w-3 h-3 text-[#5A5A40]" />
              <span className="font-semibold uppercase tracking-widest text-[8px]">SELECT LABELS TO DISCOVER MATERIAL DETAILS</span>
            </div>
          </div>

          {/* Details Narrative Sidebar (Col 8 to 12) */}
          <div className="lg:col-span-5 flex flex-col justify-between items-start min-h-[380px] py-4">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHotspot.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
              >
                
                {/* Meta details with luxury tag */}
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#5A5A40] font-bold tracking-widest uppercase">
                    {currentHotspot.symbolism}
                  </span>
                  <span className="h-[1px] w-6 bg-[#DED9D0]" />
                  <span className="font-mono text-[9px] text-[#1A1A1A]/40 tracking-wider uppercase">
                    CRAFT ARCHITECTURE
                  </span>
                </div>

                {/* Hotspot Name */}
                <h3 className="font-serif text-3xl md:text-4xl font-light text-[#1A1A1A]">
                  {currentHotspot.name}
                </h3>

                {/* Culture Context Description */}
                <p className="font-sans text-[#1A1A1A]/75 font-light leading-relaxed text-base">
                  {currentHotspot.description}
                </p>

                {/* Modernized Luxury Comfort Upgrade Details */}
                <div className="p-6 bg-white border border-[#DED9D0] rounded-2xl flex flex-col gap-2 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 py-1.5 px-3 bg-[#5A5A40]/10 text-[#5A5A40] font-mono text-[8px] tracking-widest font-semibold uppercase rounded-bl-xl border-l border-b border-[#DED9D0]">
                    MODERNIZED UPGRADE
                  </div>
                  <span className="font-mono text-[10px] text-[#5A5A40] font-bold tracking-widest uppercase flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3 h-3 text-[#5A5A40]" />
                    REFRACTORY Comfort Specs
                  </span>
                  <p className="font-sans text-xs text-[#1A1A1A]/80 leading-relaxed font-light">
                    {currentHotspot.luxuryDetail}
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Quick checklist about standard amenity details */}
            <div className="grid grid-cols-2 gap-4 border-t border-[#DED9D0] pt-8 w-full mt-10">
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[9px] text-[#1A1A1A]/40 uppercase tracking-widest">COSIEST HEATING</span>
                <span className="font-serif text-base text-[#1A1A1A] font-light">Larch hearth wood</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[9px] text-[#1A1A1A]/40 uppercase tracking-widest">INSULATION</span>
                <span className="font-serif text-base text-[#1A1A1A] font-light">100% Organic wool felt</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[9px] text-[#1A1A1A]/40 uppercase tracking-widest">BED DIMENSION</span>
                <span className="font-serif text-base text-[#1A1A1A] font-light">Organic King Slate Sleep</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[9px] text-[#1A1A1A]/40 uppercase tracking-widest">CAPACITY UNIT</span>
                <span className="font-serif text-base text-[#1A1A1A] font-light">Strictly 2 Adults Limit</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
