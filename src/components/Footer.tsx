'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const products = [
  { href: '/trailer-builds', label: 'Trailer Builds' },
  { href: '/custom-pumps', label: 'Custom Pumps' },
  { href: '/12v-softwash-build', label: '12V Soft Wash Build' },
  { href: '/surface-cleaners', label: 'Surface Cleaners' },
  { href: '/spray-guns', label: 'Spray Guns' },
  { href: '/contact', label: 'Equipment Consulting' },
]

const company = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/contact', label: 'Request a Quote' },
]

export default function Footer() {
  const pathname = usePathname()
  if (pathname === '/beginner-setup' || pathname === '/12v-softwash-build') return null

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg overflow-hidden shrink-0">
                <Image
                  src="/media/logo/maxpressureequipmentlogo.jpeg"
                  alt="Max Pressure Equipment"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight tracking-wide">
                  MAX PRESSURE
                </div>
                <div className="text-blue-400 text-xs leading-tight tracking-widest uppercase">
                  Equipment
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Professional pressure washing equipment built for contractors and business owners who
              demand commercial-grade performance.
            </p>
            <p className="text-slate-600 text-xs mt-3">
              Connected to Max Pressure Exterior Cleaning
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-2.5">
              {products.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2.5">
              {company.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:info@maxpressureequipment.com"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  info@maxpressureequipment.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Max Pressure Equipment. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">maxpressureequipment.com</p>
        </div>
      </div>
    </footer>
  )
}
