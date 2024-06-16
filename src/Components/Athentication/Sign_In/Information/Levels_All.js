import React from 'react'
import Stepper from './Tools/Stepper';
import Info_1 from './Level_1/Info_1';
import Info_2 from './Level_2/Info_2';
import SideBar from './Tools/SideBar';
import Header from './Tools/Header';

function Levels_All() {

    return (

        <>

            {/* <SideBar /> */}
            <Header />
            <div className="container-xxl">

                <div className="authentication-basic authentication-wrapper container-p-y">


                        {/* Register */}
                        <div className="card margin-flex">
                            <div className="card-body">


                                <Info_2 />



                            </div>
                        </div>
                        {/* /Register */}
                    </div>
                </div>




        </>
    )
}

export default Levels_All;