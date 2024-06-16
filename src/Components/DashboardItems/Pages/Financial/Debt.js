import React, { useContext, useEffect } from 'react'
import Header from '../../Bars/Header'
import Nav from '../../Bars/Nav'
import { MyContext } from '../../../../ContexApi/MyContext';

function Debt() {


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
                                        بدهی ها
                                    </h4>
                                </div>



                                <div className="row">
                                    <div className="col-12">
                                        <div className="card mb-4">

                                            <div className='card-header d-flex justify-content-start flex-wrap pb-1'>

                                                <div className='me-4 color-co-black mb-2'>
                                                    <span className='me-2 fs-5'>تعداد کل :</span>
                                                    <span>4</span>
                                                </div>
                                                <div className='me-4 color-co-black mb-2'>
                                                    <span className='me-2 fs-5'>تعداد بدهی ها :</span>
                                                    <span>2</span>
                                                </div>
                                                <div className='me-4 color-co-black mb-2'>
                                                    <span className='me-2 fs-5'>تعداد پرداخت ها :</span>
                                                    <span>34</span>
                                                </div>


                                            </div>


                                            <div className="card-body">
                                                <li className="list-group-item p-4 border rounded-1">
                                                    <div className="d-flex gap-3">
                                                        <div className="flex-shrink-0">
                                                            {/* <img src="../../assets/img/products/1.png" alt="google home" className="w-px-100" /> */}
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="row">
                                                                <div className="flex-grow-1">
                                                                    <h4 className="mb-3">اطلاعیه تغییر تعرفه ها <span className='badge-self-edit'></span></h4>
                                                                    <p className="mb-3">شرکت اینترنتی ماشین نو در نظر دارد در سال جدید تعرفه های خود را تغیر داده و در نلاش است کمیسیون محصولات خود را بالا تر ببرد تا بتواند خدمات مناسب تری را به مشتریان خود غرضه کند</p>
                                                                    <small className="text-muted">1h ago</small>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <hr className="my-3" />
                                                <li className="list-group-item p-4 border rounded-1">
                                                    <div className="d-flex gap-3">
                                                        <div className="flex-shrink-0">
                                                            {/* <img src="../../assets/img/products/1.png" alt="google home" className="w-px-100" /> */}
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="row">
                                                                <div className="flex-grow-1">
                                                                    <h4 className="mb-3">اطلاعیه تغییر تعرفه ها <span className='badge-self-edit'></span></h4>
                                                                    <p className="mb-3">شرکت اینترنتی ماشین نو در نظر دارد در سال جدید تعرفه های خود را تغیر داده و در نلاش است کمیسیون محصولات خود را بالا تر ببرد تا بتواند خدمات مناسب تری را به مشتریان خود غرضه کند</p>
                                                                    <small className="text-muted">1h ago</small>
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

export default Debt