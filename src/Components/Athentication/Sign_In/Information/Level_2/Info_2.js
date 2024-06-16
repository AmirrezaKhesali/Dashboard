import React, { useContext, useEffect, useState } from 'react'
import Header from '../Tools/Header'
import { MyContext } from '../../../../../ContexApi/MyContext';
import { useNavigate } from 'react-router-dom';


function Info_2() {



    const { levels, setLevels } = useContext(MyContext);

    useEffect(() => {

        const level = window.location.href.split('/');
        const CurrentLevel = level[level.length - 1];
        setLevels(CurrentLevel);


    }, [])



    const navigate = useNavigate();
    const nextClick = () => {
        navigate('/info/3')
    }
    const pervClick = () => {
        navigate('/info/1')
    }


    // ???????????????  get value    ????????????????

    const [area, setArea] = useState('');
    const [unit, setUnit] = useState('');
    const [avenue, setAvenue] = useState('');
    const [alley, setAlley] = useState('');
    const [block, setBlock] = useState('');
    const [address, setAddress] = useState({ area: '', unit: '', avenue: '', alley: '', block: '' }
    );

    const areaHandler = (event) => {
        setArea(event.target.value)
        setAddress({
            area: event.target.value,
            unit: unit,
            avenue: avenue,
            alley: alley,
            block: block
        })
        console.log(address)

    }
    const unitHandler = (event) => {
        setUnit(event.target.value)
        setAddress({
            area: area,
            unit: event.target.value,
            avenue: avenue,
            alley: alley,
            block: block
        })
        console.log(address)
    }
    const avenueHandler = (event) => {
        setAvenue(event.target.value)
        setAddress({
            area: area,
            unit: unit,
            avenue: event.target.value,
            alley: alley,
            block: block
        })
        console.log(address)
    }
    const alleyHandler = (event) => {
        setAlley(event.target.value)
        setAddress({
            area: area,
            unit: unit,
            avenue: avenue,
            alley: event.target.value,
            block: block
        })
        console.log(address)
    }
    const blockHandler = (event) => {
        setBlock(event.target.value)
        setAddress({
            area: area,
            unit: unit,
            avenue: avenue,
            alley: alley,
            block: event.target.value
        })
        console.log(address)
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
                                <h3 className="mb-1">آدرس محل کار</h3>
                                <span></span>
                            </div>
                            <div className="row g-3">
                                <div className="col-sm-6 mt-5">
                                    <label className="form-label" htmlFor="multiStepsEmail">منطقه</label>
                                    <input type="email" onChange={areaHandler} name="multiStepsEmail" id="multiStepsEmail" className="form-control" placeholder="منطقه" />
                                    <div id="defaultFormControlHelp" className="form-text error-valid">

                                    </div>
                                </div>
                                <div className="col-sm-6 mt-5">
                                    <label className="form-label" htmlFor="multiStepsEmail">محله</label>
                                    <input type="email" onChange={unitHandler} name="multiStepsEmail" id="multiStepsEmail" className="form-control" placeholder="محله" />
                                    <div id="defaultFormControlHelp" className="form-text error-valid">

                                    </div>
                                </div>
                                <div className="col-sm-6 mt-5">
                                    <label className="form-label" htmlFor="multiStepsEmail">خیابان</label>
                                    <input type="email" onChange={avenueHandler} name="multiStepsEmail" id="multiStepsEmail" className="form-control" placeholder="محله" />
                                    <div id="defaultFormControlHelp" className="form-text error-valid">

                                    </div>
                                </div>
                                <div className="col-sm-6 mt-5">
                                    <label className="form-label" htmlFor="multiStepsEmail">کوچه</label>
                                    <input type="email" onChange={alleyHandler} name="multiStepsEmail" id="multiStepsEmail" className="form-control" placeholder="محله" />
                                    <div id="defaultFormControlHelp" className="form-text error-valid">

                                    </div>
                                </div>
                                <div className="col-sm-6 mt-5">
                                    <label className="form-label" htmlFor="multiStepsEmail">پلاک</label>
                                    <input type="email" onChange={blockHandler} name="multiStepsEmail" id="multiStepsEmail" className="form-control" placeholder="پلاک" />
                                    <div id="defaultFormControlHelp" className="form-text error-valid">

                                    </div>
                                </div>
                                <div className="col-sm-6 mt-5">
                                    <label className="form-label" htmlFor="multiStepsEmail">کد پستی</label>
                                    <input type="email" name="multiStepsEmail" id="multiStepsEmail" className="form-control" placeholder="کد پستی" />
                                    <div id="defaultFormControlHelp" className="form-text error-valid">

                                    </div>
                                </div>
                                <div className="col-sm-12 mt-5">
                                    <label className="form-label" htmlFor="multiStepsUsername">آدرس دقیق</label>
                                    <input type="text" name="multiStepsUsername" id="multiStepsUsername" className="form-control" value={`${address.area}،  ${address.unit}،  ${address.avenue}،  ${address.alley}،  ${address.block} `} />
                                </div>

                                <div className="col-12 d-flex justify-content-between mt-5">
                                    <button className="btn custom-button-size btn-perv-style btn-label-secondary" onClick={pervClick}>
                                        <i className="bx bx-chevron-right bx-sm ms-sm-n2" />  <span className="align-middle d-sm-inline-block" style={{ marginRight: 8 }}>قبلی</span>
                                    </button>
                                    <button className="btn btn-primary custom-button-size btn-next-style" onClick={nextClick}> <span className="align-middle d-sm-inline-block me-sm-3 me-0">بعدی</span> <i className="bx bx-chevron-left bx-sm ms-sm-n2" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </>



    )
}

export default Info_2