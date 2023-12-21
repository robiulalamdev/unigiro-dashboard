import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
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
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { iDownArrow } from "@/utils/icons";

const ForexChart = () => {
  const data = [
    {
      name: "Jan 10",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Jan 11",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Jan 12",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Jan 13",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Jan 14",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jan 15",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jan 16",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="w-full min-h-[472px] max-h-[472px] border border-[#2A313C] rounded-[16px] p-[37px] mt-[308px]">
      <div className="flex justify-between">
        <h1 className="text-primary_gw text-xl font-semibold leading-[18px] tracking-[0.2px]">
          USD/EUR
        </h1>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="border-none outline-none">
            <button className="flex justify-center gap-1 items-center bg-[#232B38] h-[49px] w-[203px]">
              <span className="text-xs font-semibold leading-[18px] tracking-[0.4px] text-primary_gw">
                Last 3 years
              </span>
              <div className="size-4 text-white">{iDownArrow}</div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[203px] bg-sidebar_bg border border-[#232B38] text-white">
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ResponsiveContainer height={350} className="h-[400px] w-full">
        <BarChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#FAFAFA" />
          <YAxis yAxisId="left" orientation="left" stroke="#FAFAFA" />
          <YAxis
            yAxisId="right"
            orientation="right"
            className="hidden"
            stroke="#FAFAFA"
          />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForexChart;
