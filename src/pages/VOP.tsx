import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

function VOP() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Všeobecné obchodní podmínky pro realizace a dotace</h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Úvodní ustanovení</h2>
              <p className="mb-4">
                1.1. Tyto všeobecné obchodní podmínky (dále jen „VOP") upravují vztahy mezi společností 
                <strong> Domy pro život s.r.o.</strong>, se sídlem Sokolská 1883/8, Nové Město, 120 00 Praha 2, 
                IČO: 244 93 341, zapsanou v obchodním rejstříku vedeném Městským soudem v Praze (dále jen „dodavatel"), 
                a zákazníkem (dále jen „zákazník") při poskytování služeb v oblasti rekonstrukcí rodinných domů, 
                výměny oken, zateplení fasád, instalace fotovoltaických systémů a dalších souvisejících služeb.
              </p>
              <p className="mb-4">1.2. Tyto VOP se vztahují na všechny smluvní vztahy uzavřené mezi dodavatelem a zákazníkem.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Předmět smlouvy</h2>
              <p className="mb-4">2.1. Předmětem smlouvy je provedení rekonstrukce rodinného domu, výměna oken a dveří, zateplení fasády, instalace fotovoltaického systému, tepelného čerpadla, podlahového vytápění nebo jiných stavebních prací dle specifikace uvedené v cenové nabídce a smlouvě.</p>
              <p className="mb-4">2.2. Dodavatel se zavazuje provést dílo v rozsahu a kvalitě dle smlouvy a platných technických norem.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Cena a platební podmínky</h2>
              <p className="mb-4">3.1. Cena za dílo je stanovena v cenové nabídce, která je součástí smlouvy.</p>
              <p className="mb-4">3.2. Platební podmínky:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Záloha ve výši 30% z celkové ceny před zahájením prací</li>
                <li>Další platba ve výši 40% po dosažení 50% dokončení díla</li>
                <li>Doplatek ve výši 30% po konečném předání a převzetí díla</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Termín provedení</h2>
              <p className="mb-4">4.1. Termín zahájení a dokončení díla je uveden ve smlouvě.</p>
              <p className="mb-4">4.2. Dodavatel je oprávněn prodloužit termín dokončení díla v případě nezaviněných technických problémů, nepříznivých povětrnostních podmínek, prodlení zákazníka s poskytnutím součinnosti nebo prodlení dodavatelů materiálu.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Záruka a reklamace</h2>
              <p className="mb-4">5.1. Dodavatel poskytuje záruku na provedené dílo v délce 24 měsíců od data předání a převzetí díla.</p>
              <p className="mb-4">5.2. Záruka se nevztahuje na vady způsobené neodborným zacházením, vnějšími vlivy, zásahy třetích osob nebo použitím nevhodných čisticích prostředků.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Dotace a financování</h2>
              <p className="mb-4">6.1. Dodavatel poskytuje služby spojené s administrací žádostí o dotace z programu Nová zelená úsporám a dalších dotačních programů.</p>
              <p className="mb-4">6.2. Dodavatel nezaručuje schválení dotace, neboť rozhodnutí o přidělení dotace je v kompetenci příslušného dotačního úřadu.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Odstoupení od smlouvy</h2>
              <p className="mb-4">7.1. Zákazník je oprávněn odstoupit od smlouvy do 14 dnů od jejího uzavření, pokud již nebylo započato s realizací díla.</p>
              <p className="mb-4">7.2. V případě odstoupení od smlouvy po zahájení prací je zákazník povinen uhradit dodavateli náklady vynaložené na dílo do data odstoupení.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Ochrana osobních údajů</h2>
              <p className="mb-4">8.1. Zpracování osobních údajů je upraveno v samostatném dokumentu „Ochrana osobních údajů".</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Závěrečná ustanovení</h2>
              <p className="mb-4">9.1. Tyto VOP nabývají účinnosti dnem 1. ledna 2024.</p>
              <p className="mb-4">9.2. Právní vztahy mezi dodavatelem a zákazníkem se řídí právním řádem České republiky.</p>
            </section>

            <p className="text-sm text-gray-500 mt-8">Poslední aktualizace: 1. ledna 2024</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default VOP
