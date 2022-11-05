import "./new.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import arrow from "./arrow.svg";
import NewCard from "./cards/newCard";

export default function New() {
      const settings = {
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 1000,
            
      };

      return (
            <div className="container">
                  <div className="new">
                        <div className="contact__nav nav">
                              <Link to="/" className="nav__main">
                                    Главная
                              </Link>
                              <img src={arrow} alt="arrw" />
                              <div>Новости</div>
                        </div>
                        <div className="company__title">новости</div>
                        <div className="new__slider">
                              <Slider {...settings}>
                                    <div>
                                          <h3>
                                                <NewCard />
                                          </h3>
                                    </div>
                                    <div>
                                          <h3>
                                                <NewCard />
                                          </h3>
                                    </div>
                                    <div>
                                          <h3>
                                                <NewCard />
                                          </h3>
                                    </div>
                                    <div>
                                          <h3>
                                                <NewCard />
                                          </h3>
                                    </div>
                                    <div>
                                          <h3>
                                                <NewCard />
                                          </h3>
                                    </div>
                                    <div>
                                          <h3>
                                                <NewCard />
                                          </h3>
                                    </div>
                              </Slider>
                        </div>
                  </div>
            </div>
      );
}
