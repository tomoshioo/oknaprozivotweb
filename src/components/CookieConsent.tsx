import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Souhlas s cookies
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Tento web používá cookies k zlepšení vašeho zážitku při procházení webu.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
            <Button 
              onClick={handleDecline}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Odmítnout
            </Button>
            <Button 
              onClick={handleAccept}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Přijmout vše
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
