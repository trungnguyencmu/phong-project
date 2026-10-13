/**
 * Home page: composes the header, hero, content sections and footer.
 *
 * @format
 */

import AboutValuesAndStandardsSections from "./home-page-sections/about-values-and-standards-sections"
import ContactCtaAndFooter from "./home-page-sections/contact-cta-and-footer"
import HeroAndStatsSection from "./home-page-sections/hero-and-stats-section"
import SiteHeader from "./home-page-sections/site-header"
import "./HomePage.css"

export default function HomePage() {
  return (
    <div className="min-h-full bg-slate-50 text-slate-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-3 focus:left-3 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-slate-900 focus:shadow-lg"
      >
        Bỏ qua đến nội dung chính
      </a>
      <SiteHeader />
      <main id="main">
        <HeroAndStatsSection />
        <AboutValuesAndStandardsSections />
        <ContactCtaAndFooter />
      </main>
    </div>
  )
}
