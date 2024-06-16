import React, { useEffect, useState } from 'react';
import Nav from '../../Bars/Nav';
import Header from '../../Bars/Header';
import "../../Pages/Pages.css";
import { BsCreditCardFill, BsCarFront, BsCarFrontFill, BsPen, BsPenFill, BsPin, BsPlus } from "react-icons/bs";

const seprator_Number = require('commatic')



function Full_wallet() {


    const [priceCard, setPriceCard] = useState('');
    const [actionValue, setActionValue] = useState('');
 

    const priceCardHandler =(e) =>{
        setPriceCard(seprator_Number(e.target.value))
        console.log(priceCard)
    }

    const [showDargah, setShowDargah] = useState(false)

    useEffect(()=>{
        console.log(1324708327)
    },[])

    return (


        <>

            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Header />
                    <div className="layout-page">
                        <Nav />
                        <div className="content-wrapper">


                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className='card allpro-basket mb-2'>
                                    <h4 className=" mb-0" style={{ margin: 0 }}>
                                        شارژ کیف پول
                                    </h4>
                                </div>


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
                                                                    <div className="text-center" onClick={() => setShowDargah(true)}>
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
                                                                    <span className="me-1 color-co-black fs-5">مبلغ شارژ</span>
                                                                </div>
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="defaultInput" className="form-label">مبالغی که در نظر دارید (به تومان) وارد نمایید</label>
                                                                <input id="defaultInput" className="form-control text-center" type="text" value={priceCard} onChange={priceCardHandler} />
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
                                                                    <span className="me-1 color-co-black fs-5">شارژ کیف پول</span>
                                                                </div>
                                                            </div>


                                                            <li className="d-flex mb-2 pb-1 adad-dis">

                                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                                    <div className="me-2">
                                                                        <small className="fs-6">شارژ : </small>
                                                                    </div>
                                                                    <div className="user-progress">
                                                                        <small className=" fs-6">85,300,200</small>
                                                                    </div>
                                                                </div>
                                                            </li>


                                                            <div className="col-md-12 d-flex justify-content-center align-item-center mb-2">
                                                                <div className="text-md-end w-75" style={{ marginTop: 8 }}>
                                                                    <button type="button" className="btn btn-sm mt-md-3 w-100" style={{ marginTop: "0.5rem", fontSize: 14, marginLeft: "0.5rem", minWidth: 128, backgroundColor: "rgb(239, 64, 86)", color: "white" , borderRadius : 8 }}>
                                                                        پرداخت
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

export default Full_wallet