import React from "react";
import SidebarUi from "../layout-ui/SidebarUi";

const MainSidebar = () => {
  return (
    <>
      <div className="hidden lg:block h-full">
        <SidebarUi />
      </div>
    </>
  );
};

export default MainSidebar;
