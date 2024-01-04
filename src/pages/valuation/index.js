import Header from "@/components/headers/Header";
import OverviewEC from "@/components/overview-ui/OverviewEC";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ValuationTable from "@/components/valuation-ui/ValuationTable";
import { financial_overview_data } from "@/utils/chartData";
import { iDownArrow, iFO2, iFOLogo1 } from "@/utils/icons";
import moment from "moment";
import React, { useRef, useState } from "react";
import { Bar, BarChart, Cell, ResponsiveContainer } from "recharts";

const index = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const fromDateRef = useRef();
  const toDateRef = useRef();
  return (
    <div>
      <Header label="Valuation" />
      <main className="mt-[39px]">
        <OverviewEC />
        <div>
          <div className="flex justify-center items-center flex-wrap gap-[33px] mt-6">
            <h1 className="text-primary_gw text-[18px] font-extrabold leading-[24px] tracking-[0.2px]">
              Select time period:
            </h1>
            <div className="flex items-center gap-2">
              <svg
                width="12"
                height="5"
                viewBox="0 0 12 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="12" height="4" rx="2" fill="#FAFAFA" />
              </svg>

              <span className="text-primary_gw text-xs font-semibold leading-[18px] tracking-[0.4px]">
                FROM:
              </span>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  ref={fromDateRef}
                  className={`bg-[#232B38] border-none outline-none text-primary_gw flex gap-1 items-center hover:bg-[#232B38]`}
                >
                  <span className="text-xs font-semibold leading-[18px] tracking-[0.4px]">
                    {fromDate
                      ? moment(fromDate).format("DD / MM / YYYY")
                      : "DD / MM / YYYY"}
                  </span>
                  <div className="w-4 text-[#718096]">{iDownArrow}</div>
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_459_3444)">
                      <path
                        d="M19.7812 11.5294C20.3206 11.5294 20.7578 11.0922 20.7578 10.5529C20.7578 10.0135 20.3206 9.57629 19.7812 9.57629C19.2419 9.57629 18.8047 10.0135 18.8047 10.5529C18.8047 11.0922 19.2419 11.5294 19.7812 11.5294Z"
                        fill="white"
                      />
                      <path
                        d="M22.0273 2.25208H20.7578V1.27551C20.7578 0.736157 20.3206 0.29895 19.7812 0.29895C19.2419 0.29895 18.8047 0.736157 18.8047 1.27551V2.25208H14.3613V1.27551C14.3613 0.736157 13.9241 0.29895 13.3848 0.29895C12.8454 0.29895 12.4082 0.736157 12.4082 1.27551V2.25208H8.01367V1.27551C8.01367 0.736157 7.57646 0.29895 7.03711 0.29895C6.49775 0.29895 6.06055 0.736157 6.06055 1.27551V2.25208H4.83984C2.68594 2.25208 0.933594 4.00442 0.933594 6.15833V21.3927C0.933594 23.5466 2.68594 25.299 4.83984 25.299H12.3105C12.8499 25.299 13.2871 24.8617 13.2871 24.3224C13.2871 23.783 12.8499 23.3458 12.3105 23.3458H4.83984C3.76289 23.3458 2.88672 22.4697 2.88672 21.3927V6.15833C2.88672 5.08137 3.76289 4.2052 4.83984 4.2052H6.06055V5.18176C6.06055 5.72112 6.49775 6.15833 7.03711 6.15833C7.57646 6.15833 8.01367 5.72112 8.01367 5.18176V4.2052H12.4082V5.18176C12.4082 5.72112 12.8454 6.15833 13.3848 6.15833C13.9241 6.15833 14.3613 5.72112 14.3613 5.18176V4.2052H18.8047V5.18176C18.8047 5.72112 19.2419 6.15833 19.7812 6.15833C20.3206 6.15833 20.7578 5.72112 20.7578 5.18176V4.2052H22.0273C23.1043 4.2052 23.9805 5.08137 23.9805 6.15833V11.7247C23.9805 12.2641 24.4177 12.7013 24.957 12.7013C25.4964 12.7013 25.9336 12.2641 25.9336 11.7247V6.15833C25.9336 4.00442 24.1812 2.25208 22.0273 2.25208Z"
                        fill="white"
                      />
                      <path
                        d="M20.0254 13.4825C16.7676 13.4825 14.1172 16.1329 14.1172 19.3907C14.1172 22.6486 16.7676 25.299 20.0254 25.299C23.2832 25.299 25.9336 22.6486 25.9336 19.3907C25.9336 16.1329 23.2832 13.4825 20.0254 13.4825ZM20.0254 23.3458C17.8446 23.3458 16.0703 21.5716 16.0703 19.3907C16.0703 17.2099 17.8446 15.4357 20.0254 15.4357C22.2062 15.4357 23.9805 17.2099 23.9805 19.3907C23.9805 21.5716 22.2062 23.3458 20.0254 23.3458Z"
                        fill="white"
                      />
                      <path
                        d="M21.4414 18.4142H21.002V17.3888C21.002 16.8494 20.5647 16.4122 20.0254 16.4122C19.486 16.4122 19.0488 16.8494 19.0488 17.3888V19.3907C19.0488 19.9301 19.486 20.3673 20.0254 20.3673H21.4414C21.9808 20.3673 22.418 19.9301 22.418 19.3907C22.418 18.8514 21.9808 18.4142 21.4414 18.4142Z"
                        fill="white"
                      />
                      <path
                        d="M15.5332 11.5294C16.0725 11.5294 16.5098 11.0922 16.5098 10.5529C16.5098 10.0135 16.0725 9.57629 15.5332 9.57629C14.9939 9.57629 14.5566 10.0135 14.5566 10.5529C14.5566 11.0922 14.9939 11.5294 15.5332 11.5294Z"
                        fill="white"
                      />
                      <path
                        d="M11.2852 15.7775C11.8245 15.7775 12.2617 15.3402 12.2617 14.8009C12.2617 14.2616 11.8245 13.8243 11.2852 13.8243C10.7458 13.8243 10.3086 14.2616 10.3086 14.8009C10.3086 15.3402 10.7458 15.7775 11.2852 15.7775Z"
                        fill="white"
                      />
                      <path
                        d="M7.03711 11.5294C7.57645 11.5294 8.01367 11.0922 8.01367 10.5529C8.01367 10.0135 7.57645 9.57629 7.03711 9.57629C6.49777 9.57629 6.06055 10.0135 6.06055 10.5529C6.06055 11.0922 6.49777 11.5294 7.03711 11.5294Z"
                        fill="white"
                      />
                      <path
                        d="M7.03711 15.7775C7.57645 15.7775 8.01367 15.3402 8.01367 14.8009C8.01367 14.2616 7.57645 13.8243 7.03711 13.8243C6.49777 13.8243 6.06055 14.2616 6.06055 14.8009C6.06055 15.3402 6.49777 15.7775 7.03711 15.7775Z"
                        fill="white"
                      />
                      <path
                        d="M7.03711 20.0255C7.57645 20.0255 8.01367 19.5883 8.01367 19.049C8.01367 18.5096 7.57645 18.0724 7.03711 18.0724C6.49777 18.0724 6.06055 18.5096 6.06055 19.049C6.06055 19.5883 6.49777 20.0255 7.03711 20.0255Z"
                        fill="white"
                      />
                      <path
                        d="M11.2852 20.0255C11.8245 20.0255 12.2617 19.5883 12.2617 19.049C12.2617 18.5096 11.8245 18.0724 11.2852 18.0724C10.7458 18.0724 10.3086 18.5096 10.3086 19.049C10.3086 19.5883 10.7458 20.0255 11.2852 20.0255Z"
                        fill="white"
                      />
                      <path
                        d="M11.2852 11.5294C11.8245 11.5294 12.2617 11.0922 12.2617 10.5529C12.2617 10.0135 11.8245 9.57629 11.2852 9.57629C10.7458 9.57629 10.3086 10.0135 10.3086 10.5529C10.3086 11.0922 10.7458 11.5294 11.2852 11.5294Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_459_3444">
                        <rect
                          width="25"
                          height="25"
                          fill="white"
                          transform="translate(0.933594 0.29895)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={fromDate}
                  onSelect={(e) => {
                    setFromDate(e);
                    fromDateRef.current?.click();
                  }}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <div className="flex items-center gap-2">
              <svg
                width="12"
                height="5"
                viewBox="0 0 12 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="12" height="4" rx="2" fill="#FAFAFA" />
              </svg>

              <span className="text-primary_gw text-xs font-semibold leading-[18px] tracking-[0.4px]">
                To:
              </span>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  ref={toDateRef}
                  className={`bg-[#232B38] border-none outline-none text-primary_gw flex gap-1 items-center hover:bg-[#232B38]`}
                >
                  <span className="text-xs font-semibold leading-[18px] tracking-[0.4px]">
                    {toDate
                      ? moment(toDate).format("DD / MM / YYYY")
                      : "DD / MM / YYYY"}
                  </span>
                  <div className="w-4 text-[#718096]">{iDownArrow}</div>
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_459_3444)">
                      <path
                        d="M19.7812 11.5294C20.3206 11.5294 20.7578 11.0922 20.7578 10.5529C20.7578 10.0135 20.3206 9.57629 19.7812 9.57629C19.2419 9.57629 18.8047 10.0135 18.8047 10.5529C18.8047 11.0922 19.2419 11.5294 19.7812 11.5294Z"
                        fill="white"
                      />
                      <path
                        d="M22.0273 2.25208H20.7578V1.27551C20.7578 0.736157 20.3206 0.29895 19.7812 0.29895C19.2419 0.29895 18.8047 0.736157 18.8047 1.27551V2.25208H14.3613V1.27551C14.3613 0.736157 13.9241 0.29895 13.3848 0.29895C12.8454 0.29895 12.4082 0.736157 12.4082 1.27551V2.25208H8.01367V1.27551C8.01367 0.736157 7.57646 0.29895 7.03711 0.29895C6.49775 0.29895 6.06055 0.736157 6.06055 1.27551V2.25208H4.83984C2.68594 2.25208 0.933594 4.00442 0.933594 6.15833V21.3927C0.933594 23.5466 2.68594 25.299 4.83984 25.299H12.3105C12.8499 25.299 13.2871 24.8617 13.2871 24.3224C13.2871 23.783 12.8499 23.3458 12.3105 23.3458H4.83984C3.76289 23.3458 2.88672 22.4697 2.88672 21.3927V6.15833C2.88672 5.08137 3.76289 4.2052 4.83984 4.2052H6.06055V5.18176C6.06055 5.72112 6.49775 6.15833 7.03711 6.15833C7.57646 6.15833 8.01367 5.72112 8.01367 5.18176V4.2052H12.4082V5.18176C12.4082 5.72112 12.8454 6.15833 13.3848 6.15833C13.9241 6.15833 14.3613 5.72112 14.3613 5.18176V4.2052H18.8047V5.18176C18.8047 5.72112 19.2419 6.15833 19.7812 6.15833C20.3206 6.15833 20.7578 5.72112 20.7578 5.18176V4.2052H22.0273C23.1043 4.2052 23.9805 5.08137 23.9805 6.15833V11.7247C23.9805 12.2641 24.4177 12.7013 24.957 12.7013C25.4964 12.7013 25.9336 12.2641 25.9336 11.7247V6.15833C25.9336 4.00442 24.1812 2.25208 22.0273 2.25208Z"
                        fill="white"
                      />
                      <path
                        d="M20.0254 13.4825C16.7676 13.4825 14.1172 16.1329 14.1172 19.3907C14.1172 22.6486 16.7676 25.299 20.0254 25.299C23.2832 25.299 25.9336 22.6486 25.9336 19.3907C25.9336 16.1329 23.2832 13.4825 20.0254 13.4825ZM20.0254 23.3458C17.8446 23.3458 16.0703 21.5716 16.0703 19.3907C16.0703 17.2099 17.8446 15.4357 20.0254 15.4357C22.2062 15.4357 23.9805 17.2099 23.9805 19.3907C23.9805 21.5716 22.2062 23.3458 20.0254 23.3458Z"
                        fill="white"
                      />
                      <path
                        d="M21.4414 18.4142H21.002V17.3888C21.002 16.8494 20.5647 16.4122 20.0254 16.4122C19.486 16.4122 19.0488 16.8494 19.0488 17.3888V19.3907C19.0488 19.9301 19.486 20.3673 20.0254 20.3673H21.4414C21.9808 20.3673 22.418 19.9301 22.418 19.3907C22.418 18.8514 21.9808 18.4142 21.4414 18.4142Z"
                        fill="white"
                      />
                      <path
                        d="M15.5332 11.5294C16.0725 11.5294 16.5098 11.0922 16.5098 10.5529C16.5098 10.0135 16.0725 9.57629 15.5332 9.57629C14.9939 9.57629 14.5566 10.0135 14.5566 10.5529C14.5566 11.0922 14.9939 11.5294 15.5332 11.5294Z"
                        fill="white"
                      />
                      <path
                        d="M11.2852 15.7775C11.8245 15.7775 12.2617 15.3402 12.2617 14.8009C12.2617 14.2616 11.8245 13.8243 11.2852 13.8243C10.7458 13.8243 10.3086 14.2616 10.3086 14.8009C10.3086 15.3402 10.7458 15.7775 11.2852 15.7775Z"
                        fill="white"
                      />
                      <path
                        d="M7.03711 11.5294C7.57645 11.5294 8.01367 11.0922 8.01367 10.5529C8.01367 10.0135 7.57645 9.57629 7.03711 9.57629C6.49777 9.57629 6.06055 10.0135 6.06055 10.5529C6.06055 11.0922 6.49777 11.5294 7.03711 11.5294Z"
                        fill="white"
                      />
                      <path
                        d="M7.03711 15.7775C7.57645 15.7775 8.01367 15.3402 8.01367 14.8009C8.01367 14.2616 7.57645 13.8243 7.03711 13.8243C6.49777 13.8243 6.06055 14.2616 6.06055 14.8009C6.06055 15.3402 6.49777 15.7775 7.03711 15.7775Z"
                        fill="white"
                      />
                      <path
                        d="M7.03711 20.0255C7.57645 20.0255 8.01367 19.5883 8.01367 19.049C8.01367 18.5096 7.57645 18.0724 7.03711 18.0724C6.49777 18.0724 6.06055 18.5096 6.06055 19.049C6.06055 19.5883 6.49777 20.0255 7.03711 20.0255Z"
                        fill="white"
                      />
                      <path
                        d="M11.2852 20.0255C11.8245 20.0255 12.2617 19.5883 12.2617 19.049C12.2617 18.5096 11.8245 18.0724 11.2852 18.0724C10.7458 18.0724 10.3086 18.5096 10.3086 19.049C10.3086 19.5883 10.7458 20.0255 11.2852 20.0255Z"
                        fill="white"
                      />
                      <path
                        d="M11.2852 11.5294C11.8245 11.5294 12.2617 11.0922 12.2617 10.5529C12.2617 10.0135 11.8245 9.57629 11.2852 9.57629C10.7458 9.57629 10.3086 10.0135 10.3086 10.5529C10.3086 11.0922 10.7458 11.5294 11.2852 11.5294Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_459_3444">
                        <rect
                          width="25"
                          height="25"
                          fill="white"
                          transform="translate(0.933594 0.29895)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={fromDate}
                  onSelect={(e) => {
                    setToDate(e);
                    toDateRef?.current?.click();
                  }}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex justify-center mt-[30px]">
            <button className="w-[215px] h-[47px] rounded-[12px] bg-primary text-white text-xl font-extrabold leading-[30px] tracking-[0.2px]">
              Get Valuation
            </button>
          </div>
        </div>

        <div className="mt-[55px] grid md:grid-cols-2 gap-6 md:gap-[63px]">
          <div className="grid md:grid-cols-2 gap-5 md:gap-[43px]">
            <div className="border-[4px] border-[#51C5B0] rounded-[16px] min-h-[180px] max-h-[180px] px-[23px] py-[17px]">
              <div className="flex justify-between items-center ">
                <div className="flex flex-col gap-1">
                  <span className="text-[#A0AEC0] text-xs font-medium leading-[18px] tracking-[0.4px]">
                    FORWARD
                  </span>
                  <h1 className="text-primary_gw text-xl leading-[27px] font-extrabold tracking-[0.2px]">
                    $2,456.89
                  </h1>
                </div>
                {iFO2}
              </div>
              <ResponsiveContainer height={71} className="w-full mt-[23px]">
                <BarChart
                  width={150}
                  height={40}
                  data={financial_overview_data}
                >
                  <Bar dataKey="uv">
                    {financial_overview_data.map((entry, index) => (
                      <Cell
                        cursor="pointer"
                        fill={entry.fill}
                        key={`cell-${index}`}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="border-[4px] border-[#51C5B0] rounded-[16px] min-h-[180px] max-h-[180px] px-[23px] py-[17px]">
              <div className="flex justify-between items-center ">
                <div className="flex flex-col gap-1">
                  <span className="text-[#A0AEC0] text-xs font-medium leading-[18px] tracking-[0.4px]">
                    EV / EBITDA
                  </span>
                  <h1 className="text-primary_gw text-xl leading-[27px] font-extrabold tracking-[0.2px]">
                    $2,456.89
                  </h1>
                </div>
                {iFO2}
              </div>
              <ResponsiveContainer height={71} className="w-full mt-[23px]">
                <BarChart
                  width={150}
                  height={40}
                  data={financial_overview_data}
                >
                  <Bar dataKey="uv">
                    {financial_overview_data.map((entry, index) => (
                      <Cell
                        cursor="pointer"
                        fill={entry.fill}
                        key={`cell-${index}`}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="border-[4px] border-[#51C5B0] rounded-[16px] min-h-[180px] max-h-[180px] px-[23px] py-[17px]">
              <div className="flex justify-between items-center ">
                <div className="flex flex-col gap-1">
                  <span className="text-[#A0AEC0] text-xs font-medium leading-[18px] tracking-[0.4px]">
                    TRAILING
                  </span>
                  <h1 className="text-primary_gw text-xl leading-[27px] font-extrabold tracking-[0.2px]">
                    $2,456.89
                  </h1>
                </div>
                {iFO2}
              </div>
              <ResponsiveContainer height={71} className="w-full mt-[23px]">
                <BarChart
                  width={150}
                  height={40}
                  data={financial_overview_data}
                >
                  <Bar dataKey="uv">
                    {financial_overview_data.map((entry, index) => (
                      <Cell
                        cursor="pointer"
                        fill={entry.fill}
                        key={`cell-${index}`}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="border-[4px] border-[#51C5B0] rounded-[16px] min-h-[180px] max-h-[180px] px-[23px] py-[17px]">
              <div className="flex justify-between items-center ">
                <div className="flex flex-col gap-1">
                  <span className="text-[#A0AEC0] text-xs font-medium leading-[18px] tracking-[0.4px]">
                    PRICE / CASH FLOW
                  </span>
                  <h1 className="text-primary_gw text-xl leading-[27px] font-extrabold tracking-[0.2px]">
                    $2,456.89
                  </h1>
                </div>
                {iFO2}
              </div>
              <ResponsiveContainer height={71} className="w-full mt-[23px]">
                <BarChart
                  width={150}
                  height={40}
                  data={financial_overview_data}
                >
                  <Bar dataKey="uv">
                    {financial_overview_data.map((entry, index) => (
                      <Cell
                        cursor="pointer"
                        fill={entry.fill}
                        key={`cell-${index}`}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div
            className="min-w-[317px] max-h-[406px] h-full bg-[#1A202C] border-[3px] border-[#8AEB68] rounded-[16px] pt-[40px] pb-[5px] px-[17px]
        "
          >
            <div className="flex justify-between items-center mb-[20px]">
              <h1 className="text-primary_gw text-sm md:text-[18px] font-extrabold leading-[24px] tracking-[0.2px] break-all">
                Comparables by Industry
              </h1>
              <span className="text-[#A0AEC0] text-xs md:text-sm font-medium leading-[21px] tracking-[0.2px]">
                View all
              </span>
            </div>
            <ScrollArea className="h-full max-h-[290px] ">
              <div className="grid grid-cols-1 gap-3 md:gap-[24px]">
                {[1, 2, 3, 4, 5, 6, 7, 8, 5, 6, 4, 5, 5, 5, 5, 5].map(() => (
                  <>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div> {iFOLogo1}</div>
                        <div className="flex flex-col gap-1">
                          <h1 className="text-primary_gw text-sm font-extrabold leading-[21px] tracking-[0.2px]">
                            Name 1
                          </h1>
                          <span className="text-[#A0AEC0] text-xs font-medium leading-[18px] tracking-[0.4px]">
                            Deposit
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 text-right">
                        <h1 className="text-primary_gw text-sm font-extrabold leading-[21px] tracking-[0.2px]">
                          +523.10
                        </h1>
                        <span className="text-[#A0AEC0] text-xs font-medium leading-[18px] tracking-[0.4px]">
                          Today at 7.18 AM
                        </span>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
        <ValuationTable />
      </main>
    </div>
  );
};

export default index;
