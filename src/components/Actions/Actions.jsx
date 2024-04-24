import React from "react";
import { Link } from "react-router-dom";

import { FcInfo, FcPaid } from "react-icons/fc";
import { GrLanguage } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";

const Actions = () => {
  return (
    <div className="action">
      <Link
        to="https://ncs.gostinfo.ru/"
        target="_blank"
        className="examination"
      >
        <div className="examination__item">
          <p>Проверка сертификата соответствия НСС</p>
          <FcInfo />
        </div>
      </Link>

      {/* <Link
        to="https://www.standards.ru/default.aspx"
        target="_blank"
        className="order"
      >
        <FcPaid />
        <p>Заказ стандарта</p>
      </Link> */}
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
