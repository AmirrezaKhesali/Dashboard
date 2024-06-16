import React, { useContext, useEffect } from 'react'
import Header from '../../Bars/Header'
import Nav from '../../Bars/Nav'
import { MyContext } from '../../../../ContexApi/MyContext';

function Financial() {


    const { activation, setActivation } = useContext(MyContext);

    useEffect(() => {

        const any = window.location.href.split('/');
        const live = any[any.length - 1];
        setActivation(live)

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
                                        گزارشات مالی
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
                                                    <label htmlFor="defaultSelect" className="form-label">گزارشات مالی</label>
                                                    <select id="defaultSelect" className="form-select">
                                                        <option>همه موارد</option>
                                                        <option value={2}>پرداخت ها</option>
                                                        <option value={3}>بدهی ها</option>
                                                    </select>
                                                </div>
                                            </div>


                                            <li className="list-group-item p-2 border rounded-1 mx-2 font-14">
                                                <div className="d-flex gap-3">
                                                    <div className="flex-grow-1 d-flex text-center">
                                                        <div className='col-2'>شماره</div>
                                                        <div className='col-3'>نوع فاکتور</div>
                                                        <div className='col-3'>تاریخ</div>
                                                        <div className='col-4'>مبلغ</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <hr className="my-3" />
                                            <li className="list-group-item p-2 border rounded-1 mx-2 font-14 mb-2">
                                                <div className="d-flex gap-3">
                                                    <div className="flex-grow-1 d-flex text-center">
                                                        <div className='col-2'>1</div>
                                                        <div className='col-3'>
                                                            <div className='col-12'>پرداخت بدهی</div>
                                                            <div className='col-12'>
                                                                <span className='btn btn-secondary font-12 border rounded-2 px-3 mt-1'>فاکتور</span>
                                                            </div>
                                                        </div>
                                                        <div className='col-3 font-12'>از 18اسفند تا 20 اسفند 1402</div>
                                                        <div className='col-4'>100,000,000</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item p-2 border rounded-1 mx-2 font-14 mb-2">
                                                <div className="d-flex gap-3">
                                                    <div className="flex-grow-1 d-flex text-center">
                                                        <div className='col-2'>1</div>
                                                        <div className='col-3'>
                                                            <div className='col-12'>موجودی</div>
                                                            <div className='col-12'>
                                                                <span className='btn btn-secondary btn-secondary-effect font-12 border rounded-2 px-3 mt-1'>فاکتور</span>
                                                            </div>
                                                        </div>
                                                        <div className='col-3 font-12'>از 18اسفند تا 20 اسفند 1402</div>
                                                        <div className='col-4'>100,220,000</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item p-2 border rounded-1 mx-2 font-14 mb-2">
                                                <div className="d-flex gap-3">
                                                    <div className="flex-grow-1 d-flex text-center">
                                                        <div className='col-2'>1</div>
                                                        <div className='col-3'>
                                                            <div className='col-12'>تسویه مالی</div>
                                                            <div className='col-12'>
                                                                <span className='btn btn-secondary font-12 border rounded-2 px-3 mt-1'>فاکتور</span>
                                                            </div>
                                                        </div>
                                                        <div className='col-3 font-12'>از 18اسفند تا 20 اسفند 1402</div>
                                                        <div className='col-4'>100,000,000</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item p-2 border rounded-1 mx-2 font-14 mb-2">
                                                <div className="d-flex gap-3">
                                                    <div className="flex-grow-1 d-flex text-center">
                                                        <div className='col-2'>1</div>
                                                        <div className='col-3'>
                                                            <div className='col-12'>موجودی</div>
                                                            <div className='col-12'>
                                                                <span className='btn btn-secondary font-12 border rounded-2 px-3 mt-1'>فاکتور</span>
                                                            </div>
                                                        </div>
                                                        <div className='col-3 font-12'>از 18اسفند تا 20 اسفند 1402</div>
                                                        <div className='col-4'>100,000,000</div>
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

export default Financial