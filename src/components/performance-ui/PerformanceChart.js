/* eslint-disable react/jsx-key */
import {
  iAvarage1,
  iAvarage2,
  iAvarage3,
  iFoundRate,
  iMarket,
  iVolume,
} from "@/utils/icons";
import React from "react";
import ReactApexChart from "react-apexcharts";
import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
var options = {
  series: [75],
  chart: {
    height: 350,
    type: "radialBar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: "70%",
        background: "#fff",
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: "front",
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24,
        },
      },
      track: {
        background: "#fff",
        strokeWidth: "67%",
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35,
        },
      },

      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: "#888",
          fontSize: "17px",
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: "#111",
          fontSize: "36px",
          show: true,
        },
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["#ABE5A1"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  stroke: {
    lineCap: "round",
  },
  labels: ["Percent"],
};

const PerformanceChart = () => {
  const RADIAN = Math.PI / 180;
  const data = [
    { name: "A", value: 80, color: "#ff0000" },
    { name: "B", value: 45, color: "#00ff00" },
    { name: "C", value: 25, color: "#0000ff" },
  ];
  const cx = 150;
  const cy = 200;
  const iR = 50;
  const oR = 100;
  const value = 50;

  const needle = (value, data, cx, cy, iR, oR, color) => {
    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
      <path
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        stroke="#none"
        fill={color}
      />,
    ];
  };
  return (
    <div className="flex justify-between w-full gap-[53px] mt-[45px]">
      <div className="min-w-[330px] h-full">
        <div className="w-full h-[180px] border-[3px] border-[#4FE270] rounded-[16px] py-3 px-[25px]">
          <div className="flex justify-between items-start">
            <div className="flex flex-col justify-center items-center gap-[23px]">
              <h1 className="font-inter text-primary_gw text-xl font-semibold leading-[28px] tracking-[0.1px]">
                Standard & Poors
              </h1>

              <svg
                width="114"
                height="122"
                viewBox="0 0 114 122"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M81.1397 60.9944H32.8599C32.8599 46.7263 43.6673 35.1604 56.9998 35.1604C70.3323 35.1604 81.1397 46.7263 81.1397 60.9944Z"
                  fill="#E6E7E8"
                />
                <path
                  d="M75.7604 60.9944H38.2402C38.2402 49.9066 46.6396 40.9178 57.0003 40.9178C67.361 40.9178 75.7604 49.9066 75.7604 60.9944Z"
                  fill="#D1D3D4"
                />
                <path
                  d="M61.7528 60.6282C61.7132 57.6509 59.4257 55.2716 56.6435 55.314C53.8614 55.3564 51.6382 57.8044 51.6778 60.7818C51.7174 63.7592 54.0049 66.1384 56.787 66.096C59.5692 66.0536 61.7924 63.6056 61.7528 60.6282Z"
                  fill="#414042"
                />
                <path
                  d="M87.1053 35.9303L55.5726 59.0584L57.8537 62.3438L87.6531 36.7214C87.8435 36.5568 87.8797 36.2598 87.734 36.0485L87.73 36.0417C87.5843 35.8305 87.3091 35.7806 87.1053 35.9303Z"
                  fill="#414042"
                />
                <path
                  d="M57.401 63.6254C58.911 63.2195 59.8275 61.5805 59.4482 59.9646C59.0689 58.3487 57.5373 57.3678 56.0274 57.7738C54.5175 58.1797 53.601 59.8187 53.9803 61.4346C54.3596 63.0505 55.8911 64.0314 57.401 63.6254Z"
                  fill="#E6E7E8"
                />
                <path
                  d="M1.78096 61C0.797368 61 -0.00252028 60.2022 0.0242819 59.219C0.447791 43.6867 6.39825 28.8857 16.6949 17.8665C27.3845 6.42676 41.8827 8.82261e-07 57 2.29661e-06C72.1173 3.71095e-06 86.6155 6.42677 97.3051 17.8665C107.602 28.8857 113.552 43.6868 113.976 59.219C114.003 60.2022 113.203 61 112.219 61C111.235 61 110.441 60.2021 110.412 59.2189C109.99 44.6979 104.415 30.8662 94.7865 20.5619C84.7649 9.83701 71.1727 3.81185 57 3.81185C42.8273 3.81185 29.2352 9.83701 19.2136 20.5619C9.58492 30.8662 4.01017 44.6979 3.5878 59.2189C3.5592 60.2021 2.76455 61 1.78096 61Z"
                  fill="#9096AD"
                />
                <mask id="path-7-inside-1_459_3391" fill="white">
                  <path d="M1.78096 61C0.797368 61 -0.00252028 60.2022 0.0242971 59.219C0.365294 46.7204 4.28871 34.6193 11.283 24.5675C18.6091 14.039 28.9134 6.3204 40.6652 2.5585C52.4169 -1.2034 64.9892 -0.807927 76.5142 3.68617C87.5288 7.98125 97.0253 15.801 103.725 26.0621C104.249 26.8652 104.026 27.9339 103.242 28.4856C102.385 29.088 101.2 28.8409 100.622 27.9672C94.352 18.4841 85.5213 11.2555 75.2948 7.26767C64.4899 3.05441 52.7033 2.68365 41.6859 6.21047C30.6685 9.73728 21.0081 16.9735 14.1398 26.8442C7.60336 36.238 3.92767 47.5409 3.58781 59.2191C3.5592 60.2022 2.76455 61 1.78096 61Z" />
                </mask>
                <path
                  d="M1.78096 61C0.797368 61 -0.00252028 60.2022 0.0242971 59.219C0.365294 46.7204 4.28871 34.6193 11.283 24.5675C18.6091 14.039 28.9134 6.3204 40.6652 2.5585C52.4169 -1.2034 64.9892 -0.807927 76.5142 3.68617C87.5288 7.98125 97.0253 15.801 103.725 26.0621C104.249 26.8652 104.026 27.9339 103.242 28.4856C102.385 29.088 101.2 28.8409 100.622 27.9672C94.352 18.4841 85.5213 11.2555 75.2948 7.26767C64.4899 3.05441 52.7033 2.68365 41.6859 6.21047C30.6685 9.73728 21.0081 16.9735 14.1398 26.8442C7.60336 36.238 3.92767 47.5409 3.58781 59.2191C3.5592 60.2022 2.76455 61 1.78096 61Z"
                  fill="#17F304"
                  stroke="#21F50E"
                  stroke-width="6"
                  mask="url(#path-7-inside-1_459_3391)"
                />
              </svg>
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
        <div className="w-full h-[180px] border-[3px] border-[#4FE270] rounded-[16px] py-3 px-[25px] mt-[10px]">
          <div className="flex justify-between items-start">
            <div className="flex flex-col justify-center items-center gap-[23px]">
              <h1 className="font-inter text-primary_gw text-xl font-semibold leading-[28px] tracking-[0.1px]">
                Standard & Poors
              </h1>
              {/* <PieChart width={114} height={122}>
              <Pie
                dataKey="value"
                startAngle={50}
                endAngle={0}
                data={data}
                cx={cx}
                cy={cy}
                innerRadius={iR}
                outerRadius={oR}
                fill="#8884d8"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              {needle(value, data, cx, cy, iR, oR, "#d0d000")}
            </PieChart> */}
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

      <div className="w-[280px] flex flex-col items-center gap-2 h-[370px] border-[3px] border-[#47E2BD] performance_avarage_bg rounded-[16px] py-3 px-[25px]">
        <ReactApexChart
          options={options}
          series={options.series}
          type="candlestick"
          height={200}
          width={100}
        />

        {/* <svg
          width="78"
          height="79"
          viewBox="0 0 78 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.507 71.154C48.8581 75.0315 66.0826 63.8796 69.9789 46.2456C73.8752 28.6116 62.9679 11.1731 45.6167 7.29559C28.2656 3.41812 11.0411 14.57 7.14483 32.204C3.24853 49.838 14.1558 67.2765 31.507 71.154Z"
            stroke="#3A3D4C"
            stroke-width="3.6054"
            stroke-miterlimit="10"
          />
          <path
            d="M63.255 60.112C57.3414 67.2275 48.4929 71.7639 38.604 71.8177C20.7885 71.9144 6.33311 57.403 6.31662 39.405C6.30799 29.994 10.247 21.497 16.5475 15.5154"
            stroke="url(#paint0_linear_459_3332)"
            stroke-width="5.487"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_459_3332"
              x1="34.7553"
              y1="12.3638"
              x2="35.095"
              y2="74.8971"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5A6FF0" />
              <stop offset="0.9949" stop-color="#00FFDD" />
            </linearGradient>
          </defs>
        </svg> */}
        <svg
          width="78"
          height="79"
          viewBox="0 0 78 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.507 71.154C48.8581 75.0315 66.0826 63.8796 69.9789 46.2456C73.8752 28.6116 62.9679 11.1731 45.6167 7.29559C28.2656 3.41812 11.0411 14.57 7.14483 32.204C3.24853 49.838 14.1558 67.2765 31.507 71.154Z"
            stroke="#3A3D4C"
            stroke-width="3.6054"
            stroke-miterlimit="10"
          />
          <path
            d="M63.255 60.112C57.3414 67.2275 48.4929 71.7639 38.604 71.8177C20.7885 71.9144 6.33311 57.403 6.31662 39.405C6.30799 29.994 10.247 21.497 16.5475 15.5154"
            stroke="url(#paint0_linear_459_3332)"
            stroke-width="5.487"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_459_3332"
              x1="34.7553"
              y1="12.3638"
              x2="35.095"
              y2="74.8971"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5A6FF0" />
              <stop offset="0.9949" stop-color="#00FFDD" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="78"
          height="79"
          viewBox="0 0 78 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.507 71.154C48.8581 75.0315 66.0826 63.8796 69.9789 46.2456C73.8752 28.6116 62.9679 11.1731 45.6167 7.29559C28.2656 3.41812 11.0411 14.57 7.14483 32.204C3.24853 49.838 14.1558 67.2765 31.507 71.154Z"
            stroke="#3A3D4C"
            stroke-width="3.6054"
            stroke-miterlimit="10"
          />
          <path
            d="M63.255 60.112C57.3414 67.2275 48.4929 71.7639 38.604 71.8177C20.7885 71.9144 6.33311 57.403 6.31662 39.405C6.30799 29.994 10.247 21.497 16.5475 15.5154"
            stroke="url(#paint0_linear_459_3332)"
            stroke-width="5.487"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_459_3332"
              x1="34.7553"
              y1="12.3638"
              x2="35.095"
              y2="74.8971"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5A6FF0" />
              <stop offset="0.9949" stop-color="#00FFDD" />
            </linearGradient>
          </defs>
        </svg>

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

      <div className="w-full flex flex-col flex-grow items-center gap-2 h-[370px] border-[3px] border-[#47E2BD] performance_avarage_bg rounded-[16px] py-3 px-[25px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={300} height={100} data={data}>
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#C31FE6"
              strokeWidth={2}
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
