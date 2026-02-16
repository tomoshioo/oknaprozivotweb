import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'

function CookieSettings() {
  const [cookies, setCookies] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const saved = localStorage.getItem('cookieSettings')
    if (saved) {
      setCookies(JSON.parse(saved))
    }
  }, [])

  const handleSave = () => {
    localStorage.setItem('cookieSettings', JSON.stringify(cookies))
    localStorage.setItem('cookieConsent', 'custom')
    alert('Nastavení cookies bylo uloženo.')
  }

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true }
    setCookies(allAccepted)
    localStorage.setItem('cookieSettings', JSON.stringify(allAccepted))
    localStorage.setItem('cookieConsent', 'accepted')
    alert('Všechny cookies byly povoleny.')
  }

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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Nastavení cookies</h1>

          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p className="mb-6">
              Naše webové stránky používají cookies pro zlepšení vašeho uživatelského zážitku. 
              Zde můžete nastavit, které kategorie cookies chcete povolit.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Nezbytné cookies</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Tyto cookies jsou nezbytné pro správné fungování webových stránek. 
                    Bez těchto cookies by web nemohl fungovat správně.
                  </p>
                </div>
                <div className="flex items-center">
                  <Switch checked={cookies.necessary} disabled className="data-[state=checked]:bg-green-500" />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytické cookies</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Tyto cookies nám pomáhají pochopit, jak návštěvníci používají naše webové stránky.
                  </p>
                </div>
                <div className="flex items-center">
                  <Switch 
                    checked={cookies.analytics}
                    onCheckedChange={(checked) => setCookies({...cookies, analytics: checked})}
                    className="data-[state=checked]:bg-green-500"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketingové cookies</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Tyto cookies jsou používány k zobrazení relevantních reklam a marketingových sdělení.
                  </p>
                </div>
                <div className="flex items-center">
                  <Switch 
                    checked={cookies.marketing}
                    onCheckedChange={(checked) => setCookies({...cookies, marketing: checked})}
                    className="data-[state=checked]:bg-green-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">Uložit nastavení</Button>
            <Button onClick={handleAcceptAll} variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10 px-8 py-3">Povolit všechny cookies</Button>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Co jsou cookies?</h2>
            <p className="text-gray-600 mb-4">
              Cookies jsou malé textové soubory, které se ukládají do vašeho zařízení při návštěvě webových stránek. 
              Umožňují webu zapamatovat si vaše preference a nastavení.
            </p>
            <p className="text-sm text-gray-500">
              Pro více informací navštivte <Link to="/ochrana-udaju" className="text-green-500 hover:underline">Ochrana osobních údajů</Link>.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CookieSettings
