import { iOverivewECDownBtn, iSearch } from "@/utils/icons";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const OverviewEC = ({ filters, handleFilter }) => {
  const [exchange, setExchange] = useState("");
  const [company, setCompany] = useState("");
  const [companies, setCompanies] = useState([]);

  const handleFilterExchange = (data) => {
    setExchange(data?.exchange);
    setCompanies([data]);
    setCompany("");
  };
  const handleFilterCompany = (data) => {
    setCompany(data?.company);
    handleFilter(data);
  };
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
              value={exchange}
              className="bg-main_bg border-none focus:border-none focus:outline-none px-4 w-full h-full"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div>{iOverivewECDownBtn}</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[203px] bg-sidebar_bg border border-[#232B38] text-white">
              {filters.map((item, index) => (
                <DropdownMenuRadioItem
                  onClick={() => handleFilterExchange(item)}
                  key={index}
                  value={item?.exchange}
                >
                  {item?.exchange}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
              value={company}
              className="bg-main_bg border-none focus:border-none focus:outline-none px-4 w-full h-full"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div>{iOverivewECDownBtn}</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[203px] bg-sidebar_bg border border-[#232B38] text-white">
              {companies.map((item, index) => (
                <DropdownMenuRadioItem
                  onClick={() => handleFilterCompany(item)}
                  key={index}
                  value={item?.company}
                >
                  {item?.company}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default OverviewEC;
