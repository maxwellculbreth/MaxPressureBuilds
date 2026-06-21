'use server'

export type QuoteFormState = {
  success: boolean
  message: string
} | null

export async function submitQuote(
  prevState: QuoteFormState,
  formData: FormData
): Promise<QuoteFormState> {
  const name = formData.get('name') as string
  const phone = formData.get('phone') as string
  const email = formData.get('email') as string
  const lookingFor = formData.get('lookingFor') as string
  const message = formData.get('message') as string

  if (!name || !phone || !email || !lookingFor) {
    return { success: false, message: 'Please fill in all required fields.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, message: 'Please enter a valid email address.' }
  }

  // In production: send email via Resend, Nodemailer, etc.
  // For now, log the submission data
  console.log('Quote request received:', { name, phone, email, lookingFor, message })

  return {
    success: true,
    message: `Thanks ${name}! We received your request and will be in touch within 1 business day.`,
  }
}
