import React, { useContext, useEffect } from 'react'
import Header from '../../Bars/Header'
import Nav from '../../Bars/Nav'
import { MyContext } from '../../../../ContexApi/MyContext';
import cR1 from "../../../../Images/contractImages/image-001.png";
import cR2 from "../../../../Images/contractImages/image-002.png";
import cR3 from "../../../../Images/contractImages/image-003.png";
import cR4 from "../../../../Images/contractImages/image-004.png";
import cR5 from "../../../../Images/contractImages/image-005.png";
import cR6 from "../../../../Images/contractImages/image-006.png";
import cR7 from "../../../../Images/contractImages/image-007.png";
import cR8 from "../../../../Images/contractImages/image-008.png";
import cR9 from "../../../../Images/contractImages/image-009.png";
import cR10 from "../../../../Images/contractImages/image-010.png";
import cR11 from "../../../../Images/contractImages/image-011.png";







function Contract() {

    const { activation, setActivation } = useContext(MyContext);

    useEffect(() => {

        const any = window.location.href.split('/');
        const live = any[any.length - 1];
        setActivation(live)
        console.log(activation)


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
                            <div className='card allpro-basket mb-4'>
                                    <h4 className=" mb-0" style={{ margin : 0 }}>
                                    متن قرارداد همکاری
                                    </h4>
                                </div>

                                <div className="row">



                                    <div className="col-12">
                                        <div className="card mb-4">
                                            <h5 className="card-header filled" >متن قرارداد</h5>
                                            <hr style={{ marginTop: '0.1rem', marginBottom: '0.3rem' }} />

                                            <div className="card-body">
                                                <div class="col-xl-8 mb-3 mb-xl-0" style={{ margin: "auto" }} >
                                                    <img src={cR1} alt='' style={{ width: "100%", height: "auto" }} />
                                                    <div style={{ height: 'transparent', height: "transparent" }}></div>
                                                    <div className='inner1-contract'>شرکت</div>
                                                    <div className='inner2-contract'>کد اقتصادی</div>
                                                    <div className='inner3-contract'>0020408544</div>
                                                    <div className='inner4-contract'>خصالی</div>
                                                    <div className='inner5-contract'>09100853420</div>
                                                    <div className='inner6-contract'>0020408544</div>
                                                </div>
                                                <hr style={{ marginTop: '0.1rem', marginBottom: '0.3rem' }} />

                                                <div class="col-xl-8 mb-3 mb-xl-0" style={{ margin: "auto" }} >
                                                    <img src={cR2} alt='' style={{ width: "100%", height: "auto" }} />
                                                </div>
                                                <hr style={{ marginTop: '0.1rem', marginBottom: '0.3rem' }} />

                                                <div class="col-xl-8 mb-3 mb-xl-0" style={{ margin: "auto" }} >
                                                    <img src={cR3} alt='' style={{ width: "100%", height: "auto" }} />
                                                </div>
                                                <hr style={{ marginTop: '0.1rem', marginBottom: '0.3rem' }} />

                                                <div class="col-xl-8 mb-3 mb-xl-0" style={{ margin: "auto" }} >
                                                    <img src={cR4} alt='' style={{ width: "100%", height: "auto" }} />
                                                </div>
                                                <hr style={{ marginTop: '0.1rem', marginBottom: '0.3rem' }} />

                                                <div class="col-xl-8 mb-3 mb-xl-0" style={{ margin: "auto" }} >
                                                    <img src={cR5} alt='' style={{ width: "100%", height: "auto" }} />
                                                </div>
                                                <hr style={{ marginTop: '0.1rem', marginBottom: '0.3rem' }} />

                                                <div class="col-xl-8 mb-3 mb-xl-0" style={{ margin: "auto" }} >
                                                    <img src={cR6} alt='' style={{ width: "100%", height: "auto" }} />
                                                </div>
                                                <hr style={{ marginTop: '0.1rem', marginBottom: '0.3rem' }} />

                                                <div class="col-xl-8 mb-3 mb-xl-0" style={{ margin: "auto" }} >
                                                    <img src={cR7} alt='' style={{ width: "100%", height: "auto" }} />
                                                </div>
                                                <hr style={{ marginTop: '0.1rem', marginBottom: '0.3rem' }} />

                                                <div class="col-xl-8 mb-3 mb-xl-0" style={{ margin: "auto" }} >
                                                    <img src={cR8} alt='' style={{ width: "100%", height: "auto" }} />
                                                </div>
                                                <hr style={{ marginTop: '0.1rem', marginBottom: '0.3rem' }} />

                                                <div class="col-xl-8 mb-3 mb-xl-0" style={{ margin: "auto" }} >
                                                    <img src={cR9} alt='' style={{ width: "100%", height: "auto" }} />
                                                </div>
                                                <hr style={{ marginTop: '0.1rem', marginBottom: '0.3rem' }} />

                                                <div class="col-xl-8 mb-3 mb-xl-0" style={{ margin: "auto" }} >
                                                    <img src={cR10} alt='' style={{ width: "100%", height: "auto" }} />
                                                </div>
                                                <hr style={{ marginTop: '0.1rem', marginBottom: '0.3rem' }} />

                                                <div class="col-xl-8 mb-3 mb-xl-0" style={{ margin: "auto" }} >
                                                    <img src={cR11} alt='' style={{ width: "100%", height: "auto" }} />
                                                </div>
                                                <hr style={{ marginTop: '0.1rem', marginBottom: '0.3rem' }} />

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

export default Contract