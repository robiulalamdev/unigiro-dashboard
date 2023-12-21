import React from "react";
import logo from "../../assets/brand/logo.png";
import Image from "next/image";
import { sidebarHr } from "@/utils/icons";
import { sidebar_end_routes, sidebar_routes } from "@/utils/data";
import Link from "next/link";
import { useRouter } from "next/router";

const SidebarUi = () => {
  const { pathname } = useRouter();
  return (
    <div className="w-full min-w-[250px] max-w-[250px] h-full bg-sidebar_bg px-[24px] py-[23px] overflow-y-auto">
      <div className="flex items-center gap-[2px]">
        <Image width={36} height={46} src={logo} alt="" />
        <h1 className="text-[#FAFAFA] text-[20px] font-[800] leading-[26px]">
          uniGirO
        </h1>
      </div>
      <div className="mt-[35px]">{sidebarHr}</div>
      <div className="grid grid-cols-1 gap-[12px] w-full mt-[40px] ">
        {sidebar_routes.map((route, index) => (
          <Link href={`/${route.url}`} key={index}>
            <button
              className={`w-full flex items-center gap-[14px] h-[47px] p-[16px] rounded-[12px]
            ${
              pathname.includes(route.url)
                ? "bg-primary text-white font-extrabold"
                : "text-white hover:bg-primary font-[500]"
            }`}
            >
              <div className="w-[23.5px] h-[23.5px] ">{route.icon}</div>
              <span className="text-sm leading-[21px] tracking-[0.2px]">
                {route.name}
              </span>
            </button>
          </Link>
        ))}
      </div>

      <div className="h-[165px] w-full rounded-[16px] bg-gradient-to-b from-[#313183e6] via-primary to-primary mt-[133px] px-5 py-1.5 flex flex-col items-center gap-5">
        <h1 className="text-center text-white font-inter text-2xl tracking-[0.12px] font-semibold">
          Upgrade to Premium
        </h1>
        <h className="text-[#989595] font-inter text-sm font-medium leading-[22px]">
          Upgrade
        </h>
      </div>
      <p className="mt-[11px] px-3 text-[#D1D8DD] text-xs tracking-[0.6px] leading-[20px]">
        Get yor pro feature by Subscribe FinPro and easy to manage your
        financial{" "}
      </p>

      <div className="grid grid-cols-1 gap-[12px] w-full mt-[40px] ">
        {sidebar_end_routes.map((route, index) => (
          <Link href={`/${route.url}`} key={index}>
            <button
              className={`w-full flex items-center gap-[14px] h-[47px] p-[16px] rounded-[12px]
            ${
              pathname.includes(route.url)
                ? "bg-primary text-white font-extrabold"
                : "text-white hover:bg-primary font-[500]"
            }`}
            >
              <div className="w-[23.5px] h-[23.5px] ">{route.icon}</div>
              <span className="text-sm leading-[21px] tracking-[0.2px]">
                {route.name}
              </span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarUi;
