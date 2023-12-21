import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { iDownArrow } from "@/utils/icons";

const SelectTimePeriod = () => {
  return (
    <div className="flex justify-center items-center gap-[33px] mt-6">
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
            className={`bg-[#232B38] border-none outline-none text-primary_gw flex gap-1 items-center hover:bg-[#232B38]`}
          >
            <span className="text-xs font-semibold leading-[18px] tracking-[0.4px]">
              DD / MM / YYYY
            </span>
            <div className="w-4 text-[#718096]">{iDownArrow}</div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
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
            className={`bg-[#232B38] border-none outline-none text-primary_gw flex gap-1 items-center hover:bg-[#232B38]`}
          >
            <span className="text-xs font-semibold leading-[18px] tracking-[0.4px]">
              DD / MM / YYYY
            </span>
            <div className="w-4 text-[#718096]">{iDownArrow}</div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SelectTimePeriod;
