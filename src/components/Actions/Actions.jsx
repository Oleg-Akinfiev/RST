import React from "react";

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
    </div>
  );
};

export default Actions;
