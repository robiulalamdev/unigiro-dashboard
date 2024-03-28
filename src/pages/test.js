import React from "react";

const financialData = [
  {
    exchange: "NYSE",
    company: "Apple Inc.",
    stocksPrices: [
      { month: "Jan 10", price: 110.25 },
      { month: "Feb 10", price: 115.5 },
      { month: "Mar 10", price: 120.8 },
    ],
    financialOverview: [
      {
        name: "P/E Ratio",
        value: 20,
      },
      {
        name: "Average Daily Returns",
        value: 30,
      },
      {
        name: "Earnings Per Share",
        value: 5.25,
      },
      {
        name: "Return On Assets",
        value: 0.12,
      },
      {
        name: "Debt to Equity Ratio",
        value: 1.5,
      },
    ],
    assetsLiabilities: [
      {
        name: "Assets",
        value: 50000000,
      },
      {
        name: "Liabilities",
        value: 25000000,
      },
    ],
    cashFlowStatement: [
      {
        name: "Operating Cash Flow",
        value: 15000000,
      },
      {
        name: "Investing Cash Flow",
        value: -10000000,
      },
      {
        name: "Financing Cash Flow",
        value: -5000000,
      },
    ],
  },
  {
    exchange: "NASDAQ",
    company: "Microsoft Corporation",
    stocksPrices: [
      { month: "Jan 10", price: 30.8 },
      { month: "Feb 10", price: 32.9 },
      { month: "Mar 10", price: 35.4 },
    ],
    financialOverview: [
      {
        name: "P/E Ratio",
        value: 25,
      },
      {
        name: "Average Daily Returns",
        value: 35,
      },
      {
        name: "Earnings Per Share",
        value: 6.5,
      },
      {
        name: "Return On Assets",
        value: 0.15,
      },
      {
        name: "Debt to Equity Ratio",
        value: 1.2,
      },
    ],
    assetsLiabilities: [
      {
        name: "Assets",
        value: 75000000,
      },
      {
        name: "Liabilities",
        value: 35000000,
      },
    ],
    cashFlowStatement: [
      {
        name: "Operating Cash Flow",
        value: 20000000,
      },
      {
        name: "Investing Cash Flow",
        value: -12000000,
      },
      {
        name: "Financing Cash Flow",
        value: -8000000,
      },
    ],
  },
];

const Test = () => {
  const addDAta = async () => {
    fetch(`/api/financial/addFinancial`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        exchange: "NASDAQ",
        company: "Microsoft Corporation",
        stocksPrices: [
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
        ],
        financialOverview: [
          {
            name: "P/E Ratio",
            value: 25,
            data: [
              {
                name: "Page A",
                uv: 4000,
                pv: 2400,
                amt: 2400,
                fill: "#194BFB",
              },
              {
                name: "Page B",
                uv: 3000,
                pv: 1398,
                amt: 2210,
                fill: "#FAFAFA",
              },
              {
                name: "Page C",
                uv: 2000,
                pv: 9800,
                amt: 2290,
                fill: "#F44FBC",
              },
              {
                name: "Page D",
                uv: 2780,
                pv: 3908,
                amt: 2000,
                fill: "#E7EB17",
              },
              {
                name: "Page E",
                uv: 1890,
                pv: 4800,
                amt: 2181,
                fill: "#33EA15",
              },
            ],
          },
          {
            name: "Average Daily Returns",
            value: 35,
            data: [
              {
                name: "Page A",
                uv: 4000,
                pv: 2400,
                amt: 2400,
                fill: "#194BFB",
              },
              {
                name: "Page B",
                uv: 3000,
                pv: 1398,
                amt: 2210,
                fill: "#FAFAFA",
              },
              {
                name: "Page C",
                uv: 2000,
                pv: 9800,
                amt: 2290,
                fill: "#F44FBC",
              },
              {
                name: "Page D",
                uv: 2780,
                pv: 3908,
                amt: 2000,
                fill: "#E7EB17",
              },
              {
                name: "Page E",
                uv: 1890,
                pv: 4800,
                amt: 2181,
                fill: "#33EA15",
              },
            ],
          },
          {
            name: "Earnings Per Share",
            value: 680.0,
            data: [
              {
                name: "Page A",
                uv: 4000,
                pv: 2400,
                amt: 2400,
                fill: "#194BFB",
              },
              {
                name: "Page B",
                uv: 3000,
                pv: 1398,
                amt: 2210,
                fill: "#FAFAFA",
              },
              {
                name: "Page C",
                uv: 2000,
                pv: 9800,
                amt: 22890,
                fill: "#F44FBC",
              },
              {
                name: "Page D",
                uv: 2780,
                pv: 3908,
                amt: 200,
                fill: "#E7EB17",
              },
              {
                name: "Page E",
                uv: 1890,
                pv: 4800,
                amt: 21861,
                fill: "#33EA15",
              },
            ],
          },
          {
            name: "Return On Assets",
            value: 1980.0,
            data: [
              {
                name: "Page A",
                uv: 4000,
                pv: 2400,
                amt: 2400,
                fill: "#194BFB",
              },
              {
                name: "Page B",
                uv: 3000,
                pv: 1398,
                amt: 2210,
                fill: "#FAFAFA",
              },
              {
                name: "Page C",
                uv: 2000,
                pv: 9800,
                amt: 2290,
                fill: "#F44FBC",
              },
              {
                name: "Page D",
                uv: 2780,
                pv: 3908,
                amt: 2000,
                fill: "#E7EB17",
              },
              {
                name: "Page E",
                uv: 1890,
                pv: 4800,
                amt: 2181,
                fill: "#33EA15",
              },
            ],
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <button onClick={() => addDAta()}>add data</button>
    </div>
  );
};

export default Test;
