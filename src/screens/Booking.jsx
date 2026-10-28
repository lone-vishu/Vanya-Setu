import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronLeft, Calendar, Users, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { destinations } from '../data'

export default function Booking({ setActiveTrip }) {
  const { slug } = useParams()
  const navigate = useNavigate()
  const dest = destinations.find(d => d.slug === slug) || destinations[0]
  const [step, setStep] = useState(1)
  const [tier, setTier] = useState('solo-female')

  const totalCost = 3500;

  const confirmBooking = () => {
    setActiveTrip(true)
    setStep(4)
  }

  return (
    <div className="min-h-screen bg-theme-bg relative flex flex-col">
      <header className="p-4 border-b border-theme-border flex items-center gap-3 bg-theme-card sticky top-0 z-10">
         {step === 4 ? (
           <Link to="/" className="p-2"><ChevronLeft size={24} /></Link>
         ) : (
           <button onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)} className="p-2">
             <ChevronLeft size={24} />
           </button>
         )}
        <h1 className="font-serif font-bold text-lg">Book: {dest.name}</h1>
      </header>

      <div className="p-4 flex-1 overflow-y-auto">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="font-serif text-xl">Select Your Experience</h2>

            <div className="space-y-4">
              <label className="block text-sm text-theme-textMuted mb-2">Dates</label>
              <div className="flex px-4 py-3 bg-theme-card border border-theme-border rounded-xl items-center gap-3">
                <Calendar size={20} className="text-theme-accentSoft"/>
                <span>Nov 12 - Nov 14, 2026</span>
              </div>

              <label className="block text-sm text-theme-textMuted mt-6 mb-2">Package Type</label>

              <div onClick={() => setTier('group')} className={`p-4 border rounded-xl cursor-pointer transition-colors ${tier === 'group' ? 'border-theme-accent bg-theme-accent/10' : 'border-theme-border bg-theme-card'}`}>
                <div className="flex gap-3 items-center mb-1">
                  <Users size={20} className="text-theme-textMain" />
                  <h3 className="font-medium text-lg">Group / Couple</h3>
                </div>
                <p className="text-sm text-theme-textMuted ml-8">Standard cultural immersion.</p>
              </div>

              <div onClick={() => setTier('solo')} className={`p-4 border rounded-xl cursor-pointer transition-colors ${tier === 'solo' ? 'border-theme-accent bg-theme-accent/10' : 'border-theme-border bg-theme-card'}`}>
                <div className="flex gap-3 items-center mb-1">
                  <UserIcon size={20} className="text-theme-textMain" />
                  <h3 className="font-medium text-lg">Solo Traveler</h3>
                </div>
                <p className="text-sm text-theme-textMuted ml-8">Independent exploration with host support.</p>
              </div>

              <div onClick={() => setTier('solo-female')} className={`p-4 border rounded-xl cursor-pointer transition-colors relative overflow-hidden ${tier === 'solo-female' ? 'border-theme-safe shadow-[0_0_15px_rgba(76,114,97,0.3)] bg-theme-safe/10' : 'border-theme-border bg-theme-card'}`}>
                <div className="flex gap-3 items-center mb-1">
                  <ShieldCheck size={20} className="text-theme-safe" />
                  <h3 className="font-medium text-lg text-theme-safe">Solo Female Experience</h3>
                </div>
                <p className="text-sm text-theme-textMuted ml-8">Includes auto-activation of Suraksha Sathi—our community safety net.</p>
                {tier === 'solo-female' && <div className="absolute top-0 right-0 p-1 bg-theme-safe text-[10px] text-white font-bold uppercase tracking-wider rounded-bl">Recommended</div>}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="font-serif text-xl border-b border-theme-border pb-3">Itinerary Preview</h2>
            <div className="relative border-l border-theme-border ml-3 pl-6 space-y-8 py-2">
              <div className="relative">
                <span className="absolute -left-[29px] top-1 w-3 h-3 bg-theme-accent rounded-full outline outline-4 outline-theme-bg"></span>
                <h4 className="font-bold text-theme-textMain">Day 1: Arrival & Roots</h4>
                <p className="text-sm text-theme-textMuted mt-1">Santhali welcome at Marang Buru Eco-Stay. Evening storytelling with the village elders.</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[29px] top-1 w-3 h-3 bg-theme-accent rounded-full outline outline-4 outline-theme-bg"></span>
                <h4 className="font-bold text-theme-textMain">Day 2: The Sacred Slopes</h4>
                <p className="text-sm text-theme-textMuted mt-1">Guided slow walk through the forest trails. Afternoon traditional cooking workshop.</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[29px] top-1 w-3 h-3 bg-theme-accent rounded-full outline outline-4 outline-theme-bg"></span>
                <h4 className="font-bold text-theme-textMain">Day 3: Art & Departure</h4>
                <p className="text-sm text-theme-textMuted mt-1">Visit artisan clusters and directly purchase crafts before check-out.</p>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="font-serif text-xl">Impact & Cost Breakdown</h2>
            <p className="text-sm text-theme-textMuted">Idea Tribe ensures your money stays in the community.</p>

            <div className="bg-theme-card border border-theme-border p-5 rounded-xl">
              <div className="text-center mb-6">
                <span className="block text-sm text-theme-textMuted">Total Package</span>
                <span className="font-serif text-4xl text-theme-textMain">₹{totalCost}</span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#E0A75C]"></div>
                    <span>To Host & Artisans (75%)</span>
                  </div>
                  <span className="font-bold">₹{(totalCost * 0.75).toFixed(0)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4C7261]"></div>
                    <span>Village Safety Fund (15%)</span>
                  </div>
                  <span className="font-bold">₹{(totalCost * 0.15).toFixed(0)}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-theme-border">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#A34331]"></div>
                    <span>Platform Upkeep (10%)</span>
                  </div>
                  <span className="font-bold">₹{(totalCost * 0.10).toFixed(0)}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-500">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-theme-safe/20 rounded-full text-theme-safe mb-2">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="font-serif text-3xl">Booking Confirmed!</h2>
            <p className="text-theme-textMuted px-4">Your journey to {dest.name} is set. e-Ticket TRP9021.</p>

            <div className="text-left bg-theme-card border border-theme-border p-5 rounded-xl mx-2 mt-8 space-y-4">
              <div>
                <span className="text-xs text-theme-textMuted">HOST CONTACT</span>
                <p className="font-medium">Ramesh Santhal • +91 98765 XXXXX</p>
              </div>
              <div className="sohrai-divider"></div>
              <div className="bg-theme-safe/10 border border-theme-safe/30 p-3 rounded-lg flex gap-3 text-sm">
                <ShieldCheck className="text-theme-safe shrink-0" />
                <div>
                  <p className="font-bold text-theme-safe">Suraksha Sathi is Active</p>
                  <p className="text-theme-textMuted mt-1">We're monitoring your check-in. The safety icon in your nav bar indicates active protection.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {step < 4 && (
        <div className="p-4 border-t border-theme-border bg-theme-card sticky bottom-0">
          <button
            onClick={() => step < 3 ? setStep(step + 1) : confirmBooking()}
            className="w-full bg-theme-accent hover:bg-theme-accentSoft text-theme-bg font-bold py-3 rounded-xl transition-colors"
          >
            {step === 1 ? 'Continue to Itinerary' : step === 2 ? 'Review Cost' : 'Pay ₹3,500'}
          </button>
        </div>
      )}
    </div>
  )
}

function UserIcon({ size, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  )
}