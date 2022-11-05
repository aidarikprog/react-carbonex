import "./mainContacts.scss";
import map from "./map1.png";
import arrow from "./arrow.svg";

export default function Contacts() {
      return (
            
                  <div className="container">
                        <div className="contact">
                              <div className="contact__heading">
                                    контакты компании
                              </div>
                              <div className="contact__main">
                                    <div className="contact__infos">
                                          <div className="contact__title">
                                                Контактные данные:
                                          </div>
                                          <div className="contact__list">
                                                <div className="contact__names">
                                                      <div className="contact__name">
                                                            Телефон:
                                                      </div>
                                                      <div className="contact__info">
                                                            +7 (928) 242-656-02
                                                      </div>
                                                </div>
                                                <div className="contact__names ">
                                                      <div className="contact__name">
                                                            Адрес:
                                                      </div>
                                                      <div className="contact__info">
                                                            Россия, 642300, г.
                                                            Москва, ул. 8 марта,
                                                            д.45
                                                      </div>
                                                </div>
                                                <div className="contact__names ">
                                                      <div className="contact__name">
                                                            Email:
                                                      </div>
                                                      <div className="contact__info">
                                                            carbonex@yandex.ru
                                                      </div>
                                                </div>
                                          </div>
                                          <a className="contact__link" href="/">
                                                <div className="contact__text">
                                                      оставить заявку
                                                </div>
                                                <a className="contact__arrow">
                                                      <img
                                                            src={arrow}
                                                            alt="arrow"
                                                      />
                                                </a>
                                          </a>
                                    </div>
                                    {/* <div className="contact__map"> */}
                                          <img className="contact__map" src={map} alt="" />
                                    {/* </div> */}
                              </div>
                        </div>
                  </div>
            
      );
}
