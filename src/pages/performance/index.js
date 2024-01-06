"use client";

import Header from "@/components/headers/Header";
import OverviewEC from "@/components/overview-ui/OverviewEC";
import PerformanceTable from "@/components/performance-ui/PerformanceTable";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { date1, iDownArrow } from "@/utils/icons";
import moment from "moment";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";

const PerformanceChart = dynamic(
  () => import("@/components/performance-ui/PerformanceChart"),
  {
    ssr: false,
  }
);

const OverViewPage = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const fromDateRef = useRef();
  const toDateRef = useRef();
  return (
    <div>
      <Header label="Performance" />
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
              Get Performance
            </button>
          </div>
        </div>
        <PerformanceChart />
        <PerformanceTable />
      </main>
    </div>
  );
};

export default OverViewPage;
