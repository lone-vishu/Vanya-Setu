import { useState, useEffect } from 'react'
import { ShieldCheck, ShieldAlert, BellRing, Phone, Settings, AlertTriangle } from 'lucide-react'

export default function SafetyDemo({ activeTrip }) {
  const [tier, setTier] = useState(0); // 0=idle, 1=check, 2=community, 3=volunteer, 4=police
  const [eta, setEta] = useState(null);

  useEffect(() => {
    if (tier === 3) {
      setEta("3 people coming: ETA 8min, 12min, 15min");
    }
    if (tier === 4) {
      setEta("Jharkhand Police Women's Help Desk alerted. Patrol dispatched.");
    }
  }, [tier])

  const triggerSimulation = () => {
    setTier(1);
    setEta(null);
  }

  const handleNeedHelp = () => {
    setTier(2);
    setTimeout(() => setTier(3), 1500);
    setTimeout(() => setTier(4), 4500);
  }

  const handleImOK = () => {
    setTier(0);
    setEta(null);
  }

  return (
    <div className="p-4 pb-24 relative min-h-screen">
      <header className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="font-serif text-3xl font-bold text-theme-safe flex items-center gap-2">
            <ShieldCheck size={32} />
            Suraksha Sathi
          </h2>
          <p className="text-theme-textMuted text-sm mt-1">Community-powered safety net</p>
        </div>
      </header>

      {/* Main Simulation Panel */}
      <div className={`border rounded-xl p-5 mb-6 transition-all duration-500 shadow-2xl ${
        tier === 0 ? 'border-theme-border bg-theme-card' :
        tier === 1 ? 'border-[#E0A75C] bg-[#E0A75C]/10' :
        tier === 2 ? 'border-[#C9832F] bg-[#C9832F]/20' :
        tier === 3 ? 'border-[#C9832F] bg-[#C9832F]/20' :
        'border-theme-rust bg-theme-rust/20 shadow-[0_0_20px_rgba(163,67,49,0.4)]'
      }`}>

        {tier === 0 && (
          <div className="text-center py-6">
            <ShieldCheck size={48} className={`mx-auto mb-3 ${activeTrip ? 'text-theme-safe' : 'text-theme-textMuted'}`} />
            <p className="font-medium text-lg text-theme-textMain mb-4">
              {activeTrip ? 'Monitoring Active Trip' : 'No Active Trip'}
            </p>
            <button onClick={triggerSimulation} className="bg-theme-cardLight border border-theme-border text-sm px-4 py-2 rounded-full hover:bg-theme-border transition-colors">
              Simulate Check-In Prompt
            </button>
          </div>
        )}

        {tier === 1 && (
          <div className="text-center py-4 animate-in zoom-in-95">
            <BellRing size={40} className="mx-auto mb-3 text-[#E0A75C] animate-bounce" />
            <h3 className="font-serif text-xl font-bold mb-1">Are you safe?</h3>
            <p className="text-sm text-theme-textMuted mb-6">Unusual motion detected near Parasnath trail.</p>

            <div className="flex gap-3 justify-center">
              <button onClick={handleImOK} className="flex-1 bg-theme-safe hover:bg-theme-safe/80 text-white font-bold py-3 rounded-xl transition-colors">
                I'm OK
              </button>
              <button onClick={handleNeedHelp} className="flex-1 bg-theme-rust hover:bg-theme-rust/80 text-white font-bold py-3 rounded-xl transition-colors shadow-[0_0_15px_rgba(163,67,49,0.5)]">
                Need Help
              </button>
            </div>
          </div>
        )}

        {tier >= 2 && (
          <div className="animate-in fade-in duration-300">
            <div className="flex items-center gap-3 mb-4 text-theme-rust">
              <AlertTriangle size={28} className="animate-pulse" />
              <h3 className="font-bold text-lg">EMERGENCY ALERT ACTIVE</h3>
            </div>

            <div className="space-y-4">
              <TierRow num={1} active={true} label="Self-Check Initiated" color="text-[#E0A75C]" />
              <TierRow num={2} active={tier >= 2} label="Community Volunteers Notified" color="text-[#C9832F]" />

              <div className="pl-11 pr-2">
                {tier === 2 && <p className="text-xs text-theme-textMuted animate-pulse">Contacting volunteers within 2km...</p>}
                {tier >= 3 && tier < 4 && (
                  <div className="bg-theme-bg/50 p-3 rounded text-sm font-medium border border-[#C9832F]/30 animate-in fade-in">
                    ✓ {eta}
                  </div>
                )}
              </div>

              <TierRow num={3} active={tier >= 3} label="Volunteer Mobilisation" color="text-[#C9832F]" />
              <TierRow num={4} active={tier >= 4} label="Police Escalation" color="text-theme-rust" />

              {tier === 4 && (
                <div className="pl-11 pr-2">
                  <div className="bg-theme-rust/10 p-3 rounded text-sm font-medium border border-theme-rust/30 animate-in slide-in-from-top-2 text-theme-rust">
                    ! {eta}
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => setTier(0)} className="w-full mt-6 bg-theme-cardLight border border-theme-border text-sm px-4 py-3 rounded-xl">
              Resolve / End Simulation
            </button>
          </div>
        )}

      </div>

      <div className="sohrai-divider my-6"></div>

      {/* Settings Panel */}
      <h3 className="font-serif text-xl mb-4">Settings & Privacy</h3>
      <div className="bg-theme-card border border-theme-border rounded-xl p-4 space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2 text-theme-textMain">
            <Phone size={16} className="text-theme-accentSoft"/>
            <span className="font-medium">Emergency Contacts</span>
          </div>
          <p className="text-sm text-theme-textMuted ml-6">Ravi (Brother) • +91 91234 XXXXX</p>
          <p className="text-sm text-theme-textMuted ml-6">Priya (Friend) • +91 99887 XXXXX</p>
        </div>

        <div className="pt-3 border-t border-theme-border">
          <div className="flex items-center gap-2 mb-2 text-theme-textMain">
            <Settings size={16} className="text-theme-accentSoft"/>
            <span className="font-medium">Interface Language</span>
          </div>
          <select className="ml-6 bg-theme-cardLight border border-theme-border rounded p-1 text-sm text-theme-textMuted">
            <option>English</option>
            <option>Hindi</option>
            <option>Santhali</option>
            <option>Mundari</option>
            <option>Kurukh</option>
            <option>Ho</option>
          </select>
        </div>

        <div className="pt-3 border-t border-theme-border">
          <p className="text-xs text-theme-textMuted bg-theme-bg p-3 rounded border border-theme-border/50">
            <strong>Privacy Note:</strong> Your location stays approximate (within 200m) until a verified volunteer accepts a rescue request. Opt-in only. All data auto-deletes after 24 hours.
          </p>
        </div>
      </div>
    </div>
  )
}

function TierRow({ num, active, label, color }) {
  return (
    <div className={`flex items-center gap-3 transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-30'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${active ? 'bg-theme-card border-2 ' + color.replace('text-', 'border-') : 'bg-theme-cardLight text-theme-textMuted'}`}>
        {num}
      </div>
      <div className={`font-medium ${active ? color : 'text-theme-textMuted'}`}>{label}</div>
    </div>
  )
}