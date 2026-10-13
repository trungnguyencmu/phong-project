/**
 * Hero banner (headline + calls-to-action over the lab photo) followed by
 * the stats card that overlaps the bottom edge of the hero.
 *
 * @format
 */

import { ArrowRightIcon } from "@heroicons/react/outline"
import { images, stats } from "./home-page-content"

export default function HeroAndStatsSection() {
  return (
    <>
      <section id="top" className="relative isolate overflow-hidden bg-slate-900">
        {/* Decorative photo; the gradient keeps the text readable on top of it */}
        <img
          src={images.hero}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 -z-10" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-36 sm:pt-28 sm:pb-44">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">
              Tư vấn · Đào tạo · Giải pháp phòng thí nghiệm
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white text-balance">
              Giải pháp toàn diện cho phòng thí nghiệm đạt chuẩn ISO 17025
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Hoa Tiên Science đồng hành cùng bạn từ tư vấn, đào tạo đến vận hành, kết hợp
              hài hòa giữa tiêu chuẩn và điều kiện thực tế của phòng thí nghiệm.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#lien-he"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-slate-900 transition-colors hover:bg-sky-100 focus-ring-on-dark"
              >
                Liên hệ tư vấn
                <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#gioi-thieu"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-base font-semibold text-white ring-1 ring-inset ring-white/40 transition-colors hover:bg-white/10 focus-ring-on-dark"
              >
                Tìm hiểu thêm
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Số liệu nổi bật" className="relative z-10 -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse items-center gap-1 px-6 py-8"
              >
                <dt className="text-base font-medium text-slate-600">{stat.label}</dt>
                <dd className="text-4xl font-extrabold tracking-tight text-slate-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
