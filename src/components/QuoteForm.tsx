'use client'

import { useState } from 'react'
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

const trailerPackageOptions = [
  'Starter Contractor Trailer Build – Starting at $6,000',
  'Entry Level Commercial Rig – Starting at $8,500',
  'Max Mayhem Build (Premium) – Starting at $14,000',
  'Not sure yet — help me pick',
]

const bufferTankOptions = [
  '65 gallon (Entry Level Commercial)',
  '125 gallon (Entry Level Commercial)',
  '225 gallon (Max Mayhem)',
  '325 gallon (Max Mayhem)',
  'Not sure yet',
]

const stainColorOptions = [
  'Regular / Normal',
  'Blue',
  'Black',
  'Red',
  'Undecided',
]

const budgetOptions = [
  'Under $5,000',
  '$5,000 – $8,500',
  '$8,500 – $14,000',
  '$14,000+',
  'Not sure yet',
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

function SelectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}

export default function QuoteForm() {
  const [state, formAction, isPending] = useActionState(submitQuote, initialState)
  const [lookingFor, setLookingFor] = useState('')

  const isTrailerBuild = lookingFor === 'Custom Trailer Build'

  const inputClass =
    'w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors'

  const selectClass =
    'w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none'

  const labelClass = 'block text-slate-300 text-sm font-medium mb-1.5'

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
        <SelectWrapper>
          <select
            id="lookingFor"
            name="lookingFor"
            required
            className={selectClass}
            defaultValue=""
            onChange={(e) => setLookingFor(e.target.value)}
          >
            <option value="" disabled>
              Select an option…
            </option>
            {lookingForOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </SelectWrapper>
      </div>

      {/* Trailer Build — Conditional Fields */}
      {isTrailerBuild && (
        <div className="space-y-5 bg-blue-950/30 border border-blue-500/20 rounded-xl p-5">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Trailer Build Details
          </p>

          <div>
            <label htmlFor="trailerPackage" className={labelClass}>
              Preferred Package
            </label>
            <SelectWrapper>
              <select
                id="trailerPackage"
                name="trailerPackage"
                className={selectClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a package…
                </option>
                {trailerPackageOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </SelectWrapper>
          </div>

          <div>
            <label htmlFor="bufferTank" className={labelClass}>
              Buffer Tank Size Preference
            </label>
            <SelectWrapper>
              <select
                id="bufferTank"
                name="bufferTank"
                className={selectClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Select tank size…
                </option>
                {bufferTankOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </SelectWrapper>
          </div>

          <div>
            <label htmlFor="stainColor" className={labelClass}>
              Trailer Wood Stain / Seal Color
            </label>
            <SelectWrapper>
              <select
                id="stainColor"
                name="stainColor"
                className={selectClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a color…
                </option>
                {stainColorOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </SelectWrapper>
            <p className="text-slate-500 text-xs mt-1.5">
              Color can be changed at time of build if you&apos;re undecided.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget Range
          </label>
          <SelectWrapper>
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
          </SelectWrapper>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            Timeline
          </label>
          <SelectWrapper>
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
          </SelectWrapper>
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
          placeholder={
            isTrailerBuild
              ? 'Any additional details about your build — machine preferences, job types, custom requests…'
              : 'Describe what you need, your current setup, or any specific requirements…'
          }
          className={`${inputClass} resize-none`}
        />
      </div>

      <SubmitButton pending={isPending} />

      <p className="text-slate-500 text-xs text-center">
        We typically respond within 1 business day. All pricing is custom quoted based on your
        options.
      </p>
    </form>
  )
}
