import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="nav">
          <Link to="/RST" className="nav__link">
            <p onClick={() => setOpen(!open)}>О нас</p>
            {open && (
              <div
                className="nav__blocks"
                in={!open}
                timeout={300}
                unmountOnExit
              >
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
          <Link to="/" className="nav__link">
            <p>Ресурсы</p>
          </Link>
          <Link to="/" className="nav__link">
            <p>Услуги</p>
          </Link>
          <Link to="/" className="nav__link">
            <p>Обучение</p>
          </Link>
          <Link to="/" className="nav__link">
            <p>Заключения</p>
          </Link>
          <Link to="/" className="nav__link">
            <p>Сертификация и испытания</p>
          </Link>
          <Link to="/" className="nav__link">
            <p>Пресс-центр</p>
          </Link>
          <Link to="/" className="nav__link">
            <p>Контакты</p>
          </Link>
          <Link to="/" className="nav__link">
            <p>Обратная связь</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
