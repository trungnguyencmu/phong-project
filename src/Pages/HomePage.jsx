/**
 * /* This example requires Tailwind CSS v2.0+
 *
 * @format
 */

import { Disclosure } from "@headlessui/react"
import { BellIcon } from "@heroicons/react/outline"
import { Animated } from "react-animated-css"
import "./HomePage.css"

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
]
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function HomePage() {

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <div>
        <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden custom-img-2">
          {/* <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          >
            <source src="/assets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </header>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Giới thiệu về Hoa Tiên Science
            </p>
            <p className="mt-4 text-xl text-gray-500 lg:mx-auto">
              Công ty TNHH Khoa học Hoa Tiên hân hạnh là đơn vị đồng hành để tư vấn và
              cung cấp các giải pháp toàn diện cho phòng thí nghiệm vận hành và được công
              nhận theo tiêu chuẩn ISO 17025, thông qua việc kết hợp hài hoà giữa tiêu
              chuẩn và điều kiện thực tế, nhu cầu và khả năng của phòng thí nghiệm.
            </p>
          </div>
        </div>
      </div>
      <header className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        {/* <div className="py-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          Welcome to my site!
        </div> */}
      </header>

      <div className="grid gap-5 m-10 md:grid-cols-3 sm:grid-cols-1">
        <div className="flex justify-start flex-row	gap-y-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="ml-3">
            <p className="text-xl leading-8 font-extrabold tracking-tight text-gray-900">
              Sáng tạo & Nổ Lực
            </p>
            <p className="mt-0 text-lg text-gray-500">
              Chúng tôi đào tạo, cả lý thuyết và thực hành, cung cấp trọn gói và xây dựng
              nền tảng hệ thống phòng thí nghiệm chuyên nghiệp nhất cho bạn, từ A đến Z!
            </p>
          </div>
        </div>
        <div className="flex justify-start flex-row	gap-y-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="ml-3">
            <p className="text-xl leading-8 font-extrabold tracking-tight text-gray-900">
              Nhiệt Huyết
            </p>
            <p className="mt-0 text-lg text-gray-500">
              Bên cạnh đó, chúng tôi còn đào tạo và tư vấn đầy đủ các hệ thống tiêu chuẩn
              như ISO 15189, ISO 9001, ISO 14001, HACCP, GMP, ISO 22000, FSSC, IFS, HALAL,
              BRC, FDA, GAP, Global GAP, Nông nghiệp hữu cơ...
            </p>
          </div>
        </div>
        <div className="flex justify-start flex-row	gap-y-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          </div>

          <div className="ml-3">
            <p className="text-xl leading-8 font-extrabold tracking-tight text-gray-900">
              Uy Tín
            </p>
            <p className="mt-0 text-lg text-gray-500">
              Đội ngũ chuyên gia có nhiều năm kinh nghiệm làm việc thực tế và trong lĩnh
              vực đánh giá, đào tạo và tư vấn các hệ thống quản lý.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 p-10 bg-indigo-200 md:grid-cols-3 sm:grid-cols-1 ">
        <div className="flex justify-start flex-col gap-y-2 justify-center items-center">
          <div>
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1000}
              animationOutDuration={1000}
            >
              <p
                id="nbr"
                className="text-6xl leading-8 font-extrabold tracking-tight text-gray-900"
              >
                100+
              </p>
            </Animated>
          </div>

          <div className="mt-3">
            <p className="text-xl leading-8 font-extrabold tracking-tight text-gray-900">
              Sản Phẩm
            </p>
          </div>
        </div>
        <div className="flex justify-start flex-col gap-y-2 justify-center items-center">
          <div>
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={2000}
              animationOutDuration={2000}
            >
              <p
                id="nbr"
                className="text-6xl leading-8 font-extrabold tracking-tight text-gray-900"
              >
                1000+
              </p>
            </Animated>
          </div>

          <div className="mt-3">
            <p className="text-xl leading-8 font-extrabold tracking-tight text-gray-900">
              Khách Hàng
            </p>
          </div>
        </div>
        <div className="flex justify-start flex-col gap-y-2 justify-center items-center">
          <p className="mt-0 text-lg text-gray-500">
            Chúng tôi luôn sẵn sàng trao đổi để cùng đồng hành với bạn!
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100">
        <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
          <div className="p-5 sm:w-8/12">
            <h3 className="font-bold text-3xl text-indigo-600 mb-4">Hoa Tien</h3>

            <div className="flex flex-col text-gray-500 uppercase text-sm">
              <a href="#" className="mr-2 hover:text-indigo-600">
                Phone: 0839 186 127
              </a>
              <a
                href="mailto:hoatienscience@gmail.com"
                className="mr-2 hover:text-indigo-600"
              >
                hoatienscience@gmail.com
              </a>
            </div>
          </div>
          <div className="p-5 sm:w-4/12">
            <h3 className="font-medium text-lg text-indigo-600 mb-4">
              Subscribe to our Newsletter
            </h3>
            <form className="mt-4">
              <input
                className="border rounded w-full h-10 px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="username@email.com"
              />
            </form>
          </div>
        </div>
        <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
          <p>© Copyright Hoa Tiên Science 2022</p>
        </div>
      </div>
    </>
  )
}
