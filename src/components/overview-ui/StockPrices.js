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
      <div className="border max-h-fit min-h-[472px] w-full mt-[29px] rounded-[16px] border-[#2A313C] py-[42px] px-[37px]">
        <div className="flex justify-between items-center">
          <h1 className="text-primary_gw text-[18px] font-semibold leading-[24px] tracking-[0.2px]">
            Stocks Prices
          </h1>
          <div className="flex justify-center items-center gap-5">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="border-none outline-none">
              <button className="flex justify-center gap-1 items-center h-[49px] bg-[#232B38] rounded-[8px] w-[203px]">
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
        <ResponsiveContainer height={380} className="w-full mt-[48px]">
          <LineChart className="h-full w-full" data={overview_stock_prices}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
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
