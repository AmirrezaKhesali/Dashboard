import React from 'react';
import logo from "../../../../../Images/1.png";

function OTP_L1(props) {
  return (


    <>

      <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner">
            {/* Register */}
            <div className="card">
              <div className="card-body">
                {/* Logo */}
                <div className="app-brand justify-content-center">

                  <img src={logo} style={{ height: "auto", width: "85%" }} />

                </div>
                {/* /Logo */}
                <h4 className="mb-5">به ماشین نو خوش آمدید 👋</h4>
                <p className="mb-5">برای ورود به پنل تعمیر کاران ماشین نو شماره تلفن همراه خود را وارد نمایید</p>
                <form id="formAuthentication" className="mb-4" action="index.html" method="POST">
                  <div className="mb-5 fv-plugins-icon-container">
                    <label htmlFor="email" className="form-label">شماره تلفن همراه</label>
                    <input type="text" onChange={props.input} className="form-control h-px-50" id="email" name="email-username" placeholder="شماره تلفن خود را وارد کنید" autofocus />
                  </div>

                  {/* <div className="mb-5">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="remember-me" />
                      <label className="form-check-label" htmlFor="remember-me">
                        مرا به یاد داشته باش
                      </label>
                    </div>
                  </div> */}


                  <div className="mb-5">
                    <button className="btn btn-primary d-grid w-100" onClick={props.submit} >ثبت نام</button>
                  </div>
                </form>
              </div>
            </div>
            {/* /Register */}
          </div>
        </div>
      </div>


    </>










  )
}

export default OTP_L1;