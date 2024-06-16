import React, { useContext, useEffect, useState } from 'react'
import Stepper from '../Tools/Stepper';
import Header from '../Tools/Header';
import { MyContext } from '../../../../../ContexApi/MyContext';
import { useNavigate } from 'react-router-dom';


function Info_1() {


    const { levels, setLevels } = useContext(MyContext);

    useEffect(() => {

        const level = window.location.href.split('/');
        const CurrentLevel = level[level.length - 1];
        setLevels(CurrentLevel);


    }, [])


    const navigate = useNavigate();
    const nextClick = () => {
        navigate('/info/2')
    }

    // ???????????????  get value    ????????????????

    const [name, setName] = useState('');
    const [family, setFamily] = useState('');
    const [number, setNumber] = useState('');
    const [mCode, setMCode] = useState('');
    const [city, setCity] = useState('');
    const [serviceType, setServiceType] = useState('');

    const nameHandler = (event) => {
        setName(event.target.value)
    }
    const familyHandler = (event) => {
        setFamily(event.target.value)
    }
    const numberHandler = (event) => {
        setNumber(event.target.value)
    }
    const mCodeHandler = (event) => {
        setMCode(event.target.value)
    }
    const cityHandler = (event) => {
        setCity(event.target.value)
    }
    const serviceTypeHandler = (event) => {
        setServiceType(event.target.value)
    }

    // ???????????????  get value    ????????????????



    return (

        <>
            <Header />
            <div className="container-xxl">
                <div className="authentication-basic authentication-wrapper container-p-y">
                    <div className="card margin-flex">
                        <div className="card-body">

                            <div className="content-header mb-3 fix-head">
                                <h3 className="mb-1">اطلاعات فردی</h3>
                                <span></span>
                            </div>
                            <div className="row g-3">
                                <div className="col-sm-6 mt-5">
                                    <label className="form-label" htmlFor="multiStepsUsername">نام</label>
                                    <input type="text" value={name} onChange={nameHandler} name="multiStepsUsername" id="multiStepsUsername" className="form-control" placeholder="نام" />
                                    <div id="defaultFormControlHelp" className="form-text error-valid">

                                    </div>
                                </div>
                                <div className="col-sm-6 mt-5">
                                    <label className="form-label" htmlFor="multiStepsEmail">نام خانوادگی</label>
                                    <input type="email" value={family} onChange={familyHandler} name="multiStepsEmail" id="multiStepsEmail" className="form-control" placeholder="نام خانوادگی" />
                                    <div id="defaultFormControlHelp" className="form-text error-valid">

                                    </div>
                                </div>
                                <div className="col-sm-6 form-password-toggle mt-5">
                                    <label className="form-label" htmlFor="multiStepsPass">شماره تلفن</label>
                                    <input type="number" value={number} onChange={numberHandler} name="multiStepsEmail" id="multiStepsEmail" className="form-control" placeholder="نام خانوادگی" />
                                    <div id="defaultFormControlHelp" className="form-text error-valid">

                                    </div>
                                </div>
                                <div className="col-sm-6 form-password-toggle mt-5">
                                    <label className="form-label" htmlFor="multiStepsConfirmPass">کد ملی</label>
                                    <input type="number" value={mCode} onChange={mCodeHandler} name="multiStepsEmail" id="multiStepsEmail" className="form-control" placeholder="نام خانوادگی" />
                                    <div id="defaultFormControlHelp" className="form-text error-valid">

                                    </div>
                                </div>
                                <div className="col-sm-6 mt-5">
                                    <label htmlFor="defaultSelect" className="form-label">شهر</label>
                                    <select id="defaultSelect" className="form-select" onChange={cityHandler}>
                                        <option>تهران</option>
                                        <option value={1}>اصفهان</option>
                                        <option value={2}>شیراز</option>
                                        <option value={3}>مشهد</option>
                                    </select>
                                    <div id="defaultFormControlHelp" className="form-text error-valid">

                                    </div>
                                </div>
                                <div className="col-sm-6 mt-5">
                                    <label htmlFor="defaultSelect" className="form-label">نوع تخصص در تعمیرات</label>
                                    <select id="defaultSelect" className="form-select" onChange={serviceTypeHandler}>
                                        <option>ماشین ایرانی</option>
                                        <option value={1}>ماشین خارجی</option>
                                        <option value={2}>ماشین چینی</option>
                                        <option value={3}>ماشین آلمانی</option>
                                        <option value={3}>ماشین آمریکایی</option>
                                        <option value={3}>ماشین کره ای</option>
                                    </select>
                                    <div id="defaultFormControlHelp" className="form-text error-valid">

                                    </div>
                                </div>
                                <div className="col-12 d-flex mt-5 mb-3" style={{ justifyContent: "flex-end" }}>
                                    <button className="btn btn-primary custom-button-size btn-next-style" onClick={nextClick}> <span className="align-middle d-sm-inline-block me-sm-3 me-0">بعدی</span><i className="bx bx-chevron-left bx-sm ms-sm-n2" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}

export default Info_1;