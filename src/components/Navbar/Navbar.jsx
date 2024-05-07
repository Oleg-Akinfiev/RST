import React, { useState } from "react";
import { Link } from "react-router-dom";

import { navbarLink } from "../utils/constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = navbarLink.map((item) => (
    <Link className="nav__link" key={item.title}>
      <p onClick={() => setOpen(!open)}>{item.title}</p>
      {open && (
        <div className="nav__blocks">
          <div className="nav__block">{item.subtitle}</div>
        </div>
      )}
    </Link>
  ));

  return (
    <nav>
      <div className="container">
        <div className="nav">
          {links}
          {/* <Link className="nav__link">
            <p onClick={() => setOpen(!open)}>О нас</p>
            {open && (
              <div className="nav__blocks">
                <div className="nav__block">
                  <h1>О нас</h1>
                  <Link to="/">Миссия, видение, ценности</Link>
                  <Link to="/RST">Новости</Link>
                  <Link to="/">История</Link>
                  <Link to="/RST">Руководство</Link>
                  <Link to="/">Структура</Link>
                </div>
                <div className="nav__block">
                  <h1>Основные задачи</h1>
                  <Link>
                    Официальное опубликование, издание и распространение
                    документов по стандартизации
                  </Link>
                  <Link>Федеральный информационный фонд стандартов</Link>
                  <Link>
                    Федеральный информационный фонд технических регламентов и
                    стандартов
                  </Link>
                  <Link>
                    Общероссийские классификаторы. Код организации-разработчика
                    конструкторской документации
                  </Link>
                  <Link>
                    Взаимодействие с международными, региональными и
                    национальными организациями по стандартизации
                  </Link>
                </div>
                <div className="nav__block">
                  <h1>Основные направления</h1>
                  <Link>
                    Разработка и сопровождение автоматизированных информационных
                    систем
                  </Link>
                  <Link>
                    Редактирование и нормоконтроль проектов стандартов и иных
                    нормативных документов в области стандартизации
                  </Link>
                  <Link>Научная и образовательная деятельность</Link>
                  <Link>
                    СТО и ТУ. Каталожные листы продукции. БД «Продукция России»
                  </Link>
                  <Link>Закупочная деятельность</Link>
                </div>
              </div>
            )}
          </Link>
          */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
