import SelectTimePeriod from "@/components/common-ui/SelectTimePeriod";
import ForexChart from "@/components/forex-ui/ForexChart";
import Header from "@/components/headers/Header";
import OverviewEC from "@/components/overview-ui/OverviewEC";
import React from "react";

const ForexPage = () => {
  return (
    <div>
      <Header label="Indicators" />
      <main className="mt-[39px]">
        <OverviewEC />
        <div className="mt-[102px]">
          <SelectTimePeriod />
        </div>
        <ForexChart />
      </main>
    </div>
  );
};

export default ForexPage;
