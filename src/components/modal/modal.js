import { useState } from "react";
import Modal from "react-modal";
import "./modal.scss";

export default function Modalw({ showModal,setShowModal}) {


      return (
            <>
            {/* isOpen={showModal} ariaHideApp={false} */}
                  <Modal className="modal" 
                  isOpen={showModal}  
                  ariaHideApp={false}
                  onRequestClose={()=>{setShowModal(false)}}
                  >
                        <div className="modal__content">
                              <h1 className="modal__title">
                                    Оставьте заявку и мы перезвоним вам в
                                    ближайшее время
                              </h1>
                              <form className="modal__form form" action="">
                                    <input
                                          className="form__name"
                                          type="text"
                                          placeholder="Введите ваше имя"
                                    />
                                    <input
                                          className="form__tel"
                                          type="tel"
                                          placeholder="Введите номер телефона"
                                    />
                                    <button
                                          className="form__btn"
                                          onClick={() => {setShowModal(false)}}
                                    >
                                          оТПРАВИТЬ
                                    </button>
                              </form>
                        </div>
                  </Modal>
            </>
      );
}
