import React, { useContext, useEffect } from 'react';
import Header from '../../Bars/Header';
import Nav from '../../Bars/Nav';
import { MyContext } from '../../../../ContexApi/MyContext';

function Ticket() {

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
                                <div className='card allpro-basket mb-1'>
                                    <h4 className=" mb-0" style={{ margin: 0 }}>
                                        درخواست پشتیبانی
                                    </h4>
                                </div>

                                <div className="row">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Ticket