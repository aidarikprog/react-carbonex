import map from "./map.jpg";
import { Link } from "react-router-dom";
import arrow from "./arrow.svg";
import "./contact.scss";

export default function Contacts() {
      return (
            <div className="container">
                  <div className="contact">
                        <div className="contact__nav nav">
                              <Link to="/" className="nav__main">
                                    Главная
                              </Link>
                              <img src={arrow} alt="arr" />
                              <div>Контакты</div>
                        </div>
                        <div className="contact__heading">
                              контакты
                        </div>
                        <div className="cont__content">
                              <div className="cont__left">
                                    <div className="cont__infos">
                                          <div className="cont__title">контактная информация</div>
                                          <div className="cont__info">
                                                <div className="cont__info-left">
                                                      <div className="info-left-adress">Адрес:</div>
                                                      <div className="info-left-tel">Телефон:</div>
                                                </div>
                                                <div className="cont__info-right">
                                                      <div className="info-right-adress">г. Санкт-Петербург, ул. Глиняная, 21</div>
                                                      <div className="info-right-tel">Отдел заказов:</div>
                                                      <div className="info-right-tel1">+ 7 (343) 506-28-02</div>
                                                      <div className="info-right-tel2">+ 7 (802) 420-40-71</div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              {/* <div className="cont__right"> */}
                              <img className="contact__map" src={map} alt="" />
                              {/* </div> */}
                        </div>
                  </div>
            </div>
      );
}
