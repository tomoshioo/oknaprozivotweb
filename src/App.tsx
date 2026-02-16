import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    if (pathname === '/portfolio' && search.includes('section=')) {
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, search])
  return null
}
import Home from './pages/Home'
import Katalog from './pages/Katalog'
import Portfolio from './pages/Portfolio'
import Kontakt from './pages/Kontakt'
import VOP from './pages/VOP'
import Privacy from './pages/Privacy'
import CookieSettings from './pages/CookieSettings'
import CookieConsent from './components/CookieConsent'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/vop" element={<VOP />} />
        <Route path="/ochrana-udaju" element={<Privacy />} />
        <Route path="/nastaveni-cookies" element={<CookieSettings />} />
      </Routes>
      <CookieConsent />
    </HashRouter>
  )
}

export default App
