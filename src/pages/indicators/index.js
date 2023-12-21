import Header from "@/components/headers/Header";
import IndicatorsTable from "@/components/indicators-ui/IndicatorsTable";
import FinancialOverview from "@/components/overview-ui/FinancialOverview";
import OverviewEC from "@/components/overview-ui/OverviewEC";
import StockPrices from "@/components/overview-ui/StockPrices";
import React from "react";
import bg from "../../assets/images/indicatore/patern.png";
import { patern } from "@/utils/longIcon";

const IndicatorsPage = () => {
  return (
    <div>
      <Header label="Indicators" />
      <main className="mt-[39px]">
        <OverviewEC />

        <div className="grid grid-cols-3 gap-[77px]">
          <div className="h-[202px] overflow-hidden relative w-full rounded-[16px] bg-gradient-to-b from-[#313183e6] via-primary  to-primary mt-[133px] ">
            {patern}
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full px-[22px] py-[23px]">
              <h1 className="text-white text-left font-inter text-2xl tracking-[0.12px] font-semibold">
                Asset
              </h1>
              <div className=" max-w-[176px]">
                <span className="mt-[7px] font-inter text-[#D1D8DD] text-xs leading-[20px] tracking-[0.6px]">
                  Get your pro feature by Subscribe FinPro and easy to manage
                  your financial{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="h-[202px] overflow-hidden relative w-full rounded-[16px] bg-gradient-to-b from-[#313183e6] via-primary  to-primary mt-[133px] ">
            {patern}
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full px-[22px] py-[23px]">
              <h1 className="text-white text-left font-inter text-2xl tracking-[0.12px] font-semibold">
                due
              </h1>
              <div className=" max-w-[176px]">
                <span className="mt-[7px] font-inter text-[#D1D8DD] text-xs leading-[20px] tracking-[0.6px]">
                  Get your pro feature by Subscribe FinPro and easy to manage
                  your financial
                </span>
              </div>
            </div>
          </div>
          <div className="h-[202px] overflow-hidden relative w-full rounded-[16px] bg-gradient-to-b from-[#313183e6] via-primary  to-primary mt-[133px] ">
            {patern}
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full px-[22px] py-[23px]">
              <h1 className="text-white text-left font-inter text-2xl tracking-[0.12px] font-semibold">
                333
              </h1>
              <div className=" max-w-[176px]">
                <span className="mt-[7px] font-inter text-[#D1D8DD] text-xs leading-[20px] tracking-[0.6px]">
                  Get your pro feature by Subscribe FinPro and easy to manage
                  your financial
                </span>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-white text-[24px] font-semibold leading-[32px] tracking-[0.12px] mb-[68px] mt-[112px]">
          Creditworthiness
        </h1>
        <IndicatorsTable />
      </main>
    </div>
  );
};

export default IndicatorsPage;
