"use client";

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
import { date1, iDownArrow, iFO2, iFOLogo1 } from "@/utils/icons";
import moment from "moment";
import React, { useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Bar, BarChart, Cell, ResponsiveContainer } from "recharts";

const ValuationPage = () => {
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
            <ReactDatePicker
              className="text-xs font-semibold leading-[18px] h-[40px] text-center rounded-md tracking-[0.4px] bg-[#232B38] border-none outline-none text-primary_gw placeholder:text-primary_gw flex gap-1 items-center hover:bg-[#232B38]"
              selected={fromDate}
              onChange={(date) => {
                setFromDate(date);
              }}
              showYearDropdown
              placeholderText="DD / MM / YYYY"
              showIcon
              icon={date1}
            />

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
            <ReactDatePicker
              className="text-xs font-semibold leading-[18px] h-[40px] text-center rounded-md tracking-[0.4px] bg-[#232B38] border-none outline-none text-primary_gw placeholder:text-primary_gw flex gap-1 items-center hover:bg-[#232B38]"
              selected={toDate}
              onChange={(date) => {
                setToDate(date);
              }}
              showYearDropdown
              placeholderText="DD / MM / YYYY"
              showIcon
              icon={date1}
            />
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

export default ValuationPage;
