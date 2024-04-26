import React from "react";
import { Link } from "react-router-dom";

import { FcInfo, FcPaid } from "react-icons/fc";

const ActionBtn = () => {
  return (
    <div className="btn">
      <div className="btn__block">
        <Link
          to="https://ncs.gostinfo.ru/"
          target="_blank"
          className="icon examination"
        >
          <div className="btn__text">Проверка сертификата соответствия НСС</div>
          <FcInfo />
        </Link>
      </div>
      <div className="btn__block">
        <Link
          to="https://www.standards.ru/default.aspx"
          target="_blank"
          className="icon order"
        >
          <span className="btn__text">Заказ стандарта</span>
          <FcPaid />
        </Link>
      </div>
    </div>
  );
};

export default ActionBtn;
