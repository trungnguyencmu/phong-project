/**
 * Static content for the home page: navigation, contact details, stats,
 * company values and the list of supported standards.
 * Kept in one place so the section components stay presentational.
 *
 * @format
 */

import { BeakerIcon, LightningBoltIcon, ThumbUpIcon } from "@heroicons/react/outline"

export const companyName = "Hoa Tiên Science"

// Files in /public are served from the site root, so build URLs from PUBLIC_URL
export const images = {
  logo: `${process.env.PUBLIC_URL}/logo.jpg`,
  hero: `${process.env.PUBLIC_URL}/assets/image-1.jpg`,
  about: `${process.env.PUBLIC_URL}/assets/image-2.jpg`,
}

export const navigation = [
  { name: "Giới thiệu", href: "#gioi-thieu" },
  { name: "Giá trị", href: "#gia-tri" },
  { name: "Tiêu chuẩn", href: "#tieu-chuan" },
  { name: "Liên hệ", href: "#lien-he" },
]

export const contact = {
  phoneDisplay: "0839 186 127",
  phoneHref: "tel:0839186127",
  email: "hoatienscience@gmail.com",
  emailHref: "mailto:hoatienscience@gmail.com",
}

export const stats = [
  { value: "50+", label: "Sản phẩm" },
  { value: "50+", label: "Khách hàng" },
  { value: "ISO 17025", label: "Tiêu chuẩn trọng tâm" },
]

export const values = [
  {
    name: "Sáng tạo & Nỗ lực",
    description:
      "Chúng tôi đào tạo, cả lý thuyết và thực hành, cung cấp trọn gói và xây dựng nền tảng hệ thống phòng thí nghiệm chuyên nghiệp nhất cho bạn, từ A đến Z!",
    icon: BeakerIcon,
  },
  {
    name: "Nhiệt huyết",
    description:
      "Chúng tôi tư vấn và đào tạo đầy đủ các hệ thống tiêu chuẩn quốc tế về phòng thí nghiệm, chất lượng, môi trường và an toàn thực phẩm.",
    icon: LightningBoltIcon,
  },
  {
    name: "Uy tín",
    description:
      "Đội ngũ chuyên gia có nhiều năm kinh nghiệm làm việc thực tế và trong lĩnh vực đánh giá, đào tạo và tư vấn các hệ thống quản lý.",
    icon: ThumbUpIcon,
  },
]

export const standards = [
  "ISO 17025",
  "ISO 15189",
  "ISO 9001",
  "ISO 14001",
  "ISO 22000",
  "HACCP",
  "GMP",
  "FSSC",
  "IFS",
  "HALAL",
  "BRC",
  "FDA",
  "GAP",
  "Global GAP",
  "Nông nghiệp hữu cơ",
]
