import { myTrips } from '../data'
import { ShieldCheck, HeartHandshake, Map, ArrowRight } from 'lucide-react'

export default function Profile() {
  return (
    <div className="pt-20 pb-24 px-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-theme-card border-2 border-theme-accentSoft rounded-full flex items-center justify-center text-2xl font-serif">
          S
        </div>
        <div>
          <h2 className="font-serif text-2xl font-bold">Sahil Verma</h2>
          <p className="text-sm text-theme-textMuted">Cultural Explorer</p>
        </div>
      </div>

      <h3 className="font-serif text-xl mb-4 text-theme-textMain flex items-center gap-2">
        <HeartHandshake size={24} className="text-theme-accentSoft" />
        Your Impact Dashboard
      </h3>

      <div className="bg-theme-card border border-theme-border rounded-xl p-5 mb-8 text-center text-sm shadow-xl">
        <p className="text-theme-textMuted mb-4">Because you travelled with Idea Tribe</p>
        <div className="flex justify-center items-end gap-3 mb-6">
          <div className="w-16 h-32 bg-theme-bg border border-theme-accentSoft rounded-t-lg relative flex items-end justify-center pb-2">
            <div className="absolute inset-x-0 bottom-0 bg-[#E0A75C]/20 h-full rounded-t-lg z-0"></div>
            <span className="font-bold z-10">75%</span>
          </div>
          <div className="w-16 h-12 bg-theme-bg border border-theme-safe rounded-t-lg relative flex items-end justify-center pb-2">
             <div className="absolute inset-x-0 bottom-0 bg-[#4C7261]/20 h-full rounded-t-lg z-0"></div>
             <span className="font-bold z-10">15%</span>
          </div>
          <div className="w-16 h-8 bg-theme-bg border border-theme-rust rounded-t-lg relative flex items-end justify-center pb-2">
             <div className="absolute inset-x-0 bottom-0 bg-[#A34331]/20 h-full rounded-t-lg z-0"></div>
             <span className="font-bold z-10">10%</span>
          </div>
        </div>

        <div className="grid grid-cols-3 text-[10px] text-theme-textMuted justify-items-center mb-6">
          <span>Host & Artisans</span>
          <span>Safety Fund</span>
          <span>Upkeep</span>
        </div>

        <div className="pt-4 border-t border-theme-border">
          <span className="block text-2xl font-serif text-theme-textMain font-bold">₹12.4 Lakh</span>
          <span className="text-sm text-theme-accentSoft">Routed to Jharkhand communities this year*</span>
        </div>
      </div>

      <div className="sohrai-divider mb-8"></div>

      <h3 className="font-serif text-xl mb-4 text-theme-textMain flex items-center gap-2">
        <Map size={24} className="text-theme-accentSoft" />
        My Trips
      </h3>

      <div className="space-y-4">
        {myTrips.map(trip => (
          <div key={trip.id} className="bg-theme-card border border-theme-border rounded-xl p-4 flex gap-4">
            <div className={`w-2 rounded-full shrink-0 ${trip.status === 'active' ? 'bg-theme-safe shadow-[0_0_8px_rgba(76,114,97,0.8)]' : 'bg-theme-border'}`}></div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-serif font-bold text-lg">{trip.destination}</h4>
                <span className="text-[10px] text-theme-textMuted bg-theme-bg px-2 py-0.5 rounded border border-theme-border">
                  {trip.id}
                </span>
              </div>
              <p className="text-xs text-theme-textMuted mb-2">{trip.dates}</p>
              <div className="flex justify-between items-end mt-4">
                <div>
                  <p className="text-[10px] uppercase text-theme-accentSoft tracking-wider font-bold mb-1">{trip.package}</p>
                  {trip.status === 'active' && (
                    <div className="flex items-center gap-1 text-[10px] text-theme-safe">
                      <ShieldCheck size={12} /> Suraksha Sathi Active
                    </div>
                  )}
                </div>
                <button className="w-8 h-8 rounded-full bg-theme-bg border border-theme-border flex items-center justify-center hover:bg-theme-border transition-colors">
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}