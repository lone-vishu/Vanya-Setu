import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './screens/Home'
import Destination from './screens/Destination'
import Booking from './screens/Booking'
import Marketplace from './screens/Marketplace'
import Profile from './screens/Profile'
import SafetyDemo from './screens/SafetyDemo'

function App() {
  const [activeTrip, setActiveTrip] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout activeTrip={activeTrip} />}>
          <Route index element={<Home />} />
          <Route path="destination/:slug" element={<Destination />} />
          <Route path="book/:slug" element={<Booking setActiveTrip={setActiveTrip} />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="profile" element={<Profile />} />
          <Route path="safety" element={<SafetyDemo activeTrip={activeTrip} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App