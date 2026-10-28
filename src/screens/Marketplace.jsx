import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { marketplaceItems } from '../data'

export default function Marketplace() {
  const [cartCount, setCartCount] = useState(0)
  const [toast, setToast] = useState(false)

  const addToCart = () => {
    setCartCount(c => c + 1)
    setToast(true)
    setTimeout(() => setToast(false), 2000)
  }

  return (
    <div className="pt-20 pb-24 px-4 relative">
      {toast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-theme-safe text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-50 animate-in fade-in slide-in-from-top-2">
          Added to Cart
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-serif text-3xl font-bold">Marketplace</h2>
          <p className="text-theme-textMuted text-sm">Direct from Jharkhand's artisans</p>
        </div>
        <div className="relative p-2 bg-theme-card border border-theme-border rounded-full">
          <ShoppingCart size={24} className="text-theme-textMain" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-theme-rust text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>

      <div className="sohrai-divider mb-8"></div>

      <div className="grid grid-cols-2 gap-4">
        {marketplaceItems.map(item => (
          <div key={item.id} className="bg-theme-card border border-theme-border rounded-xl overflow-hidden flex flex-col group">
            <div className="relative h-32 overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              {item.badge && (
                <div className="absolute top-2 left-2 bg-theme-safe text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                  {item.badge}
                </div>
              )}
            </div>
            <div className="p-3 flex-1 flex flex-col">
              <h3 className="font-serif font-semibold text-theme-textMain leading-tight mb-1">{item.name}</h3>
              <p className="text-[10px] text-theme-textMuted mb-2 line-clamp-2">{item.description}</p>

              <div className="mt-auto">
                <p className="text-[10px] text-theme-accentSoft mb-1">By {item.artisan}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">₹{item.price}</span>
                  <button onClick={addToCart} className="bg-theme-bg border border-theme-border p-1.5 rounded-lg hover:bg-theme-border transition-colors">
                    <ShoppingCart size={16} />
                  </button>
                </div>
                <p className="text-[9px] text-theme-textMuted mt-1.5 pt-1.5 border-t border-theme-border">
                  Artisan receives 85%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}