import React, { useContext, useEffect } from 'react';
import { BsCarFront, BsFillPinMapFill, BsPeople , BsFeather  } from "react-icons/bs";
import logo from "../../../../../Images/1.png";
import { MyContext } from '../../../../../ContexApi/MyContext';



function Header() {

    const { levels, setLevels } = useContext(MyContext);
  




    return (




        <>


            <div className='header-otp'>

                <div className='steps-main'>

                    <div className='step-main'>
                        <div className={`step-icon ${levels >= 1 ? 'active-steps-otp' : null}`}>
                            <BsPeople size={25} color='#131428' />
                        </div>
                        <div className='step-text'>
                            <span>اطلاعات</span>
                        </div>
                    </div>
                    <div className={`step-bar ${levels >= 2 ? "active-forward-icon" : null}`}>
                        <i className="bx bx-chevron-left" />
                    </div>
                    <div className='step-main'>
                        <div className={`step-icon ${levels >= 2 ? 'active-steps-otp' : null}`}>
                            <BsFillPinMapFill size={25} color='#131428' />
                        </div>
                        <div className='step-text'>
                            <span>آدرس</span>
                        </div>
                    </div>
                    <div className={`step-bar ${levels >= 3 ? "active-forward-icon" : null}`}>
                        <i className="bx bx-chevron-left" />
                    </div>
                    <div className='step-main'>
                        <div className={`step-icon ${levels >= 3 ? 'active-steps-otp' : null}`}>
                            <BsFeather size={25} color='#131428' />
                        </div>
                        <div className='step-text'>
                            <span>ضمانت کاری</span>
                        </div>
                    </div>
                    <div className={`step-bar ${levels >= 4 ? "active-forward-icon" : null}`}>
                        <i className="bx bx-chevron-left" />
                    </div>
                    <div className='step-main'>
                        <div className={`step-icon ${levels >= 4 ? 'active-steps-otp' : null}`}>
                            <BsCarFront size={25} color='#131428' />
                        </div>
                        <div className='step-text'>
                            <span>ثبت اطلاعات</span>
                        </div>
                    </div>
                </div>
                <div className='logo-header-otp'>
                    <img src={logo} className='img-logo-otp' />
                </div>
            </div>


            {/* <div className="bs-stepper-header">
                <div className="step" data-target="#account-details">
                    <button type="button" className="step-trigger">
                        <span className="bs-stepper-icon">
                            <svg viewBox="0 0 74 74">
                                <use xlinkHref="assets/svg/icons/form-wizard-account.svg#wizardAccount" />
                            </svg>
                        </span>
                        <span className="bs-stepper-label">Account Details</span>
                    </button>
                </div>
                <div className="line">
                    <i className="bx bx-chevron-right" />
                </div>
                <div className="step" data-target="#personal-info">
                    <button type="button" className="step-trigger">
                        <span className="bs-stepper-icon">
                            <svg viewBox="0 0 58 74">
                                <use xlinkHref="assets/svg/icons/form-wizard-personal.svg#wizardPersonal" />
                            </svg>
                        </span>
                        <span className="bs-stepper-label">Personal Info</span>
                    </button>
                </div>
                <div className="line">
                    <i className="bx bx-chevron-right" />
                </div>
                <div className="step" data-target="#address">
                    <button type="button" className="step-trigger">
                        <span className="bs-stepper-icon">
                            <svg viewBox="0 0 74 74">
                                <use xlinkHref="assets/svg/icons/form-wizard-address.svg#wizardAddress" />
                            </svg>
                        </span>
                        <span className="bs-stepper-label">Address</span>
                    </button>
                </div>
                <div className="line">
                    <i className="bx bx-chevron-right" />
                </div>
                <div className="step" data-target="#social-links">
                    <button type="button" className="step-trigger">
                        <span className="bs-stepper-icon">
                            <svg viewBox="0 0 74 74">
                                <use xlinkHref="assets/svg/icons/form-wizard-social-link.svg#wizardSocialLink" />
                            </svg>
                        </span>
                        <span className="bs-stepper-label">Social Links</span>
                    </button>
                </div>
                <div className="line">
                    <i className="bx bx-chevron-right" />
                </div>
                <div className="step" data-target="#review-submit">
                    <button type="button" className="step-trigger">
                        <span className="bs-stepper-icon">
                            <svg viewBox="0 0 74 74">
                                <use xlinkHref="assets/svg/icons/form-wizard-submit.svg#wizardSubmit" />
                            </svg>
                        </span>
                        <span className="bs-stepper-label">Review &amp; Submit</span>
                    </button>
                </div>
            </div> */}



        </>
    )
}

export default Header;