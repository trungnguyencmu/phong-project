/**
 * Middle of the home page: company introduction, the three core values
 * and the list of standards the company consults and trains on.
 *
 * @format
 */

import { companyName, images, standards, values } from "./home-page-content"

function SectionEyebrow({ children }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
      {children}
    </p>
  )
}

export default function AboutValuesAndStandardsSections() {
  return (
    <>
      <section id="gioi-thieu" className="scroll-mt-16 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionEyebrow>Về chúng tôi</SectionEyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 text-balance">
              Giới thiệu về {companyName}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Công ty TNHH Khoa học Hoa Tiên hân hạnh là đơn vị đồng hành để tư vấn và
              cung cấp các giải pháp toàn diện cho phòng thí nghiệm vận hành và được công
              nhận theo tiêu chuẩn ISO 17025, thông qua việc kết hợp hài hòa giữa tiêu
              chuẩn và điều kiện thực tế, nhu cầu và khả năng của phòng thí nghiệm.
            </p>
          </div>
          <img
            src={images.about}
            width="4096"
            height="2048"
            loading="lazy"
            alt="Minh họa quy trình nghiên cứu, sản xuất và kiểm soát chất lượng"
            className="w-full h-auto rounded-2xl shadow-xl ring-1 ring-slate-200"
          />
        </div>
      </section>

      <section id="gia-tri" className="scroll-mt-16 py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionEyebrow>Giá trị cốt lõi</SectionEyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 text-balance">
              Vì sao chọn {companyName}
            </h2>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <li
                key={value.name}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-700 text-white">
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{value.name}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="tieu-chuan" className="scroll-mt-16 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionEyebrow>Tiêu chuẩn</SectionEyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 text-balance">
              Hệ thống tiêu chuẩn chúng tôi tư vấn và đào tạo
            </h2>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {standards.map((standard) => (
              <li
                key={standard}
                className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-base font-semibold text-slate-800"
              >
                {standard}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
