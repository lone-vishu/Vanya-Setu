export const destinations = [
  {
    id: 1,
    slug: 'parasnath',
    name: 'Parasnath Hills',
    image: 'https://images.unsplash.com/photo-1596541603597-90fbdfc60c38?auto=format&fit=crop&q=80&w=800',
    tag: 'Iconic',
    hook: 'Ancient trails & sacred summits',
    history: 'Parasnath, the highest mountain peak in Jharkhand, is a profound spiritual destination and ecological wonder. Nestled in the Giridih district, it is revered as "Sammed Shikharji" by Jains, where 20 of the 24 Tirthankaras attained moksha.\n\nBeyond its religious significance, the hills are home to pristine forests and Santhal tribal communities who revere the mountain as "Marang Buru" (Great Mountain). Visitors experience a unique confluence of serene ascetic traditions and vibrant tribal heritage.',
    culture: 'The surrounding villages are rich in Santhali traditions. Experience traditional drumming during local festivals and witness the deep connection between the people and the forest.',
    homestays: [
      { id: 101, name: 'Marang Buru Eco-Stay', host: 'Ramesh Santhal', price: 3500, rating: 4.8, certified: true },
      { id: 102, name: 'Giridih Heritage Home', host: 'Sunil Soren', price: 2800, rating: 4.5, certified: true },
      { id: 103, name: 'Shikharji Guest House', host: 'Anjali Devi', price: 4200, rating: 4.9, certified: true }
    ],
    cuisine: [
      { name: 'Dhuska & Ghugni', description: 'Deep-fried rice & lentil cakes served with black chickpea curry.' },
      { name: 'Peetha', description: 'Stuffed rice flour dumplings, a traditional delicacy.' },
      { name: 'Rugda Curry', description: 'Earthy mushroom-like delicacies found only in the monsoon.' }
    ]
  },
  {
    id: 2,
    slug: 'netarhat',
    name: 'Netarhat',
    image: 'https://images.unsplash.com/photo-1628122971295-88574ae87fd7?auto=format&fit=crop&q=80&w=800',
    tag: 'Underrated',
    hook: 'The Queen of Chotanagpur'
  },
  {
    id: 3,
    slug: 'betla',
    name: 'Betla National Park',
    image: 'https://images.unsplash.com/photo-1632128741369-0e788bc535e6?auto=format&fit=crop&q=80&w=800',
    tag: 'Iconic',
    hook: 'Wildlife & ancient forts'
  },
  {
    id: 4,
    slug: 'hazaribagh',
    name: 'Hazaribagh',
    image: 'https://images.unsplash.com/photo-1604595245892-23cdd22db4e4?auto=format&fit=crop&q=80&w=800',
    tag: 'Underrated',
    hook: 'Sohrai villages & tribal arts'
  },
  {
    id: 5,
    slug: 'deoghar',
    name: 'Deoghar',
    image: 'https://images.unsplash.com/photo-1599380961814-1fbc8eb914f6?auto=format&fit=crop&q=80&w=800',
    tag: 'Iconic',
    hook: 'The abode of the gods'
  }
];

export const marketplaceItems = [
  {
    id: 1,
    name: 'Sohrai Wall Art Print',
    artisan: 'Munia Devi, Hazaribagh',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1601349071514-411dc755038b?auto=format&fit=crop&q=80&w=600',
    description: 'Traditional Sohrai harvest motifs painted with natural mud and clay pigments.'
  },
  {
    id: 2,
    name: 'Dokra Metal Figurine',
    artisan: 'Ramghat Cluster',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1594833215918-2ad356a5c1a7?auto=format&fit=crop&q=80&w=600',
    description: 'Lost-wax brass casting depicting the Sarhul festival dance.'
  },
  {
    id: 3,
    name: 'Tribal Lac Bangle Set',
    artisan: 'Sushila Murmu, Ranchi',
    price: 450,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600',
    description: 'Vibrant handcrafted bangles made from natural lac resin.'
  },
  {
    id: 4,
    name: 'Dried Rugda Mushrooms',
    artisan: 'Forest Foragers Co-op',
    price: 850,
    image: 'https://images.unsplash.com/photo-1599602568600-9eec1e7373f1?auto=format&fit=crop&q=80&w=600',
    badge: 'Ships Pan-India',
    description: 'Sun-dried Jharkhand native mushrooms, a seasonal delicacy now preserved.'
  }
];

export const myTrips = [
  {
    id: 'TRP9021',
    destination: 'Parasnath Hills',
    dates: 'Nov 12 - Nov 14, 2026',
    status: 'active',
    package: 'Solo Female Experience',
    host: 'Ramesh Santhal'
  },
  {
    id: 'TRP7442',
    destination: 'Hazaribagh',
    dates: 'Aug 5 - Aug 8, 2026',
    status: 'completed',
    package: 'Group Art Trail',
    host: 'Munia Devi'
  }
];