import React from "react";
import Header_ui from "../layout-ui/Header_ui";
import MobileHeaderUi from "../layout-ui/MobileHeaderUi";

const Header = ({ label }) => {
  return (
    <>
      <div className="hidden lg:block">
        <Header_ui label={label} />
      </div>
      <div className="block lg:hidden">
        <MobileHeaderUi label={label} />
      </div>
    </>
  );
};

export default Header;
