/**
 * Sticky site header: logo, in-page navigation, phone call-to-action
 * and a collapsible menu for small screens.
 *
 * @format
 */

import { Disclosure } from "@headlessui/react"
import { MenuIcon, PhoneIcon, XIcon } from "@heroicons/react/outline"
import { companyName, contact, images, navigation } from "./home-page-content"

export default function SiteHeader() {
  return (
    <Disclosure
      as="header"
      className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="#top" className="flex items-center gap-3 rounded-md focus-ring">
                <img
                  className="h-10 w-auto"
                  src={images.logo}
                  width="229"
                  height="162"
                  alt=""
                />
                <span className="text-lg font-bold tracking-tight text-slate-900">
                  {companyName}
                </span>
              </a>

              <nav aria-label="Điều hướng chính" className="hidden md:block">
                <ul className="flex items-center gap-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="px-3 py-2 rounded-md text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-ring"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <a
                href={contact.phoneHref}
                className="hidden md:inline-flex items-center gap-2 rounded-lg bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-800 focus-ring"
              >
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                {contact.phoneDisplay}
              </a>

              <Disclosure.Button className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-lg text-slate-700 transition-colors hover:bg-slate-100 focus-ring">
                <span className="sr-only">{open ? "Đóng menu" : "Mở menu"}</span>
                {open ? (
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel as="nav" aria-label="Điều hướng chính" className="md:hidden">
            <div className="px-4 pt-2 pb-4 space-y-1 border-t border-slate-200">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block px-3 py-3 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-ring"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <a
                href={contact.phoneHref}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-sky-700 px-4 py-3 text-base font-semibold text-white hover:bg-sky-800 focus-ring"
              >
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
