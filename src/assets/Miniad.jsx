import React, { useEffect } from "react";
import { useState } from "react";
import "./Ads.css";
import headset from "../assets/Headset.png";
import Canon from "../assets/Canon.png";
import phone from "../assets/iphone.png";
import Buds from "../assets/buds.png";
import Buds2 from "../assets/buds2.jpg";
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
  const items = [
    {
      item: "Xukat Headphones Pro",
      price: "199",
      image: headset,
    },
    {
      item: "Canon EOS ultralight",
      price: "1299",
      image: Canon,
    },

    {
      item: "Buds Pro m12",
      price: "99",
      image: Buds,
    },
    {
      item: "Buds Live m12",
      price: "99",
      image: Buds2,
    },
    {
      item: "Sony Mic Boom",
      price: "199",
      image: mic,
    },
    {
      item: "Macbook Pro 13",
      price: "1499",
      image: laptop,
    },
  ];
  const [add, setAdd] = useState(
    items.map(() => {
      false;
    })
  );

  const [size, setSize] = useState(
    items.map((item, index) => ({ height: "40%", width: "30%" }))
  );

  const [totalSec, setTotalSec] = useState(180000); // Total seconds to countdown from
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSec((prevSec) => {
        if (prevSec <= 0) {
          clearInterval(timer);
          return 0; // Stop at zero
        }
        return prevSec - 1; // Decrement by 1
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  useEffect(() => {
    // Calculate hours, minutes, and seconds from totalSec
    setSec(Math.floor(totalSec % 60));
    setMin(Math.floor((totalSec % 3600) / 60));
    setHour(Math.floor(totalSec / 3600));
  }, [totalSec]); // Update when totalSec changes

  const formatTime = (h, m, s) => {
    return `${String(h).padStart(2, "0")}:${String(m).padStart(
      2,
      "0"
    )}:${String(s).padStart(2, "0")}`;
  };

  return (
    <div
      className="fle border-box"
      style={{
        display: "flex",
        height: "130vh",
        justifyContent: "space-between",
        padding: "40px",
      }}
    >
      <div className="first">
        <div className=" mt-5 mx-5 text-2xl font-bold text-center ">
          <h2 className="bold text-pink-500 nn">Deals of the week</h2>
        </div>
        <img
          className="w-[60%] h-[55%] object-cover mx-auto "
          src={phone}
          alt="iphone"
          // style={{ width: "80%", height: "80%", margin: "auto" }}
        />
        <div className="flex justify-between items-center mx-5 mt-5 px-6 ">
          <div>
            <p className="text-md font-bold text-gray-500">IPHONE</p>
            <h4 className="mt-3 text-lg font-bold">13 PRO MAX</h4>
          </div>
          <div>
            <p className="text-sm text-end font-bold text-gray-500">
              <strike>1033</strike>
            </p>
            <h4 className="text-red-500 text-2xl font-bold mt-3">$997</h4>
          </div>
        </div>{" "}
        <div className="px-5 mt-3 border-box">
          <div className="flex justify-between items-center mx-5 mt-5 px-6 ">
            <h4>Available: 8</h4>
            <h4>Sold: 2</h4>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
            <div
              class="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "25%" }}
            ></div>
          </div>
        </div>
        <div className="px-6 mt-6 flex justify-between ">
          <div>
            <h4 className="font-bold text-black-900">HURRY UP</h4>
            <p className="text-gray-400">offer ends in:</p>
          </div>
          <div className="flex border-gray-300 border-2">
            <div className="p-2 text-xl font-bold border-r-2 border-gray-300 text-center">
              {hour < 10 ? `0${hour}` : hour}
              <br /> <p className="text-gray-400">HRS</p>
            </div>
            <div className="p-2 text-xl font-bold border-r-2 border-gray-300 text-center">
              <p>{min < 10 ? `0${min}` : min}</p>{" "}
              <p className="text-gray-400">MIN</p>
            </div>
            <div className="p-2 text-xl font-bold text-center">
              {sec < 10 ? `0${sec}` : sec} <br />{" "}
              <p className="text-gray-400">SEC</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sec p-5 border-box">
        {items.map((item, index) => (
          <div
            onMouseOver={() => {
              setAdd((prevAdd) => {
                let newAdd = [...prevAdd];
                newAdd[index] = true;
                return newAdd;
              }),
                setSize((prevSize) => {
                  let newSize = [...prevSize];
                  newSize[index] = { height: "45%", width: "30%" };
                  return newSize;
                });
            }}
            onMouseLeave={() => {
              setAdd((prevAdd) => {
                let newAdd = [...prevAdd];
                newAdd[index] = false;
                return newAdd;
              }),
                setSize((prevSize) => {
                  let newSize = [...prevSize];
                  newSize[index] = { height: "40%", width: "30%" };
                  return newSize;
                });
            }}
            key={index}
            className=" items-center my-5"
            style={{
              width: size[index].width,
              height: size[index].height,
              boxShadow: " 0px 0px 10px rgba(94, 92, 92, 0.6)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <img
              src={item.image}
              alt={item.item}
              style={{
                width: "60%",
                height: "50%",
                margin: "auto",
              }}
            />{" "}
            <p
              style={{
                textAlign: "center",
                fontSize: "1rem",
                color: "black",
                fontWeight: 600,
              }}
            >
              {item.item}
            </p>{" "}
            <div className="flex justify-between items-center px-2 py-2">
              <p className="font-bold text-lg">${item.price}</p>
              <div class="flex space-x-2 mt-4 mx-5">
                <svg
                  class="w-4 fill-green-500"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-4 fill-green-500"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-4 fill-green-500"
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
            <button
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  rounded w-[90%] "
              style={{
                marginLeft: "10px",
                display: add[index] ? "block" : "none",
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mini;
//  <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[Pagination]}
//           className="mySwiper"
//         >
//           <SwiperSlide>
//             <div>
//               <div class="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full mb-12">
//                 <h2 class="text-4xl font-extrabold text-gray-800 mb-12">
//                   BUDGET OPTIONS
//                 </h2>
//                 <div>
//                   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-2">
//                     <div class="  overflow-hidden  border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
//                       <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16px"
//                           class="fill-gray-800 inline-block"
//                           viewBox="0 0 64 64"
//                         >
//                           <path
//                             d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
//                             data-original="#000000"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div class="w-full h-[100px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
//                         <img
//                           src={headset}
//                           alt="Product 2"
//                           class="h-[70%] mx-2 w-full object-cover object-fit-contain"
//                         />
//                       </div>
//                       <div class="p-2 bg-white">
//                         <h3 class="text-lg font-bold text-gray-800">
//                           Zealot Boom2
//                         </h3>
//                         <h4 class="text-lg text-gray-800 font-bold mt-2">
//                           $120.5
//                         </h4>
//                         <button class="px-2  transition ease-in duration-200 uppercase  hover:bg-gray-800 hover:text-white border-2 text-sm border-gray-900 focus:outline-none">
//                           Add to cart
//                         </button>
//                         <div class="flex space-x-2 mt-4">
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="  overflow-hidden border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
//                       <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16px"
//                           class="fill-gray-800 inline-block"
//                           viewBox="0 0 64 64"
//                         >
//                           <path
//                             d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
//                             data-original="#000000"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div class="w-full h-[100px]  overflow-hidden mx-auto aspect-w-16 aspect-h-8">
//                         <img
//                           src={Buds}
//                           alt="Product 3"
//                           class="h-full mx-2 w-full object-contain"
//                         />
//                       </div>
//                       <div class="p-2 bg-white">
//                         <h3 class="text-lg font-bold text-gray-800">
//                           Velvet jamz3
//                         </h3>
//                         <h4 class="text-lg text-gray-800 font-bold mt-2">
//                           $14.5
//                         </h4>
//                         <button class="px-2  transition ease-in duration-200 uppercase  hover:bg-gray-800 hover:text-white border-2 text-sm border-gray-900 focus:outline-none">
//                           Add to cart
//                         </button>
//                         <div class="flex space-x-2 mt-4">
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>

//                     <div class="  overflow-hidden border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
//                       <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16px"
//                           class="fill-gray-800 inline-block"
//                           viewBox="0 0 64 64"
//                         >
//                           <path
//                             d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
//                             data-original="#000000"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div class="w-full h-[100px]  overflow-hidden mx-auto aspect-w-16 aspect-h-8">
//                         <img
//                           src={laptop}
//                           alt="Product 3"
//                           class="h-full mx-2 w-full object-contain"
//                         />
//                       </div>
//                       <div class="p-2 bg-white">
//                         <h3 class="text-lg font-bold text-gray-800">Hp q244</h3>
//                         <h4 class="text-lg text-gray-800 font-bold mt-2">
//                           $12.5
//                         </h4>
//                         <button class="px-2  transition ease-in duration-200 uppercase  hover:bg-gray-800 hover:text-white border-2 text-sm border-gray-900 focus:outline-none">
//                           Add to cart
//                         </button>
//                         <div class="flex space-x-2 mt-4">
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-2">
//                     <div class="  overflow-hidden border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
//                       <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16px"
//                           class="fill-gray-800 inline-block"
//                           viewBox="0 0 64 64"
//                         >
//                           <path
//                             d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
//                             data-original="#000000"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div class="w-full h-[100px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
//                         <img
//                           src={Buds}
//                           alt="Product 2"
//                           class="h-[70%] mx-2 w-full object-cover object-fit-contain"
//                         />
//                       </div>
//                       <div class="p-2 bg-white">
//                         <h3 class="text-lg font-bold text-gray-800">
//                           Oppo teleBuds
//                         </h3>
//                         <h4 class="text-lg text-gray-800 font-bold mt-2">
//                           $120.5
//                         </h4>
//                         <button class="px-2  transition ease-in duration-200 uppercase  hover:bg-gray-800 hover:text-white border-2 text-sm border-gray-900 focus:outline-none">
//                           Add to cart
//                         </button>
//                         <div class="flex space-x-2 mt-4">
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>

//                     <div class="  overflow-hidden border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
//                       <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16px"
//                           class="fill-gray-800 inline-block"
//                           viewBox="0 0 64 64"
//                         >
//                           <path
//                             d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
//                             data-original="#000000"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div class="w-full h-[100px]  overflow-hidden mx-auto aspect-w-16 aspect-h-8">
//                         <img
//                           src={Buds2}
//                           alt="Product 3"
//                           class="h-full mx-2 w-full object-contain"
//                         />
//                       </div>
//                       <div class="p-2 bg-white">
//                         <h3 class="text-lg font-bold text-gray-800">
//                           TWS EarBuds
//                         </h3>
//                         <h4 class="text-lg text-gray-800 font-bold mt-2">
//                           $14.5
//                         </h4>
//                         <button class="px-2  transition ease-in duration-200 uppercase  hover:bg-gray-800 hover:text-white border-2 text-sm border-gray-900 focus:outline-none">
//                           Add to cart
//                         </button>
//                         <div class="flex space-x-2 mt-4">
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>

//                     <div
//                       class="  overflow-hidden border-l-2 border-solid border-gray
//  cursor-pointer hover:-translate-y-2 transition-all relative"
//                     >
//                       <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16px"
//                           class="fill-gray-800 inline-block"
//                           viewBox="0 0 64 64"
//                         >
//                           <path
//                             d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
//                             data-original="#000000"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div class="w-full h-[100px]  overflow-hidden mx-auto aspect-w-16 aspect-h-8">
//                         <img
//                           src={Canon}
//                           alt="Product 3"
//                           class="h-full w-full object-contain"
//                         />
//                       </div>
//                       <div class="p-2 bg-white">
//                         <h3 class="text-lg font-bold text-gray-800">
//                           Canon Lens
//                         </h3>
//                         <h4 class="text-lg text-gray-800 font-bold mt-2">
//                           $12.5
//                         </h4>
//                         <button class="px-2  transition ease-in duration-200 uppercase  hover:bg-gray-800 hover:text-white border-2 text-sm border-gray-900 focus:outline-none">
//                           Add to cart
//                         </button>
//                         <div class="flex space-x-2 mt-4">
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div>
//               <div class="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full mb-12">
//                 <h2 class="text-4xl font-extrabold text-gray-800 mb-12">
//                   BUDGET OPTIONS
//                 </h2>
//                 <div>
//                   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 p-2">
//                     <div class="  overflow-hidden  border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
//                       <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16px"
//                           class="fill-gray-800 inline-block"
//                           viewBox="0 0 64 64"
//                         >
//                           <path
//                             d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
//                             data-original="#000000"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div class="w-full h-[100px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
//                         <img
//                           src={phone}
//                           alt="Product 2"
//                           class="h-[70%] mx-2 w-full object-cover object-fit-contain"
//                         />
//                       </div>
//                       <div class="p-2 bg-white">
//                         <h3 class="text-lg font-bold text-gray-800">
//                           Canon Cam
//                         </h3>
//                         <h4 class="text-lg text-gray-800 font-bold mt-2">
//                           $120.5
//                         </h4>
//                         <button class="px-2  transition ease-in duration-200 uppercase  hover:bg-gray-800 hover:text-white border-2 text-sm border-gray-900 focus:outline-none">
//                           Add to cart
//                         </button>
//                         <div class="flex space-x-2 mt-4">
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="  overflow-hidden  border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
//                       <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16px"
//                           class="fill-gray-800 inline-block"
//                           viewBox="0 0 64 64"
//                         >
//                           <path
//                             d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
//                             data-original="#000000"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div class="w-full h-[100px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
//                         <img
//                           src={mic}
//                           alt="Product 2"
//                           class="h-[70%] mx-2 w-full object-cover object-fit-contain"
//                         />
//                       </div>
//                       <div class="p-2 bg-white">
//                         <h3 class="text-lg font-bold text-gray-800">
//                           Canona mic7
//                         </h3>
//                         <h4 class="text-lg text-gray-800 font-bold mt-2">
//                           $120.5
//                         </h4>
//                         <button class="px-2  transition ease-in duration-200 uppercase  hover:bg-gray-800 hover:text-white border-2 text-sm border-gray-900 focus:outline-none">
//                           Add to cart
//                         </button>
//                         <div class="flex space-x-2 mt-4">
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>

//                     <div class="  overflow-hidden border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
//                       <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16px"
//                           class="fill-gray-800 inline-block"
//                           viewBox="0 0 64 64"
//                         >
//                           <path
//                             d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
//                             data-original="#000000"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div class="w-full h-[100px]  overflow-hidden mx-auto aspect-w-16 aspect-h-8">
//                         <img
//                           src={Buds}
//                           alt="Product 3"
//                           class="h-full mx-2 w-full object-contain"
//                         />
//                       </div>
//                       <div class="p-2 bg-white">
//                         <h3 class="text-lg font-bold text-gray-800">
//                           Velvet jamz3
//                         </h3>
//                         <h4 class="text-lg text-gray-800 font-bold mt-2">
//                           $14.5
//                         </h4>
//                         <button class="px-2  transition ease-in duration-200 uppercase  hover:bg-gray-800 hover:text-white border-2 text-sm border-gray-900 focus:outline-none">
//                           Add to cart
//                         </button>
//                         <div class="flex space-x-2 mt-4">
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>

//                     <div class="  overflow-hidden border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
//                       <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16px"
//                           class="fill-gray-800 inline-block"
//                           viewBox="0 0 64 64"
//                         >
//                           <path
//                             d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
//                             data-original="#000000"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div class="w-full h-[100px]  overflow-hidden mx-auto aspect-w-16 aspect-h-8">
//                         <img
//                           src={laptop}
//                           alt="Product 3"
//                           class="h-full mx-2 w-full object-contain"
//                         />
//                       </div>
//                       <div class="p-2 bg-white">
//                         <h3 class="text-lg font-bold text-gray-800">Hp q244</h3>
//                         <h4 class="text-lg text-gray-800 font-bold mt-2">
//                           $12.5
//                         </h4>
//                         <button class="px-2  transition ease-in duration-200 uppercase  hover:bg-gray-800 hover:text-white border-2 text-sm border-gray-900 focus:outline-none">
//                           Add to cart
//                         </button>
//                         <div class="flex space-x-2 mt-4">
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 p-2">
//                     <div class="  overflow-hidden  border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
//                       <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16px"
//                           class="fill-gray-800 inline-block"
//                           viewBox="0 0 64 64"
//                         >
//                           <path
//                             d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
//                             data-original="#000000"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div class="w-full h-[100px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
//                         <img
//                           src={headset}
//                           alt="Product 2"
//                           class="h-[70%] mx-2 w-full object-cover object-fit-contain"
//                         />
//                       </div>
//                       <div class="p-2 bg-white">
//                         <h3 class="text-lg font-bold text-gray-800">
//                           Zealot Boom2
//                         </h3>
//                         <h4 class="text-lg text-gray-800 font-bold mt-2">
//                           $120.5
//                         </h4>
//                         <button class="px-2  transition ease-in duration-200 uppercase  hover:bg-gray-800 hover:text-white border-2 text-sm border-gray-900 focus:outline-none">
//                           Add to cart
//                         </button>
//                         <div class="flex space-x-2 mt-4">
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="  overflow-hidden  border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
//                       <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16px"
//                           class="fill-gray-800 inline-block"
//                           viewBox="0 0 64 64"
//                         >
//                           <path
//                             d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
//                             data-original="#000000"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div class="w-full h-[100px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
//                         <img
//                           src={Buds}
//                           alt="Product 2"
//                           class="h-[70%] mx-2 w-full object-cover object-fit-contain"
//                         />
//                       </div>
//                       <div class="p-2 bg-white">
//                         <h3 class="text-lg font-bold text-gray-800">
//                           Oppo teleBuds
//                         </h3>
//                         <h4 class="text-lg text-gray-800 font-bold mt-2">
//                           $120.5
//                         </h4>
//                         <button class="px-2  transition ease-in duration-200 uppercase  hover:bg-gray-800 hover:text-white border-2 text-sm border-gray-900 focus:outline-none">
//                           Add to cart
//                         </button>
//                         <div class="flex space-x-2 mt-4">
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>

//                     <div class="  overflow-hidden border-l-2 border-solid border-gray cursor-pointer hover:-translate-y-2 transition-all relative">
//                       <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16px"
//                           class="fill-gray-800 inline-block"
//                           viewBox="0 0 64 64"
//                         >
//                           <path
//                             d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
//                             data-original="#000000"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div class="w-full h-[100px]  overflow-hidden mx-auto aspect-w-16 aspect-h-8">
//                         <img
//                           src={Buds2}
//                           alt="Product 3"
//                           class="h-full mx-2 w-full object-contain"
//                         />
//                       </div>
//                       <div class="p-2 bg-white">
//                         <h3 class="text-lg font-bold text-gray-800">
//                           TWS EarBuds
//                         </h3>
//                         <h4 class="text-lg text-gray-800 font-bold mt-2">
//                           $14.5
//                         </h4>
//                         <button class="px-2  transition ease-in duration-200 uppercase  hover:bg-gray-800 hover:text-white border-2 text-sm border-gray-900 focus:outline-none">
//                           Add to cart
//                         </button>
//                         <div class="flex space-x-2 mt-4">
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>

//                     <div
//                       class="  overflow-hidden border-l-2 border-solid border-gray
//  cursor-pointer hover:-translate-y-2 transition-all relative"
//                     >
//                       <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16px"
//                           class="fill-gray-800 inline-block"
//                           viewBox="0 0 64 64"
//                         >
//                           <path
//                             d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
//                             data-original="#000000"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div class="w-full h-[100px]  overflow-hidden mx-auto aspect-w-16 aspect-h-8">
//                         <img
//                           src={Canon}
//                           alt="Product 3"
//                           class="h-full w-full object-contain"
//                         />
//                       </div>
//                       <div class="p-2 bg-white">
//                         <h3 class="text-lg font-bold text-gray-800">
//                           Canon Lens
//                         </h3>
//                         <h4 class="text-lg text-gray-800 font-bold mt-2">
//                           $12.5
//                         </h4>
//                         <button class="px-2  transition ease-in duration-200 uppercase  hover:bg-gray-800 hover:text-white border-2 text-sm border-gray-900 focus:outline-none">
//                           Add to cart
//                         </button>
//                         <div class="flex space-x-2 mt-4">
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-green-500"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                           <svg
//                             class="w-4 fill-[#CED5D8]"
//                             viewBox="0 0 14 13"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
