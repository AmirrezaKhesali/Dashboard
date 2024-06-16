import React from 'react';
import logo from '../../Images/1.png';
import "./Wellcome.css";
import Footer from './Footer/Footer';
import Question from './Question/Question';

function Wellcome() {
    return (

        <>
            <div className='bg-well-fix'></div>
            <div>
                <div className='head-well'>
                    <div className='box-head-well '>
                        <img src={logo} className='w-100 h-auto' />
                    </div>
                </div>



                <Question />
                <Footer />

                {/* <div className=''></div>
            <div className=''></div>
            <div className=''></div>
            <div className=''></div> */}
            </div>


        </>
















    )
}

export default Wellcome