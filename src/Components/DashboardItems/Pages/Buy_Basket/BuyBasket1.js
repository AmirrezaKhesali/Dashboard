import React, { useContext, useEffect } from 'react';
import Header from '../../Bars/Header';
import Nav from '../../Bars/Nav';
import { MyContext } from '../../../../ContexApi/MyContext';
import { BsBasket3, BsCarFrontFill, BsDash, BsPlus } from 'react-icons/bs';
import Stepper from './Stepper/Stepper';
import Main_BackDrop from '../../Tools/BackDrop/Main_BackDrop';



function BuyBasket1() {


    const { activation, setActivation } = useContext(MyContext);

    useEffect(() => {

        const any = window.location.href.split('/');
        const live = any[any.length - 1];
        setActivation(live)
        console.log(activation)


    }, [])


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
                                        <div className='card' >
                                            <li className="list-group-item p-4">
                                                <div className="d-flex gap-3">
                                                    <div className="flex-shrink-0 d-flex align-items-center">
                                                        <img src='' className="w-px-100" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="row">
                                                            <div className="col-md-8">
                                                                <p className="me-2">
                                                                    <a href="" className="text-body color-product fs-6 fw-bold">منبع اب رادیاتور برلیانس E330</a>
                                                                </p>
                                                                <div className="text-muted mb-2 d-flex flex-wrap">
                                                                    <BsCarFrontFill size={18} color='rgb(94 94 94)' className='me-2' />
                                                                    <span className="me-1 color-light-grey font-12"> برند :</span>
                                                                    <span className="me-3 color-light-grey font-12">مبیوس</span>
                                                                </div>

                                                                <div className="text-muted mb-2 d-flex flex-wrap">
                                                                    <BsCarFrontFill size={18} color='rgb(94 94 94)' className='me-2' />
                                                                    <span className="me-1 color-light-grey font-12"> کشور :</span>
                                                                    <span className="me-3 color-light-grey font-12">کره</span>

                                                                </div>
                                                                <div className="text-muted mb-2 d-flex flex-wrap">
                                                                    <BsCarFrontFill size={18} color='rgb(94 94 94)' className='me-2' />
                                                                    <span className="me-1 color-light-grey font-12"> گارانتی :</span>
                                                                    <span className="me-3 color-light-grey font-12">دارد</span>

                                                                </div>

                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-100 d-flex justify-content-start mt-2' >
                                                    <div className='d-flex justify-content-center align-item-center '>
                                                        <div className="col-md-12 d-flex flex-row">
                                                            <div className="d-flex justify-content-end me-4 " style={{ marginTop: 8 }}>
                                                            <span className="nega-btn" >
                                                                    <BsDash size={25} color='' />
                                                                </span>
                                                                <span style={{ fontSize: 18, marginTop: 2, color: 'black' }}>1</span>
                                                                <span className="add-btn" >
                                                                    <BsPlus size={25} color='' />
                                                                </span>
                                                            </div>
                                                            <div className='d-flex justify-content-center align-item-center' style={{ marginTop: '0.9rem' }}>
                                                                <span className='fs-6 fw-bold' style={{ color: 'black' }}>12,200.00</span>
                                                                <span className='fs-6 fw-bold ms-1' style={{ color: 'black' }}>تومان</span>
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
                                                                    <BsBasket3 size={20} color='black' className='me-3 ' />
                                                                    <span className="me-1 color-co-black fs-5">سبد خرید</span>
                                                                </div>
                                                            </div>
                                                            <li className="d-flex mb-4 pb-1">

                                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                                    <div className="me-2">
                                                                        <small className="  color-co-black fs-5">محصول</small>
                                                                    </div>
                                                                    <div className="user-progress">
                                                                        <small className=" color-co-black fs-5">قیمت کل</small>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                          
                                                            <li className="d-flex mb-4 pb-1 adad-dis">
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
                                                                    <button type="button" className="btn btn-sm mt-md-3 w-100" style={{ marginTop: "0.5rem", fontSize: 14, marginLeft: "0.5rem", minWidth: 128, backgroundColor: "#EF4056", color: "white" , borderRadius : 8 }}>
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

                                <div className='row'>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default BuyBasket1