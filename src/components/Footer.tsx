import { Compass, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#F5F2ED] text-[#1A1A1A] py-16 md:py-24 px-6 md:px-12 border-t border-[#DED9D0] overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Top block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Logo brand and Coordinates (Col 1 to 5) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-[#5A5A40]" />
              <span className="font-serif text-lg tracking-[0.25em] text-[#1A1A1A] uppercase">
                Altan
              </span>
            </div>
            
            <p className="max-w-xs font-sans text-[#1A1A1A]/70 font-light leading-relaxed text-sm">
              Premium nomadic sanctuary rentals on the untouched Gorkhi plateau of rural Mongolia. Refined for space, stillness, and deep human core alignment.
            </p>

            <div className="flex flex-col gap-1 font-mono text-[10px] text-[#5A5A40] uppercase tracking-widest mt-2 font-semibold">
              <span className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-[#5A5A40]" />
                COORDINATES: 47.9184° N, 107.4116° E
              </span>
              <span>ELEVATION: 1,600 METERS ABOVE OCEAN LEVEL</span>
            </div>
          </div>

          {/* Quick navigation connections (Col 6 to 8) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="font-mono text-[10px] text-[#1A1A1A]/40 tracking-widest uppercase font-bold">
              The Sanctuary
            </span>
            <ul className="flex flex-col gap-2.5 font-sans text-sm font-light text-[#1A1A1A]/75">
              <li>
                <a href="#the-experience" className="hover:text-[#1A1A1A] transition-colors hover:underline underline-offset-4 decoration-[#5A5A40]">
                  Steppe Philosophy
                </a>
              </li>
              <li>
                <a href="#the-ger" className="hover:text-[#1A1A1A] transition-colors hover:underline underline-offset-4 decoration-[#5A5A40]">
                  Yurt Geometry
                </a>
              </li>
              <li>
                <a href="#journey-timeline" className="hover:text-[#1A1A1A] transition-colors hover:underline underline-offset-4 decoration-[#5A5A40]">
                  7-Day Deceleration Cycle
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#1A1A1A] transition-colors hover:underline underline-offset-4 decoration-[#5A5A40]">
                  Traveler Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col 9 to 12) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="font-mono text-[10px] text-[#1A1A1A]/40 tracking-widest uppercase font-bold">
              Overland Communications
            </span>
            <ul className="flex flex-col gap-2.5 font-sans text-sm font-light text-[#1A1A1A]/75 col-span-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#5A5A40]" />
                <span>hearth@altansteppe.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#5A5A40]" />
                <span>+976 11 318 420 (UB Office)</span>
              </li>
              <li className="text-[11px] leading-relaxed text-[#1A1A1A]/60 mt-2">
                We handle terminal air logistics from Chinggis Khaan International Airport (UBN) and rail arrivals from the Trans-Mongolian railway. Private vehicle transfers are integrated into every reservation.
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom block: copyright + elevator button */}
        <div className="border-t border-[#DED9D0] pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-[#1A1A1A]/40 font-mono text-[10px] tracking-wider">
            <span>© {new Date().getFullYear()} ALTAN STEPPE CO. ALL RIGHTS CERTIFIED.</span>
            <span className="hidden sm:inline-block text-[#DED9D0]">•</span>
            <span>DEVELOPED UNDER CENTRAL STEPPE PASTURE HERITAGE PROTOCOLS.</span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 font-mono text-[9px] text-[#5A5A40] tracking-widest uppercase cursor-pointer py-1.5 px-3 border border-[#DED9D0] hover:bg-black/5 rounded-md transition-all duration-300 bg-white shadow-sm font-bold"
          >
            <span>ELEVATE TO SKIES</span>
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform text-[#5A5A40]" />
          </button>
        </div>

      </div>

    </footer>
  );
}
