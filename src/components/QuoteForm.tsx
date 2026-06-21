'use client'

import { useActionState } from 'react'
import { submitQuote, type QuoteFormState } from '@/app/actions'

const initialState: QuoteFormState = null

const lookingForOptions = [
  'Custom Trailer Build',
  'Surface Cleaner',
  'Spray Guns / Accessories',
  'General Equipment',
  'Equipment Consulting',
  'Other',
]

const budgetOptions = [
  'Under $500',
  '$500 – $2,000',
  '$2,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
  "Not sure yet",
]

const timelineOptions = [
  'ASAP',
  'Within 1 month',
  '1–3 months',
  'Just exploring',
]

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-6 rounded-lg transition-colors text-sm"
    >
      {pending ? 'Sending Request…' : 'Submit Quote Request'}
    </button>
  )
}

export default function QuoteForm() {
  const [state, formAction, isPending] = useActionState(submitQuote, initialState)

  if (state?.success) {
    return (
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center">
        <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-xl mb-2">Request Received!</h3>
        <p className="text-slate-300 text-sm">{state.message}</p>
      </div>
    )
  }

  const inputClass =
    'w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors'

  const selectClass =
    'w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none'

  const labelClass = 'block text-slate-300 text-sm font-medium mb-1.5'

  return (
    <form action={formAction} className="space-y-5">
      {state && !state.success && (
        <div className="bg-red-900/30 border border-red-700/50 rounded-lg px-4 py-3 text-red-300 text-sm">
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-blue-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-blue-400">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(555) 000-0000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address <span className="text-blue-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="lookingFor" className={labelClass}>
          What are you looking for? <span className="text-blue-400">*</span>
        </label>
        <div className="relative">
          <select id="lookingFor" name="lookingFor" required className={selectClass} defaultValue="">
            <option value="" disabled>
              Select an option…
            </option>
            {lookingForOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget Range
          </label>
          <div className="relative">
            <select id="budget" name="budget" className={selectClass} defaultValue="">
              <option value="" disabled>
                Select budget…
              </option>
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            Timeline
          </label>
          <div className="relative">
            <select id="timeline" name="timeline" className={selectClass} defaultValue="">
              <option value="" disabled>
                Select timeline…
              </option>
              {timelineOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us more
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Describe your setup, what machines you run, what you're hauling, or any specific requirements…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <SubmitButton pending={isPending} />

      <p className="text-slate-500 text-xs text-center">
        We typically respond within 1 business day.
      </p>
    </form>
  )
}
