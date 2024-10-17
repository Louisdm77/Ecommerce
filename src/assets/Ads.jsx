import React from "react";
import "./Ads.css";
import { FaTruckFast } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { GrPowerCycle } from "react-icons/gr";
import { GiPriceTag } from "react-icons/gi";
const Ads = () => {
  return (
    <div>
      <div class="container mx-auto mt-5 mb-5 py-6 px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <div class="flex flexi justify-center border-2 border-gray-200  p-6 bg-gray-100 shadow-blue-500">
            <div>
              <FaTruckFast style={{ height: "40px", width: "40px" }} />
            </div>
            <div className="block mx-4">
              <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>
                Free Delivery
              </h2>
              <p style={{ color: "gray" }}>from $50</p>
            </div>
          </div>
          <div class="flex flexi justify-center border-2 border-gray-200  p-6 bg-gray-100">
            <div>
              <GrPowerCycle style={{ height: "40px", width: "40px" }} />
            </div>
            <div className="block mx-4">
              <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>
                Free Delivery
              </h2>
              <p style={{ color: "gray" }}>from $50</p>
            </div>
          </div>
          <div class="flex flexi justify-center border-2 border-gray-200  p-6 bg-gray-100">
            <div>
              <GiWallet style={{ height: "40px", width: "40px" }} />
            </div>
            <div className="block mx-4">
              <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>
                Free Delivery
              </h2>
              <p style={{ color: "gray" }}>from $50</p>
            </div>
          </div>
          <div class="flex flexi justify-center border-2 border-gray-200  p-6 bg-gray-100">
            <div>
              <GiPriceTag style={{ height: "40px", width: "40px" }} />
            </div>
            <div className="block mx-4">
              <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>
                Free Delivery
              </h2>
              <p style={{ color: "gray" }}>from $50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
