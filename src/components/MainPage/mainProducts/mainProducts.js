import "./mainProducts.scss";
import arrow from "./arrow.svg";

export default function Products() {
      return (
            
                  <div className="container">
                        <div className="product">
                              <h1 className="product__title">Продукция</h1>
                              <ul className="product__items">
                                    <a href="/" className="product__column">
                                          <div className="product__item">
                                                <p className="product__item-title">
                                                      Фильтры
                                                </p>
                                                <p className="product__item-sub">
                                                      CARBONEX - является
                                                      лидером в области
                                                      фитрованных материалов.
                                                </p>
                                          </div>
                                          <a className="product__link" href='/'>
                                                <div className="product__text">Подробнее</div>
                                          <a className="product__arrow"><img src={arrow} alt="arrow" /></a>
                                    </a>
                                    </a>
                                    <a href="/" className="product__column">
                                          <div className="product__item">
                                                <p className="product__item-title">
                                                      Фильтры
                                                </p>
                                                <p className="product__item-sub">
                                                      CARBONEX - является
                                                      лидером в области
                                                      фитрованных материалов.
                                                </p>
                                          </div>
                                          <a className="product__link" href='/'>
                                          <div className="product__text">Подробнее</div>
                                          <a className="product__arrow"><img src={arrow} alt="arrow" /></a>
                                    </a>
                                    </a>
                                    <a href="/" className="product__column">
                                          <div className="product__item">
                                                <p className="product__item-title">
                                                      Фильтры
                                                </p>
                                                <p className="product__item-sub">
                                                      CARBONEX - является
                                                      лидером в области
                                                      фитрованных материалов.
                                                </p>
                                          </div>
                                          <a className="product__link" href='/'>
                                          <div className="product__text">Подробнее</div>
                                          <a className="product__arrow"><img src={arrow} alt="arrow" /></a>
                                    </a>
                                    </a>
                              </ul>
                        </div>
                  </div>
            
      );
}
