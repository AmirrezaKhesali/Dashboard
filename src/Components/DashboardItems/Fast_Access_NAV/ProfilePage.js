import React, { useState } from 'react';
import Nav from '../Bars/Nav';
import Header from '../Bars/Header';
import "../Pages/Pages.css";




function ProfilePage() {


    const [nameValue, setNameValue] = useState('امیررضا خصالی');
    const [actionValue, setActionValue] = useState('');
    const [roleValue, setRoleValue] = useState('امیررضا خصالی');
    const [addressValue, setAddressValue] = useState('تهران، تهرانپارس، خیابان بهارستان، پلاک 13');
    const [numberValue, setNumberValue] = useState('09100853420');
    const [emailValue, setEmailValue] = useState('amirreza@gmail.com');





    return (


        <>

            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Header />
                    <div className="layout-page">
                        <Nav />
                        <div className="content-wrapper">


                            <div className="container-xxl flex-grow-1 container-p-y">
                                <h4 className="fw-bold py-3 mb-4">
                                    پروفایل شخصی
                                </h4>
                                {/* Header */}
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card mb-4">
                                            <div className="user-profile-header-banner">
                                                <img src="../../assets/img/pages/profile-banner.png" alt="Banner image" className="rounded-top" />
                                            </div>
                                            <div className="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
                                                <div className="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                                                    <img src="../../assets/img/avatars/1.png" alt="user image" className="d-block h-auto ms-0 ms-sm-4 rounded user-profile-img" />
                                                </div>
                                                <div className="flex-grow-1 mt-3 mt-sm-5">
                                                    <div className="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                                                        <div className="user-profile-info">
                                                            <h4>امیررضا خصالی</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-7 col-md-7">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <small className="text-muted text-uppercase">اطلاعات</small>
                                                <ul className="list-unstyled mb-4 mt-3">
                                                    <li className="d-flex align-items-center mb-3"><i className="bx bx-user" /><span className="fw-semibold mx-2">نام :</span> <input type='text' className='change-info-input' value={nameValue} onChange={(e) => setNameValue(e.target.value)} /></li>
                                                    <li className="d-flex align-items-center mb-3"><i className="bx bx-check" /><span className="fw-semibold mx-2">وضعیت :</span><span style={{padding : '0 8px' , borderRadius : 4 , backgroundColor : "#e9e9e9"}}>فعال</span></li>
                                                    <li className="d-flex align-items-center mb-3"><i className="bx bx-star" /><span className="fw-semibold mx-2">نقش :</span> <span>تعمیرکار ماشین خارجی</span></li>
                                                    <li className="d-flex align-items-center mb-3"><i className="bx bx-flag" /><span className="fw-semibold mx-2">شهر :</span> <span>تهران</span></li>
                                                </ul>
                                                <small className="text-muted text-uppercase">ارتباط</small>
                                                <ul className="list-unstyled mb-4 mt-3">
                                                    <li className="d-flex align-items-center mb-3"><i className="bx bx-phone" /><span className="fw-semibold mx-2">شماره تلفن :</span> <input type='text' className='change-info-input' value={numberValue} onChange={(e) => setNameValue(e.target.value)} /></li>
                                                    <li className="d-flex align-items-center mb-3"><i className="bx bx-chat" /><span className="fw-semibold mx-2">آدرس :</span><input type='text' className='change-info-input' style={{width : "75%"}} value={addressValue} onChange={(e) => setNameValue(e.target.value)} /></li>
                                                    <li className="d-flex align-items-center mb-3"><i className="bx bx-envelope" /><span className="fw-semibold mx-2">نشانی اینترنتی :</span> <input type='text' className='change-info-input' value={emailValue} onChange={(e) => setNameValue(e.target.value)} /></li>
                                                </ul>
                                                <small className="text-muted text-uppercase">وظایف</small>
                                                <ul className="list-unstyled mt-3 mb-0">
                                                    <li className="d-flex align-items-center mb-3"><i className="fa fa-car me-2" />
                                                        <div className="d-flex flex-wrap"><span className="fw-semibold me-2">وظایف من</span><span>(4 عدد)</span></div>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3"><i className="fa fa-search me-2" />
                                                        <div className="d-flex flex-wrap"><span className="fw-semibold me-2" style={{ textDecoration: 'underline' }}>وظایف جدید</span></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-5 col-md-5' >
                                        <div className="card mb-4">
                                            <div className="card-body d-flex justify-content-center">
                                                <button className='btn btn-primary mb-2 ms-3 col-4 size-650' >ثبت تغییرات</button>
                                                <button className='btn btn-secondary mb-2 ms-3 col-4 size-650' >انصراف</button>
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

export default ProfilePage