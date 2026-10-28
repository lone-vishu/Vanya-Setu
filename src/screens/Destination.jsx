import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { ChevronLeft, Star, ShieldCheck } from 'lucide-react'
import { destinations } from '../data'

export default function Destination() {
  const { slug } = useParams()
  const dest = destinations.find(d => d.slug === slug) || destinations[0]
  const [activeTab, setActiveTab] = useState('significance')

  return (
    <div className="relative pb-24">
      {/* Hero */}
      <div className="relative h-72">
        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-theme-bg/40 to-transparent"></div>
        <Link to="/" className="absolute top-4 left-4 p-2 bg-theme-bg/60 backdrop-blur rounded-full">
          <ChevronLeft size={24} />
        </Link>
        <div className="absolute bottom-4 left-4">
          <h1 className="font-serif text-3xl font-bold">{dest.name}</h1>
          <p className="text-theme-accentSoft">{dest.hook}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-theme-border overflow-x-auto text-sm px-4 pt-2">
        <button onClick={() => setActiveTab('significance')} className={`pb-3 pr-6 font-medium whitespace-nowrap ${activeTab === 'significance' ? 'text-theme-accentSoft border-b-2 border-theme-accentSoft' : 'text-theme-textMuted'}`}>History & Significance</button>
        <button onClick={() => setActiveTab('homestays')} className={`pb-3 pr-6 font-medium whitespace-nowrap ${activeTab === 'homestays' ? 'text-theme-accentSoft border-b-2 border-theme-accentSoft' : 'text-theme-textMuted'}`}>Homestays</button>
        <button onClick={() => setActiveTab('cuisine')} className={`pb-3 pr-6 font-medium whitespace-nowrap ${activeTab === 'cuisine' ? 'text-theme-accentSoft border-b-2 border-theme-accentSoft' : 'text-theme-textMuted'}`}>Cuisine</button>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'significance' && (
          <div className="space-y-4 text-theme-textMuted leading-relaxed">
            {dest.history?.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
            <div className="sohrai-divider my-6"></div>
            <h3 className="font-serif text-xl text-theme-textMain">Living Culture</h3>
            <p>{dest.culture}</p>
          </div>
        )}

        {activeTab === 'homestays' && (
          <div className="space-y-4">
            {dest.homestays?.map(stay => (
              <div key={stay.id} className="bg-theme-card border border-theme-border p-4 rounded-xl">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-serif text-lg text-theme-textMain">{stay.name}</h4>
                    <p className="text-sm text-theme-textMuted">Hosted by {stay.host}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm bg-theme-cardLight px-2 py-1 rounded">
                    <Star size={14} className="text-theme-accentSoft fill-current" />
                    <span>{stay.rating}</span>
                  </div>
                </div>
                {stay.certified && (
                  <div className="flex items-center gap-1 text-xs text-theme-safe mt-2">
                    <ShieldCheck size={14} /> JSDM Certified Host
                  </div>
                )}
                <div className="mt-4 font-medium text-theme-accentSoft">
                  ₹{stay.price} <span className="text-xs text-theme-textMuted">/ night</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'cuisine' && (
          <div className="space-y-4">
            {dest.cuisine?.map((dish, i) => (
              <div key={i} className="bg-theme-card border border-theme-border p-4 rounded-xl">
                <h4 className="font-serif text-lg text-theme-textMain mb-1">{dish.name}</h4>
                <p className="text-sm text-theme-textMuted">{dish.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-14 left-0 right-0 max-w-lg mx-auto bg-theme-card border-t border-theme-border p-4 z-40 shadow-2xl">
        <Link to={`/book/${dest.slug}`} className="block w-full bg-theme-accent hover:bg-theme-accentSoft transition-colors text-theme-bg font-bold py-3 rounded-xl text-center shadow-[0_4px_14px_rgba(201,131,47,0.3)]">
          Book This Experience
        </Link>
      </div>
    </div>
  )
}