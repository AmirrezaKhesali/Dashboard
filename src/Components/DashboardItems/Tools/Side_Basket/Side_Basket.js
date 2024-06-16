import React from 'react'
import AsideBackDrop from '../BackDrop/AsideBackDrop'
import { BsBasket3, BsBasket3Fill, BsPlus, BsX } from 'react-icons/bs';
import '../Tools.css'

function Side_Basket(props) {
    return (



        <>


            <AsideBackDrop showModal={props.showAside} closeModal={props.closeModal} />
            <aside id="layout-menu" className='side-bascket-main py-4 px-3'>
                <div className="d-flex justify-content-between border-bottom pb-2">


                    <a to="index.html" className="app-brand-link">
                        <span className="app-brand-text demo menu-text fw-bolder ms-2 color-co-white">ماشین نو</span>
                    </a>
                    <div>
                        <BsX size={45} color='white' className='me-3 color-co-white' />

                    </div>
                </div>


                <li className="list-group-item p-4 product-list-responsive">
                    <div className="d-flex gap-3">
                        <div className="flex-shrink-0 d-flex align-items-center">
                            <img src='' className="h-auto w-100" />
                        </div>
                        <div className="flex-grow-1">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="text-muted mb-2 d-flex flex-wrap">
                                        <span className="me-1 color-co-white">کولر برلیانس E320</span>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex justify-content-end">
                                    <p className="me-1 mb-1">
                                        <span className="text-body color-co-white" style={{ marginLeft: "0.4rem" }}>1,200,300</span>
                                    </p>
                                </div>
                                <div className="col-md-12">
                                    <div className="d-flex justify-content-end" style={{ marginTop: 8 }}>
                                        <span className="nega-btn" >
                                            -
                                        </span>
                                        <span style={{ fontSize: 18, marginTop: 2, color: 'white' }}>1</span>
                                        <span className="add-btn" >
                                            <BsPlus size={25} color='' />
                                        </span>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </li>


                <li className="list-group-item p-4 product-list-responsive">
                    <div className="d-flex gap-3">
                        <div className="flex-grow-1">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-muted mb-2 d-flex flex-wrap cuz-bord-head">
                                        <BsBasket3 size={20} color='white' className='me-3 ' />
                                        <span className="me-1 color-co-white fs-5">سبد خرید</span>
                                    </div>
                                </div>
                                <li className="d-flex mb-4 pb-1">

                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                        <div className="me-2">
                                            <small className="  color-co-white fs-5">محصول</small>
                                        </div>
                                        <div className="user-progress">
                                            <small className=" color-co-white fs-5">قیمت کل</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex mb-4 pb-1 adad-dis">

                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                        <div className="me-2">
                                            <small className="color-co-white fs-6">کولر برلیانس E620</small>
                                        </div>
                                        <div className="user-progress">
                                            <small className=" color-co-white fs-6">82,100,00</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex mb-2 pb-1 adad-dis">

                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                        <div className="me-2">
                                            <small className="color-co-white fs-6">جمع کل : </small>
                                        </div>
                                        <div className="user-progress">
                                            <small className=" color-co-white fs-6">85,300,200</small>
                                        </div>
                                    </div>
                                </li>

                                <div className="col-md-12 d-flex justify-content-center align-item-center">
                                    <div className="text-md-end w-75" style={{ marginTop: 8 }}>
                                        <button type="button" className="btn btn-sm mt-md-3 h-100 w-100" style={{ marginTop: "0.5rem", fontSize: 16, marginLeft: "0.5rem", minWidth: 128, backgroundColor: "#880808", color: "white" }}>
                                            نمایش سبد خرید
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>




            </aside>

        </>





    )
}

export default Side_Basket