import { iOverivewECDownBtn, iSearch } from "@/utils/icons";
import React from "react";

const OverviewEC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-[12px] md:gap-[22px]">
      <div className="bg-[#1A202C] h-[101px] rounded-[16px] border border-[#2A323C] pb-[28px]">
        <h1 className="text-center text-[#FAFAFA] text-[18px] font-extrabold leading-[24px] tracking-[0.2px] mb-1">
          Exchange:
        </h1>
        <div className="px-[13px] flex justify-between items-center gap-[23px]">
          <div className="relative h-[47px] bg-main_bg text-white flex items-center px-4 rounded-[24px] flex-grow">
            <div className="size-[23px]">{iSearch}</div>
            <input
              type="search"
              className="bg-main_bg border-none focus:border-none focus:outline-none px-4 w-full h-full"
            />
          </div>
          <div>{iOverivewECDownBtn}</div>
        </div>
      </div>
      <div className="bg-[#1A202C] h-[101px] rounded-[16px] border border-[#2A323C] pb-[28px]">
        <h1 className="text-center text-[#FAFAFA] text-[18px] font-extrabold leading-[24px] tracking-[0.2px] mb-1">
          Compnay:
        </h1>
        <div className="px-[13px] flex justify-between items-center gap-[23px]">
          <div className="relative h-[47px] bg-main_bg text-white flex items-center px-4 rounded-[24px] flex-grow">
            <div className="size-[23px]">{iSearch}</div>
            <input
              type="search"
              className="bg-main_bg border-none focus:border-none focus:outline-none px-4 w-full h-full"
            />
          </div>
          <div>{iOverivewECDownBtn}</div>
        </div>
      </div>
    </div>
  );
};

export default OverviewEC;
