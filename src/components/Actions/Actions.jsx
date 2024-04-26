import React from "react";

import { GrLanguage } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import ActionBtn from "./ActionBtn";
import ActionSearch from "./ActionSearch";

const Actions = () => {
  return (
    <div className="action">
      <div className="action__block">
        <ActionBtn />
      </div>
      <div className="action__block">
        <ActionSearch />
      </div>

      {/* <div className="search">
        <input type="text" placeholder="Поиск" />
        <IoSearch />
      </div> */}
      {/* <div className="language">
        <GrLanguage />
      </div> */}
    </div>
  );
};

export default Actions;
