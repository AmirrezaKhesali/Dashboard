import { BsBasket, BsCarFront, BsCarFrontFill, BsPen, BsPenFill, BsPin, BsPlus } from "react-icons/bs"
import Stepper from "./Stepper/Stepper"
import Nav from "../../Bars/Nav"
import Header from "../../Bars/Header"
import Main_BackDrop from "../../Tools/BackDrop/Main_BackDrop"




function BuyBasket2_sub() {
    return (


        <>
            <Main_BackDrop />
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Header />
                    <div className="layout-page">
                        <Nav />
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y pt-1">
                                <Stepper />
                                <div className="row">
                                    <div className='col-lg-8 mb-4 order-0' >
                                        <div className='card' >
                                            <li className="list-group-item px-3 py-2">
                                                <div className="d-flex gap-3">
                                                    <div className="flex-shrink-0 d-flex align-items-center">
                                                        <BsPin size={30} color='black' />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="row">
                                                            <div className="col-md-8 mb-2">
                                                                <p className="me-1 mb-1">
                                                                    <span className="text-body color-product fs-px-14">آدرس تحویل سفارش</span>
                                                                </p>
                                                                <p className="me-1 mb-1">
                                                                    <span className="" >
                                                                        <span className="text-body color-product fw-bold fs-px-14 me-1">تهران ،</span>
                                                                        <span className="text-body color-product fw-bold fs-px-14 me-1">تهران ،</span>
                                                                        <span className="text-body color-product fs-px-14 me-1">ته رانپار ستهرانپار ستهرانپارس تهرانپارس تهرانپارس ،</span>
                                                                    </span>
                                                                </p>
                                                                <p className="me-1 mb-1">
                                                                    <span className="" >
                                                                        <span className="text-body color-product fs-px-14 me-1">امیررضا خصالی</span>
                                                                        <span className="text-body color-product fs-px-14 me-1">-</span>
                                                                        <span className="text-body color-product fs-px-14 me-1">09100853420</span>
                                                                    </span>
                                                                </p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-100 d-flex justify-content-start mt-2 border-top' >
                                                    <div className='d-flex justify-content-center align-item-center '>
                                                        <div className="col-md-12 d-flex flex-row">
                                                            <div className="d-flex justify-content-end me-1 ">
                                                                <div className="icon-qalam">
                                                                    <BsPen size={20} color="lightblue" />
                                                                </div>

                                                                <div className="s-right-qalam">ویرایش آدرس</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </div>
                                        {/* <div className="row col-lg-8 mb-4 order-0">
                                            <span className="text-center mt-3"></span><span>انتخاب شیوه ارسال</span>
                                        </div> */}
                                        <h4 className="text-center h4-buybasket2">
                                            <span className="text-center mt-3 sub-shive"></span><span className="shive-buybasket2">انتخاب شیوه ارسال</span>
                                        </h4>
                                        <div className='card'>
                                            <li className="list-group-item p-4">
                                                <div className="d-flex gap-3">
                                                    <div className="flex-grow-1">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="text-muted mb-2 d-flex flex-wrap cuz-bord-head">
                                                                    <BsBasket size={20} color='black' className='me-3 ' />
                                                                    <span className="me-1 color-co-black fs-5">سبد خرید</span>
                                                                </div>
                                                            </div>


                                                            <div className="flex-shrink-0 d-flex align-items-center">
                                                                <img src='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w300/2023/10/free-images.jpg' className="w-px-100" />
                                                            </div>



                                                            <ul className="ul-buybasket2">
                                                                <li className="list-group-item border border-1 rounded-3 font-14 p-2 px-3 color-co-black mb-2 pay_active">
                                                                    <span className="font-16">
                                                                        پرداخت از طریق بانک ملت
                                                                    </span>

                                                                </li>
                                                                <li className="list-group-item border border-1 rounded-3 font-14 p-2 px-3 color-co-black mb-2">
                                                                    <span className="font-16">
                                                                        پرداخت با کیف پول
                                                                    </span>

                                                                </li>
                                                                <li className="list-group-item border border-1 rounded-3 font-14 p-2 px-3 color-co-black mb-2">
                                                                    <span className="font-16">
                                                                        پرداخت به صورت مستقیم
                                                                    </span>

                                                                </li>
                                                            </ul>




                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </div>
                                    </div>

                                    <div className='col-lg-4 mb-4 order-0'>
                                        <div className='card'>
                                            <li className="list-group-item p-4">
                                                <div className="d-flex gap-3">
                                                    <div className="flex-grow-1">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="text-muted mb-2 d-flex flex-wrap cuz-bord-head">
                                                                    <BsBasket size={20} color='black' className='me-3 ' />
                                                                    <span className="me-1 color-co-black fs-5">سبد خرید</span>
                                                                </div>
                                                            </div>

                                                            <li className="d-flex mb-3 pb-1 adad-dis">

                                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                                    <div className="me-2">
                                                                        <small className="fs-6">کولر برلیانس E620</small>
                                                                    </div>
                                                                    <div className="user-progress">
                                                                        <small className=" fs-6">82,100,00</small>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="d-flex mb-3 pb-1 adad-dis">

                                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                                    <div className="me-2">
                                                                        <small className="fs-6">کولر برلیانس E620</small>
                                                                    </div>
                                                                    <div className="user-progress">
                                                                        <small className=" fs-6">82,100,00</small>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="d-flex mb-2 pb-1 adad-dis">

                                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                                    <div className="me-2">
                                                                        <small className="fs-6">جمع کل : </small>
                                                                    </div>
                                                                    <div className="user-progress">
                                                                        <small className=" fs-6">85,300,200</small>
                                                                    </div>
                                                                </div>
                                                            </li>


                                                            <div className="col-md-12 d-flex justify-content-center align-item-center mb-2">
                                                                <div className="text-md-end w-75" style={{ marginTop: 8 }}>
                                                                    <button type="button" className="btn btn-sm mt-md-3 w-100" style={{ marginTop: "0.5rem", fontSize: 14, marginLeft: "0.5rem", minWidth: 128, backgroundColor: "#EF4056", color: "white", borderRadius: 8 }}>
                                                                        نمایش سبد خرید
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>



    )
}

export default BuyBasket2_sub