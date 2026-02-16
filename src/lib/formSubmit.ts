/**
 * Odeslání kontaktního formuláře přes Web3Forms (zdarma, bez backendu).
 * Později lze endpoint nahradit vlastním API pro ukládání do DB/CRM.
 * @see https://web3forms.com
 */

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

export type SubmitResult = { success: true } | { success: false; error: string }

export async function submitContactForm(form: HTMLFormElement): Promise<SubmitResult> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    return { success: false, error: 'Není nastaven klíč pro odesílání formulářů (VITE_WEB3FORMS_ACCESS_KEY).' }
  }

  const formData = new FormData(form)
  const body: Record<string, string> = { access_key: accessKey }
  formData.forEach((value, key) => {
    body[key] = typeof value === 'string' ? value : value.toString()
  })

  try {
    const res = await fetch(WEB3FORMS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    if (data.success) return { success: true }
    return { success: false, error: data.message || 'Odeslání se nezdařilo.' }
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Chyba sítě.'
    return { success: false, error: message }
  }
}
