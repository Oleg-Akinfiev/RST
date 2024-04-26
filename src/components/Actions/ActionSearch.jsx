import React from "react";
import { IoSearch } from "react-icons/io5";

const ActionSearch = () => {
  return (
    <div className="search">
      <input type="search" placeholder="Поиск..." />
      <div className="search__img">
        {" "}
        <IoSearch />{" "}
      </div>
    </div>
  );
};

export default ActionSearch;
