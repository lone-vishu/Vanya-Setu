import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { destinations } from '../data'

export default function Home() {
  return (
    <div className="pt-20 pb-8 px-4 relative">
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold mb-2">Discover · Book</h2>
        <h2 className="font-serif text-3xl font-bold text-theme-accentSoft mb-4">Arrive Safe · Take Culture Home</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Where in Jharkhand?"
            className="w-full bg-theme-cardLight border border-theme-border rounded-full py-3 pl-4 pr-10 text-theme-textMain placeholder:text-theme-textMuted focus:outline-none focus:border-theme-accentSoft"
          />
          <Search className="absolute right-3 top-3 text-theme-textMuted" size={20} />
        </div>
      </div>

      <div className="sohrai-divider mb-8"></div>

      <div className="space-y-6">
        {destinations.map(dest => (
          <Link key={dest.id} to={`/destination/${dest.slug}`} className="block group">
            <div className="relative h-48 rounded-xl overflow-hidden mb-3">
              <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-transparent to-transparent"></div>
              <div className="absolute top-3 left-3 bg-theme-bg/80 backdrop-blur text-xs font-semibold px-2 py-1 rounded text-theme-textMain uppercase tracking-wider">
                {dest.tag}
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold">{dest.name}</h3>
              <p className="text-theme-textMuted text-sm">{dest.hook}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}