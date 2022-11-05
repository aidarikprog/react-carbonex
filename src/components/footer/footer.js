// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./footer.scss";
import logo from './footerlogo.svg'


export default function Footer() {
      return (
            <div className="footer__back">
                  <div className="container">
                        <div className="footer">
                              <div className="footer__top">
                                    <div className="footer__logo">
                                          <img src={logo} alt="" className="footer__img" />
                                          <a className="footer__links" href="/">CARBONEX</a>
                                    </div>
                                    <ul className="footer__items">
                                          <li className="footer__item">
                                                <NavLink className="footer__link" to="/">Главная</NavLink>
                                          </li>
                                          <li className="footer__item">
                                                <NavLink className="footer__link" to="product">Продукция</NavLink>
                                          </li>
                                          <li className="footer__item">
                                                <NavLink className="footer__link" to="industri">Области применения</NavLink>
                                          </li>
                                          <li className="footer__item">
                                                <NavLink className="footer__link" to="company">О компании</NavLink>
                                          </li>
                                          <li className="footer__item">
                                                <NavLink className="footer__link" to="/contact">Контакты</NavLink>
                                          </li>
                                    </ul>
                                    <a href='tel:+7(981)8438804' className='footer__tel'>
                                          {/* <img src={tel} alt="tel"/> */}
                                          <div className='footer__num'>+7 (981) 843-88-04</div>
                                    </a>
                              </div>
                              <div className="footer__bottom">
                                    <div className="footer__small">© Все права защищены. 2022</div>
                                    <div className="footer__info">
                                          <div className="footer__mail">carbonex@yandex.ru</div>
                                          <div className="footer__adress">Россия, 642300, г. Москва, ул. 8 марта, д.45</div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
