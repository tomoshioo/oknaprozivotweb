import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Select } from '@/components/ui/select'
import { submitContactForm } from '@/lib/formSubmit'

function Katalog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [heroFormStatus, setHeroFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [heroFormMessage, setHeroFormMessage] = useState('')
  const [contactFormStatus, setContactFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [contactFormMessage, setContactFormMessage] = useState('')

  const salamanderWindows = [
    { title: "BluEvolution 82", image: "/images/ram-okna.png", specs: [{ label: "Těsnění", value: "3" }, { label: "Komor", value: "6" }, { label: "Stavební hloubka", value: "82mm" }] },
    { title: "BluEvolution 92", image: "/images/ram-okna.png", specs: [{ label: "Těsnění", value: "3" }, { label: "Komor", value: "6" }, { label: "Stavební hloubka", value: "92mm" }] },
    { title: "GreenEvolution flex", image: "/images/ram-okna.png", specs: [{ label: "Těsnění", value: "2/3" }, { label: "Komor", value: "5/6" }, { label: "Stavební hloubka", value: "76mm" }] },
    { title: "Greta", image: "/images/ram-okna.png", specs: [{ label: "Těsnění", value: "2" }, { label: "Komor", value: "5" }, { label: "Stavební hloubka", value: "70mm" }] },
  ]

  const develoWindows = [
    { title: "Develo modern", image: "/images/develo-modern.webp", description: "Moderní design s vysokou tepelnou izolací. Ideální volba pro novostavby i rekonstrukce." },
    { title: "Develo Standard", image: "/images/develo-standard.webp", description: "Osvědčená kvalita za dostupnou cenu. Spolehlivé řešení pro každý domov." },
    { title: "DEVELO s hliníkovým profilem", image: "/images/develo-hlinik.webp", description: "Kombinace PVC a hliníku pro maximální stabilitu a moderní vzhled." },
    { title: "DEVELO s nízkým prahem", image: "/images/develo-nizky.webp", description: "Bezbariérové řešení s nízkým prahem pro snadný přístup." },
  ]

  const primoWindows = [
    { title: "Primo 82", image: "/images/primo82.webp", description: "Špičkové 6-komorové okno s vynikajícími tepelně-izolačními vlastnostmi." },
    { title: "Primo 82-ALU", image: "/images/primo82-alu.webp", description: "Kombinace PVC profilu s hliníkovým opláštěním pro maximální odolnost." },
    { title: "Primo 82 s nízkým prahem", image: "/images/primo82-nizky.webp", description: "Bezbariérová varianta s nízkým prahem pro snadný vstup." },
    { title: "Primo 76", image: "/images/primo76.webp", description: "Kvalitní 5-komorové okno s výborným poměrem ceny a výkonu." },
    { title: "Primo 76 s nízkým prahem", image: "/images/primo76-nizky.webp", description: "Bezbariérové řešení s nízkým prahem pro komfortní používání." },
  ]

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
              <Link to="/katalog" className="text-green-500 font-medium">Katalog</Link>
              <Link to="/portfolio" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Portfolio</Link>
              <Link to="/#faq" className="text-gray-700 hover:text-green-500 transition-colors font-medium">FAQ</Link>
              <Link to="/kontakt" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Kontakt</Link>
            </nav>
            <div className="hidden md:flex items-center">
              <a href="tel:+420608861111" className="flex items-center gap-2 px-5 py-2.5 border-2 border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition-all font-medium">
                <Phone className="w-4 h-4" />
                <span>Zavolejte: 608 861 111</span>
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
              <Link to="/katalog" className="block w-full text-left py-2 text-green-500">Katalog</Link>
              <Link to="/portfolio" className="block w-full text-left py-2 text-gray-700 hover:text-green-500">Portfolio</Link>
              <Link to="/kontakt" className="block w-full text-left py-2 text-gray-700 hover:text-green-500">Kontakt</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-28">
        <div className="absolute inset-0">
          <img src="/images/katalog-hero.jpg" alt="Modern windows" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Hliníková a PVC okna</h1>
              <p className="text-xl text-white/90 mb-8">Spojují vysokou kvalitu s nadčasovým designem, Vaším pohodlím a výjimečným bezpečím.</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Konzultace zdarma</h3>
              <form
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault()
                  setHeroFormStatus('sending')
                  setHeroFormMessage('')
                  const result = await submitContactForm(e.currentTarget)
                  if (result.success) {
                    setHeroFormStatus('success')
                    setHeroFormMessage('Zpráva byla odeslána. Ozveme se vám co nejdříve.')
                    e.currentTarget.reset()
                  } else {
                    setHeroFormStatus('error')
                    setHeroFormMessage(result.error)
                  }
                }}
              >
                {heroFormStatus === 'success' && (
                  <div className="p-3 rounded-lg bg-green-50 text-green-800 text-sm">{heroFormMessage}</div>
                )}
                {heroFormStatus === 'error' && (
                  <div className="p-3 rounded-lg bg-red-50 text-red-800 text-sm">{heroFormMessage}</div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <div><Label htmlFor="firstname" className="text-gray-700 text-sm">Křestní jméno *</Label><Input id="firstname" name="firstname" placeholder="Jméno" className="mt-1" required /></div>
                  <div><Label htmlFor="lastname" className="text-gray-700 text-sm">Příjmení *</Label><Input id="lastname" name="lastname" placeholder="Příjmení" className="mt-1" required /></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><Label htmlFor="phone" className="text-gray-700 text-sm">Telefon *</Label><Input id="phone" name="phone" type="tel" placeholder="730 123 456" className="mt-1" required /></div>
                  <div><Label htmlFor="email" className="text-gray-700 text-sm">E-mail *</Label><Input id="email" name="email" type="email" placeholder="vas@email.cz" className="mt-1" required /></div>
                </div>
                <div><Label htmlFor="message" className="text-gray-700 text-sm">Vaše zpráva *</Label><textarea id="message" name="message" placeholder="Vaše zpráva" rows={3} className="w-full mt-1 px-3 py-2 border rounded-md text-sm" required /></div>
                <div className="flex items-start gap-2">
                  <Checkbox id="consent" name="consent" value="Souhlasím" className="mt-1" required />
                  <Label htmlFor="consent" className="text-xs text-gray-600">Souhlasím se <Link to="/ochrana-udaju" className="text-green-500 underline">zpracováním osobních údajů</Link></Label>
                </div>
                <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-semibold" disabled={heroFormStatus === 'sending'}>
                  {heroFormStatus === 'sending' ? 'Odesílám…' : 'Odeslat zprávu'}
                </Button>
                <p className="text-center text-sm text-gray-500">Ozveme se Vám co nejdříve</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Salamander Windows */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Katalog PVC a ALU oken</h2>
            <p className="text-lg text-gray-600">Ke všem oknům Salamander <span className="text-green-500 font-semibold">teplý distanční rámeček zdarma</span>.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {salamanderWindows.map((window, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6 flex justify-center bg-gray-50">
                  <img src={window.image} alt={window.title} className="h-48 object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{window.title}</h3>
                  <div className="space-y-2">
                    {window.specs.map((spec, sIndex) => (
                      <div key={sIndex} className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">{spec.label}</span>
                        <span className="text-green-500 font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELO Windows */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Katalog oken DEVELO</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Moderní okna s vysokou tepelnou izolací a elegantním designem pro každý typ stavby.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {develoWindows.map((window, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 flex items-center justify-center bg-gray-50">
                    <img src={window.image} alt={window.title} className="h-48 object-contain" />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{window.title}</h3>
                    <p className="text-gray-600 text-sm">{window.description}</p>
                    <button className="mt-4 inline-flex items-center gap-2 text-green-500 font-medium hover:underline text-sm">Více informací <ArrowRight className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIMO Windows */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Katalog oken PRIMO</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kvalitní PVC okna s výborným poměrem ceny a výkonu.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primoWindows.map((window, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                <div className="p-6 flex justify-center bg-gray-50">
                  <img src={window.image} alt={window.title} className="h-40 object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{window.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{window.description}</p>
                  <button className="inline-flex items-center gap-2 text-green-500 font-medium hover:underline text-sm">Více informací <ArrowRight className="w-4 h-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kontaktujte nás</h2>
            <p className="text-gray-600">Vyplňte formulář níže a my Vás budeme co nejdříve kontaktovat.</p>
          </div>
          <form
            className="space-y-6 bg-white rounded-xl p-8 shadow-sm"
            onSubmit={async (e) => {
              e.preventDefault()
              setContactFormStatus('sending')
              setContactFormMessage('')
              const result = await submitContactForm(e.currentTarget)
              if (result.success) {
                setContactFormStatus('success')
                setContactFormMessage('Zpráva byla odeslána. Ozveme se vám co nejdříve.')
                e.currentTarget.reset()
              } else {
                setContactFormStatus('error')
                setContactFormMessage(result.error)
              }
            }}
          >
            {contactFormStatus === 'success' && (
              <div className="p-4 rounded-lg bg-green-50 text-green-800 text-sm">{contactFormMessage}</div>
            )}
            {contactFormStatus === 'error' && (
              <div className="p-4 rounded-lg bg-red-50 text-red-800 text-sm">{contactFormMessage}</div>
            )}
            <div className="grid md:grid-cols-2 gap-6">
              <div><Label htmlFor="contact-firstname" className="text-gray-700">Jméno</Label><Input id="contact-firstname" name="firstname" placeholder="Vaše jméno" className="mt-2" /></div>
              <div><Label htmlFor="contact-lastname" className="text-gray-700">Příjmení</Label><Input id="contact-lastname" name="lastname" placeholder="Vaše příjmení" className="mt-2" /></div>
            </div>
            <div><Label htmlFor="contact-phone" className="text-gray-700">Telefon</Label><Input id="contact-phone" name="phone" type="tel" placeholder="+420 123 456 789" className="mt-2" /></div>
            <div><Label htmlFor="contact-email" className="text-gray-700">Email</Label><Input id="contact-email" name="email" type="email" placeholder="vas@email.cz" className="mt-2" /></div>
            <div><Label htmlFor="contact-region" className="text-gray-700">Kraj</Label>
              <Select name="region" className="mt-2">
                <option value="">Vyberte kraj</option>
                {regions.map((region) => (<option key={region} value={region}>{region}</option>))}
              </Select>
            </div>
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg font-semibold" disabled={contactFormStatus === 'sending'}>
              {contactFormStatus === 'sending' ? 'Odesílám…' : 'Poslat'}
            </Button>
          </form>
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

export default Katalog
