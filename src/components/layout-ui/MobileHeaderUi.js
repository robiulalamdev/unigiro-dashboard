import { iLeftArrow, iNotify, menu } from "@/utils/icons";
import Image from "next/image";
import React from "react";
import profile from "../../assets/images/header/profile.png";
import { useDispatch } from "react-redux";
import { setIsOpen } from "@/redux/features/service/serviceSlice";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import SidebarUi from "./SidebarUi";

const MobileHeaderUi = ({ label }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex justify-between items-center h-12">
        <Sheet key="left" className="p-0">
          <SheetTrigger asChild>
            <button
              onClick={() => dispatch(setIsOpen(true))}
              className="text-white w-8 h-8"
            >
              {menu}
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-fit">
            <SidebarUi />
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-[34px] pt-2">
          <h1 className="text-base md:text-2xl font-extrabold tracking-[0.31px] text-[#FAFAFA]">
            {label}
          </h1>
        </div>
        <div className="flex items-center gap-8">
          <div className="max-w-[35px]">{iNotify}</div>
          <div className="flex items-center gap-3">
            <Image
              className="rounded-full size-[32px] object-cover"
              src={profile}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeaderUi;
