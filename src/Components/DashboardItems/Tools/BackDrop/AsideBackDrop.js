import React from 'react';
import "../Tools.css";

function AsideBackDrop(props) {

  return (
    

    <div className={`aside-backdrop ${props.showModal ? 'backdrop-opacity' : null }`} onClick={props.closeModal} ></div>


  )
}

export default AsideBackDrop