import React from 'react';
import logo from "../../../../../Images/1.png";

function OTP_L2(props) {
  return (

    <>

      <div className="authentication-wrapper authentication-basic px-4">
        <div className="authentication-inner">
          {/*  Two Steps Verification */}
          <div className="card">
            <div className="card-body">
              {/* Logo */}
              <div className="app-brand justify-content-center">

                <img src={logo} style={{ height: "auto", width: "85%" }} />

              </div>
              {/* /Logo */}
              <h4 className="mb-5">کد تایید دو مرحله ای 💬</h4>
              <p className="text-start mb-4">
                کد تایید برای شماره تلفن <span style={{ backgroundColor: "#e1e1e1", borderWidth: 1, borderStyle: 'solid', borderColor: 'black', borderRadius: 4, padding: ".0250rem 1rem", fontSize: 16, fontWeight: 'bold' }}>09100853420</span> فرستاده شد.

              </p>
              <div className='mb-4' style={{ textAlign: 'center' }} >
                <span className="fw-bold d-block mt-2">زمان باقیمانده :  <span style={{ marginRight: "1rem" }}>_ _ : _ _</span></span>

              </div>
              <p className="mb-1 fw-semibold">کد 5 رقمی را وارد نمایید</p>
              <form id="twoStepsForm" action="index.html" method="POST">
                <div className="mb-4">
                  <div className="auth-input-wrapper d-flex align-items-center justify-content-sm-between numeral-mask-wrapper">
                    <input type="text" onChange={props.input} className="form-control h-px-50 text-center numeral-mask text-center h-px-50 mx-1 my-2" maxLength={5} autofocus />
                  </div>
                  {/* Create a hidden field which is combined by 3 fields above */}
                  <input type="hidden" name="otp" />
                </div>
                <button className="btn btn-primary d-grid w-100 mb-4" onClick={props.submit}>
                  تایید
                </button>
                <div className="text-center mb-0">کد ارسال نشده است ?
                  <a href="javascript:void(0);" style={{ marginRight: '1rem' }}>
                    ارسال دوباره
                  </a>
                </div>
              </form>
            </div>
          </div>
          {/* / Two Steps Verification */}
        </div>
      </div>





    </>





  )
}

export default OTP_L2