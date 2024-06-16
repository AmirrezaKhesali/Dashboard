import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../../../ContexApi/MyContext'
import OTP_L1 from './Levels/OTP_L1';
import OTP_L2 from './Levels/OTP_L2';
import {useNavigate} from "react-router-dom";

function OTP_Register() {

  const { otpPage, setOtpPage } = useContext(MyContext);



/////////////////////////////  USE EFFECT  //////////////////////////

  useEffect(() => {


  }, [])


/////////////////////////////  USE EFFECT  //////////////////////////

  const navigate = useNavigate()

///////////////////////////// PAGE EVENT HANDLERS  //////////////////////////

  const submitL1 = () => {
    setOtpPage('somthing else')
  }
  const submitL2 = () => {
    navigate("/info/1")
  }
  const clickedBackL1 = () => {

  }
  const clickedBackL2 = () => {
    setOtpPage('somthing else')
  }


  const [ phoneNumber , setPhoneNumber ] = useState('');
  const [ submitCode , setSubmitCode ] = useState('');

///////////////////////////// PAGE EVENT HANDLERS  //////////////////////////


  if (otpPage === 'first') {
    return <OTP_L1
      submit={submitL1}
      clickedBack={clickedBackL1}
      input={(e)=>setPhoneNumber(e.target.value)} />
  }
  else {
    return <OTP_L2
      submit={submitL2}
      clickedBack={clickedBackL2}
      input={(e)=>setSubmitCode(e.target.value)} />
  }





}

export default OTP_Register