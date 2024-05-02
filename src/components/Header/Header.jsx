import React from "react";

import Logo from "../images/logo.png";
import DataTime from "../DataTime/DataTime";
import Actions from "../Actions/Actions";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__icon">
          <img src={Logo} alt="Институт стандартизации" />
        </div>
        <DataTime />
        <Actions />
      </div>
    </>
  );
};

export default Header;
