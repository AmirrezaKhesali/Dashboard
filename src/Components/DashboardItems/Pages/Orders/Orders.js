import React, { useContext, useEffect } from 'react'
import Header from '../../Bars/Header'
import Nav from '../../Bars/Nav'
import { MyContext } from '../../../../ContexApi/MyContext';

function Orders() {


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
                            <div className='card allpro-basket mb-4'>
                                    <h4 className=" mb-0" style={{ margin : 0 }}>
                                        همه محصولات
                                    </h4>
                                </div>

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
                                            <hr className="m-0" />
                                            <div className="card-body">

                                                <li className="list-group-item p-4 border rounded-1 mb-3">
                                                    <div className="d-flex gap-3">
                                                        <div className="flex-grow-1">
                                                            <div className="row">
                                                                <div className="col-md-4 col-6">
                                                                    <div className=" mb-3 d-flex flex-wrap"><span className="me-2">ش سفارش :</span> <span className="me-1">67824</span></div>
                                                                    <div className=" mb-3 d-flex flex-wrap"><span className="me-2">وضعیت :</span> <span className="badge bg-label-success">ارسال شده</span></div>
                                                                    <div className=" mb-3 d-flex flex-wrap"><span className="me-2">تعداد :</span> <span className="me-1">4</span></div>
                                                                </div>
                                                                <div className="col-md-4 col-6">
                                                                    <div className=" mb-3 d-flex flex-wrap"><span className="me-2">مبلغ فاکتور :</span> <span className="me-1">270000000</span></div>
                                                                    <div className=" mb-3 d-flex flex-wrap"><span className="me-2">تاریخ :</span> <span className="">10/12/1402</span></div>
                                                                    <div className=" mb-3 d-flex flex-wrap"><span className="me-2">شهر :</span> <span className="me-1">اهواز</span></div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="text-md-end d-flex flex-column align-items-center">
                                                                        <button type="button" className="btn btn-sm btn-label-secondary mt-3 wid-order-size" style={{backgroundColor : '#52BE80'}}>نمایش وضعیت سفارش</button>
                                                                        <button type="button" className="btn btn-sm btn-label-secondary mt-3 wid-order-size" style={{backgroundColor : '#7FB3D5'}}>نمایش محصولات سفارشی</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>


                                                <li className="list-group-item p-4 border rounded-1 mb-3">
                                                    <div className="d-flex gap-3">
                                                        <div className="flex-grow-1">
                                                            <div className="row">
                                                                <div className="col-md-4 col-6">
                                                                    <div className=" mb-3 d-flex flex-wrap"><span className="me-2">ش سفارش :</span> <span className="me-1">67824</span></div>
                                                                    <div className=" mb-3 d-flex flex-wrap"><span className="me-2">وضعیت :</span> <span className="badge bg-label-success">ارسال شده</span></div>
                                                                    <div className=" mb-3 d-flex flex-wrap"><span className="me-2">تعداد :</span> <span className="me-1">4</span></div>
                                                                </div>
                                                                <div className="col-md-4 col-6">
                                                                    <div className=" mb-3 d-flex flex-wrap"><span className="me-2">مبلغ فاکتور :</span> <span className="me-1">270000000</span></div>
                                                                    <div className=" mb-3 d-flex flex-wrap"><span className="me-2">تاریخ :</span> <span className="">10/12/1402</span></div>
                                                                    <div className=" mb-3 d-flex flex-wrap"><span className="me-2">شهر :</span> <span className="me-1">اهواز</span></div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="text-md-end d-flex flex-column align-items-center">
                                                                        <button type="button" className="btn btn-sm btn-label-secondary mt-3 wid-order-size" style={{backgroundColor : '#52BE80'}}>نمایش وضعیت سفارش</button>
                                                                        <button type="button" className="btn btn-sm btn-label-secondary mt-3 wid-order-size" style={{backgroundColor : '#7FB3D5'}}>نمایش محصولات سفارشی</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>


                                                <li className="list-group-item p-4 border rounded-1 mb-3">
                                                    <div className="d-flex gap-3">
                                                        <div className="flex-grow-1">
                                                            <div className="row">
                                                                <div className="col-md-4 col-6">
                                                                    <div className=" mb-3 d-flex flex-wrap"><span className="me-2">ش سفارش :</span> <span className="me-1">67824</span></div>
                                                                    <div className=" mb-3 d-flex flex-wrap"><span className="me-2">وضعیت :</span> <span className="badge bg-label-success">ارسال شده</span></div>
                                                                    <div className=" mb-3 d-flex flex-wrap"><span className="me-2">تعداد :</span> <span className="me-1">4</span></div>
                                                                </div>
                                                                <div className="col-md-4 col-6">
                                                                    <div className=" mb-3 d-flex flex-wrap"><span className="me-2">مبلغ فاکتور :</span> <span className="me-1">270000000</span></div>
                                                                    <div className=" mb-3 d-flex flex-wrap"><span className="me-2">تاریخ :</span> <span className="">10/12/1402</span></div>
                                                                    <div className=" mb-3 d-flex flex-wrap"><span className="me-2">شهر :</span> <span className="me-1">اهواز</span></div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="text-md-end d-flex flex-column align-items-center">
                                                                        <button type="button" className="btn btn-sm btn-label-secondary mt-3 wid-order-size" style={{backgroundColor : '#52BE80'}}>نمایش وضعیت سفارش</button>
                                                                        <button type="button" className="btn btn-sm btn-label-secondary mt-3 wid-order-size" style={{backgroundColor : '#7FB3D5'}}>نمایش محصولات سفارشی</button>
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
            </div>

        </>
    )
}

export default Orders