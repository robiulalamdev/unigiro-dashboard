import { iLeftArrow, iNotify } from "@/utils/icons";
import Image from "next/image";
import React from "react";
import profile from "../../assets/images/header/profile.png";

const Header_ui = ({ label }) => {
  return (
    <div className="flex justify-between items-end h-16">
      <div className="flex items-center gap-[34px] pt-2">
        <div className="flex items-center gap-[7px] text-white">
          <div className="w-2 h-3">{iLeftArrow}</div>
          <h1 className="text-[#A0AEC0]">Back</h1>
        </div>
        <h1 className="text-2xl font-extrabold tracking-[0.31px] text-[#FAFAFA]">
          {label}
        </h1>
      </div>
      <div className="flex items-center gap-8">
        <div>{iNotify}</div>
        <div className="flex items-center gap-3">
          <Image
            className="rounded-full h-[32px] object-cover"
            width={32}
            height={32}
            src={profile}
            alt=""
          />
          <h1 className="text-white tracking-[0.2px] font-extrabold text-[16px]">
            Alesia K.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header_ui;
