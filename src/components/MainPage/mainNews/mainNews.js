import './mainNews.scss'
import news1 from './news1.jpg'
import news2 from './news2.jpg'
import news3 from './news3.jpg'
import arrow from './arrow.svg'

export default function News (){
      return(
            <div className="container">
                  <div className="news">
                        <div className="news__heading">новости</div>
                        <div className="news__items">
                              <div className="news__item">
                                    <img className='news__img' src={news1} alt="news" />
                                    {/* <div className='news__img'></div> */}
                                    <div className="news__title">Жизнь - это химия</div>
                                    <div className="news__subtitle">CARBONEX - является лидером в области фильтрованных материалов.</div>
                                    <a className="news__link" href='/'>
                                          <div className="news__text">Подробнее</div>
                                          <div className="news__arrow"><img src={arrow} alt="arrow" /></div>
                                    </a>
                              </div>
                              <div className="news__item">
                                    {/* <div className='news__img'></div> */}
                              <img className='news__img' src={news2} alt="news" />
                                    <div className="news__title">Жизнь - это химия</div>
                                    <div className="news__subtitle">CARBONEX - является лидером в области фильтрованных материалов.</div>
                                    <a className="news__link" href='/'>
                                          <div className="news__text">Подробнее</div>
                                          <div className="news__arrow"><img src={arrow} alt="arrow" /></div>
                                    </a>
                              </div>
                              <div className="news__item">
                                    {/* <div className='news__img'></div> */}
                              <img className='news__img' src={news3} alt="news" />
                                    <div className="news__title">Ао “СОрбент” ПОСЕТИЛ ГУБЕРНАТОР</div>
                                    <div className="news__subtitle">CARBONEX - является лидером в области фильтрованных материалов.</div>
                                    <a className="news__link" href='/'>
                                          <div className="news__text">Подробнее</div>
                                          <a className="news__arrow"><img src={arrow} alt="arrow" /></a>
                                    </a>
                              </div>
                        </div>
                  </div>
            </div>
      )
}