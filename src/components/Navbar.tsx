import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Compass, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ubTime, setUbTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // Calculate reading progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Live Mongolian (UB) Time updates
  useEffect(() => {
    const updateTime = () => {
      const ubOffset = 8; // UTC+8
      const d = new Date();
      const utc = d.getTime() + d.getTimezoneOffset() * 60000;
      const ubDate = new Date(utc + 3600000 * ubOffset);
      
      const hours = String(ubDate.getHours()).padStart(2, '0');
      const minutes = String(ubDate.getMinutes()).padStart(2, '0');
      const seconds = String(ubDate.getSeconds()).padStart(2, '0');
      setUbTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.header
        id="navbar-header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F5F2ED]/90 backdrop-blur-md border-b border-[#DED9D0] py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        {/* Dynamic reading bar */}
        <div 
          className="absolute bottom-0 left-0 h-[1.5px] bg-[#5A5A40] transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <Compass className="w-5 h-5 text-[#5A5A40] group-hover:rotate-45 transition-transform duration-500" />
            <span className="font-serif text-lg tracking-[0.25em] text-[#1A1A1A] group-hover:text-[#5A5A40] transition-colors uppercase">
              Altan
            </span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-10">
            <button 
              onClick={() => scrollToSection('the-experience')} 
              className="font-mono text-xs text-[#1A1A1A]/75 hover:text-[#5A5A40] tracking-wider transition-colors uppercase font-bold cursor-pointer"
            >
              The Experience
            </button>
            <button 
              onClick={() => scrollToSection('the-ger')} 
              className="font-mono text-xs text-[#1A1A1A]/75 hover:text-[#5A5A40] tracking-wider transition-colors uppercase font-bold cursor-pointer"
            >
              The Sanctuary
            </button>
            <button 
              onClick={() => scrollToSection('journey-timeline')} 
              className="font-mono text-xs text-[#1A1A1A]/75 hover:text-[#5A5A40] tracking-wider transition-colors uppercase font-bold cursor-pointer"
            >
              7-Day Ritual
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="font-mono text-xs text-[#1A1A1A]/75 hover:text-[#5A5A40] tracking-wider transition-colors uppercase font-bold cursor-pointer"
            >
              Stories
            </button>
          </nav>

          {/* Right Info + CTA */}
          <div className="hidden sm:flex items-center gap-6">
            {/* Live UB Clock */}
            <div className="hidden lg:flex flex-col items-end text-[#1A1A1A]/60 font-mono text-[10px] tracking-widest uppercase">
              <span className="text-[#1A1A1A]/40">MONGOLIA UTC+8</span>
              <span className="text-[#5A5A40] font-bold font-mono">{ubTime || '11:52:00'}</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="relative px-6 py-2.5 rounded-full bg-[#1A1A1A] text-white font-mono text-xs tracking-wider transition-all duration-300 hover:bg-[#333333] hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer"
            >
              Reserve Stay
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-full bg-[#1A1A1A] text-white font-mono text-[11px] tracking-wider cursor-pointer"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#1A1A1A] hover:text-[#5A5A40] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F5F2ED]/98 backdrop-blur-lg flex flex-col justify-center px-8 sm:px-16 pt-24 pb-8 lg:hidden text-[#1A1A1A]">
          <div className="flex flex-col gap-8">
            <div className="text-[#5A5A40] font-mono text-[10px] tracking-widest uppercase border-b border-[#DED9D0] pb-2 font-bold">
              MAIN SECTIONS
            </div>
            <button
              onClick={() => scrollToSection('the-experience')}
              className="text-left font-serif text-3xl tracking-wide text-[#1A1A1A] hover:text-[#5A5A40] transition-colors cursor-pointer"
            >
              The Experience
            </button>
            <button
              onClick={() => scrollToSection('the-ger')}
              className="text-left font-serif text-3xl tracking-wide text-[#1A1A1A] hover:text-[#5A5A40] transition-colors cursor-pointer"
            >
              The Sanctuary (Ger)
            </button>
            <button
              onClick={() => scrollToSection('journey-timeline')}
              className="text-left font-serif text-3xl tracking-wide text-[#1A1A1A] hover:text-[#5A5A40] transition-colors cursor-pointer"
            >
              The 7-Day Ritual
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-left font-serif text-3xl tracking-wide text-[#1A1A1A] hover:text-[#5A5A40] transition-colors cursor-pointer"
            >
              Traveler Stories
            </button>

            <div className="text-[#5A5A40] font-mono text-[10px] tracking-widest uppercase border-b border-[#DED9D0] pb-2 mt-8 font-bold">
              LOCATION TIMING
            </div>
            <div className="flex items-center justify-between text-[#1A1A1A] font-mono text-sm uppercase">
              <span className="text-[#1A1A1A]/40 font-semibold text-xs">ULANBATOR TIME</span>
              <span className="text-[#5A5A40] font-bold font-mono">{ubTime || '11:52:00'}</span>
            </div>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 mt-8 rounded-full bg-[#1A1A1A] text-white font-mono text-xs tracking-widest uppercase font-semibold text-center hover:bg-[#333333] transition-colors cursor-pointer shadow-sm"
            >
              Reserve 7-Day Stay
            </button>
          </div>
        </div>
      )}
    </>
  );
}
