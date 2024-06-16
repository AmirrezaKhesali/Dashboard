import React, { useContext, useEffect, useState } from 'react';
import { BsEnvelopePaper, BsTools, BsVectorPen, BsWrenchAdjustable } from "react-icons/bs";
import { MyContext } from '../../../ContexApi/MyContext';
import AsideBackDrop from '../Tools/BackDrop/AsideBackDrop';
import "../Pages/Pages.css";
import { BsBagPlus, BsTelephone, BsMinecart, BsDisplay, BsBagCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';



function Header() {

    const { activation, setActivation } = useContext(MyContext);

    useEffect(() => {

        setShowAside(false)

    }, [])

    const { showAside, setShowAside } = useContext(MyContext)

    const closeModal = () => {
        setShowAside(false)
    }

    // ?????????????  OPEN ITEMS IN SIDE BAR /////////////////
    const [order, setOrder] = useState(false);
    const [task, setTask] = useState(false);
    const [service, setService] = useState(false);
    const [financial, setFinancial] = useState(false);

    const ordersOpen = () => {
        setOrder(!order)
        setTask(false)
        setService(false)
        setFinancial(false)

    }
    const tasksOpen = () => {
        setTask(!task)
        setOrder(false)
        setService(false)
        setFinancial(false)

    }
    const serviceOpen = () => {
        setService(!service)
        setTask(false)
        setOrder(false)
        setFinancial(false)

    }
    const financialOpen = () => {
        setFinancial(!financial)
        setTask(false)
        setService(false)
        setOrder(false)
    }
    // ?????????????  OPEN ITEMS IN SIDE BAR /////////////////


    return (
        <>


            <AsideBackDrop showModal={showAside} closeModal={closeModal} />
            <aside id="layout-menu" className={`layout-menu menu-vertical menu bg-menu-theme ${showAside ? 'aside-dis' : null}`} style={{overflow : 'auto'}}>
                <div className="app-brand demo">
                    <BsTools size={25} color='white' className='me-3' />
                    <Link to="index.html" className="app-brand-link">
                        <span className="app-brand-text demo menu-text fw-bolder me-2">ماشین نو</span>
                    </Link>
                </div>
                <div className="menu-inner-shadow" />
                <ul className="menu-inner py-1">
                    {/* Dashboards */}
                    <li className="menu-header small text-uppercase">
                        <span className="menu-header-text">پنل تعمیر کاران</span>
                    </li>
                    <li className={`menu-item ${activation === 'dashboard' ? 'active' : null}`}>
                        <Link to="/dashboard" className="menu-link">
                            <BsDisplay size={20} color='white' className='me-2' />
                            <div data-i18n="پنل کاربری">پنل کاربری</div>
                        </Link>
                    </li>
                    <li className={`menu-item ${activation === 'basket' ? 'active' : null}`}>
                        <Link to="/dashboard/basket" className="menu-link">
                            <BsBagCheck size={20} color='white' className='me-2' />
                            <div data-i18n="سبد خرید">سبد خرید</div>
                        </Link>
                    </li>
                    <li className={`menu-item ${order ? 'open' : null} ${activation === 'orders' || activation === 'returned' ? 'open' : null}`}>
                        <Link to="javascript:void(0);" className="menu-link menu-toggle" onClick={ordersOpen}>
                            <BsMinecart size={20} color='white' className='me-2' />
                            <div data-i18n="مدیریت سفارشات">مدیریت سفارشات</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${activation === 'orders' ? 'active' : null}`}>
                                <Link to="/dashboard/orders" className="menu-link">
                                    <div data-i18n="همه سفارشات">همه سفارشات</div>
                                </Link>
                            </li>
                            {/* <li className={`menu-item ${activation === 'returned' ? 'active' : null}`}>
                                <Link to="/dashboard/returned" className="menu-link">
                                    <div data-i18n="مرجویی">مرجوعی</div>
                                </Link>
                            </li> */}
                        </ul>
                    </li>
                    <li className={`menu-item ${activation === 'allpro' ? 'active' : null} `} >
                         <Link to="/dashboard/allpro" className="menu-link" onClick={tasksOpen}>
                            <BsBagPlus size={20} color='white' className='me-2' />
                            <div data-i18n="محصولات">محصولات</div>
                        </Link>
                    </li>
                    <li className={`menu-item ${financial ? 'open' : null} ${activation === 'pays' || activation === 'debt' || activation === 'financial' ? 'open' : null}`}>
                        <Link to="javascript:void(0);" className="menu-link menu-toggle" onClick={financialOpen}>
                            <BsMinecart size={20} color='white' className='me-2' />
                            <div data-i18n="گزارشات مالی">گزارشات مالی</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${activation === 'financial' ? 'active' : null}`}>
                                <Link to="/dashboard/financial" className="menu-link">
                                    <div data-i18n="گردش مالی">گردش مالی</div>
                                </Link>
                            </li>
                            {/* <li className={`menu-item ${activation === 'pays' ? 'active' : null}`}>
                                <Link to="/dashboard/pays" className="menu-link">
                                    <div data-i18n="پرداخت ها">پرداخت ها</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activation === 'debt' ? 'active' : null}`}>
                                <Link to="/dashboard/debt" className="menu-link">
                                    <div data-i18n="بدهی ها">بدهی ها</div>
                                </Link>
                            </li> */}
                            <li className={`menu-item ${activation === 'club' ? 'active' : null}`}>
                                <Link to="/dashboard/club" className="menu-link">
                                    <div data-i18n="کلاب">کلاب</div>
                                </Link>
                            </li> 
                        </ul>
                    </li>
                    {/* <li className={`menu-item ${service ? 'open' : null} ${activation === 'allserv' || activation === 'myserv' ? 'open' : null}`} >
                        <Link to="javascript:void(0);" className="menu-link menu-toggle" onClick={serviceOpen}>

                            <BsWrenchAdjustable size={20} color='white' className='me-2' />
                           
                            <div data-i18n="مدیریت سرویس ها">مدیریت سرویس ها</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${activation === 'myserv' ? 'active' : null}`}>
                                <Link to="/dashboard/myserv" className="menu-link">
                                    <div data-i18n="وظایف من"> وظایف من</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activation === 'allserv' ? 'active' : null}`}>
                                <Link to="/dashboard/allserv" className="menu-link">
                                    <div data-i18n="همه وظایف موجود">همه وظایف موجود</div>
                                </Link>
                            </li>
                        </ul>
                    </li> */}
                    <li className={`menu-item ${activation === 'ticket' ? 'active' : null}`}>
                        <Link to="/dashboard/ticket" className="menu-link">
                            <BsTelephone size={20} color='white' className='me-2' />
                            <div data-i18n="درخواست پشتیبانی">درخواست پشتیبانی</div>
                        </Link>
                    </li>
                    <li className={`menu-item ${activation === 'contract' ? 'active' : null}`}>
                        <Link to="/dashboard/contract" className="menu-link">
                            <BsVectorPen size={20} color='white' className='me-2' />
                            <div data-i18n="قرارداد">قرارداد</div>
                        </Link>
                    </li>
                    <li className={`menu-item ${activation === 'notification' ? 'active' : null}`}>
                        <Link to="/dashboard/notification" className="menu-link">
                            <BsEnvelopePaper size={20} color='white' className='me-2' />
                            <div data-i18n="اعلانات">اعلانات</div>
                        </Link>
                    </li>

                </ul>
            </aside>














        </>

    )
}

export default Header