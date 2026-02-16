import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-green-500 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Zpět na hlavní stránku
          </Link>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Ochrana osobních údajů</h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Správce osobních údajů</h2>
              <p className="mb-4">
                Správcem osobních údajů je společnost <strong>Domy pro život s.r.o.</strong>, se sídlem 
                Sokolská 1883/8, Nové Město, 120 00 Praha 2, IČO: 244 93 341, 
                zapsaná v obchodním rejstříku vedeném Městským soudem v Praze.
              </p>
              <p className="mb-4">Kontaktní údaje správce:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Email: info@oknaprozivot.cz</li>
                <li>Telefon: 608 861 111</li>
                <li>Adresa: Sokolská 1883/8, 120 00 Praha 2</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Účel zpracování osobních údajů</h2>
              <p className="mb-4">Správce zpracovává osobní údaje pro následující účely:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Plnění smlouvy</strong> – zpracování osobních údajů je nezbytné pro uzavření a plnění smlouvy o dílo.</li>
                <li><strong>Administrace dotací</strong> – zpracování osobních údajů pro účely přípravy a podání žádosti o dotaci.</li>
                <li><strong>Marketingové účely</strong> – zasílání informací o novinkách a nabídkách služeb (pouze se souhlasem).</li>
                <li><strong>Plnění právních povinností</strong> – vedení účetních a daňových dokladů.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Kategorie zpracovávaných osobních údajů</h2>
              <p className="mb-4">Správce zpracovává následující kategorie osobních údajů:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Identifikační údaje</strong> – jméno, příjmení, datum narození, rodné číslo</li>
                <li><strong>Kontaktní údaje</strong> – adresa, telefonní číslo, emailová adresa</li>
                <li><strong>Údaje o nemovitosti</strong> – adresa nemovitosti, katastrální území</li>
                <li><strong>Údaje o smluvním vztahu</strong> – informace o uzavřených smlouvách, platební údaje</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Právní základ zpracování</h2>
              <p className="mb-4">Správce zpracovává osobní údaje na základě následujících právních titulů:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Plnění smlouvy</strong> (čl. 6 odst. 1 písm. b) GDPR)</li>
                <li><strong>Plnění právní povinnosti</strong> (čl. 6 odst. 1 písm. c) GDPR)</li>
                <li><strong>Oprávněný zájem</strong> (čl. 6 odst. 1 písm. f) GDPR)</li>
                <li><strong>Souhlas</strong> (čl. 6 odst. 1 písm. a) GDPR) – pro marketingové účely</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Doba uchování osobních údajů</h2>
              <p className="mb-4">Správce uchovává osobní údaje po dobu nezbytně nutnou k naplnění účelů zpracování:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Údaje o smluvním vztahu – 10 let (podle zákona o účetnictví)</li>
                <li>Údaje pro účely daňové evidence – 10 let (podle daňového řádu)</li>
                <li>Údaje zpracovávané na základě souhlasu – do odvolání souhlasu</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Práva subjektu údajů</h2>
              <p className="mb-4">Subjekt údajů má v souladu s GDPR následující práva:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Právo na přístup</strong> – právo získat informace o zpracování svých osobních údajů</li>
                <li><strong>Právo na opravu</strong> – právo požadovat opravu nepřesných údajů</li>
                <li><strong>Právo na výmaz</strong> – právo požadovat výmaz osobních údajů</li>
                <li><strong>Právo na omezení zpracování</strong></li>
                <li><strong>Právo na přenositelnost</strong></li>
                <li><strong>Právo vznést námitku</strong></li>
                <li><strong>Právo odvolat souhlas</strong></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
              <p className="mb-4">Naše webové stránky používají cookies pro zlepšení uživatelského zážitku. Používáme:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Nezbytné cookies</strong> – pro fungování webových stránek</li>
                <li><strong>Analytické cookies</strong> – pro analýzu návštěvnosti</li>
                <li><strong>Marketingové cookies</strong> – pro personalizaci reklam</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Kontakt a stížnosti</h2>
              <p className="mb-4">V případě dotazů nás můžete kontaktovat na info@oknaprozivot.cz.</p>
              <p className="mb-4">Stížnost můžete podat u Úřadu pro ochranu osobních údajů:</p>
              <p className="mb-4">
                <strong>Úřad pro ochranu osobních údajů</strong><br />
                Pplk. Sochora 27, 170 00 Praha 7<br />
                Web: <a href="https://www.uoou.cz" className="text-green-500 hover:underline" target="_blank" rel="noopener noreferrer">www.uoou.cz</a>
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-8">Poslední aktualizace: 1. ledna 2024</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Privacy
