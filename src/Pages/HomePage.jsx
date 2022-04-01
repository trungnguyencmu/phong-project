/**
 * /* This example requires Tailwind CSS v2.0+
 *
 * @format
 */

import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import "./HomePage.css"
import { Animated } from "react-animated-css"

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
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
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
        <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          >
            <source src="/assets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </header>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Giới Thiệu về Lan Anh Bình Dương
            </p>
            <p className="mt-4 text-xl text-gray-500 lg:mx-auto">
              Với hơn 20 năm xây dựng và phát triển, Chúng tôi luôn đặt niềm tin của khách
              hàng lên hàng đầu và luôn tạo ra những sản phẩm đạt chất lượng tốt nhất.
              Được thành lập từ những năm 1994, với sự quyết tâm cao độ chúng tôi đã không
              ngừng phát triển từ cơ sở nhỏ trở mình thành Công Ty TNHH MTV Lan Anh Bình
              Dương vào năm 2014. Với tiêu chí giữ vững niềm tin của khách hàng và chất
              lượng sản phẩm là trên hết.
            </p>
          </div>
        </div>
      </div>
      <header className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        {/* <div className="py-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          Welcome to my site!
        </div> */}
      </header>

      <div className="grid grid-cols-3 gap-5 mx-10 h-36">
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
              Chúng tôi đã và đang nổ lực không ngừng để đổi mới và xây dựng những điều
              mới. Luôn sáng tạo trong công việc để tạo ra những giá trị mới.
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
              Luôn làm việc với tinh thần nhiệt huyết cao độ và đảm bảo chất lượng tốt
              nhất với đội ngũ nhân viên chuyên nghiệp
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
              Sự tính nhiệm và tin tưởng của khách hàng luôn là yếu tố hàng đầu của chúng
              tôi để có thể cung cấp những dịch vụ và sản phẩm một cách tốt nhất.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 p-10 bg-indigo-200">
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
            Luôn đặt niềm tin của khách hàng lên hàng đầu, nhầm đáp ứng tốt mọi nhu cầu về
            chất lượng sản phẩm mà chúng tôi đang cung cấp. Bên cạnh đó, với đội ngủ nhân
            viên đầy sáng tạo và nổ lực. Chúng tôi không ngừng cải tiến và tạo ra những
            sản phẩm mới.
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
                Phone: 0347xxxxxx
              </a>
              <a href="#" className="mr-2 hover:text-indigo-600">
                info@hoatien.com
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
          <p>© Copyright 2020. All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}
