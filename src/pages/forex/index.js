import SelectTimePeriod from "@/components/common-ui/SelectTimePeriod";
import Header from "@/components/headers/Header";
import OverviewEC from "@/components/overview-ui/OverviewEC";
import dynamic from "next/dynamic";
import React from "react";

const ForexChart = dynamic(() => import("@/components/forex-ui/ForexChart"), {
  ssr: false,
});

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
