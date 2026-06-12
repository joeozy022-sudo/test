import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Users, ShieldCheck, HelpCircle, Sparkles, Star, Award, Compass, CreditCard } from 'lucide-react';
import { BookingDetails } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Configuration States
  const [guests, setGuests] = useState<number>(2); // 1 or 2
  const [season, setSeason] = useState<BookingDetails['season']>('august');
  const [addons, setAddons] = useState<string[]>(['astronomy']); // Default astronomy
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  // Validation errors
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Pricing Parameters
  const baseRates = {
    june: 420,
    august: 490,
    september: 380,
  };

  const addonRates: Record<string, { label: string; price: number; desc: string }> = {
    riding: {
      label: 'Equestrian Steppe Masterclass',
      price: 450,
      desc: 'One-on-one horse-handling lessons under a native champion herdsman.'
    },
    astronomy: {
      label: 'Astronomical Sight Telescope Rig',
      price: 200,
      desc: 'Private 8-inch computerized lens telescope placed inside your Toono.'
    },
    culinary: {
      label: 'Ancestral Hearth Culinary Host',
      price: 300,
      desc: 'A dedicated herder cook cooking stone-stew khorkhog directly in your hearth.'
    }
  };

  const calculateTotal = () => {
    const daysCount = 7;
    const baseTotal = baseRates[season] * daysCount;
    const addonsTotal = addons.reduce((sum, addon) => sum + (addonRates[addon]?.price || 0), 0);
    return baseTotal + addonsTotal;
  };

  const toggleAddon = (id: string) => {
    if (addons.includes(id)) {
      setAddons(addons.filter(item => item !== id));
    } else {
      setAddons([...addons, id]);
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!fullName.trim()) errors.fullName = 'Please enter your passport name.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please provide a valid communication email.';
    }
    if (!phone.trim()) errors.phone = 'Contact number is required for overland coordination.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStep(3);
    }
  };

  if (!isOpen) return null;

  // Render passport confirmed code
  const generatedBookingCode = `ALT-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark overlay backdrop with high blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      {/* Main Modal Dialog Box */}
      <div className="relative bg-[#F5F2ED] border border-[#DED9D0] rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-xl flex flex-col md:flex-row items-stretch z-10 text-[#1A1A1A]">
        
        {/* Left Column Content - Interactive Form */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto flex flex-col justify-between max-h-[80vh] md:max-h-none custom-scrollbar">
          
          {/* Top Back/Breadcrumb progress */}
          <div className="flex items-center justify-between border-b border-[#DED9D0]/60 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] tracking-widest text-[#5A5A40] font-bold uppercase">
                STEP {step} OF 3
              </span>
              <span className="h-1 w-16 bg-[#DED9D0] rounded-full overflow-hidden block">
                <span 
                  className="h-full bg-[#5A5A40] block transition-all duration-500" 
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </span>
            </div>
            
            <button 
              onClick={onClose}
              className="p-1 rounded-full hover:bg-black/5 text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Step Components */}
          <div className="flex-1 mb-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <h3 className="font-serif text-3xl h-[1.2] text-[#1A1A1A] font-light mb-1">
                      Configure Your Steppe Retreat
                    </h3>
                    <p className="font-sans text-xs text-[#1A1A1A]/70 font-light leading-relaxed">
                      All stays are strictly 7 days of deep immersion. Tailor your structural specifications below:
                    </p>
                  </div>

                  {/* Room occupancies (Strictly limit to 1-2 space comfort) */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-[#5A5A40] font-bold tracking-widest uppercase flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#5A5A40]" />
                      YURT OCCUPANCY (MAX 2 ADULTS)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setGuests(num)}
                          className={`p-3.5 rounded-xl border font-mono text-xs text-center tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                            guests === num
                              ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold shadow-sm'
                              : 'bg-white border-[#DED9D0] text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-black/5'
                          }`}
                        >
                          {num} {num === 1 ? 'Adult' : 'Adults'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* High plateau seasons list with micro-climatic prices */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-[#5A5A40] font-bold tracking-widest uppercase mb-1">
                      CHOOSE YOUR IMMERSION SEASON
                    </label>
                    <div className="flex flex-col gap-2">
                      {(['june', 'august', 'september'] as const).map((s) => {
                        const seasonDetails = {
                          june: { label: 'Golden June Solstice', price: 420, desc: 'Lush green grasslands, crisp warm wind, midnight daylight twilight.' },
                          august: { label: 'Astral August Steppe', price: 490, desc: 'Amber grass fields, dry cloudless skies, perfect stargazing milkyway alignment.' },
                          september: { label: 'Vesper September Calm', price: 380, desc: 'Frost morning haze, mountain dust snow, majestic horse migration herds.' }
                        };
                        return (
                          <div
                            key={s}
                            onClick={() => setSeason(s)}
                            className={`p-4 rounded-xl border flex items-start gap-4 cursor-pointer transition-all ${
                              season === s
                                ? 'bg-white border-2 border-[#5A5A40] text-[#1A1A1A] shadow-sm'
                                : 'bg-white/40 border-[#DED9D0] text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:bg-white'
                            }`}
                          >
                            <div className="mt-1">
                              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                season === s ? 'border-[#5A5A40]' : 'border-[#DED9D0]'
                              }`}>
                                {season === s && <div className="w-2 h-2 rounded-full bg-[#5A5A40]" />}
                              </div>
                            </div>
                            <div className="flex-1 font-sans">
                              <div className="flex items-center justify-between">
                                <span className="font-serif text-base font-light text-[#1A1A1A]">{seasonDetails[s].label}</span>
                                <span className="font-mono text-xs font-bold text-[#5A5A40]">${seasonDetails[s].price}/night</span>
                              </div>
                              <p className="font-sans text-[11px] text-[#1A1A1A]/70 leading-normal mt-1 font-light">
                                {seasonDetails[s].desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Experience addons */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-[#5A5A40] font-bold tracking-widest uppercase mb-1">
                      OPTIONAL HERITAGE INTEGRATIONS
                    </label>
                    <div className="flex flex-col gap-2">
                      {Object.entries(addonRates).map(([id, item]) => {
                        const isIncluded = addons.includes(id);
                        return (
                          <div
                            key={id}
                            onClick={() => toggleAddon(id)}
                            className={`p-4 rounded-xl border flex items-start gap-4 cursor-pointer transition-all ${
                              isIncluded
                                ? 'bg-white border-2 border-[#5A5A40] text-[#1A1A1A] shadow-sm'
                                : 'bg-white/40 border-[#DED9D0] text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:bg-white'
                            }`}
                          >
                            <div className="mt-1">
                              <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                                isIncluded ? 'bg-[#5A5A40] border-[#5A5A40]' : 'border-[#DED9D0]'
                              }`}>
                                {isIncluded && <Check className="w-3 h-3 text-white" />}
                              </div>
                            </div>
                            <div className="flex-1 font-sans">
                              <div className="flex items-center justify-between">
                                <span className="font-serif text-sm font-light text-[#1A1A1A]">{item.label}</span>
                                <span className="font-mono text-xs text-[#5A5A40] font-bold">+${item.price}</span>
                              </div>
                              <p className="font-sans text-[11px] text-[#1A1A1A]/70 leading-normal mt-0.5 font-light">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Flow trigger to Step 2 */}
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full py-4 rounded-full bg-[#1A1A1A] hover:bg-[#333333] text-white font-mono text-xs tracking-widest uppercase font-semibold text-center mt-4 transition-colors cursor-pointer shadow-sm"
                  >
                    Proceed to Credentials
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <h3 className="font-serif text-3xl h-[1.2] text-[#1A1A1A] font-light mb-1">
                      Traveler Register
                    </h3>
                    <p className="font-sans text-xs text-[#1A1A1A]/70 font-light leading-relaxed">
                      Secure passport registration. Stays are strictly pre-cleared for logistics coordinating:
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="fullName" className="font-mono text-[9px] text-[#5A5A40] tracking-wider uppercase font-bold">
                        PASSPORT FULL NAME
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. ELEONORE COOPER"
                        className="p-4 bg-white rounded-xl border border-[#DED9D0] font-sans text-sm focus:outline-none focus:border-[#5A5A40] text-[#1A1A1A]"
                      />
                      {formErrors.fullName && (
                        <p className="font-mono text-[9px] text-amber-600">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="font-mono text-[9px] text-[#5A5A40] tracking-wider uppercase font-bold">
                        COMMUNICATION EMAIL
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. eleonore@domain.com"
                        className="p-4 bg-white rounded-xl border border-[#DED9D0] font-sans text-sm focus:outline-none focus:border-[#5A5A40] text-[#1A1A1A]"
                      />
                      {formErrors.email && (
                        <p className="font-mono text-[9px] text-amber-600">{formErrors.email}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="font-mono text-[9px] text-[#5A5A40] tracking-wider uppercase font-bold">
                        OVERLAND PHONE CONTACT
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +44 7911 123456"
                        className="p-4 bg-white rounded-xl border border-[#DED9D0] font-sans text-sm focus:outline-none focus:border-[#5A5A40] text-[#1A1A1A]"
                      />
                      {formErrors.phone && (
                        <p className="font-mono text-[9px] text-amber-600">{formErrors.phone}</p>
                      )}
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-white border border-[#DED9D0] rounded-xl mt-4">
                      <ShieldCheck className="w-5 h-5 text-[#5A5A40] flex-shrink-0" />
                      <p className="font-sans text-[10px] text-[#1A1A1A]/75 leading-normal font-light">
                        By submitting this inquiry, you confirm space availability for standard 7-day windows. We guarantee a custom herder logistics response within 12 hours.
                      </p>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 py-4 rounded-full border border-[#DED9D0] hover:bg-black/5 text-[#1A1A1A]/60 font-mono text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer"
                      >
                        Adjust Specs
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-4 rounded-full bg-[#1A1A1A] hover:bg-[#333333] text-white font-mono text-xs tracking-widest uppercase font-semibold text-center transition-all duration-300 cursor-pointer"
                      >
                        Launch Inquiry
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center gap-6 py-4"
                >
                  {/* Stamp Graphic Illustration */}
                  <div className="w-20 h-20 rounded-full bg-[#5A5A40]/10 border-2 border-dashed border-[#5A5A40] flex items-center justify-center">
                    <Compass className="w-10 h-10 text-[#5A5A40]" />
                  </div>

                  <div>
                    <span className="font-mono text-[9px] tracking-[0.4em] text-[#5A5A40] uppercase font-bold">
                      HEARTH OF ALTAN COMMITTED
                    </span>
                    <h3 className="font-serif text-3xl font-light text-[#1A1A1A] mt-1">
                      Inquiry Logged.
                    </h3>
                    <p className="font-sans text-xs text-[#1A1A1A]/70 font-light leading-relaxed max-w-sm mt-2">
                       Your passport registration is certified under Mongolian pasture heritage protocols. Check your email inbox for regional coordinator directions.
                    </p>
                  </div>

                  {/* Certified Nomad Passport block */}
                  <div className="w-full bg-white border border-[#DED9D0] rounded-2xl p-6 text-left flex flex-col gap-4 relative overflow-hidden font-sans shadow-sm">
                    
                    {/* Security stamp overlay */}
                    <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none select-none text-[#5A5A40]">
                      <Star className="w-48 h-48 fill-current" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-mono text-[9px] text-[#1A1A1A]/40 uppercase tracking-widest">VISA REFERENCE</span>
                        <span className="font-mono text-xs text-[#1A1A1A] font-bold">{generatedBookingCode}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-[9px] text-[#1A1A1A]/40 uppercase tracking-widest">VISA STATUS</span>
                        <span className="font-mono text-[10px] text-[#5A5A40] font-bold block tracking-wider uppercase">VERIFIED SECURE</span>
                      </div>
                    </div>

                    <div className="border-t border-[#DED9D0] pt-4 grid grid-cols-2 gap-y-3 gap-x-4">
                      <div>
                        <span className="font-mono text-[8px] text-[#1A1A1A]/40 uppercase tracking-widest block">TRAVELER REGISTER</span>
                        <span className="font-serif text-sm text-[#1A1A1A] block uppercase tracking-wide truncate">{fullName || 'AUTHENTIC NOMAD'}</span>
                      </div>
                      <div>
                        <span className="font-mono text-[8px] text-[#1A1A1A]/40 uppercase tracking-widest block">SANCTUARY SEASON</span>
                        <span className="font-serif text-sm text-[#1A1A1A] block uppercase tracking-wide">
                          {season === 'june' ? 'JUNE SOLSTICE' : season === 'august' ? 'AUGUST ASTRAL' : 'SEPTEMBER VESPER'}
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-[8px] text-[#1A1A1A]/40 uppercase tracking-widest block">OCCUPANTS</span>
                        <span className="font-serif text-sm text-[#1A1A1A] block">{guests} {guests === 1 ? 'Adult' : 'Adults'}</span>
                      </div>
                      <div>
                        <span className="font-mono text-[8px] text-[#1A1A1A]/40 uppercase tracking-widest block">DURATION DELIMIT</span>
                        <span className="font-serif text-sm text-[#1A1A1A] block font-normal">7 pastoral nights</span>
                      </div>
                    </div>

                    <div className="border-t border-[#DED9D0] pt-4 flex flex-col gap-1.5">
                      <span className="font-mono text-[8px] text-[#1A1A1A]/40 uppercase tracking-widest block">COMMITTED UPGRADES</span>
                      <div className="flex flex-wrap gap-1.5">
                        {addons.length === 0 ? (
                          <span className="font-sans text-[10px] text-[#1A1A1A]/50 italic">None selected</span>
                        ) : (
                          addons.map(addon => (
                            <span key={addon} className="font-mono text-[9px] bg-[#F5F2ED] border border-[#DED9D0] py-1 px-2.5 rounded text-[#5A5A40] font-semibold">
                              {addon === 'riding' ? 'EQUESTRIAN CLASS' : addon === 'astronomy' ? 'COSMIC RIG' : 'HEARTH COOK'}
                            </span>
                          ))
                        )}
                      </div>
                    </div>

                    {/* Blessing message */}
                    <div className="border-t border-[#DED9D0] pt-4 text-center mt-1">
                      <p className="font-serif text-xs italic text-[#5A5A40]">
                        "Алтан Алхмаар Амар Сайн Яваарай"
                      </p>
                      <p className="font-sans text-[9px] text-[#1A1A1A]/40 uppercase tracking-widest mt-0.5">
                        May your golden footstep travel in pristine peace
                      </p>
                    </div>

                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      onClose();
                    }}
                    className="w-full py-4 rounded-full border border-[#DED9D0] hover:bg-black/5 text-[#1A1A1A] font-mono text-xs tracking-widest uppercase transition-colors cursor-pointer"
                  >
                    Close Sanctuary Passport
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Right Column Content - High-end Invoice Spec (Col 8 to 12 in flex mockup style) */}
        <div className="hidden md:flex md:w-[320px] bg-white border-l border-[#DED9D0] p-8 flex-col justify-between aspect-square md:aspect-auto">
          
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#5A5A40] font-bold uppercase block border-b border-[#DED9D0] pb-2">
              Stay Details Tally
            </span>

            {/* Spec Breakdown List */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="text-[#1A1A1A]/50">Base Shelter Rate</span>
                <span className="text-[#1A1A1A] font-mono">${baseRates[season]}/night</span>
              </div>
              
              <div className="flex items-center justify-between text-xs font-sans border-b border-[#DED9D0]/60 pb-4">
                <span className="text-[#1A1A1A]/50">Immersion Length</span>
                <span className="text-[#1A1A1A] font-semibold font-serif">7 Nights</span>
              </div>

              {/* Incremental items detailing extra upgrades */}
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] text-[#1A1A1A]/40 tracking-widest block uppercase font-bold">UPGRADES ADDED:</span>
                
                {addons.length === 0 ? (
                  <span className="font-sans text-xs text-[#1A1A1A]/50 leading-relaxed italic">Essential shelter stay only</span>
                ) : (
                  <div className="flex flex-col gap-3">
                    {addons.map(addon => (
                      <div key={addon} className="flex items-start justify-between text-[11px] font-sans">
                        <span className="text-[#1A1A1A]/60 max-w-[160px] truncate block font-serif italic">{addonRates[addon]?.label}</span>
                        <span className="text-[#5A5A40] font-mono flex-shrink-0 font-bold">+${addonRates[addon]?.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Checkout total price tag */}
          <div className="border-t border-[#DED9D0] pt-6 mt-8 flex flex-col gap-4">
            
            <div className="flex items-end justify-between">
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-[#1A1A1A]/40 tracking-widest uppercase font-bold">INVESTMENT TOTAL</span>
                <span className="font-sans text-[10px] text-[#1A1A1A]/50 font-light leading-normal">Guaranteed full program</span>
              </div>
              <span className="font-mono text-3xl font-light text-[#1A1A1A]">
                ${calculateTotal().toLocaleString()}
              </span>
            </div>

            {/* Security Guarantee indicators */}
            <div className="p-4 rounded-xl bg-[#F5F2ED] border border-[#DED9D0] flex gap-2">
              <ShieldCheck className="w-4 h-4 text-[#5A5A40] flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-mono text-[8px] text-[#5A5A40] font-bold uppercase tracking-wider">HERDER DIRECT IMPACT</span>
                <p className="font-sans text-[9px] text-[#1A1A1A]/70 leading-relaxed font-light mt-0.5">
                  100% of custom experiences revenue is paid directly to host nomadic herder associations.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
