import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import logo from "./logo.png";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
const NavBar = () => {
  const navStyle = {
    fontFamily: "sans-serif",
    fontWeight: "200",
  };
  const [drop, setDrop] = useState(false);
  const [sdrop, setSdrop] = useState(false);
  const [tdrop, setTdrop] = useState(false);

  const handleDropdown = () => {
    setDrop(!drop);
  };
  const handleSdropdown = () => {
    setSdrop(!sdrop);
  };
  const handleTdropdown = () => {
    setTdrop(!tdrop);
  };
  return (
    <header className="py-2">
      {" "}
      <nav
        className="topnav bg-gray-50 py-2 text-black-500 border-t border-b border-gray-500 border-opacity-25 text-sm"
        style={navStyle}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className=" mr-4 flex justify-between items-center">
              <FaPhone className="mx-2" /> <span> </span> +1 512-222-1111
            </span>
            <a
              href="mailto:info@example.com"
              className="text-sm flex justify-between items-center"
            >
              <span className="flex justify-between items-center">
                <FaEnvelope className="mx-2" /> <span> </span> info@example.com
              </span>
            </a>
          </div>

          <ul className="flex items-center text-sm">
            <div className="dropdown relative inline-flex group z-50">
              <button
                id="dropdown-hover"
                type="button"
                className="dropdown-toggle inline-flex justify-center items-center gap-2 py-3 px-6 text-sm  text-dark rounded-full cursor-pointer font-thin text-center shadow-xs transition-all duration-500  hover:text-blue-500"
              >
                {" "}
                ENGLISH{" "}
                <svg
                  className="dropdown-open:rotate-180 w-2.5 h-2.5 text-white"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>
              <div
                className="dropdown-menu rounded-xl shadow-lg text-sm bg-white absolute top-full w-75 px-6 mt-0 hidden group-hover:block"
                aria-labelledby="dropdown-hover"
              >
                <ul className="py-0">
                  <li>
                    <a
                      className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                      href="javascript:;"
                    >
                      {" "}
                      ITALIAN{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                      href="javascript:;"
                    >
                      {" "}
                      SPANISH{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                      href="javascript:;"
                    >
                      {" "}
                      FRENCH{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="dropdown relative inline-flex group z-50">
              <button
                id="dropdown-hover"
                type="button"
                className="dropdown-toggle inline-flex justify-center items-center gap-2 py-3 px-6 text-sm  text-dark rounded-full cursor-pointer font-thin text-center shadow-xs transition-all duration-500 hover:text-blue-500 "
              >
                {" "}
                $ US Dollar{" "}
                <svg
                  className="dropdown-open:rotate-180 w-2.5 h-2.5 text-white"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>
              <div
                className="dropdown-menu rounded-xl shadow-lg text-sm bg-white absolute top-full w-75 mt-0 hidden group-hover:block"
                aria-labelledby="dropdown-hover"
              >
                <ul className="py-0">
                  <li>
                    <a
                      className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                      href="javascript:;"
                    >
                      {" "}
                      EUR Euro{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                      href="javascript:;"
                    >
                      {" "}
                      GBP British Pounds{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                      href="javascript:;"
                    >
                      {" "}
                      YEN Japanese Yen{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </ul>

          <div className="flex items-center ">
            <a
              href="#"
              className="mr-4 flex items-center hover:bg-gray-200"
              style={{
                borderRight: "1px solid grey",
                padding: "5px",
                boxSizing: "border-box",
              }}
            >
              <FaUser className="mx-2" /> Register
            </a>
            <a className="flex text-[15px] max-lg:py-2 px-3 hover:text-[#007bff] hover:fill-[#007bff]">
              <button className="px-4 py-2 text-sm rounded font-semibold text-[#333] border-2 border-[#333] bg-transparent">
                Sign In
              </button>
            </a>
          </div>
        </div>
      </nav>
      <header className="shadow-md font-[sans-serif] tracking-wide relative ">
        <section className="md:flex lg:items-center relative py-3 lg:px-10 px-4 border-gray-200 border-b bg-white lg:min-h-[80px] max-lg:min-h-[60px]">
          <a
            href="javascript:void(0)"
            className="max-sm:w-full max-sm:mb-3 shrink-0"
          >
            <img src={logo} alt="logo" className="logo w-[160px]" />
          </a>

          <div className="flex  w-full items-center">
            <form className="max-w-lg mx-auto">
              <div className="flex">
                <label
                  for="search-dropdown"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Your Email
                </label>
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                  type="button"
                  onClick={handleDropdown}
                >
                  All categories{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  style={{ display: drop ? "block" : "none" }}
                  className="z-10 absolute bg-white divide-y mt-10 divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        All categories
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Accesories
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Computer
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Tablet
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Search for products..."
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>

            <div className="ml-auto max-lg:mt-4">
              <ul className="flex items-center">
                <li className="cart max-lg:py-2 px-3 cursor-pointer">
                  <span className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      className="inline"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                        data-original="#000000"
                      ></path>
                    </svg>
                    <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                      0
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>
        </div>
      </header>
      <header className="flex border-b bg-white font-sans  tracking-wide relative h-14 ">
        <div className="par flex  items-center justify-between px-10 h-full gap-4 w-full">
          <div class="relative inline-block text-left">
            <div>
              <button
                onClick={() => {
                  setTdrop(!tdrop);
                }}
                type="button"
                className="inline-flex w-56 bg-blue-500 text-white h-14 justify-center items-center gap-x-1.5 rounded-md px-3 py-2 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <svg
                  className="-mr-1 h-5 w-5 text-black-400"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    d="M5 5H15M5 10H15M5 15H15"
                  />
                </svg>
                CATEGORIES
              </button>
            </div>

            <div
              class={`absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none 
              lg:block md:hidden ${tdrop ? "block" : "hidden"}
              }`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  COMPUTERS AND LAPTOPS
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  CAMERAS AND PHOTOS
                </a>
              </div>
              <div class="py-1" role="none">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                >
                  HARDWARE
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                >
                  SMARTPHONES AND TABLETS
                </a>
              </div>
              <div class="py-1" role="none">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-4"
                >
                  TV AND AUDIOS
                </a>
              </div>
            </div>
          </div>

          <header class="flex border-black  font-sans min-h-[full] tracking-wide relative z-50">
            <div class="flex flex-wrap items-center justify-between px-10 py-3 gap-4 w-full">
              <div
                style={{ display: sdrop ? "block" : "none" }}
                id="collapseMenu"
                class="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
              >
                <button
                  onClick={() => setSdrop(false)}
                  id="toggleClose"
                  class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 fill-black"
                    viewBox="0 0 320.591 320.591"
                  >
                    <path
                      d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>

                <ul class="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 md:h-full max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                  <li class="max-lg:border-b max-lg:py-3">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-blue-600 text-[15px] font-bold text-blue-600 block"
                    >
                      Home
                    </a>
                  </li>
                  <li class="group max-lg:border-b max-lg:py-3 relative">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block"
                    >
                      Pages
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        class="ml-1 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                          data-name="16"
                          data-original="#000000"
                        />
                      </svg>
                    </a>
                    <ul class="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                      <li class="border-b py-2 ">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                        >
                          About
                        </a>
                      </li>
                      <li class="border-b py-2 ">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                        >
                          Contact
                        </a>
                      </li>
                      <li class="border-b py-2 ">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                        >
                          Login
                        </a>
                      </li>
                      <li class="border-b py-2 ">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                        >
                          Sign up
                        </a>
                      </li>
                      <li class="border-b py-2 ">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="group max-lg:border-b max-lg:py-3 relative">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block"
                    >
                      Blog
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        class="ml-1 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                          data-name="16"
                          data-original="#000000"
                        />
                      </svg>
                    </a>
                    <ul class="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                      <li class="border-b py-2 ">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                        >
                          Foods
                        </a>
                      </li>
                      <li class="border-b py-2 ">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                        >
                          Sale
                        </a>
                      </li>
                      <li class="border-b py-2 ">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                        >
                          Marketing
                        </a>
                      </li>
                      <li class="border-b py-2 ">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                        >
                          Investment
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="max-lg:border-b max-lg:py-3">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                    >
                      Team
                    </a>
                  </li>
                  <li class="max-lg:border-b max-lg:py-3">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                    >
                      About
                    </a>
                  </li>
                  <li class="max-lg:border-b max-lg:py-3">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div class="flex items-center  max-lg:ml-auto">
                <span class="relative  mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    class="cursor-pointer   fill-[#333]  hover:fill-[#007bff] inline"
                    viewBox="0 0 64 64"
                    focusable="false"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    />
                  </svg>
                  <span class="absolute  left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">
                    0
                  </span>
                </span>

                <button
                  id="toggleOpen"
                  onClick={() => {
                    setSdrop(!sdrop);
                  }}
                  class="lg:hidden mr-5"
                >
                  <svg
                    class="w-7 h-7 fill-white"
                    fill="#000"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </header>
        </div>
      </header>
    </header>
  );
};

export default NavBar;
