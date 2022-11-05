import { Link } from "react-router-dom";
import ModaWindow from "../../modal/modal";
import "./main.scss";
// import background from "./main.png";

export default function Main() {
      return (
            <div className="main__back">
                  <div className="container">
                        <div className="main">
                              <div className="main__title">
                                    CARBONEX является лидером в области
                                    фильтрационных и энергетических решений.
                              </div>
                              <div className="main__subtitle">
                                    Наши передовые материалы используются
                                    практически во всех отраслях промышленности
                                    и затрагивают каждый аспект современной
                                    жизни.
                              </div>
                              <Link to="/product" className="main__btn">
                                    Каталог продукции
                              </Link>
                        </div>
                  </div>
                  <ModaWindow  className='modal__container'/>
            </div>
      );
}
