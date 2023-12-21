import {
  financial_overview_data,
  financial_overview_data_second,
} from "@/utils/chartData";
import { iDownArrow, iFO1, iFO2, iFOLogo1 } from "@/utils/icons";
import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
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

const FinancialOverview = () => {
  return (
    <div className="mt-[24px]">
      <h1 className="text-primary_gw text-[18px] font-extrabold leading-[24px] tracking-[0.2px]">
        Financial Overview
      </h1>

      <div className="mt-[23px] grid grid-cols-4 gap-[36px]">
        <div className="border-[4px] border-primary rounded-[16px] min-h-[178px] px-[23px] py-[17px]">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col gap-1">
              <span className="text-[#A0AEC0] text-xs font-medium leading-[18px] tracking-[0.4px]">
                P/E RATIO{" "}
              </span>
              <h1 className="text-primary_gw text-xl leading-[27px] font-extrabold tracking-[0.2px]">
                $1,980.00
              </h1>
            </div>
            {iFO1}
          </div>
          <ResponsiveContainer height={170} className="w-full mt-[23px]">
            <BarChart width={150} height={40} data={financial_overview_data}>
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
        <div className="border-[4px] border-primary rounded-[16px] min-h-[178px] px-[23px] py-[17px]">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className="text-[#A0AEC0] text-xs font-medium leading-[18px] tracking-[0.4px]">
                  AVERAGE DAILY RETURNS{" "}
                </span>
                <div className="text-[#718096] w-5">{iDownArrow}</div>
              </div>
              <h1 className="text-primary_gw text-xl leading-[27px] font-extrabold tracking-[0.2px]">
                $2,456.89
              </h1>
            </div>
            {iFO2}
          </div>
          <ResponsiveContainer height={170} className="w-full mt-[23px]">
            <BarChart width={150} height={40} data={financial_overview_data}>
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
        <div className="border-[4px] border-primary rounded-[16px] min-h-[178px] px-[23px] py-[17px]">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className="text-[#A0AEC0] text-xs font-medium leading-[18px] tracking-[0.4px]">
                  EARNINGS PER SHARE{" "}
                </span>
                <div className="text-[#718096] w-5">{iDownArrow}</div>
              </div>
              <h1 className="text-primary_gw text-xl leading-[27px] font-extrabold tracking-[0.2px]">
                $2,456.89
              </h1>
            </div>
            {iFO2}
          </div>
          <ResponsiveContainer height={170} className="w-full mt-[23px]">
            <BarChart width={150} height={40} data={financial_overview_data}>
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
        <div className="border-[4px] border-primary rounded-[16px] min-h-[178px] px-[23px] py-[17px]">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className="text-[#A0AEC0] text-xs font-medium leading-[18px] tracking-[0.4px]">
                  RETURN ON ASSETS{" "}
                </span>
                <div className="text-[#718096] w-5">{iDownArrow}</div>
              </div>
              <h1 className="text-primary_gw text-xl leading-[27px] font-extrabold tracking-[0.2px]">
                $2,456.89
              </h1>
            </div>
            {iFO2}
          </div>
          <ResponsiveContainer height={170} className="w-full mt-[23px]">
            <BarChart width={150} height={40} data={financial_overview_data}>
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

      <div className="flex justify-between gap-6 mt-[35px]">
        <div
          className="min-w-[317px] h-full bg-[#1A202C] border border-[#2A313C] rounded-[16px] pt-[49px] pb-[15px] px-[17px]
        grid grid-cols-1 gap-6"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
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
        <div className="flex-grow w-full h-full grid grid-cols-1 gap-[26px]">
          <div className="w-full min-h-[296px] max-h-[296px] bg-[#1A202C] border border-[#2A313C] rounded-[16px]">
            <div className="flex justify-between px-[36px] pt-[6px]">
              <h1 className="text-primary_gw text-xl font-semibold leading-[18px] tracking-[0.2px]">
                Assets / Liabilities
              </h1>

              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="border-none outline-none"
                >
                  <button className="flex justify-center gap-1 items-center">
                    <span className="text-xs font-semibold leading-[18px] tracking-[0.4px] text-primary_gw">
                      Select the Value
                    </span>
                    <div className="size-4 text-white">{iDownArrow}</div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[203px] bg-sidebar_bg border border-[#232B38] text-white">
                  <DropdownMenuRadioItem value="right">
                    Right
                  </DropdownMenuRadioItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <ResponsiveContainer
              height={255}
              className="w-full h-full mt-[23px] px-[23px]"
            >
              <BarChart width={29} data={financial_overview_data_second}>
                <XAxis dataKey="name" color="#ffff" />
                {/* <Tooltip /> */}
                <Bar dataKey="uv" width={29}>
                  {financial_overview_data_second.map((entry, index) => (
                    <Cell
                      cursor="pointer"
                      fill={entry.fill}
                      key={`cell-${index}`}
                      width={29}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full min-h-[296px] max-h-[296px] bg-[#1A202C] border border-[#2A313C] rounded-[16px]">
            <div className="flex justify-between px-[36px] pt-[6px]">
              <h1 className="text-primary_gw text-xl font-semibold leading-[18px] tracking-[0.2px]">
                Cash Flow Statement
              </h1>

              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="border-none outline-none"
                >
                  <button className="flex justify-center gap-1 items-center">
                    <span className="text-xs font-semibold leading-[18px] tracking-[0.4px] text-primary_gw">
                      Select the Value
                    </span>
                    <div className="size-4 text-white">{iDownArrow}</div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[203px] bg-sidebar_bg border border-[#232B38] text-white">
                  <DropdownMenuRadioItem value="right">
                    Right
                  </DropdownMenuRadioItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <ResponsiveContainer
              height={255}
              className="w-full h-full mt-[23px] px-[23px]"
            >
              <BarChart width={29} data={financial_overview_data_second}>
                <XAxis dataKey="name" color="#ffff" />
                {/* <Tooltip /> */}
                <Bar dataKey="uv" width={29}>
                  {financial_overview_data_second.map((entry, index) => (
                    <Cell
                      cursor="pointer"
                      fill={entry.fill}
                      key={`cell-${index}`}
                      width={29}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview;
