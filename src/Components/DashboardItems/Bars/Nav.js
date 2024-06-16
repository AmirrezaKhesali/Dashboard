import React, { useContext } from 'react'
import { MyContext } from '../../../ContexApi/MyContext'
import { Link } from 'react-router-dom';

function Nav() {

    const { showAside, setShowAside } = useContext(MyContext);


    const openAside = () => {
        setShowAside(true)
        console.log(showAside)
    }



    return (
        <>
            <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <a className="nav-item nav-link px-0 me-xl-4" onClick={openAside}>
                        <i className="bx bx-menu bx-sm" />
                    </a>
                </div>
                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    {/* Search */}

                    {/* /Search */}
                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
                            <Link className="nav-link dropdown-toggle hide-arrow" to="/dashboard/basket" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8" /><path fill="currentColor" d="M12 11c-2 0-2-.63-2-1s.7-1 2-1s1.39.64 1.4 1h2A3 3 0 0 0 13 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3c2 0 2 .68 2 1s-.62 1-2 1c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92c0-1.12-.52-3-4-3" /></svg>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end py-3 px-4" style={{ marginTop: "0.5rem" }}>
                                <li>
                                    <span className="dropdown-item text-center color-co-black" to="/dashboard/profile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8" /><path fill="currentColor" d="M12 11c-2 0-2-.63-2-1s.7-1 2-1s1.39.64 1.4 1h2A3 3 0 0 0 13 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3c2 0 2 .68 2 1s-.62 1-2 1c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92c0-1.12-.52-3-4-3" /></svg>
                                        <span className="align-middle ms-2 ">میزان بدهی</span>
                                    </span>
                                </li>
                                <li>
                                    <div className="dropdown-divider" />
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <span className="dropdown-item d-flex justify-content-between color-co-black" to="/dashboard/orders">
                                        <span className="align-middle">مبلغ</span>
                                        <span className="align-middle">12,30000<span className='ps-2'>تومان</span></span>
                                    </span>
                                </li>
                                <li>
                                    <div className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item color-co-black" to="/dashboard/increase-wallet">
                                        <i className="bx bx-plus me-2" />
                                        <span className="align-middle">تسویه بدهی</span>
                                    </Link>
                                </li>

                            </ul>
                        </li>
                        <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
                            <Link className="nav-link dropdown-toggle hide-arrow" to="/dashboard/basket" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <i className="bx bx-wallet bx-sm" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end py-3 px-4" style={{ marginTop: "0.5rem" }}>
                                <li>
                                    <span className="dropdown-item text-center color-co-black" to="/dashboard/profile">
                                        <i className="bx bx-wallet me-2" />
                                        <span className="align-middle ">کیف پول</span>
                                    </span>
                                </li>
                                <li>
                                    <div className="dropdown-divider" />
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <span className="dropdown-item d-flex justify-content-between color-co-black" to="/dashboard/orders">
                                        <span className="align-middle">موجودی</span>
                                        <span className="align-middle">12,30000<span className='ps-2'>تومان</span></span>
                                    </span>
                                </li>
                                <li>
                                    <div className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item color-co-black" to="/dashboard/increase-wallet">
                                        <i className="bx bx-plus me-2" />
                                        <span className="align-middle">شارژ کیف پول</span>
                                    </Link>
                                </li>

                            </ul>
                        </li>
                        <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
                            <Link className="nav-link dropdown-toggle hide-arrow" to="/dashboard/basket" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <i className="bx bx-cart bx-sm" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end py-3 px-4" style={{ marginTop: "0.5rem" }}>
                                <li>
                                    <span className="dropdown-item text-start color-co-black" to="/dashboard/profile">
                                        <i className="bx bx-basket me-2" />
                                        <span className="align-middle ">سبد خرید</span>
                                    </span>
                                </li>
                                <li>
                                    <div className="dropdown-divider" />
                                </li>
                                
                                <li className='d-flex justify-content-between'>
                                    <span className="dropdown-item d-flex justify-content-between color-co-black" to="/dashboard/orders">
                                        <span className="align-middle">مبلغ کل</span>
                                        <span className="align-middle">12,30000<span className='ps-2'>تومان</span></span>
                                    </span>
                                </li>
                                <li>
                                    <div className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item color-co-black" to="/dashboard/increase-wallet">
                                        <i className="bx bx-plus me-2" />
                                        <span className="align-middle">مشاهده سبد خرید</span>
                                    </Link>
                                </li>

                            </ul>
                        </li>

                        <li className="nav-item navbar-dropdown dropdown-user dropdown">
                            <a className="nav-link dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <div className="avatar avatar-online">
                                    <img src="../../assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                                </div>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" style={{ marginTop: "0.5rem" }}>
                                <li>
                                    <a className="dropdown-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar avatar-online">
                                                    <img src="../../assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <span className="fw-semibold d-block color-co-black">امیررضا خصالی</span>
                                                <small className="text-muted">ادمین</small>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item color-co-black" to="/dashboard/profile">
                                        <i className="bx bx-user me-2" />
                                        <span className="align-middle">پروفایل شخصی</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item color-co-black" to="/dashboard/orders">
                                        <i className="bx bx-cart me-2" />
                                        <span className="align-middle">سفارشات</span>
                                    </Link>
                                </li>
                                <li>
                                    <div className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item color-co-black" to="/dashboard/ticket">
                                        <i className="bx bx-support me-2" />
                                        <span className="align-middle">درخواست پشتیبانی</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item color-co-black" to="/dashboard/finalcial">
                                        <i className="bx bx-card me-2" />
                                        <span className="align-middle ">کلاب تعمیرکاران</span>
                                    </Link>
                                </li>


                            </ul>
                        </li>
                        {/*/ User */}
                    </ul>
                </div>
                {/* Search Small Screens */}
                <div className="navbar-search-wrapper search-input-wrapper d-none">
                    <input type="text" className="form-control search-input container-xxl border-0" placeholder="Search..." aria-label="Search..." />
                    <i className="bx bx-x bx-sm search-toggler cursor-pointer" />
                </div>
            </nav>











        </>


    )
}

export default Nav