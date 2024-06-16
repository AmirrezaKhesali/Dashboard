import React, { useContext, useEffect } from 'react'
import Header from '../../Bars/Header';
import Nav from '../../Bars/Nav';
import { MyContext } from '../../../../ContexApi/MyContext';

function Services_Mine() {

    const { activation, setActivation } = useContext(MyContext);

    useEffect(() => {

        const any = window.location.href.split('/');
        const live = any[any.length - 1];
        setActivation(live)
        console.log(activation)


    }, [])



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
                                        وظایف من
                                    </h4>
                                </div>
                                <div className="row">

                                    <div className='card' >

                                        <li className="list-group-item p-4 product-list-responsive">
                                            <div className="gap-3" style={{ direction: 'ltr' }}>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12 col-md-6 my-2">
                                                            <div className="col-12 fs-3 fw-bold col-md-12">
                                                                <p className="col-12">
                                                                    <a href="" className="text-body color-product col-7">بی ام و 530</a>
                                                                </p>

                                                            </div>
                                                            <div className="col-12 fs-5 col-md-12">
                                                                <p className="me-3">
                                                                    <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>کشور :</span>

                                                                    <span className="text-body color-product">آلمان</span>
                                                                </p>
                                                                <p className="me-3">
                                                                    <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>مشکل فنی :</span>

                                                                    <span className="text-body color-product">تسمه روغن</span>
                                                                </p>
                                                                <p className="me-3">
                                                                    <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>هزینه نهایی تعمیر :</span>

                                                                    <span className="text-body color-product">12,3000</span>
                                                                </p>
                                                                <p className="me-3">
                                                                    <span className="text-body color-product col-6" style={{ marginLeft: "0.4rem" }}>وضعیت تعمیرات خودرو</span>

                                                                </p>
                                                                <p className="me-3">
                                                                    <div className='row'>

                                                                        <div className='p-0 col-7 col-md-7'>
                                                                            <span className="text-body serv-badge-mine fs-5 fw-normal col-5"> مشاهده جزئیات </span>
                                                                        </div>
                                                                        <div className='p-0 col-5 col-md-4'>
                                                                            <span className="text-body serv-badge-mine col-5"> تعمیر شده </span>
                                                                        </div>
                                                                    </div>

                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6 text-center">
                                                            <img src='https://karnameh.com/blog/wp-content/uploads/2021/08/%D8%AF%D9%86%D8%A7-%D9%BE%D9%84%D8%A7%D8%B3-%D8%AA%D9%88%D8%B1%D8%A8%D9%88-%D8%A7%D8%AA%D9%88%D9%85%D8%A7%D8%AA%DB%8C%DA%A9.jpg?_t=1666424110' className="h-auto w-75 rounded-3" />
                                                        </div>
                                                        <div className="col-12 col-md-4">
                                                            <div className="text-center" style={{ marginTop: 8 }}>

                                                                {/* <button type="button" className="btn mt-4" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", minWidth: 128, backgroundColor: "#ECF0F1", color: "#131428" }}>
                                                                    انصراف
                                                                </button> */}
                                                                <button type="button" className="btn mt-4" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", minWidth: 128, backgroundColor: "#4682B4", color: "white" }}>
                                                                    قبول کردن
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

        </>

    )
}

export default Services_Mine