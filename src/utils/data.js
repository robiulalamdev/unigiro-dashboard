import {
  iFaq,
  iForex,
  iIndicators,
  iOverview,
  iPerformance,
  iSetting,
  iValuation,
} from "./icons";

export const sidebar_routes = [
  { id: 1, name: "Overview", url: "overview", icon: iOverview },
  { id: 2, name: "Performance", url: "performance", icon: iPerformance },
  { id: 3, name: "Valuation", url: "valuation", icon: iValuation },
  { id: 4, name: "Indicators", url: "indicators", icon: iIndicators },
  { id: 5, name: "Forex", url: "forex", icon: iForex },
];

export const sidebar_end_routes = [
  { id: 1, name: "FAQ", url: "faq", icon: iFaq },
  { id: 2, name: "Settings", url: "settings", icon: iSetting },
];
