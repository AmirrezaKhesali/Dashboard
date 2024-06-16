import React, { useContext, useEffect } from 'react'
import Header from '../../Bars/Header';
import Nav from '../../Bars/Nav';
import { MyContext } from '../../../../ContexApi/MyContext';

function Services_All() {


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
                                        همه وظایف
                                    </h4>
                                </div>




                                <div className="row">

                                    <div className='col-12' >
                                        <div className='card' >
                                            <div className="card-body d-flex flex-wrap">
                                                <div className='col-lg-4 col-md-5 col-sm-10 col-10 mb-3 me-3' >
                                                    <label htmlFor="basic-addon-search31" className="form-label">جست و جو</label>
                                                    <div className="input-group input-group-merge">
                                                        <span className="input-group-text" id="basic-addon-search31"><i className="bx bx-search" /></span>
                                                        <input type="text" className="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon-search31" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-5 col-sm-10 col-10 mb-3 me-3">
                                                    <label htmlFor="defaultSelect" className="form-label">وضعیت</label>
                                                    <select id="defaultSelect" className="form-select">
                                                        <option>همه موارد</option>
                                                        <option value={1}>ارسال شده</option>
                                                        <option value={2}>در حال ارسال</option>
                                                        <option value={3}>در انتظار ارسال</option>
                                                        <option value={3}>مرجوعی</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-4 col-md-5 col-sm-10 col-10 mb-3 me-3">
                                                    <label htmlFor="defaultSelect" className="form-label">تعداد</label>
                                                    <select id="defaultSelect" className="form-select">
                                                        <option>10 پیشفرض</option>
                                                        <option value={1}>20</option>
                                                        <option value={2}>30</option>
                                                        <option value={3}>40</option>
                                                    </select>
                                                </div>
                                            </div>

                                                <hr />

                                            <li className="list-group-item p-4 product-list-responsive">
                                                <div className="gap-3" style={{ direction: 'ltr' }}>
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-12 col-md-6 my-2">
                                                                <div className="col-12 fs-3 fw-bold col-md-12">
                                                                    <p className="me-3">
                                                                        <a href="" className="text-body color-product">بی ام و 530</a>
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
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>هزینه تقریبی تعمیر :</span>

                                                                        <span className="text-body color-product">12,3000</span>
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



                                            <li className="list-group-item p-4 product-list-responsive">
                                                <div className="gap-3" style={{ direction: 'ltr' }}>
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-12 col-md-6 my-2">
                                                                <div className="col-12 fs-3 fw-bold col-md-12">
                                                                    <p className="me-3">
                                                                        <a href="" className="text-body color-product">زانتیا</a>
                                                                    </p>
                                                                </div>
                                                                <div className="col-12 fs-5 col-md-12">
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>کشور :</span>

                                                                        <span className="text-body color-product">ایران</span>
                                                                    </p>
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>مشکل فنی :</span>

                                                                        <span className="text-body color-product">چرخ</span>
                                                                    </p>
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>هزینه تقریبی تعمیر :</span>

                                                                        <span className="text-body color-product">117000</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-6 text-center">
                                                                <img src='https://cdn.bama.ir/uploads/BamaImages/Research/05eddf83-a2cc-4521-85d3-5446ca5ad4b1/research_636751969497622663_thumb_450_300.jpg' className="h-auto w-75 rounded-3" />
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


                                            <li className="list-group-item p-4 product-list-responsive">
                                                <div className="gap-3" style={{ direction: 'ltr' }}>
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-12 col-md-6 my-2">
                                                                <div className="col-12 fs-3 fw-bold col-md-12">
                                                                    <p className="me-3">
                                                                        <a href="" className="text-body color-product">پراید ساینا</a>
                                                                    </p>
                                                                </div>
                                                                <div className="col-12 fs-5 col-md-12">
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>کشور :</span>

                                                                        <span className="text-body color-product">ایران</span>
                                                                    </p>
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>مشکل فنی :</span>

                                                                        <span className="text-body color-product">موتور</span>
                                                                        <span className="text-body color-product ms-4">خرید جنس مصرفی</span>
                                                                    </p>
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>هزینه تقریبی تعمیر :</span>

                                                                        <span className="text-body color-product">1,900</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-6 text-center">
                                                                <img src='https://arshakhodro.com/wp-content/uploads/2023/03/comparing-to-saina-and-pride6.jpg' className="h-auto w-75 rounded-3" />
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
            </div>

        </>


    )
}

export default Services_All