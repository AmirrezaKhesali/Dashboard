import React, { useContext, useEffect } from 'react'
import Header from '../../Bars/Header';
import Nav from '../../Bars/Nav';
import { MyContext } from '../../../../ContexApi/MyContext';

function Product_Mine() {


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
                                <h4 className="fw-bold mb-4">
                                    محصولات من
                                </h4>
                                <div className="row">

                                    <div className="col-12">
                                        <div className="card mb-4">
                                            <div className="card-body d-flex flex-wrap">
                                                <div className='col-lg-4 col-md-5 col-sm-10 col-10 mb-3 me-3' >
                                                    <label htmlFor="basic-addon-search31" className="form-label">جست و جو</label>
                                                    <div className="input-group input-group-merge">
                                                        <span className="input-group-text" id="basic-addon-search31"><i className="bx bx-search" /></span>
                                                        <input type="text" className="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon-search31" />
                                                    </div>
                                                </div>
                                                {/* <div className="col-lg-4 col-md-5 col-sm-10 col-10 mb-3 me-3">
                                                    <label htmlFor="defaultSelect" className="form-label">وضعیت</label>
                                                    <select id="defaultSelect" className="form-select">
                                                        <option>Default select</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-4 col-md-5 col-sm-10 col-10 mb-3 me-3">
                                                    <label htmlFor="defaultSelect" className="form-label">تعداد</label>
                                                    <select id="defaultSelect" className="form-select">
                                                        <option>Default select</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                </div> */}
                                            </div>





                                                <li className="list-group-item p-4 product-list-responsive">
                                                    <div className="d-flex gap-3">
                                                        <div className="flex-shrink-0 d-flex align-items-center">
                                                            <img src='' className="w-px-100" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="row">
                                                                <div className="col-md-8">
                                                                    <p className="me-3">
                                                                        <a href="" className="text-body color-product">qewtwete</a>
                                                                    </p>
                                                                    <div className="text-muted mb-2 d-flex flex-wrap">
                                                                        <span className="me-1 color-product"> قیمت :</span>
                                                                        <span href="javascript:void(0)" className="me-3 color-product">qwerqwr</span>
                                                                        <span className="badge bg-label-success">موجود</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>شناسه :</span>

                                                                        <span className="text-body color-product">43465</span>
                                                                    </p>
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>کد فنی :</span>

                                                                        <span className="text-body color-product">1234</span>
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="text-md-end" style={{ marginTop: 8 }}>
                                                                        <button type="button" className="btn btn-sm mt-md-3" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", minWidth : 128 , backgroundColor: "#50C878", color: "white" }}>
                                                                            افزودن قیمت
                                                                        </button>
                                                                        <button type="button" className="btn btn-sm mt-md-3" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", minWidth : 128 , backgroundColor: "#ECF0F1", color: "#131428" }}>
                                                                            حذف محصول
                                                                        </button>
                                                                        <button type="button" className="btn btn-sm mt-md-3" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", minWidth : 128 , backgroundColor: "#4682B4", color: "white" }}>
                                                                            همه قیمت ها
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="list-group-item p-4 product-list-responsive">
                                                    <div className="d-flex gap-3">
                                                        <div className="flex-shrink-0 d-flex align-items-center">
                                                            <img src='' className="w-px-100" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="row">
                                                                <div className="col-md-8">
                                                                    <p className="me-3">
                                                                        <a href="" className="text-body color-product">qewtwete</a>
                                                                    </p>
                                                                    <div className="text-muted mb-2 d-flex flex-wrap">
                                                                        <span className="me-1 color-product"> قیمت :</span>
                                                                        <span href="javascript:void(0)" className="me-3 color-product">qwerqwr</span>
                                                                        <span className="badge bg-label-success">موجود</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>شناسه :</span>

                                                                        <span className="text-body color-product">43465</span>
                                                                    </p>
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>کد فنی :</span>

                                                                        <span className="text-body color-product">1234</span>
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="text-md-end" style={{ marginTop: 8 }}>
                                                                        <button type="button" className="btn btn-sm mt-md-3" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", backgroundColor: "#50C878", color: "white" }}>
                                                                            افزودن قیمت
                                                                        </button>
                                                                        <button type="button" className="btn btn-sm mt-md-3" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", backgroundColor: "#ECF0F1", color: "#131428" }}>
                                                                            حذف محصول
                                                                        </button>
                                                                        <button type="button" className="btn btn-sm mt-md-3" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", backgroundColor: "#4682B4", color: "white" }}>
                                                                            همه قیمت ها
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item p-4 product-list-responsive">
                                                    <div className="d-flex gap-3">
                                                        <div className="flex-shrink-0 d-flex align-items-center">
                                                            <img src='' className="w-px-100" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="row">
                                                                <div className="col-md-8">
                                                                    <p className="me-3">
                                                                        <a href="" className="text-body color-product">qewtwete</a>
                                                                    </p>
                                                                    <div className="text-muted mb-2 d-flex flex-wrap">
                                                                        <span className="me-1 color-product"> قیمت :</span>
                                                                        <span href="javascript:void(0)" className="me-3 color-product">qwerqwr</span>
                                                                        <span className="badge bg-label-success">موجود</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>شناسه :</span>

                                                                        <span className="text-body color-product">43465</span>
                                                                    </p>
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>کد فنی :</span>

                                                                        <span className="text-body color-product">1234</span>
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="text-md-end" style={{ marginTop: 8 }}>
                                                                        <button type="button" className="btn btn-sm mt-md-3" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", backgroundColor: "#50C878", color: "white" }}>
                                                                            افزودن قیمت
                                                                        </button>
                                                                        <button type="button" className="btn btn-sm mt-md-3" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", backgroundColor: "#ECF0F1", color: "#131428" }}>
                                                                            حذف محصول
                                                                        </button>
                                                                        <button type="button" className="btn btn-sm mt-md-3" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", backgroundColor: "#4682B4", color: "white" }}>
                                                                            همه قیمت ها
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

export default Product_Mine