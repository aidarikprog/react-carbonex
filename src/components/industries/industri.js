import "./industri.scss";
import arrow from "./arrow.svg";
import { Link } from "react-router-dom";
import pic from "./indpic.jpg";
import pic1 from "./1pic.svg";
import pic2 from "./2pic.svg";
import pic3 from "./3pic.svg";
import pic4 from "./4pic.svg";
import pic5 from "./5pic.svg";
import pic6 from "./6pic.svg";

export default function Indusrti() {
      return (
            <div className="container">
                  <div className="ind">
                        <div className="contact__nav nav">
                              <Link to="/" className="nav__main">
                                    Главная
                              </Link>
                              <img src={arrow} alt="arr" />
                              <div>Области применения</div>
                        </div>
                        <div className="ind__heading">Области применения</div>
                        <div className="ind__title">Решения для фильтрации</div>
                        <div className="ind__columns">
                              <div className="ind__items">
                                    <div className="ind__item">
                                          <img src={pic1} alt="pic" />
                                          <h1>Приборы</h1>
                                          <p>Имеется спорная точка</p>
                                          <p>
                                                Имеется спорная точка зрения,
                                                гласящая
                                          </p>
                                    </div>
                              </div>
                              <div className="ind__items">
                                    <div className="ind__item">
                                          <img src={pic2} alt="pic" />
                                          <h1>Помещения</h1>
                                          <p>Имеется спорная точка</p>
                                          <p>
                                                Имеется спорная точка зрения,
                                                гласящая
                                          </p>
                                    </div>
                              </div>
                              <div className="ind__items">
                                    <div className="ind__item">
                                          <img src={pic3} alt="pic" />
                                          <h1>Приборы</h1>
                                          <p>Имеется спорная точка</p>
                                          <p>
                                                Имеется спорная точка зрения,
                                                гласящая
                                          </p>
                                    </div>
                              </div>
                              <div className="ind__items">
                                    <div className="ind__item">
                                          <img src={pic4} alt="pic" />
                                          <h1>Приборы</h1>
                                          <p>Имеется спорная точка</p>
                                          <p>
                                                Имеется спорная точка зрения,
                                                гласящая
                                          </p>
                                    </div>
                              </div>
                              <div className="ind__items">
                                    <div className="ind__item">
                                          <img src={pic5} alt="pic" />
                                          <h1>Приборы</h1>
                                          <p>Имеется спорная точка</p>
                                          <p>
                                                Имеется спорная точка зрения,
                                                гласящая
                                          </p>
                                    </div>
                              </div>
                              <div className="ind__items">
                                    <div className="ind__item">
                                          <img src={pic6} alt="pic" />
                                          <h1>Приборы</h1>
                                          <p>Имеется спорная точка</p>
                                          <p>
                                                Имеется спорная точка зрения,
                                                гласящая
                                          </p>
                                    </div>
                              </div>
                        </div>
                        <div className="ind__content">
                              <div className="ind__text">
                                    Имеется спорная точка зрения, гласящая
                                    примерно следующее: действия представителей
                                    оппозиции набирают популярность среди
                                    определенных слоев населения, а значит,
                                    должны быть заблокированы в рамках своих
                                    собственных рациональных ограничений! <br />
                                    <br /> Сложно сказать, почему активно
                                    развивающиеся страны третьего мира формируют
                                    глобальную экономическую сеть и при этом —
                                    ассоциативно распределены по отраслям.{" "}
                                    <br />
                                    <br /> Однозначно, сделанные на базе
                                    интернет-аналитики выводы, которые
                                    представляют собой яркий пример
                                    континентально-европейского типа
                                    политической культуры, будут объявлены
                                    нарушающими общечеловеческие нормы этики и
                                    морали.
                              </div>
                              <img className="ind__pic" src={pic} alt="" />
                        </div>
                  </div>
            </div>
      );
}
