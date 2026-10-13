/**
 * Closing call-to-action panel (phone + email) and the site footer.
 *
 * @format
 */

import { MailIcon, PhoneIcon } from "@heroicons/react/outline"
import { companyName, contact, images } from "./home-page-content"

export default function ContactCtaAndFooter() {
  return (
    <>
      <section id="lien-he" className="scroll-mt-16 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 px-6 py-14 sm:px-16 sm:py-20 text-center">
            <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white text-balance">
              Chúng tôi sẵn sàng trao đổi để đồng hành cùng bạn!
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-slate-900 transition-colors hover:bg-sky-100 focus-ring-on-dark"
              >
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
              <a
                href={contact.emailHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold text-white ring-1 ring-inset ring-white/40 transition-colors hover:bg-white/10 focus-ring-on-dark break-all"
              >
                <MailIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
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
          </div>
          <p className="text-sm text-slate-600">© Copyright {companyName} 2022</p>
        </div>
      </footer>
    </>
  )
}
