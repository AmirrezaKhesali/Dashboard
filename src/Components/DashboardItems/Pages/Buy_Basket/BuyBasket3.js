import { BsCreditCardFill, BsCarFront, BsCarFrontFill, BsPen, BsPenFill, BsPin, BsPlus } from "react-icons/bs"
import Stepper from "./Stepper/Stepper"
import Nav from "../../Bars/Nav"
import Header from "../../Bars/Header"
import Main_BackDrop from "../../Tools/BackDrop/Main_BackDrop"
import { useState } from "react"




function BuyBasket3() {

  const [showDargah, setShowDargah] = useState(false)



  return (


    <>
      <Main_BackDrop />
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Header />
          <div className="layout-page">
            <Nav />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y pt-1">
                <Stepper />
                <div className="row">
                  <div className='col-lg-8 mb-4 order-0' >
                    <div className='card mb-4'>
                      <li className="list-group-item p-3">
                        <div className="d-flex gap-3">
                          <div className="flex-grow-1">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="text-muted mb-2 d-flex flex-wrap cuz-bord-head">
                                  <BsCreditCardFill size={20} color='black' className='me-3 ' />
                                  <span className="me-1 color-co-black fs-5">انتخاب شیوه پرداخت</span>
                                </div>
                              </div>
                              <div>
                                <ul className="p-0">
                                  <li className="list-group-item border border-1 rounded-3 p-2 color-co-black mb-2 pay_active">
                                    <BsCarFront size={30} className="me-2" />
                                    <span className="fs-5">
                                      پرداخت از طریق بانک ملت
                                    </span>

                                  </li>
                                  {showDargah ?
                                    <li className="list-group-item border border-1 rounded-3 p-2 color-co-black mb-2">
                                      <BsCarFront size={30} className="me-2" />
                                      <span className="fs-5">
                                        ایزی پی
                                      </span>
                                    </li> : null}
                                  {showDargah ?
                                    <li className="list-group-item border border-1 rounded-3 p-2 color-co-black mb-2">
                                      <BsCarFront size={30} className="me-2" />
                                      <span className="fs-5">
                                        درگاه تالی (مخصوص کارکنان آپسان)
                                      </span>
                                    </li> : null}
                                  {showDargah ?
                                    <li className="list-group-item border border-1 rounded-3 p-2 color-co-black mb-2">
                                      <BsCarFront size={30} className="me-2" />
                                      <span className="fs-5">
                                        تعاونی کارکنان ایرانخودرو
                                      </span>
                                    </li> : null}
                                </ul>
                                {!showDargah ?
                                  <div className="text-center" onClick={()=>setShowDargah(true)}>
                                    <span className="text-decoration-underline">درگاه های دیگر</span>
                                  </div> : null}

                              </div>

                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                    <div className='card mb-4'>
                      <li className="list-group-item p-3">
                        <div className="d-flex gap-3">
                          <div className="flex-grow-1">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="text-muted mb-2 d-flex flex-wrap cuz-bord-head">
                                  <BsCreditCardFill size={20} color='black' className='me-3 ' />
                                  <span className="me-1 color-co-black fs-5">کد تخفیف</span>
                                </div>
                              </div>

                              <div className="mb-3">
                                <label htmlFor="defaultInput" className="form-label">در صورت داشتن کد تخفیف آن را وارد نمایید</label>
                                <input id="defaultInput" className="form-control text-center" type="text" />
                              </div>
                              <div>
                                <span className="btn btn-primary">ثبت کد تخفیف</span>
                              </div>


                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                    <div className='card mb-1'>
                      <li className="list-group-item p-3">
                        <div className="d-flex gap-3">
                          <div className="flex-grow-1">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="text-muted mb-2 d-flex flex-wrap cuz-bord-head">
                                  <BsCreditCardFill size={20} color='black' className='me-3 ' />
                                  <span className="me-1 color-co-black fs-5">توضیحات (غیر الزامی)</span>
                                </div>
                              </div>

                              <div className="" >

                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />


                              </div>




                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>

                  <div className='col-lg-4 mb-4 order-0'>
                    <div className='card'>
                      <li className="list-group-item p-4">
                        <div className="d-flex gap-3">
                          <div className="flex-grow-1">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="text-muted mb-2 d-flex flex-wrap cuz-bord-head">
                                  <BsCreditCardFill size={20} color='black' className='me-3 ' />
                                  <span className="me-1 color-co-black fs-5">سبد خرید</span>
                                </div>
                              </div>

                              <li className="d-flex mb-3 pb-1 adad-dis">

                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div className="me-2">
                                    <small className="fs-6">کولر برلیانس E620</small>
                                  </div>
                                  <div className="user-progress">
                                    <small className=" fs-6">82,100,00</small>
                                  </div>
                                </div>
                              </li>
                              <li className="d-flex mb-3 pb-1 adad-dis">

                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div className="me-2">
                                    <small className="fs-6">کولر برلیانس E620</small>
                                  </div>
                                  <div className="user-progress">
                                    <small className=" fs-6">82,100,00</small>
                                  </div>
                                </div>
                              </li>
                              <li className="d-flex mb-2 pb-1 adad-dis">

                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div className="me-2">
                                    <small className="fs-6">جمع کل : </small>
                                  </div>
                                  <div className="user-progress">
                                    <small className=" fs-6">85,300,200</small>
                                  </div>
                                </div>
                              </li>


                              <div className="col-md-12 d-flex justify-content-center align-item-center mb-2">
                                <div className="text-md-end w-75" style={{ marginTop: 8 }}>
                                  <button type="button" className="btn btn-sm mt-md-3 w-100" style={{ marginTop: "0.5rem", fontSize: 14, marginLeft: "0.5rem", minWidth: 128, backgroundColor: "rgb(239, 64, 86)", color: "white" , borderRadius : 8 }}>
                                    نمایش سبد خرید
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BuyBasket3 