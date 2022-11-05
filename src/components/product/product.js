import "./product.scss";
import arrow from "./arrow.svg";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ProdCard from "./cards/prodCard";

export default function Product() {
      const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                  {
                        breakpoint: 1024,
                        settings: {
                              slidesToShow: 3,
                              slidesToScroll: 3,
                              infinite: true,
                              dots: true,
                        },
                  },
                  {
                        breakpoint: 600,
                        settings: {
                              slidesToShow: 2,
                              slidesToScroll: 2,
                              initialSlide: 2,
                        },
                  },
                  {
                        breakpoint: 480,
                        settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                        },
                  },
            ],
      };
      return (
            <div className="container">
                  <div className="product">
                        <div className="contact__nav nav">
                              <Link to="/" className="nav__main">
                                    Главная
                              </Link>
                              <img src={arrow} alt="arrw" />
                              <div>Продукты</div>
                        </div>
                        <div className="company__title">
                        Продукция
                        </div>
                        <div className="product__slider">
                              <Slider {...settings}>
                                    <div>
                                          <h3><ProdCard /></h3>
                                    </div>
                                    <div>
                                          <h3><ProdCard/></h3>
                                    </div>
                                    <div>
                                          <h3><ProdCard/></h3>
                                    </div>
                                    <div>
                                          <h3><ProdCard/></h3>
                                    </div>
                                    <div>
                                          <h3><ProdCard/></h3>
                                    </div>
                                    <div>
                                          <h3><ProdCard/></h3>
                                    </div>
                                    <div>
                                          <h3><ProdCard/></h3>
                                    </div>
                                    <div>
                                          <h3><ProdCard/></h3>
                                    </div>
                              </Slider>
                        </div>
                  </div>
            </div>
      );
}
