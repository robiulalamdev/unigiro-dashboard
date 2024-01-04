import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { iDownArrow } from "@/utils/icons";
import ReactApexChart from "react-apexcharts";

var options = {
  series: [
    {
      name: "candle",
      data: [
        {
          x: "Jan 10",
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: "Jan 11",
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: "Jan 12",
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        {
          x: "Jan 13",
          y: [6635.65, 6651, 6629.67, 6638.24],
        },
        {
          x: "Jan 14",
          y: [6638.24, 6640, 6620, 6624.47],
        },
        {
          x: "Jan 15",
          y: [6624.53, 6636.03, 6621.68, 6624.31],
        },
        {
          x: "Jan 16",
          y: [6624.61, 6632.2, 6617, 6626.02],
        },
        {
          x: "Jan 662",
          y: [6627, 6627.62, 6584.22, 6603.02],
        },
        {
          x: "Jan 660",
          y: [6605, 6608.03, 6598.95, 6604.01],
        },
        {
          x: "Jan 660",
          y: [6604.5, 6614.4, 6602.26, 6608.02],
        },
        {
          x: "Jan 660",
          y: [6608.02, 6610.68, 6601.99, 6608.91],
        },
        {
          x: "Jan 660",
          y: [6608.91, 6618.99, 6608.01, 6612],
        },
        {
          x: "Jan 661",
          y: [6612, 6615.13, 6605.09, 6612],
        },
        {
          x: "Jan 661",
          y: [6612, 6624.12, 6608.43, 6622.95],
        },
        {
          x: "Jan 662",
          y: [6623.91, 6623.91, 6615, 6615.67],
        },
        {
          x: "Jan 661",
          y: [6618.69, 6618.74, 6610, 6610.4],
        },
        {
          x: "Jan 661",
          y: [6611, 6622.78, 6610.4, 6614.9],
        },
        {
          x: "Jan 661",
          y: [6614.9, 6626.2, 6613.33, 6623.45],
        },
        {
          x: "Jan 662",
          y: [6623.48, 6627, 6618.38, 6620.35],
        },
        {
          x: "Jan 661",
          y: [6619.43, 6620.35, 6610.05, 6615.53],
        },
        {
          x: "Jan 661",
          y: [6615.53, 6617.93, 6610, 6615.19],
        },
        {
          x: "Jan 661",
          y: [6615.19, 6621.6, 6608.2, 6620],
        },
        {
          x: "Jan 661",
          y: [6619.54, 6625.17, 6614.15, 6620],
        },
        {
          x: "Jan 662",
          y: [6620.33, 6634.15, 6617.24, 6624.61],
        },
        {
          x: "Jan 662",
          y: [6625.95, 6626, 6611.66, 6617.58],
        },
        {
          x: "Jan 661",
          y: [6619, 6625.97, 6595.27, 6598.86],
        },
        {
          x: "Jan 659",
          y: [6598.86, 6598.88, 6570, 6587.16],
        },
        {
          x: "Jan 658",
          y: [6588.86, 6600, 6580, 6593.4],
        },
        {
          x: "Jan 659",
          y: [6593.99, 6598.89, 6585, 6587.81],
        },
        {
          x: "Jan 658",
          y: [6587.81, 6592.73, 6567.14, 6578],
        },
        {
          x: "Jan 657",
          y: [6578.35, 6581.72, 6567.39, 6579],
        },
        {
          x: "Jan 657",
          y: [6579.38, 6580.92, 6566.77, 6575.96],
        },
        {
          x: "Jan 657",
          y: [6575.96, 6589, 6571.77, 6588.92],
        },
        {
          x: "Jan 658",
          y: [6588.92, 6594, 6577.55, 6589.22],
        },
        {
          x: "Jan 658",
          y: [6589.3, 6598.89, 6589.1, 6596.08],
        },
        {
          x: "Jan 659",
          y: [6597.5, 6600, 6588.39, 6596.25],
        },
        {
          x: "Jan 659",
          y: [6598.03, 6600, 6588.73, 6595.97],
        },
        {
          x: "Jan 659",
          y: [6595.97, 6602.01, 6588.17, 6602],
        },
        {
          x: "Jan 660",
          y: [6602, 6607, 6596.51, 6599.95],
        },
        {
          x: "Jan 660",
          y: [6600.63, 6601.21, 6590.39, 6591.02],
        },
        {
          x: "Jan 659",
          y: [6591.02, 6603.08, 6591, 6591],
        },
        {
          x: "Jan 659",
          y: [6591, 6601.32, 6585, 6592],
        },
        {
          x: "Jan 659",
          y: [6593.13, 6596.01, 6590, 6593.34],
        },
        {
          x: "Jan 659",
          y: [6593.34, 6604.76, 6582.63, 6593.86],
        },
        {
          x: "Jan 659",
          y: [6593.86, 6604.28, 6586.57, 6600.01],
        },
        {
          x: "Jan 660",
          y: [6601.81, 6603.21, 6592.78, 6596.25],
        },
        {
          x: "Jan 659",
          y: [6596.25, 6604.2, 6590, 6602.99],
        },
        {
          x: "Jan 660",
          y: [6602.99, 6606, 6584.99, 6587.81],
        },
        {
          x: "Jan 658",
          y: [6587.81, 6595, 6583.27, 6591.96],
        },
        {
          x: "Jan 659",
          y: [6591.97, 6596.07, 6585, 6588.39],
        },
        {
          x: "Jan 658",
          y: [6587.6, 6598.21, 6587.6, 6594.27],
        },
        {
          x: "Jan 659",
          y: [6596.44, 6601, 6590, 6596.55],
        },
        {
          x: "Jan 659",
          y: [6598.91, 6605, 6596.61, 6600.02],
        },
        {
          x: "Jan 660",
          y: [6600.55, 6605, 6589.14, 6593.01],
        },
        {
          x: "Jan 659",
          y: [6593.15, 6605, 6592, 6603.06],
        },
        {
          x: "Jan 660",
          y: [6603.07, 6604.5, 6599.09, 6603.89],
        },
        {
          x: "Jan 660",
          y: [6604.44, 6604.44, 6600, 6603.5],
        },
        {
          x: "Jan 660",
          y: [6603.5, 6603.99, 6597.5, 6603.86],
        },
        {
          x: "Jan 660",
          y: [6603.85, 6605, 6600, 6604.07],
        },
        {
          x: "Jan 660",
          y: [6604.98, 6606, 6604.07, 6606],
        },
      ],
    },
  ],
  chart: {
    height: 350,
    type: "candlestick",
  },
  tooltip: {
    enabled: true,
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
};

const items = [
  "Last 1 Day",
  "Last 30 Days",
  "Last 90 Days",
  "Last 1 Years",
  "Last 3 Years",
  "Last 5 Years",
];

const ForexChart = () => {
  const [selectTime, setSelectTime] = useState("Last 30 Days");
  return (
    <div className="w-full min-h-[472px] max-h-[472px] border border-[#2A313C] rounded-[16px] p-3 md:p-[37px] mt-10 md:mt-[308px]">
      <div className="flex justify-between mb-4">
        <h1 className="text-primary_gw text-sm md:text-xl font-semibold leading-[18px] tracking-[0.2px]">
          USD/EUR
        </h1>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="border-none outline-none">
            <button className="flex justify-center gap-1 items-center bg-[#232B38] h-8 md:h-[49px] w-fit px-3 md:w-[203px]">
              <span className="text-xs font-semibold leading-[18px] tracking-[0.4px] text-primary_gw">
                {selectTime}
              </span>
              <div className="size-4 text-white">{iDownArrow}</div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[203px] bg-sidebar_bg border border-[#232B38] text-white">
            {items.map((item, index) => (
              <DropdownMenuRadioItem
                onClick={() => setSelectTime(item)}
                key={index}
                value={item}
              >
                {item}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ReactApexChart
        options={options}
        series={options.series}
        type="candlestick"
        height={400}
      />
    </div>
  );
};

export default ForexChart;
