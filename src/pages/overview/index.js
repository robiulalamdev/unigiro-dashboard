import Header from "@/components/headers/Header";
import FinancialOverview from "@/components/overview-ui/FinancialOverview";
import OverviewEC from "@/components/overview-ui/OverviewEC";
import StockPrices from "@/components/overview-ui/StockPrices";
import React, { useMemo, useState } from "react";

const OverViewPage = () => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState(null);
  const [filters, setFilters] = useState([
    { exchange: "NASDAQ", company: "Microsoft Corporation" },
    { exchange: "Nasdaq", company: "Apple Inc" },
    { exchange: "LSE", company: "Amazon.com Inc" },
    { exchange: "TSE", company: "Alphabet Inc" },
    { exchange: "BSE", company: "Meta Platforms" },
  ]);

  const fetchData = async () => {
    fetch("/api/financial/allFinancial")
      .then((res) => res.json())
      .then((data) => {
        setData(data?.data);
        setSingleData(data?.data[0]);
      });
  };

  useMemo(() => {
    fetchData();
  }, []);

  const handleFilter = (selectItem) => {
    const item = data?.find((item) => item.exchange === selectItem.exchange);
    setSingleData(item);
  };
  return (
    <div>
      <Header label="Overview" />
      <main className="mt-[39px]">
        <OverviewEC filters={filters} handleFilter={handleFilter} />
        <StockPrices data={singleData} />
        <FinancialOverview data={singleData} />
      </main>
    </div>
  );
};

export default OverViewPage;
