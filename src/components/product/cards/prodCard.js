import "./prodCard.scss";
import pic from "./prodcard.jpg";

export default function ProdCard() {
      return (
            <div className="container">
                  <div className="prodcard">
                        <div className="prodcard__column">
                              <div className="prodcard__item">
                                    {/* <div className="prodcard__img"> */}
                                          <img className="prodcard__img" src={pic} alt="img" />
                                    {/* </div> */}
                                    <div className="prodcard__text">
                                          Термоформовочная
                                          <br />
                                          фильтровальная Ткань
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
