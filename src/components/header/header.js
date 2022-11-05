import "./header.scss";
import logo from "./logo.svg";
import tel from "./tel.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Modalw from "../modal/modal";
import Modal from "react-modal";


export default function Header() {
      const [btn, setBtn] = useState(false);

      const handleClick = () => {
            setBtn(!btn);
      };

      const [showModal, setShowModal] = useState(false);

      return (
            <div className="container">
                  <div className="header">
                        <div className="header__logo">
                              <img src={logo} alt="logo" />
                              <a href="/">CARBONEX</a>
                        </div>
                        {/* <nav className={btn ? 'active' : null} > */}
                        {/* <ul className="header__list" onClick={handleClick}> */}
                        <ul
                              className={`header__list ${
                                    btn ? "active" : null
                              }`}
                              onClick={handleClick}
                        >
                              <li className="header__item">
                                    <NavLink
                                          className="header__link"
                                          to="/"
                                          end
                                    >
                                          Главная
                                    </NavLink>
                              </li>
                              <li className="header__item">
                                    <NavLink
                                          className="header__link"
                                          to="industri"
                                    >
                                          Отрасли
                                    </NavLink>
                              </li>
                              <li className="header__item">
                                    <NavLink
                                          className="header__link"
                                          to="product"
                                    >
                                          Продукция
                                    </NavLink>
                              </li>
                              <li className="header__item">
                                    <NavLink
                                          className="header__link"
                                          to="/company"
                                    >
                                          О компании
                                    </NavLink>
                              </li>
                              <li className="header__item">
                                    <NavLink
                                          className="header__link"
                                          to="/news"
                                    >
                                          Новости
                                    </NavLink>
                              </li>
                              <li className="header__item">
                                    <NavLink
                                          className="header__link"
                                          to="/contact"
                                    >
                                          Контакты
                                    </NavLink>
                              </li>
                        </ul>
                        {/* </nav> */}

                        <div class="menu__icon" onClick={handleClick}>
                              <span></span>
                              <span></span>
                              <span></span>
                        </div>

                        <div className="header__btns">
                              <a
                                    href="tel:+7(981)8438804"
                                    className="header__tel"
                              >
                                    <img src={tel} alt="tel" />
                                    <div className="header__num">
                                          +7 (981) 843-88-04
                                    </div>
                              </a>
                              <button
                                    type="button"
                                    className="header__btn"
                                    onClick={() => {
                                          setShowModal(true);
                                    }}
                              >
                                    ОСТАВИТЬ ЗАЯВКУ
                              </button>
                        <Modalw showModal={showModal} setShowModal={setShowModal} />
                        </div>
                  </div>
            </div>
      );
}
