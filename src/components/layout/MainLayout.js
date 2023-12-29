// components/Layout.js
import React from "react";
import MainSidebar from "../sidebars/MainSidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex justify-between items-start h-screen">
      <MainSidebar />
      <main className="grid grid-cols-1 h-full w-full flex-grow overflow-y-auto bg-main_bg px-2 md:px-[35px] py-[17px]">
        <div className="h-full w-full max-w-[1200px] mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
