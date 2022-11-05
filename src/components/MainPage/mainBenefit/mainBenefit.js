import "./mainBenefit.scss";
import ind from "./ind.svg";
import clock from "./clock.svg";
import like from "./like.svg";

export default function Benefit() {
      return (
            <>
                  <h1 className="benefit__title">Преимущества</h1>
                  <div className="benefit__back">
                        <div className="container">
                              <div className="benefit">
                                    <div className="benefit_ind ben">
                                          <div className="ben__main">
                                                <img
                                                      className="ben__pic"
                                                      src={ind}
                                                      alt="ind"
                                                />
                                                <div className="ben__title">
                                                      Собственное производство
                                                </div>
                                          </div>
                                          <div className="ben__subtitle">
                                                CARBONEX - является лидером в
                                                области фитрованных материалов.
                                                Наши передовые материалы{" "}
                                          </div>
                                    </div>
                                    <div className="benefit__clock ben">
                                          <div className="ben__main">
                                                <img
                                                      className="ben__pic"
                                                      src={clock}
                                                      alt="ind"
                                                />
                                                <div className="ben__title">
                                                      Срок изготовления
                                                </div>
                                          </div>
                                          <div className="ben__subtitle">
                                                CARBONEX - является лидером в
                                                области фитрованных материалов.
                                                Наши передовые материалы{" "}
                                          </div>
                                    </div>
                                    <div className="benefit__like ben">
                                          <div className="ben__main">
                                                <img
                                                      className="ben__pic"
                                                      src={like}
                                                      alt="ind"
                                                />
                                                <div className="ben__title">
                                                      Отгрузка товара
                                                </div>
                                          </div>
                                          <div className="ben__subtitle">
                                                CARBONEX - является лидером в
                                                области фитрованных материалов.
                                                Наши передовые материалы{" "}
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
}
