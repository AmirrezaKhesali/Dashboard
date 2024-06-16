import React, { useContext, useEffect, useRef, useState } from 'react'
import Header from '../Tools/Header'
import { MyContext } from '../../../../../ContexApi/MyContext';
import { useNavigate } from 'react-router-dom';



function Info_3() {



    const { levels, setLevels } = useContext(MyContext);

    useEffect(() => {

        const level = window.location.href.split('/');
        const CurrentLevel = level[level.length - 1];
        setLevels(CurrentLevel);


    }, [])


    const navigate = useNavigate();
    const nextClick = () => {
        navigate('/info/1')
    }
    const pervClick = () => {
        navigate('/info/2')
    }


    ///    REF HOOKS     ///  UPLOAD FILES   ///

    const [sourceFile1, setSourceFile1] = useState('');
    const [sourceFile2, setSourceFile2] = useState('');
    const [sourceFile3, setSourceFile3] = useState('');
    const [sourceFile4, setSourceFile4] = useState('');
    const [sourceFile5, setSourceFile5] = useState('');

    const fileRef1 = useRef();
    const fileRef2 = useRef();
    const fileRef3 = useRef();
    const fileRef4 = useRef();
    const fileRef5 = useRef();


    let notImage1 = !sourceFile1;
    let notImage2 = !sourceFile2;
    let notImage3 = !sourceFile3;
    let notImage4 = !sourceFile4;
    let notImage5 = !sourceFile5;




    const fileHandler1 = () => {
        fileRef1.current.click();
        fileRef1.current.addEventListener('change', function (event) {
            let fileReader = new FileReader;
            fileReader.onloadend = function () {
                let result = fileReader.result;
                setSourceFile1(result)
            };
            fileReader.readAsDataURL(event.target.files[0]);
        });
        console.log(sourceFile1)
    }
    const fileHandler2 = () => {
        fileRef2.current.click();
        fileRef2.current.addEventListener('change', function (event) {
            let fileReader = new FileReader;
            fileReader.onloadend = () => {
                let result = fileReader.result;
                setSourceFile2(result)
            };
            fileReader.readAsDataURL(event.target.files[0]);
        });
    }
    const fileHandler3 = () => {
        fileRef3.current.click();
        fileRef3.current.addEventListener('change', function (event) {
            let fileReader = new FileReader;
            fileReader.onloadend = () => {
                let result = fileReader.result;
                setSourceFile3(result)
            };
            fileReader.readAsDataURL(event.target.files[0]);
        });
    }
    const fileHandler4 = () => {
        fileRef4.current.click();
        fileRef4.current.addEventListener('change', function (event) {
            let fileReader = new FileReader;
            fileReader.onloadend = () => {
                let result = fileReader.result;
                setSourceFile4(result)
            };
            fileReader.readAsDataURL(event.target.files[0]);
        });
    }
    const fileHandler5 = () => {
        fileRef5.current.click();
        fileRef5.current.addEventListener('change', function (event) {
            let fileReader = new FileReader;
            fileReader.onloadend = () => {
                let result = fileReader.result;
                setSourceFile5(result)
            };
            fileReader.readAsDataURL(event.target.files[0]);
        });
    }

    ///    REF HOOKS     ///   UPLOAD FILES   ///



    return (

        <>
            <Header />
            <div className="container-xxl">
                <div className="authentication-basic authentication-wrapper container-p-y">
                    <div className="card margin-flex">
                        <div className="card-body">
                            <div className="content-header mb-3 fix-head">
                                <h3 className="mb-1">ضمانت حسن همکاری</h3>
                                <span></span>
                            </div>
                            <div className="row g-3">
                                <div className="col-sm-6 mt-5 fix-main-fimg mb-4">
                                    <div className='class-label-file' >
                                        <label className="form-label me-4" htmlFor="multiStepsUsername">اجاره نامچه</label>
                                        <span className='btn btn-primary wid-50' onClick={fileHandler1} >آپلود عکس +</span>
                                    </div>
                                    <input type="file" style={{ display: 'none' }} ref={fileRef1} />



                                    {!notImage1 && <div className='class-label-img' ><img src={sourceFile1} className='img-file-dis' /></div>}
                                    {notImage1 && null}

                                </div>
                                <hr className='mt-3 d-none dis-cuz ' />
                                <div className="col-sm-6 mt-5 fix-main-fimg mb-4">
                                    <div className='class-label-file' >
                                        <label className="form-label me-4" htmlFor="multiStepsEmail">جواز کسب</label>
                                        <span className='btn btn-primary wid-50' onClick={fileHandler2} >آپلود عکس +</span>
                                    </div>
                                    <input type="file" style={{ display: 'none' }} ref={fileRef2} />
                                    {!notImage2 && <div className='class-label-img' ><img src={sourceFile2} className='img-file-dis' /></div>}
                                    {notImage2 && null}
                                </div>
                                <hr className='mt-3 d-none dis-cuz ' />
                                <div className="col-sm-6 mt-5 fix-main-fimg mb-4">
                                    <div className='class-label-file' >
                                        <label className="form-label me-4" htmlFor="multiStepsEmail">کارت ملی</label>
                                        <span className='btn btn-primary wid-50' onClick={fileHandler3} >آپلود عکس +</span>
                                    </div>
                                    <input type="file" style={{ display: 'none' }} ref={fileRef3} />

                                    {!notImage3 && <div className='class-label-img' ><img src={sourceFile3} className='img-file-dis' /></div>}
                                    {notImage3 && null}
                                </div>
                                {/* 
                                <div className="col-sm-6 mt-5 fix-main-fimg mb-4">
                                    <div className='class-label-file' >
                                        <label className="form-label me-4" htmlFor="multiStepsEmail">کد پستی</label>
                                        <span className='btn btn-primary wid-50' onClick={fileHandler4} >آپلود عکس +</span>
                                    </div>
                                    <div className='class-label-img' >
                                        <input type="file" style={{ display: 'none' }} ref={fileRef4} />
                                        { !notImage1 && <img src={sourceFile4} className='img-file-dis' /> }
                                        { notImage1 && null }
                                    </div>
                                </div> */}
                                <hr className='mt-3 d-none dis-cuz ' />{/* 
                                <div className="col-sm-6 mt-5 fix-main-fimg mb-4">
                                    <div className='class-label-file' >
                                        <label className="form-label me-4" htmlFor="multiStepsEmail">نشانی اینترنتی</label>
                                        <span className='btn btn-primary wid-50' onClick={fileHandler5} >آپلود عکس +</span>
                                    </div>
                                    <div className='class-label-img' >
                                        <input type="file" style={{ display: 'none' }} ref={fileRef5} />
                                        { !notImage1 && <img src={sourceFile5} className='img-file-dis' /> }
                                        { notImage1 && null }
                                    </div>
                                </div> */}
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

export default Info_3