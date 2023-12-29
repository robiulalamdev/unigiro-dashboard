import { overview_stock_prices } from "@/utils/chartData";
import { iDownArrow, spLabel } from "@/utils/icons";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const StockPrices = () => {
  return (
    <div>
      <div className="border max-h-fit min-h-[472px] w-full mt-[29px] rounded-[16px] border-[#2A313C] py-[18px] md:py-[42px] px-4 md:px-[37px]">
        <h1 className="text-primary_gw text-base md:text-[18px] font-semibold leading-[24px] text-center mb-2 tracking-[0.2px] md:hidden">
          Stocks Prices
        </h1>
        <div className="flex justify-between items-center">
          <h1 className="text-primary_gw text-base md:text-[18px] font-semibold leading-[24px] tracking-[0.2px] hidden md:block">
            Stocks Prices
          </h1>
          <div className="md:hidden">
            <DropdownMenu className="">
              <DropdownMenuTrigger asChild className="border-none outline-none">
                <button className="flex justify-center gap-1 items-center h-10 px-2 md:h-[49px] bg-[#232B38] rounded-[8px] w-fit text-nowrap">
                  <span className="text-xs font-semibold leading-[18px] tracking-[0.4px] text-primary_gw">
                    company 1
                  </span>
                  <div className="size-4 text-[#718096]">{iDownArrow}</div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-fit bg-sidebar_bg border border-[#232B38] text-white">
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center gap-2 text-primary_gw text-xs font-semibold leading-[18px] tracking-[0.4px]">
                    <div className="text-[#194BFB]">{spLabel}</div>
                    <span>company 1</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary_gw text-xs font-semibold leading-[18px] tracking-[0.4px]">
                    <div className="text-[#FAFAFA]">{spLabel}</div>
                    <span>company 2</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary_gw text-xs font-semibold leading-[18px] tracking-[0.4px]">
                    <div className="text-[#F44FBC]">{spLabel}</div>
                    <span>company 3</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary_gw text-xs font-semibold leading-[18px] tracking-[0.4px]">
                    <div className="text-[#E7EB17]">{spLabel}</div>
                    <span>company 4</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary_gw text-xs font-semibold leading-[18px] tracking-[0.4px]">
                    <div className="text-[#33EA15]">{spLabel}</div>
                    <span>company 5</span>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="w-full hidden md:block">
            <div className="flex justify-center items-center flex-wrap md:flex-nowrap gap-2 md:gap-5">
              <div className="flex items-center gap-2 text-primary_gw text-xs font-semibold leading-[18px] tracking-[0.4px]">
                <div className="text-[#194BFB]">{spLabel}</div>
                <span>company 1</span>
              </div>
              <div className="flex items-center gap-2 text-primary_gw text-xs font-semibold leading-[18px] tracking-[0.4px]">
                <div className="text-[#FAFAFA]">{spLabel}</div>
                <span>company 2</span>
              </div>
              <div className="flex items-center gap-2 text-primary_gw text-xs font-semibold leading-[18px] tracking-[0.4px]">
                <div className="text-[#F44FBC]">{spLabel}</div>
                <span>company 3</span>
              </div>
              <div className="flex items-center gap-2 text-primary_gw text-xs font-semibold leading-[18px] tracking-[0.4px]">
                <div className="text-[#E7EB17]">{spLabel}</div>
                <span>company 4</span>
              </div>
              <div className="flex items-center gap-2 text-primary_gw text-xs font-semibold leading-[18px] tracking-[0.4px]">
                <div className="text-[#33EA15]">{spLabel}</div>
                <span>company 5</span>
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="border-none outline-none">
              <button className="flex justify-center gap-1 items-center h-10 px-2 md:h-[49px] bg-[#232B38] rounded-[8px] w-fit md:w-[203px]">
                <span className="text-xs font-semibold leading-[18px] tracking-[0.4px] text-primary_gw">
                  Last 3 years
                </span>
                <div className="size-4 text-[#718096]">{iDownArrow}</div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[203px] bg-sidebar_bg border border-[#232B38] text-white">
              <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <ResponsiveContainer
          height={380}
          className="w-full md:max-h-full mt-[48px]"
        >
          <LineChart className="h-full w-full" data={overview_stock_prices}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#436CFF"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#ffff" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StockPrices;
