import React from 'react';
import './Footer.css';
import {
    FaClock, FaMoneyCheckAlt, FaTruckMoving, FaSwatchbook,
    FaUserClock, FaStreetView, FaHeadset, FaMale, FaPhoneAlt, FaEnvelope,
    FaMapMarkerAlt, FaGlobe, FaWhatsapp, FaInstagram, FaLinkedin
} from "react-icons/fa";




function Footer() {
    return (

        <>

            <div className="footer-welcome">
                <div className="footer-welrow">
                    <div className="footer-fcolumn">
                        <div className="items-fcolumn" >
                            <div className="icon-fcolumn">
                                <FaPhoneAlt className="airIcon" size={20} color="#061c2f" />
                            </div>
                            <div className="span-fcolumn">
                                <span>شماره های ارتباطی</span>
                            </div>
                        </div>
                        <div className="items-fcolumn1">
                            <span>02191301374</span>
                        </div>
                    </div>
                    <div className="footer-fcolumn">
                        <div className="items-fcolumn">
                            <div className="icon-fcolumn">
                                <FaEnvelope className="airIcon" size={20} color="#061c2f" />
                            </div>
                            <div className="span-fcolumn">
                                <span>ایمیل های ارتباطی</span>
                            </div>
                        </div>
                        <div className="items-fcolumn1">
                            <span>info@mashinno.com</span>
                        </div>
                    </div>
                    <div className="footer-fcolumn marg0bottom">
                        <div className="items-fcolumn">
                            <div className="icon-fcolumn">
                                <FaMapMarkerAlt className="airIcon" size={20} color="#061c2f" />
                            </div>
                            <div className="span-fcolumn">
                                <span>آدرس شرکت</span>
                            </div>
                        </div>
                        <div className="items-fcolumn1">
                            <span>آدرس : تهران، خیابان جمهوری، نرسیده به خیابان ملت، کوچه مراغه‌ای، بن بست یاس شرقی، پلاک 11</span>
                        </div>
                    </div>
                    <div className="footer-fcolumn">
                        <div className="items-fcolumn">
                            <div className="icon-fcolumn">
                                <FaGlobe className="airIcon" size={20} color="#061c2f" />
                            </div>
                            <div className="span-fcolumn">
                                <span>ما را در شبکه های اجتماعی دنبال کنید</span>
                            </div>
                        </div>
                        <div className="items-fcolumn11">
                            <div className="faaa-marg">
                                <FaWhatsapp className="airIcon" size={20} color="#061c2f" />
                            </div>
                            <div className="faaa-marg">
                                <FaInstagram className="airIcon" size={20} color="#061c2f" />
                            </div>
                            <div className="faaa-marg">
                                <FaLinkedin className="airIcon" size={20} color="#061c2f" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-welrow1">
                    <div className="footer-listco">
                        <label className="label-listco">
                            شماره های ارتباطی
                        </label>
                        <ul className="listco-ol">
                            <li className="listco-li">
                                <span>تماس با ما</span>
                            </li>
                            <li className="listco-li">
                                <span>درباره ماشین نو</span>
                            </li>
                            <li className="listco-li">
                                <span>قوانین و مقررات</span>
                            </li>
                            <li className="listco-li">
                                <span>شرایط بازگشت کالا</span>
                            </li>
                            <li className="listco-li">
                                <span>وبلاگ</span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-listco">
                        <label className="label-listco">
                            لینک های سریع
                        </label>
                        <ul className="listco-ol">
                            <li className="listco-li">
                                <span>فرصت های شغلی</span>
                            </li>
                            <li className="listco-li">
                                <span>فروشنده شو</span>
                            </li>
                            <li className="listco-li">
                                <span>خدمات خودرویی</span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-lastpic">
                        <div className="lastpic-img rensz">
                            <img src="https://mashinno.com/assets/app/e-namad.webp" alt="" className="namad" />
                        </div>
                        <div className="lastpic-img">
                            <img src="https://mashinno.com/assets/app/kasbokar.jpg" alt="" className="namad" />
                        </div>

                    </div>
                </div>
            </div>





        </>





    )
}

export default Footer