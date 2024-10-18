import React, { useRef, useState } from "react";
import "./Ads.css";
import headset from "../assets/Headset.png";
import Canon from "../assets/Canon.png";
import phone from "../assets/iphone.png";
import Buds from "../assets/Buds.png";
import Buds2 from "../assets/Buds2.jpg";
import mic from "../assets/mic.png";
import laptop from "../assets/laptop.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
const Mini = () => {
  return (
    <div
      className="fle"
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <div className="first">
        <div className="flex mt-5 mx-5 text-2xl font-bold">
          <h2>Deals of the week</h2>
        </div>
        <img
          src={phone}
          alt=""
          style={{ width: "80%", height: "80%", margin: "auto" }}
        />
      </div>
      <div className="sec">
        {" "}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <div class="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full mb-12">
                <h2 class="text-4xl font-extrabold text-gray-800 mb-12">
                  BUDGET OPTIONS
                </h2>
                <div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 p-2">
                    <div class="  overflow-hidden  border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
                      <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          class="fill-gray-800 inline-block"
                          viewBox="0 0 64 64"
                        >
                          <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </div>
                      <div class="w-full h-[100px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                        <img
                          src={phone}
                          alt="Product 2"
                          class="h-[70%] mx-2 w-full object-cover object-fit-contain"
                        />
                      </div>
                      <div class="p-2 bg-white">
                        <h3 class="text-lg font-bold text-gray-800">
                          Canon Cam
                        </h3>
                        <h4 class="text-lg text-gray-800 font-bold mt-2">
                          $120.5
                        </h4>

                        <div class="flex space-x-2 mt-4">
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#CED5D8]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#CED5D8]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="  overflow-hidden  border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
                      <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          class="fill-gray-800 inline-block"
                          viewBox="0 0 64 64"
                        >
                          <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </div>
                      <div class="w-full h-[100px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                        <img
                          src={mic}
                          alt="Product 2"
                          class="h-[70%] mx-2 w-full object-cover object-fit-contain"
                        />
                      </div>
                      <div class="p-2 bg-white">
                        <h3 class="text-lg font-bold text-gray-800">
                          Canona mic7
                        </h3>
                        <h4 class="text-lg text-gray-800 font-bold mt-2">
                          $120.5
                        </h4>

                        <div class="flex space-x-2 mt-4">
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#CED5D8]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#CED5D8]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div class="  overflow-hidden border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
                      <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          class="fill-gray-800 inline-block"
                          viewBox="0 0 64 64"
                        >
                          <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </div>
                      <div class="w-full h-[100px]  overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                        <img
                          src={Buds}
                          alt="Product 3"
                          class="h-full mx-2 w-full object-contain"
                        />
                      </div>
                      <div class="p-2 bg-white">
                        <h3 class="text-lg font-bold text-gray-800">
                          Velvet jamz3
                        </h3>
                        <h4 class="text-lg text-gray-800 font-bold mt-2">
                          $14.5
                        </h4>

                        <div class="flex space-x-2 mt-4">
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#CED5D8]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#CED5D8]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div class="  overflow-hidden border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
                      <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          class="fill-gray-800 inline-block"
                          viewBox="0 0 64 64"
                        >
                          <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </div>
                      <div class="w-full h-[100px]  overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                        <img
                          src={laptop}
                          alt="Product 3"
                          class="h-full mx-2 w-full object-contain"
                        />
                      </div>
                      <div class="p-2 bg-white">
                        <h3 class="text-lg font-bold text-gray-800">Hp q244</h3>
                        <h4 class="text-lg text-gray-800 font-bold mt-2">
                          $12.5
                        </h4>

                        <div class="flex space-x-2 mt-4">
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#CED5D8]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#CED5D8]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 p-2">
                    <div class="  overflow-hidden  border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
                      <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          class="fill-gray-800 inline-block"
                          viewBox="0 0 64 64"
                        >
                          <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </div>
                      <div class="w-full h-[100px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                        <img
                          src={headset}
                          alt="Product 2"
                          class="h-[70%] mx-2 w-full object-cover object-fit-contain"
                        />
                      </div>
                      <div class="p-2 bg-white">
                        <h3 class="text-lg font-bold text-gray-800">
                          Zealot Boom2
                        </h3>
                        <h4 class="text-lg text-gray-800 font-bold mt-2">
                          $120.5
                        </h4>

                        <div class="flex space-x-2 mt-4">
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#CED5D8]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#CED5D8]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="  overflow-hidden  border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
                      <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          class="fill-gray-800 inline-block"
                          viewBox="0 0 64 64"
                        >
                          <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </div>
                      <div class="w-full h-[100px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                        <img
                          src={Buds}
                          alt="Product 2"
                          class="h-[70%] mx-2 w-full object-cover object-fit-contain"
                        />
                      </div>
                      <div class="p-2 bg-white">
                        <h3 class="text-lg font-bold text-gray-800">
                          Oppo teleBuds
                        </h3>
                        <h4 class="text-lg text-gray-800 font-bold mt-2">
                          $120.5
                        </h4>

                        <div class="flex space-x-2 mt-4">
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#CED5D8]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#CED5D8]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div class="  overflow-hidden border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
                      <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          class="fill-gray-800 inline-block"
                          viewBox="0 0 64 64"
                        >
                          <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </div>
                      <div class="w-full h-[100px]  overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                        <img
                          src={Buds2}
                          alt="Product 3"
                          class="h-full mx-2 w-full object-contain"
                        />
                      </div>
                      <div class="p-2 bg-white">
                        <h3 class="text-lg font-bold text-gray-800">
                          TWS EarBuds
                        </h3>
                        <h4 class="text-lg text-gray-800 font-bold mt-2">
                          $14.5
                        </h4>

                        <div class="flex space-x-2 mt-4">
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#CED5D8]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#CED5D8]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div
                      class="  overflow-hidden border-l-2 border-solid border-gray
 cursor-pointer hover:-translate-y-2 transition-all relative"
                    >
                      <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          class="fill-gray-800 inline-block"
                          viewBox="0 0 64 64"
                        >
                          <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </div>
                      <div class="w-full h-[100px]  overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                        <img
                          src={Canon}
                          alt="Product 3"
                          class="h-full w-full object-contain"
                        />
                      </div>
                      <div class="p-2 bg-white">
                        <h3 class="text-lg font-bold text-gray-800">
                          Canon Lens
                        </h3>
                        <h4 class="text-lg text-gray-800 font-bold mt-2">
                          $12.5
                        </h4>

                        <div class="flex space-x-2 mt-4">
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#facc15]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#CED5D8]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg
                            class="w-4 fill-[#CED5D8]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Mini;
