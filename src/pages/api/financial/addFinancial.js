import { prisma } from "@/server/prisma";

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

const data1 = {
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
};

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }
    const result = await prisma.financial.create({
      data: req.body,
    });

    console.log(result);
    res.status(200).json({
      success: true,
      message: "Expense created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: null,
    });
  }
}
