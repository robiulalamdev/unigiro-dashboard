import Header from "@/components/headers/Header";
import FinancialOverview from "@/components/overview-ui/FinancialOverview";
import OverviewEC from "@/components/overview-ui/OverviewEC";
import StockPrices from "@/components/overview-ui/StockPrices";
import React from "react";

const OverViewPage = () => {
  return (
    <div>
      <Header label="Overview" />
      <main className="mt-[39px]">
        <OverviewEC />
        <StockPrices />
        <FinancialOverview />
      </main>
    </div>
  );
};

export default OverViewPage;
