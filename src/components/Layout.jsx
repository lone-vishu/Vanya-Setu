import { Outlet, NavLink } from 'react-router-dom'
import { Compass, ShoppingBag, ShieldCheck, User } from 'lucide-react'

export default function Layout({ activeTrip }) {
  return (
    <div className="flex flex-col min-h-screen pb-16 md:pb-0 md:pt-16 max-w-lg mx-auto bg-theme-bg shadow-2xl overflow-hidden relative">

      {/* Top Nav (Desktop mainly, but acting as header on mobile) */}
      <header className="absolute top-0 w-full z-10 p-4 shrink-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐘</span>
          <h1 className="font-serif font-bold text-xl text-theme-textMain tracking-wide">
            Idea Tribe
          </h1>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 w-full max-w-lg bg-theme-card border-t border-theme-border flex justify-between px-6 py-3 z-50">
        <NavItem to="/" icon={<Compass size={24} />} label="Discover" />
        <NavItem to="/marketplace" icon={<ShoppingBag size={24} />} label="Market" />
        <div className="relative">
          <NavItem to="/safety" icon={<ShieldCheck size={24} />} label="Safety" />
          {activeTrip && (
            <span className="absolute top-0 right-1 w-2.5 h-2.5 bg-theme-safe rounded-full animate-pulse"></span>
          )}
        </div>
        <NavItem to="/profile" icon={<User size={24} />} label="Profile" />
      </nav>
    </div>
  )
}

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-theme-accentSoft' : 'text-theme-textMuted hover:text-theme-textMain'}`
      }
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </NavLink>
  )
}