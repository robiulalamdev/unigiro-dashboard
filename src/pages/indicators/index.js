import Header from "@/components/headers/Header";
import IndicatorsTable from "@/components/indicators-ui/IndicatorsTable";
import FinancialOverview from "@/components/overview-ui/FinancialOverview";
import OverviewEC from "@/components/overview-ui/OverviewEC";
import StockPrices from "@/components/overview-ui/StockPrices";
import React from "react";

const IndicatorsPage = () => {
  return (
    <div>
      <Header label="Indicators" />
      <main className="mt-[39px]">
        <OverviewEC />

        <h1 className="text-white text-[24px] font-semibold leading-[32px] tracking-[0.12px] mb-[68px] mt-[112px]">
          Creditworthiness
        </h1>
        <IndicatorsTable />
      </main>
    </div>
  );
};

export default IndicatorsPage;
