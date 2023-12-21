// components/Layout.js
import React from "react";
import MainSidebar from "../sidebars/MainSidebar";
import Header from "../headers/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="flex justify-between items-start h-screen">
      <div className="h-full">
        <MainSidebar />
      </div>
      <main className="grid grid-cols-1 h-full w-full flex-grow overflow-y-auto bg-main_bg px-[35px] py-[17px]">
        <div className="h-full w-full">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
