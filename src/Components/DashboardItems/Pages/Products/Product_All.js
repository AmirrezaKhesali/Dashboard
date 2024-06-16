import React, { useContext, useEffect, useState } from 'react'
import Header from '../../Bars/Header';
import Nav from '../../Bars/Nav';
import { MyContext } from '../../../../ContexApi/MyContext';
import ResponsivePagination from 'react-responsive-pagination';
import { BsBasket3, BsBasket3Fill } from 'react-icons/bs';
import defaultImage from "../../../../Images/Untitled-2.jpg"


function Product_All() {


    const { activation, setActivation } = useContext(MyContext);
    const [dokme, setDokme] = useState(false)

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
                                <div className='card allpro-basket mb-4'>
                                    <h4 className=" mb-0" style={{ margin: 0 }}>
                                        همه محصولات
                                    </h4>
                                    <BsBasket3 size={32} color='#131428' className='' />
                                </div>

                                <div className="row">

                                    <div className="col-12">
                                        <div className="card mb-4">
                                            <div className="card-body d-flex flex-wrap p-2 py-3">
                                                <div className='col-lg-4 col-md-5 col-sm-10 col-10 mb-3 me-3 px-2' >
                                                    <label htmlFor="basic-addon-search31" className="form-label">جست و جو</label>
                                                    <div className="input-group input-group-merge">
                                                        <span className="input-group-text" id="basic-addon-search31"><i className="bx bx-search" /></span>
                                                        <input type="text" className="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon-search31" />
                                                    </div>
                                                </div>
                                                <div className='col-12 text-center'>
                                                    <ResponsivePagination
                                                        current={1}
                                                        total={10}
                                                        maxWidth={100}
                                                        className='pagination justify-content-center Paginationclass'

                                                    />
                                                </div>




                                                <li className="list-group-item p-3 product-list-responsive">
                                                    <div className="d-flex gap-3">
                                                        <div className="flex-shrink-0 d-flex align-items-start">
                                                            <img src={defaultImage} alt="google home" className="w-px-100" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="row">
                                                                <div className="col-md-8">
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product fw-bold">آینه بغل چپ پراید</span>
                                                                    </p>
                                                                    <div className="text-muted mb-2 d-flex flex-wrap">
                                                                        <span className="me-1 color-product">قیمت :</span>
                                                                        <span className="me-3 color-product">120000</span>
                                                                        <span className="badge bg-label-success">موجود</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>شناسه :</span>

                                                                        <span className="text-body color-product">124u13</span>
                                                                    </p>
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>کد فنی :</span>

                                                                        <span className="text-body color-product">58892</span>
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="text-md-end" style={{ marginTop: 8 }}>
                                                                        <button type="button" className="btn btn-sm mt-md-3 btn-fix-allsize" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", backgroundColor: "#50C878", color: "white" }}>
                                                                            افزودن قیمت
                                                                        </button>

                                                                        {
                                                                            dokme ?
                                                                                <button type="button" className="btn btn-sm mt-md-3 btn-fix-allsize" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", backgroundColor: "#ECF0F1", color: "#131428" }}>
                                                                                    حذف محصول
                                                                                </button>

                                                                                :
                                                                                <button type="button" className="btn btn-sm mt-md-3 btn-fix-allsize" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", backgroundColor: "rgb(18 43 64)", color: "white" }}>
                                                                                    افزودن به محصولات من
                                                                                </button>
                                                                        }
                                                                        <button type="button" className="btn btn-sm mt-md-3 btn-fix-allsize" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", backgroundColor: "#4682B4", color: "white" }}>
                                                                            همه قیمت ها
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item p-3 product-list-responsive">
                                                    <div className="d-flex gap-3">
                                                        <div className="flex-shrink-0 d-flex align-items-start">
                                                            <img src={defaultImage} alt="google home" className="w-px-100" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="row">
                                                                <div className="col-md-8">
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product fw-bold">آینه بغل چپ پراید</span>
                                                                    </p>
                                                                    <div className="text-muted mb-2 d-flex flex-wrap">
                                                                        <span className="me-1 color-product">قیمت :</span>
                                                                        <span className="me-3 color-product">120000</span>
                                                                        <span className="badge bg-label-success">موجود</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>شناسه :</span>

                                                                        <span className="text-body color-product">124u13</span>
                                                                    </p>
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>کد فنی :</span>

                                                                        <span className="text-body color-product">58892</span>
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="text-md-end" style={{ marginTop: 8 }}>
                                                                        <button type="button" className="btn btn-sm mt-md-3 btn-fix-allsize" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", backgroundColor: "#50C878", color: "white" }}>
                                                                            افزودن قیمت
                                                                        </button>

                                                                        {
                                                                            dokme ?
                                                                                <button type="button" className="btn btn-sm mt-md-3 btn-fix-allsize" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", backgroundColor: "#ECF0F1", color: "#131428" }}>
                                                                                    حذف محصول
                                                                                </button>

                                                                                :
                                                                                <button type="button" className="btn btn-sm mt-md-3 btn-fix-allsize" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", backgroundColor: "rgb(18 43 64)", color: "white" }}>
                                                                                    افزودن به محصولات من
                                                                                </button>
                                                                        }
                                                                        <button type="button" className="btn btn-sm mt-md-3 btn-fix-allsize" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", backgroundColor: "#4682B4", color: "white" }}>
                                                                            همه قیمت ها
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item p-3 product-list-responsive">
                                                    <div className="d-flex gap-3">
                                                        <div className="flex-shrink-0 d-flex align-items-start">
                                                            <img src={defaultImage} alt="google home" className="w-px-100" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="row">
                                                                <div className="col-md-8">
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product fw-bold">آینه بغل چپ پراید</span>
                                                                    </p>
                                                                    <div className="text-muted mb-2 d-flex flex-wrap">
                                                                        <span className="me-1 color-product">قیمت :</span>
                                                                        <span className="me-3 color-product">120000</span>
                                                                        <span className="badge bg-label-success">موجود</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>شناسه :</span>

                                                                        <span className="text-body color-product">124u13</span>
                                                                    </p>
                                                                    <p className="me-3">
                                                                        <span className="text-body color-product" style={{ marginLeft: "0.4rem" }}>کد فنی :</span>

                                                                        <span className="text-body color-product">58892</span>
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="text-md-end" style={{ marginTop: 8 }}>
                                                                        <button type="button" className="btn btn-sm mt-md-3 btn-fix-allsize" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", backgroundColor: "#50C878", color: "white" }}>
                                                                            افزودن قیمت
                                                                        </button>

                                                                        {
                                                                            dokme ?
                                                                                <button type="button" className="btn btn-sm mt-md-3 btn-fix-allsize" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", backgroundColor: "#ECF0F1", color: "#131428" }}>
                                                                                    حذف محصول
                                                                                </button>

                                                                                :
                                                                                <button type="button" className="btn btn-sm mt-md-3 btn-fix-allsize" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", backgroundColor: "rgb(18 43 64)", color: "white" }}>
                                                                                    افزودن به محصولات من
                                                                                </button>
                                                                        }
                                                                        <button type="button" className="btn btn-sm mt-md-3 btn-fix-allsize" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", backgroundColor: "#4682B4", color: "white" }}>
                                                                            همه قیمت ها
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>



                                                <div className='col-12 text-center'>
                                                    <ResponsivePagination
                                                        current={1}
                                                        total={10}
                                                        maxWidth={100}
                                                        className='pagination justify-content-center Paginationclass'

                                                    />
                                                </div>
                                            </div>
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

export default Product_All