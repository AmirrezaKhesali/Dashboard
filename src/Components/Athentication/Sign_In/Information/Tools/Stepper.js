import React from 'react'

function Stepper() {
    return (


        <>


            <div id="multiStepsValidation" className="bs-stepper shadow-none">

                <div className="bs-stepper-header border-bottom-0">
                    <div className="step" data-target="#accountDetailsValidation">
                        <button type="button" className="step-trigger">
                            <span className="bs-stepper-circle"><i className="bx bx-home-alt" /></span>
                            <span className="bs-stepper-label mt-1">
                                <span className="bs-stepper-title">Account</span>
                                <span className="bs-stepper-subtitle">Account Details</span>
                            </span>
                        </button>
                    </div>
                    <div className="line">
                        <i className="bx bx-chevron-right" />
                    </div>
                    <div className="step" data-target="#personalInfoValidation">
                        <button type="button" className="step-trigger">
                            <span className="bs-stepper-circle"><i className="bx bx-user" /></span>
                            <span className="bs-stepper-label mt-1">
                                <span className="bs-stepper-title">Personal</span>
                                <span className="bs-stepper-subtitle">Enter Information</span>
                            </span>
                        </button>
                    </div>
                    <div className="line">
                        <i className="bx bx-chevron-right" />
                    </div>
                    <div className="step" data-target="#billingLinksValidation">
                        <button type="button" className="step-trigger">
                            <span className="bs-stepper-circle"><i className="bx bx-detail" /></span>
                            <span className="bs-stepper-label mt-1">
                                <span className="bs-stepper-title">Billing</span>
                                <span className="bs-stepper-subtitle">Payment Details</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>






        </>
    )
}

export default Stepper