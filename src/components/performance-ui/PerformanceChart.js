/* eslint-disable react/jsx-key */
import { overview_stock_prices } from "@/utils/chartData";
import {
  iAvarage1,
  iAvarage2,
  iAvarage3,
  iFoundRate,
  iMarket,
  iVolume,
} from "@/utils/icons";
import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ReactSpeedometer from "react-d3-speedometer";
import { Line, LineChart, ResponsiveContainer } from "recharts";

const PerformanceChart = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full gap-[53px] mt-[45px]">
      <div className="w-full md:min-w-[330px] h-full">
        <div className="w-full h-[180px] border-[3px] border-[#4FE270] rounded-[16px] py-3 px-2 md:px-[25px]">
          <div className="flex justify-between items-start">
            <div className="flex flex-col justify-center items-center gap-[23px]">
              <h1 className="font-inter text-primary_gw text-xl font-semibold leading-[28px] tracking-[0.1px]">
                Standard & Poors
              </h1>

              <ReactSpeedometer
                value={473}
                segmentColors={["#17F304", "#9096AD"]}
                needleColor="white"
                segments={2}
                ringWidth={5}
                width={150}
              />
            </div>
            <div className="grid grid-cols-1 gap-[9px] mt-1">
              <div className="flex flex-col gap-1">
                <span className="text-[#9CA4AB] text-[10px] font-medium leading-[18px] tracking-[0.5px]">
                  Market Cap. USD
                </span>
                <h1 className="font-inter text-primary_gw text-sm font-semibold leading-[22px] tracking-[0.7px]">
                  $980.00
                </h1>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#9CA4AB] text-[10px] font-medium leading-[18px] tracking-[0.5px]">
                  Points USD
                </span>
                <h1 className="font-inter text-primary_gw text-sm font-semibold leading-[22px] tracking-[0.7px]">
                  $3,643.00
                </h1>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#9CA4AB] text-[10px] font-medium leading-[18px] tracking-[0.5px]">
                  Others
                </span>
                <h1 className="font-inter text-primary_gw text-sm font-semibold leading-[22px] tracking-[0.7px]">
                  $232.00
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[180px] border-[3px] border-[#4FE270] rounded-[16px] py-3 px-2 md:px-[25px] mt-[10px]">
          <div className="flex justify-between items-start">
            <div className="flex flex-col justify-center items-center gap-[23px]">
              <h1 className="font-inter text-primary_gw text-xl font-semibold leading-[28px] tracking-[0.1px]">
                Standard & Poors
              </h1>
              <ReactSpeedometer
                value={800}
                segmentColors={["#17F304", "#9096AD"]}
                needleColor="white"
                segments={2}
                ringWidth={5}
                width={150}
              />
            </div>
            <div className="grid grid-cols-1 gap-[9px] mt-1">
              <div className="flex flex-col gap-1">
                <span className="text-[#9CA4AB] text-[10px] font-medium leading-[18px] tracking-[0.5px]">
                  Market Cap. USD
                </span>
                <h1 className="font-inter text-primary_gw text-sm font-semibold leading-[22px] tracking-[0.7px]">
                  $980.00
                </h1>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#9CA4AB] text-[10px] font-medium leading-[18px] tracking-[0.5px]">
                  Points USD
                </span>
                <h1 className="font-inter text-primary_gw text-sm font-semibold leading-[22px] tracking-[0.7px]">
                  $3,643.00
                </h1>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#9CA4AB] text-[10px] font-medium leading-[18px] tracking-[0.5px]">
                  Others
                </span>
                <h1 className="font-inter text-primary_gw text-sm font-semibold leading-[22px] tracking-[0.7px]">
                  $232.00
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[280px] flex flex-col items-center gap-2 h-[370px] border-[3px] border-[#47E2BD] performance_avarage_bg rounded-[16px] py-3 px-2 md:px-[25px]">
        <CircularProgressbar
          value={50}
          text={`${50}%`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: "butt",
            textSize: "16px",
            pathTransitionDuration: 0.5,
            pathColor: `rgba(90, 111, 240, ${50 / 100})`,
            textColor: "#C31FE6",
            trailColor: "#3A3D4C",
            backgroundColor: "#C31FE6",
          })}
        />
        <CircularProgressbar
          value={50}
          text={`${50}%`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: "butt",
            textSize: "16px",
            pathTransitionDuration: 0.5,
            pathColor: `rgba(90, 111, 240, ${50 / 100})`,
            textColor: "#C31FE6",
            trailColor: "#3A3D4C",
            backgroundColor: "#C31FE6",
          })}
        />
        <CircularProgressbar
          value={50}
          text={`${50}%`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: "butt",
            textSize: "16px",
            pathTransitionDuration: 0.5,
            pathColor: `rgba(90, 111, 240, ${50 / 100})`,
            textColor: "#C31FE6",
            trailColor: "#3A3D4C",
            backgroundColor: "#C31FE6",
          })}
        />

        <div className="grid grid-cols-1 gap-2 mt-2">
          <div className="flex items-center gap-[4px]">
            {iAvarage1}
            <h1 className="text-[10px] font-medium text-white">
              Average Daily Return
            </h1>
          </div>
          <div className="flex items-center gap-[4px]">
            {iAvarage2}
            <h1 className="text-[10px] font-medium text-white">
              Average Daily Return
            </h1>
          </div>
          <div className="flex items-center gap-[4px]">
            {iAvarage3}
            <h1 className="text-[10px] font-medium text-white">
              Average Daily Return
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col flex-grow items-center gap-2 h-[370px] border-[3px] border-[#47E2BD] performance_avarage_bg rounded-[16px] py-3 px-3 md:px-[25px]">
        <ResponsiveContainer height={250} className="w-full mt-4">
          <LineChart className="h-full w-full" data={overview_stock_prices}>
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#C31FE6"
              strokeWidth={1.829}
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#00FFDD"
              strokeWidth={1.829}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="flex flex-col items-center gap-[9px]">
            {iFoundRate}
            <h1 className="text-white text-[10px] font-extrabold">
              US Funds Rates
            </h1>
          </div>
          <div className="flex flex-col items-center gap-[9px]">
            {iVolume}
            <h1 className="text-white text-[10px] font-extrabold">VOLUME</h1>
          </div>
          <div className="flex flex-col items-center gap-[9px]">
            {iMarket}
            <h1 className="text-white text-[10px] font-extrabold">Market</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
