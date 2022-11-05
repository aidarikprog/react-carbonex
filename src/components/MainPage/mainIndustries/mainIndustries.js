import './mainIndustries.scss'
import  cel from './cel.svg'
import  auto from './auto.svg'
import  filters from './filters.svg'
import  med from './med.svg'
import  resp from './resp.svg'

export default function Industries() {
      return (
            
                  <div className="container">
                        <div className="industri">
                              <div className="industri__main">
                                    <div className="industri__title">
                                          Отрасли
                                    </div>
                                    <div className="industri__subtitle">
                                          CARBONEX - является лидером в области
                                          фитрованных материалов. Наши передовые
                                          материалы <br />используются практически во
                                          всех отраслях промышленности.
                                    </div>
                              </div>
                              <ul className="industri__items">
                                    <li className="industri__item">
                                          <img className="industri__item-img" src={cel} alt="industri" />
                                          <div className="industri__item-title">Целлюлоза</div>
                                    </li>
                                    <li className="industri__item">
                                          <img className="industri__item-img" src={filters} alt="industri" />
                                          <div className="industri__item-title">HEPA-фильтры</div>
                                    </li>
                                    <li className="industri__item">
                                          <img className="industri__item-img" src={auto} alt="industri" />
                                          <div className="industri__item-title">Автомобильные</div>
                                    </li>
                                    <li className="industri__item">
                                          <img className="industri__item-img" src={resp} alt="industri" />
                                          <div className="industri__item-title">Респираторные<br/>помещения</div>
                                    </li>
                                    <li className="industri__item">
                                          <img className="industri__item-img" src={med} alt="industri" />
                                          <div className="industri__item-title">медицинские<br/>помещения</div>
                                    </li>
                              </ul>
                        </div>
                  </div>
            
      );
}
