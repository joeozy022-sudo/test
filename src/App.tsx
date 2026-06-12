import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import GerHotspots from './components/GerHotspots';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

// Luxury generated assets
import heroImage from './assets/images/hero_steppe_ger_1780919585274.png';
import interiorImage from './assets/images/ger_interior_1780919598354.png';
import stargazingImage from './assets/images/stargazing_night_1780919611974.png';
import horseImage from './assets/images/nomadic_horse_1780919629359.png';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div id="altan-root" className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] flex flex-col font-sans">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      
      <main className="flex-grow">
        {/* Cinematic Hero entry with copywriting controls */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} heroImage={heroImage} />

        {/* Narrative transition and core lifestyle dimensions */}
        <Experience horseImage={horseImage} nightImage={stargazingImage} />

        {/* Hotspot product feature explorer of the luxury Yurt interior */}
        <GerHotspots interiorImage={interiorImage} />

        {/* 7-day poetic timeline schedule deceleration */}
        <Timeline />

        {/* Introspective traveler reviews */}
        <Testimonials />

        {/* Final Conversion CTA Section with urgency and high story impact */}
        <section className="relative py-28 md:py-40 bg-[#F5F2ED] text-[#1A1A1A] border-t border-[#DED9D0] overflow-hidden text-center flex flex-col items-center justify-center">
          {/* Subtle night-sky backdrop with mask */}
          <div className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none">
            <img
              src={stargazingImage}
              alt="Luxury Mongolian Yurt under starry sky backdrop"
              className="w-full h-full object-cover select-none object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F5F2ED] via-[#F5F2ED]/60 to-[#F5F2ED]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center">
            
            {/* Exclusivity Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#DED9D0] rounded-full mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5A5A40] animate-pulse" />
              <span className="font-mono text-[9px] tracking-[0.22em] text-[#5A5A40] font-bold uppercase">
                ONLY 12 SANCTUARIES ERECTED EACH SEASON
              </span>
            </div>

            {/* Apple/Nike style ultimate punchy copy */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[#1A1A1A] tracking-tight font-light leading-[1.15] max-w-3xl mb-6">
              The steppe does not wait.<br />
              Recalibrate your existence.
            </h2>

            <p className="max-w-xl font-sans text-[#1A1A1A]/75 font-light leading-relaxed text-sm md:text-base mb-10">
              To honor the herds, respect natural pasture patterns, and guarantee absolute quiet, we strictly limit seasonal bookings to twelve private yurts. Our spring, summer, and autumn windows lease months in advance. Secure your passport credentials below.
            </p>

            {/* Main Action Call */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-8 py-4 bg-[#1A1A1A] hover:bg-[#333333] text-white font-mono text-xs tracking-widest uppercase font-bold rounded-full duration-350 transition-all hover:scale-[1.03] active:scale-[0.98] shadow-md shadow-black/10 cursor-pointer"
            >
              Book Your 7-Day Ger Stay
            </button>

            {/* Extra trust elements */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-[#1A1A1A]/40 font-mono text-[9px] tracking-widest uppercase font-semibold">
              <span>ZERO CELLULAR SIGNALS</span>
              <span className="hidden sm:inline-block text-[#DED9D0]">•</span>
              <span>100% HERDER DIRECT REVENUES</span>
              <span className="hidden sm:inline-block text-[#DED9D0]">•</span>
              <span>CHINGGIS KHAAN OVERLAND PICKS UP INCLUDED</span>
            </div>

          </div>
        </section>
      </main>

      <Footer />

      {/* Pop-up Booking Stay Configurator */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
