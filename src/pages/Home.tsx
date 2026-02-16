import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Menu, X, MapPin, Home as HomeIcon, Sun, Wind, DoorOpen, Layers, Thermometer, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { submitContactForm } from '@/lib/formSubmit'

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null)
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const faqItems = [
    { q: "Mám nárok na dotaci z programu Nová zelená úsporám?", a: "Ano, pokud vlastníte rodinný dům postavený před rokem 2013, máte nárok na dotaci. Pomůžeme vám s vyhodnocením vaší nemovitosti a zjistíme, na kolik peněz máte nárok." },
    { q: "Kolik mohu získat z dotace?", a: "Výše dotace závisí na typu opatření. Na komplexní zateplení můžete získat až 4,5 milionu Kč. Fotovoltaika může přinést až 5 500 Kč/m² pro nízkopříjmové domácnosti." },
    { q: "Vyřídíte za mě dotaci nebo si ji musím vyřizovat sám?", a: "Vyřídíme za vás veškerou administrativu včetně projektové dokumentace a energetického posudku. Postaráme se o kompletní proces od A do Z." },
    { q: "Jak dlouho celý proces rekonstrukce trvá?", a: "Délka rekonstrukce závisí na rozsahu prací. Standardní výměna oken trvá 1-2 dny, komplexní zateplení domu může trvat několik týdnů. Vždy vám předem sdělíme přesný časový harmonogram." },
    { q: "Co všechno je možné z dotace financovat?", a: "Z dotace lze financovat zateplení fasády, střechy, podlah, výměnu oken a dveří, instalaci tepelných čerpadel, fotovoltaických systémů a podlahové vytápění." },
    { q: "Je možné provést rekonstrukci i po etapách?", a: "Ano, rekonstrukci lze provádět po etapách. Pomůžeme vám naplánovat optimální postup, aby každá etapa přinášela maximální úspory a komfort." },
    { q: "Musím si hledat řemeslníky?", a: "Ne, spolupracujeme s prověřenými dodavateli a řemeslníky. Zajistíme kompletní realizaci od návrhu po dokončení." },
    { q: "Co když už jsem s rekonstrukcí začal, je možné ještě žádat o dotaci?", a: "To závisí na konkrétní situaci. Doporučujeme nás kontaktovat co nejdříve, abychom vyhodnotili vaši situaci a poradili vám s dalším postupem." },
    { q: "Kolik mě to bude celkově stát?", a: "Cena závisí na rozsahu prací a typu opatření. Po úvodní konzultaci a vyhodnocení objektu vám připravíme detailní cenovou nabídku." },
    { q: "Jak mohu začít?", a: "Jednoduše nás kontaktujte telefonicky nebo vyplňte kontaktní formulář. Domluvíme si nezávaznou konzultaci a vyhodnotíme váš projekt." },
  ]

  const services = [
    { title: "Podlahové vytápění", image: "/images/podlahove-vytapeni.jpg", icon: <Thermometer className="w-6 h-6" />, description: "Podlahové vytápění přináší pohodlí a efektivitu do každého domova. Nabízíme špičkové řešení pro instalaci podlahového vytápění, které zajišťuje rovnoměrné rozložení tepla, zlepšuje energetickou účinnost a zvyšuje celkový komfort obyvatel." },
    { title: "Zateplení fasády", image: "/images/zatepleni-fasady.jpg", icon: <HomeIcon className="w-6 h-6" />, description: "Díky programu, se kterým vám pomůžeme od A do Z, můžete získat výrazný příspěvek na zateplení vašeho domu – ať už jde o fasádu, střechu, strop pod nevytápěnou půdou, podlahy nebo další stavební části. Například u fasády se počítá s minimální tloušťkou izolace 200 mm, u střechy nebo stropu pod půdou je to minimálně 300 mm." },
    { title: "Nová okna a dveře", image: "/images/nova-okna.jpg", icon: <DoorOpen className="w-6 h-6" />, description: "Výměna oken a vchodových dveří je součástí dotované modernizace domu. Podmínkou je dodržení technických parametrů – například u běžných oken, balkonových dveří nebo posuvných prvků musí být hodnota tepelného prostupu UW max. 0,9 W/m².K, u střešních oken max. 1,0 W/m².K. U vchodových dveří nesmí UD přesáhnout 1,2 W/m².K a vše musí být odborně namontováno podle platné normy." },
    { title: "Fotovoltaika", image: "/images/fotovoltaika.jpg", icon: <Sun className="w-6 h-6" />, description: "Fotovoltaické systémy představují klíčový prvek pro dosažení energetické soběstačnosti. Poskytujeme kompletní služby od návrhu přes instalaci až po údržbu fotovoltaických panelů, abychom vám pomohli využít obnovitelnou energii a snížit vaše energetické náklady. Dotace? Až 5 500 Kč/m² pro nízkopříjmové domácnosti, 2 200 Kč/m² pro ostatní. Minimální částka podpory je 50 000 Kč." },
    { title: "Tepelná čerpadla", image: "/images/tepelne-cerpadlo.jpg", icon: <Wind className="w-6 h-6" />, description: "Tepelná čerpadla jsou efektivním a ekologickým způsobem vytápění. Nabízíme řadu řešení, včetně čerpadel vzduch-voda a země-voda, které jsou navržena tak, aby maximalizovaly účinnost vytápění a minimalizovaly dopady na životní prostředí." },
    { title: "Zateplená střecha", image: "/images/strecha.jpg", icon: <Layers className="w-6 h-6" />, description: "Zateplení střechy je klíčové pro udržení tepelného komfortu a snížení energetických nákladů vašeho domova. Nabízíme moderní řešení zateplení, včetně využití nejnovějších materiálů a technologií, které zajistí dlouhodobou účinnost a odolnost proti povětrnostním vlivům." },
  ]

  const steps = [
    { number: "01", title: "Vyhodnocení vašeho objektu", description: "Prověříme, zda se vaše nemovitost hodí pro zateplení, fotovoltaiku nebo tepelné čerpadlo." },
    { number: "02", title: "Administrace povolení", description: "Vyřešíme za vás veškerá stavební a úřední povolení." },
    { number: "03", title: "Výstavba a rekonstrukce", description: "Zajistíme kompletní realizaci efektivně a kvalitně." },
    { number: "04", title: "Dotace a financování", description: "Pomůžeme vám získat co nejvyšší dostupné dotace." },
    { number: "05", title: "Servis a údržba", description: "Po dokončení jsme vám dál k dispozici s pravidelným servisem." },
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
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-green-500 transition-colors font-medium">Domů</button>
              <Link to="/katalog" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Katalog</Link>
              <Link to="/portfolio" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Portfolio</Link>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-green-500 transition-colors font-medium">FAQ</button>
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
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left py-2 text-gray-700 hover:text-green-500">Domů</button>
              <Link to="/katalog" className="block w-full text-left py-2 text-gray-700 hover:text-green-500">Katalog</Link>
              <Link to="/portfolio" className="block w-full text-left py-2 text-gray-700 hover:text-green-500">Portfolio</Link>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 text-gray-700 hover:text-green-500">FAQ</button>
              <Link to="/kontakt" className="block w-full text-left py-2 text-gray-700 hover:text-green-500">Kontakt</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28">
        <div className="absolute inset-0">
          <img src="/images/hero-family.jpg" alt="Family in front of house" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Nejlepší poměr cena<br />výkon na trhu
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">Rychlá instalace oken</p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full text-lg font-semibold hover:bg-green-600 transition-colors">
            Kontaktujte nás
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Vaše okna pro život</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Jsme stavební a montážní firma, která se specializuje na realizace rodinných domů, 
            komplexní řešení dotací, výměnu oken, vchodových dveří a instalaci garážových vrat. 
            Díky našemu týmu a ověřeným dodavatelům dodáváme kvalitní služby na klíč – rychle, 
            profesionálně a bez starostí.
          </p>
          <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-500 text-green-500 rounded-full font-medium hover:bg-green-500 hover:text-white transition-all">
            Naše realizace <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Grants Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dotace a financování
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Díky programu <span className="font-semibold text-[#62a32c]">Nová zelená úsporám</span> snadno zrekonstruujeme Váš rodinný dům a pomůžeme získat dotaci až <span className="font-bold text-[#62a32c] text-2xl">4,5 miliónu</span>.
              </p>
              <p className="text-gray-600 mb-6">
                Program <strong>Nová zelená úsporám</strong> je státní podpora zaměřená na zvyšování energetické efektivity rodinných domů. Umožňuje žadatelům získat <strong>finanční příspěvek</strong> na komplexní zateplení, <strong>výměnu oken</strong>, <strong>instalaci tepelných čerpadel či fotovoltaických systémů</strong>, a to až do výše <strong>4,5 milionu Kč</strong>.
              </p>
              <p className="text-gray-600 mb-6">
                Pro úspěšné čerpání dotace vypracujeme odborný energetický posudek. Po schválení lze prostředky čerpat zálohově – ještě před zahájením samotné rekonstrukce, čímž je umožněna realizace i bez vysoké počáteční investice.
              </p>
              <p className="text-gray-600">
                Vyřídíme pro vás dotaci <strong>Oprav dům po babičce</strong> a <strong>NZU Light</strong>. Veškerá administrace, včetně <strong>projektové dokumentace a energetického posudku</strong>. Zajistíme vám tu nejvyšší možnou dotaci i s doložením dotace.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/images/nova-zelena.png" alt="Nová zelená úsporám" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-green-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div><div className="text-4xl md:text-5xl font-bold mb-2">250</div><div className="text-white/80 text-sm">mil. Kč</div><div className="text-white/90 text-sm mt-1">Hodnota vyřízených dotací</div></div>
            <div><div className="text-4xl md:text-5xl font-bold mb-2">+450</div><div className="text-white/90 text-sm mt-1">Úspěšně dokončených projektů</div></div>
            <div><div className="text-4xl md:text-5xl font-bold mb-2">až 65%</div><div className="text-white/90 text-sm mt-1">Úspora nákladů žadatelů</div></div>
            <div><div className="text-4xl md:text-5xl font-bold mb-2">až 90%</div><div className="text-white/80 text-sm">z původních nákladů</div><div className="text-white/90 text-sm mt-1">Roční úspora za elektřinu</div></div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Naše realizace</h2>
            <p className="text-lg text-gray-600">Od nejmenších detailů až po velké projekty</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link to="/portfolio?section=praha" className="flex items-center gap-2 px-5 py-2.5 bg-green-500/10 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition-all font-medium"><MapPin className="w-4 h-4" /> Praha</Link>
            <Link to="/portfolio?section=usti" className="flex items-center gap-2 px-5 py-2.5 bg-green-500/10 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition-all font-medium"><MapPin className="w-4 h-4" /> Ústí nad Labem</Link>
            <Link to="/portfolio?section=plzen" className="flex items-center gap-2 px-5 py-2.5 bg-green-500/10 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition-all font-medium"><MapPin className="w-4 h-4" /> Plzeň</Link>
            <Link to="/portfolio?section=kladno" className="flex items-center gap-2 px-5 py-2.5 bg-green-500/10 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition-all font-medium"><MapPin className="w-4 h-4" /> Kladno</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/portfolio?section=praha" className="group relative aspect-square overflow-hidden rounded-lg">
              <img src="/images/portfolio/p1.jpg" alt="Realizace Praha" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4"><span className="text-white font-semibold">Praha</span></div>
            </Link>
            <Link to="/portfolio?section=usti" className="group relative aspect-square overflow-hidden rounded-lg">
              <img src="/images/portfolio/u1.jpg" alt="Realizace Ústí nad Labem" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4"><span className="text-white font-semibold">Ústí nad Labem</span></div>
            </Link>
            <Link to="/portfolio?section=plzen" className="group relative aspect-square overflow-hidden rounded-lg">
              <img src="/images/portfolio/plzen1.jpg" alt="Realizace Plzeň" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4"><span className="text-white font-semibold">Plzeň</span></div>
            </Link>
            <Link to="/portfolio?section=kladno" className="group relative aspect-square overflow-hidden rounded-lg">
              <img src="/images/portfolio/k1.jpg" alt="Realizace Kladno" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4"><span className="text-white font-semibold">Kladno</span></div>
            </Link>
          </div>
          <div className="text-center mt-10">
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-500 text-green-500 rounded-full font-medium hover:bg-green-500 hover:text-white transition-all">
              Všechny projekty <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Často kladené dotazy</h2>
          <div className="space-y-2">
            {faqItems.map((item, index) => (
              <div key={index} className="group/faq rounded-lg bg-white px-5 py-0 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <button
                  type="button"
                  onClick={() => setFaqOpenIndex(faqOpenIndex === index ? null : index)}
                  className="flex justify-between items-center gap-3 w-full py-3 cursor-pointer font-medium text-gray-900 group-hover/faq:text-green-600 group-hover/faq:underline active:text-green-600 active:underline transition-colors text-left"
                >
                  <span className="flex-1 min-w-0">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 group-hover/faq:text-green-600 flex-shrink-0 transition-transform duration-200 ${faqOpenIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {faqOpenIndex === index && (
                  <div className="pb-3 pt-0 text-gray-600">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Příběhy klientů</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-gray-600 mb-6 italic">"Starší dům po prarodičích potřeboval kompletní rekonstrukci. Firma nám pomohla s návrhem řešení a vše probíhalo přesně podle domluvy. Ocenili jsme hlavně splnění termínů a průběžnou komunikaci."</p>
              <div className="flex items-center gap-4">
                <img src="/images/klara.png" alt="Klára" className="w-14 h-14 rounded-full object-cover" />
                <div><div className="font-semibold text-gray-900">Klára</div><div className="text-sm text-gray-500">Nymburk</div></div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-gray-600 mb-6 italic">"Rozhodli jsme se pro stavbu domu na klíč a od začátku jsme měli jasný přehled o ceně i postupu prací. Řemeslníci byli vstřícní a pečliví. Vše šlo hladce, bez zbytečných prodlev a překvapení. Výsledkem je dům, ve kterém se nám skvěle bydlí, a firma, kterou můžeme vřele doporučit."</p>
              <div className="flex items-center gap-4">
                <img src="/images/vlastimil.png" alt="Vlastimil" className="w-14 h-14 rounded-full object-cover" />
                <div><div className="font-semibold text-gray-900">Vlastimil</div><div className="text-sm text-gray-500">Louňovice</div></div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-gray-600 mb-6 italic">"Při rekonstrukci domu jsme chtěli využít dotaci Nová zelená úsporám, ale měli jsme obavy z administrativy. Firma nám pomohla s návrhem opatření i s kompletním vyřízením dotace. Díky tomu jsme ušetřili značnou část nákladů a rekonstrukce proběhla bez komplikací a ve stanoveném termínu."</p>
              <div className="flex items-center gap-4">
                <img src="/images/radim.png" alt="Radim" className="w-14 h-14 rounded-full object-cover" />
                <div><div className="font-semibold text-gray-900">Radim</div><div className="text-sm text-gray-500">Polička</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Jak funguje kompletní projekt</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Rekonstrukce domu může být náročná – ale nemusí. Díky kompletnímu projektu máte jistotu, že vše proběhne hladce, krok za krokem.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-green-500 mb-4">{step.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/kontakt" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full inline-block">
              Objednat konzultaci
            </Link>
          </div>
        </div>
      </section>

      {/* Na co je dotace určena */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Na co je dotace určena</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Dotace z programu Nová zelená úsporám je určena pro každého, kdo chce snížit spotřebu energie a zlepšit stav svého rodinného domu postaveného před rokem 2013. Pomáhá s financováním úprav, které přinášejí úspory, pohodlí a vyšší hodnotu nemovitosti.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? '' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <Link to="/kontakt" className="inline-flex items-center gap-2 text-green-500 font-medium hover:underline">Více informací <ArrowRight className="w-4 h-4" /></Link>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img src={service.image} alt={service.title} className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kontaktujte nás</h2>
            <p className="text-gray-600">Vyplňte formulář níže a my Vás budeme co nejdříve kontaktovat.</p>
          </div>
          <form
            className="space-y-6 bg-white rounded-xl p-8 shadow-sm"
            onSubmit={async (e) => {
              e.preventDefault()
              setFormStatus('sending')
              setFormMessage('')
              const result = await submitContactForm(e.currentTarget)
              if (result.success) {
                setFormStatus('success')
                setFormMessage('Zpráva byla odeslána. Ozveme se vám co nejdříve.')
                e.currentTarget.reset()
              } else {
                setFormStatus('error')
                setFormMessage(result.error)
              }
            }}
          >
            {formStatus === 'success' && (
              <div className="p-4 rounded-lg bg-green-50 text-green-800 text-sm">{formMessage}</div>
            )}
            {formStatus === 'error' && (
              <div className="p-4 rounded-lg bg-red-50 text-red-800 text-sm">{formMessage}</div>
            )}
            <div className="grid md:grid-cols-2 gap-6">
              <div><Label htmlFor="firstname" className="text-gray-700">Jméno</Label><Input id="firstname" name="firstname" placeholder="Vaše jméno" className="mt-2" /></div>
              <div><Label htmlFor="lastname" className="text-gray-700">Příjmení</Label><Input id="lastname" name="lastname" placeholder="Vaše příjmení" className="mt-2" /></div>
            </div>
            <div><Label htmlFor="phone" className="text-gray-700">Telefon</Label><Input id="phone" name="phone" type="tel" placeholder="+420 123 456 789" className="mt-2" /></div>
            <div><Label htmlFor="email" className="text-gray-700">Email</Label><Input id="email" name="email" type="email" placeholder="vas@email.cz" className="mt-2" /></div>
            <div><Label htmlFor="region" className="text-gray-700">Kraj</Label>
              <Select name="region" className="mt-2">
                <option value="">Vyberte kraj</option>
                {regions.map((region) => (<option key={region} value={region}>{region}</option>))}
              </Select>
            </div>
            <div>
              <Label htmlFor="message" className="text-gray-700">Vaše zpráva</Label>
              <textarea
                id="message"
                name="message"
                placeholder="Popište nám váš projekt..."
                rows={5}
                className="mt-2 w-full px-3 py-2 border border-input rounded-md text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y min-h-[100px]"
              />
            </div>
            <div className="flex items-start gap-2">
              <Checkbox id="consent" name="consent" value="Souhlasím" className="mt-1" required />
              <Label htmlFor="consent" className="text-sm text-gray-600">
                Souhlasím se <Link to="/ochrana-udaju" className="text-green-500 underline">zpracováním osobních údajů</Link> *
              </Label>
            </div>
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg font-semibold" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? 'Odesílám…' : 'Poslat'}
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

export default Home
