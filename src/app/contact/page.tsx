import type { Metadata } from 'next'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Contact & Request a Quote',
  description:
    'Request a custom build quote or get in touch with Max Pressure Equipment. Fill out the form and we\'ll respond within 1 business day.',
  openGraph: {
    title: 'Contact & Request a Quote | Max Pressure Equipment',
    description:
      'Request a custom trailer build quote or get equipment consulting from Max Pressure Equipment.',
    url: 'https://maxpressureequipment.com/contact',
  },
}

const contactInfo = [
  {
    label: 'Email',
    value: 'info@maxpressureequipment.com',
    href: 'mailto:info@maxpressureequipment.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: 'Response Time',
    value: 'Within 1 business day',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
]

const reasons = [
  {
    title: 'Custom Trailer Builds',
    description: 'Get a quote for a fully outfitted pressure washer trailer built to your spec.',
  },
  {
    title: 'Equipment Consulting',
    description: "Not sure what you need? Tell us your services and budget and we'll help you build smart.",
  },
  {
    title: 'Surface Cleaners & Guns',
    description: 'Order surface cleaners, spray guns, accessories, or downstream injector kits.',
  },
  {
    title: 'Build Upgrades',
    description: 'Upgrading an existing rig? We can help you spec out what to add or replace.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-slate-950 py-16 md:py-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.06) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Contact & Quote
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Request a Quote or Get in Touch
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Fill out the form and we&apos;ll get back to you within 1 business day — no automated
              responses, just a real answer from someone who knows pressure washing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-white font-bold text-xl mb-6">Quote Request Form</h2>
              <QuoteForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Info */}
              <div className="bg-slate-800 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-white font-bold text-base mb-5">Contact Info</h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-blue-600/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs uppercase font-semibold tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-white text-sm hover:text-blue-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What can we help with */}
              <div className="bg-slate-800 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-white font-bold text-base mb-5">We can help with</h3>
                <div className="space-y-4">
                  {reasons.map((reason) => (
                    <div key={reason.title} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-400 shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <div>
                        <p className="text-white text-sm font-medium">{reason.title}</p>
                        <p className="text-slate-400 text-sm">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote tip */}
              <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-400 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    <span className="font-semibold">For trailer builds:</span> the more detail you
                    give us — machine preference, trailer size, job types — the more accurate your
                    quote will be.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
