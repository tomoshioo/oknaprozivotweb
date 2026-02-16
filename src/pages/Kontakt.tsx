import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, Menu, X, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

function Kontakt() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const regions = ["Hlavní město Praha", "Středočeský kraj", "Jihočeský kraj", "Jihomoravský kraj", "Karlovarský kraj", "Královéhradecký kraj", "Liberecký kraj", "Moravskoslezský kraj", "Olomoucký kraj", "Pardubický kraj", "Plzeňský kraj", "Ústecký kraj", "Vysočina", "Zlínský kraj"]

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
              <Link to="/portfolio" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Portfolio</Link>
              <Link to="/#faq" className="text-gray-700 hover:text-green-500 transition-colors font-medium">FAQ</Link>
              <Link to="/kontakt" className="text-green-500 font-medium">Kontakt</Link>
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
              <Link to="/portfolio" className="block w-full text-left py-2 text-gray-700 hover:text-green-500">Portfolio</Link>
              <Link to="/kontakt" className="block w-full text-left py-2 text-green-500">Kontakt</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-green-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kontaktujte nás</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Máte dotazy nebo zájem o naše služby? Neváhejte nás kontaktovat. Rádi vám pomůžeme s vaším projektem.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Kontaktní informace</h2>
              
              <div className="space-y-8">
                {/* Company Info */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Sídlo společnosti</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="font-semibold text-gray-900">Domy pro život s.r.o.</p>
                    <p>Sokolská 1883/8</p>
                    <p>Nové Město</p>
                    <p>120 00 Praha 2</p>
                    <p className="pt-2"><span className="font-medium">IČO:</span> 244 93 341</p>
                  </div>
                </div>

                {/* Office */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Centrála Praha</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Lupáčova 849/16</p>
                    <p>130 00 Praha 3 Žižkov</p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Telefonní čísla</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="text-sm text-gray-500">Obchod</p>
                        <a href="tel:+420608861111" className="text-lg font-semibold text-gray-900 hover:text-green-500 transition-colors">608 861 111</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="text-sm text-gray-500">Realizace</p>
                        <a href="tel:+420725098468" className="text-lg font-semibold text-gray-900 hover:text-green-500 transition-colors">725 098 468</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Email</h3>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-green-500" />
                    <a href="mailto:info@oknaprozivot.cz" className="text-lg font-semibold text-gray-900 hover:text-green-500 transition-colors">info@oknaprozivot.cz</a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-500" />
                    Otevírací doba
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between"><span>Pondělí - Pátek:</span><span className="font-medium">8:00 - 17:00</span></div>
                    <div className="flex justify-between"><span>Sobota:</span><span className="font-medium">9:00 - 12:00</span></div>
                    <div className="flex justify-between"><span>Neděle:</span><span className="font-medium text-gray-400">Zavřeno</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Napište nám</h2>
              <form className="space-y-6 bg-gray-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstname" className="text-gray-700">Jméno *</Label>
                    <Input id="firstname" placeholder="Vaše jméno" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastname" className="text-gray-700">Příjmení *</Label>
                    <Input id="lastname" placeholder="Vaše příjmení" className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700">Telefon *</Label>
                  <Input id="phone" type="tel" placeholder="+420 123 456 789" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">Email *</Label>
                  <Input id="email" type="email" placeholder="vas@email.cz" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="region" className="text-gray-700">Kraj</Label>
                  <Select className="mt-2">
                    <option value="">Vyberte kraj</option>
                    {regions.map((region) => (<option key={region} value={region.toLowerCase()}>{region}</option>))}
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700">Vaše zpráva</Label>
                  <textarea 
                    id="message" 
                    placeholder="Popište nám váš projekt..." 
                    rows={5}
                    className="w-full mt-2 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="consent" className="mt-1" />
                  <Label htmlFor="consent" className="text-sm text-gray-600">
                    Souhlasím se <Link to="/ochrana-udaju" className="text-green-500 underline">zpracováním osobních údajů</Link> *
                  </Label>
                </div>
                <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-semibold">
                  Odeslat zprávu
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Kde nás najdete</h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.1234567890123!2d14.430123456789012!3d50.07512345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e1d1c1c1c1%3A0x1234567890abcdef!2sLup%C3%A1%C4%8Dova%20849%2F16%2C%20130%2000%20Praha%203-%C5%BDi%C5%BEkov!5e0!3m2!1scs!2scz!4v1234567890123!5m2!1scs!2scz"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - Centrála Praha"
            />
          </div>
        </div>
      </section>

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

export default Kontakt
