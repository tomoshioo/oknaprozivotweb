import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, ArrowLeft, Menu, X, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'

function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentGallery, setCurrentGallery] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const portfolioData = [
    {
      id: 'praha',
      title: 'Realizace Praha',
      description: 'Kompletní rekonstrukce a výměna oken v Praze a okolí.',
      images: [
        '/images/portfolio/p1.jpg', '/images/portfolio/p2.jpg', '/images/portfolio/p3.jpg',
        '/images/portfolio/P4.jpg', '/images/portfolio/p5.jpg', '/images/portfolio/p6.jpg',
        '/images/portfolio/p7.jpg', '/images/portfolio/p8.jpg', '/images/portfolio/p9.jpg',
        '/images/portfolio/p91.jpg', '/images/portfolio/p92.jpg', '/images/portfolio/p93.jpg',
        '/images/portfolio/p94.jpg', '/images/portfolio/p95.jpg', '/images/portfolio/p96.jpg',
        '/images/portfolio/p97.jpg',
      ]
    },
    {
      id: 'usti',
      title: 'Realizace Ústí nad Labem',
      description: 'Zateplení fasád a modernizace domů v Ústí nad Labem.',
      images: [
        '/images/portfolio/u1.jpg', '/images/portfolio/u2.jpg', '/images/portfolio/u3.jpg',
        '/images/portfolio/u4.jpg', '/images/portfolio/u5.jpg', '/images/portfolio/u6.jpg',
      ]
    },
    {
      id: 'plzen',
      title: 'Realizace Plzeň',
      description: 'Rekonstrukce rodinných domů a instalace fotovoltaiky v Plzni.',
      images: [
        '/images/portfolio/plzen1.jpg', '/images/portfolio/plzen2.jpg',
        '/images/portfolio/plzen3.jpg', '/images/portfolio/plzen4.jpg',
      ]
    },
    {
      id: 'kladno',
      title: 'Realizace Kladno',
      description: 'Výměna oken a zateplení v Kladně a okolí.',
      images: [
        '/images/portfolio/k1.jpg', '/images/portfolio/k2.jpg', '/images/portfolio/k3.jpg',
        '/images/portfolio/k4.jpg', '/images/portfolio/k5.jpg', '/images/portfolio/k6.jpg',
        '/images/portfolio/k7.jpg', '/images/portfolio/k8.jpg', '/images/portfolio/k9.jpg',
      ]
    }
  ]

  const openLightbox = (images: string[], index: number) => {
    setCurrentGallery(images)
    setCurrentIndex(index)
    setSelectedImage(images[index])
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % currentGallery.length
    setCurrentIndex(newIndex)
    setSelectedImage(currentGallery[newIndex])
  }

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length
    setCurrentIndex(newIndex)
    setSelectedImage(currentGallery[newIndex])
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28">
            <Link to="/" className="flex items-center">
              <img src="/images/logo.png" alt="Okna Pro Život" className="h-20 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Domů</Link>
              <Link to="/katalog" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Katalog</Link>
              <Link to="/portfolio" className="text-green-500 font-medium">Portfolio</Link>
              <Link to="/#faq" className="text-gray-700 hover:text-green-500 transition-colors font-medium">FAQ</Link>
              <Link to="/kontakt" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Kontakt</Link>
            </nav>
            <div className="hidden md:flex items-center">
              <a href="tel:+420608861111" className="flex items-center gap-2 px-5 py-2.5 border-2 border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition-all font-medium">
                <Phone className="w-4 h-4" />
                <span>608 861 111</span>
              </a>
            </div>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <Link to="/" className="block w-full text-left py-2 text-gray-700 hover:text-green-500">Domů</Link>
              <Link to="/katalog" className="block w-full text-left py-2 text-gray-700 hover:text-green-500">Katalog</Link>
              <Link to="/portfolio" className="block w-full text-left py-2 text-green-500">Portfolio</Link>
              <Link to="/kontakt" className="block w-full text-left py-2 text-gray-700 hover:text-green-500">Kontakt</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-green-500 hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" /> Zpět na hlavní stránku
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Naše realizace</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Prohlédněte si naše dokončené projekty. Od výměny oken přes zateplení fasád až po kompletní rekonstrukce domů.
          </p>
        </div>
      </section>

      {/* Portfolio Sections */}
      {portfolioData.map((location) => (
        <section key={location.id} id={location.id} className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{location.title}</h2>
            </div>
            <p className="text-gray-600 mb-8">{location.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {location.images.map((image, index) => (
                <div 
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openLightbox(location.images, index)}
                >
                  <img src={image} alt={`${location.title} - ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">Zobrazit</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Máte zájem o podobnou realizaci?</h2>
          <p className="text-white/90 text-lg mb-8">Kontaktujte nás a domluvte si nezávaznou konzultaci zdarma.</p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-500 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Kontaktujte nás
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button className="absolute top-4 right-4 text-white hover:text-gray-300 z-10" onClick={closeLightbox}>
            <X className="w-8 h-8" />
          </button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            <ChevronRight className="w-10 h-10" />
          </button>
          <img src={selectedImage} alt="Portfolio" className="max-w-[90vw] max-h-[90vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">{currentIndex + 1} / {currentGallery.length}</div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="bg-white rounded-lg p-3 inline-block mb-4">
              <img src="/images/logo.png" alt="Okna Pro Život" className="h-12 w-auto" />
            </div>
              <p className="text-gray-400 text-sm mb-4">Protože na výhledu záleží</p>
              <div className="space-y-1 text-gray-400 text-sm">
                <p className="font-semibold text-white">Domy pro život s.r.o.</p>
                <p>Sokolská 1883/8</p>
                <p>Nové Město, 120 00 Praha 2</p>
                <p>IČO: 244 93 341</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Obchod: <a href="tel:+420608861111" className="hover:text-white transition-colors">608 861 111</a></p>
                <p>Realizace: <a href="tel:+420725098468" className="hover:text-white transition-colors">725 098 468</a></p>
                <p>Email: <a href="mailto:info@oknaprozivot.cz" className="hover:text-white transition-colors">info@oknaprozivot.cz</a></p>
                <p className="pt-2 text-xs">Centrála Praha:<br/>Lupáčova 849/16<br/>130 00 Praha 3 Žižkov</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rychlé odkazy</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <Link to="/" className="block hover:text-white transition-colors">Domů</Link>
                <Link to="/katalog" className="block hover:text-white transition-colors">Katalog</Link>
                <Link to="/portfolio" className="block hover:text-white transition-colors">Portfolio</Link>
                <Link to="/kontakt" className="block hover:text-white transition-colors">Kontakt</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Právní informace</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <Link to="/vop" className="block hover:text-white transition-colors">VOP pro realizace a dotace</Link>
                <Link to="/ochrana-udaju" className="block hover:text-white transition-colors">Ochrana údajů</Link>
                <Link to="/nastaveni-cookies" className="block hover:text-white transition-colors">Nastavení cookies</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 Domy pro život s.r.o. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
