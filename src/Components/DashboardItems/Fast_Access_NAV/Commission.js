import React, { useState } from 'react';
import Nav from '../Bars/Nav';
import Header from '../Bars/Header';
import "../Pages/Pages.css";




function Comission() {


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
                              


                              

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>




    )
}

export default Comission