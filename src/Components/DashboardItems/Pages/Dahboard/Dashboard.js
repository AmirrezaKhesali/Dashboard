import React, { useContext, useEffect } from 'react'
import Header from '../../Bars/Header'
import Nav from '../../Bars/Nav'
import { MyContext } from '../../../../ContexApi/MyContext'
import { Link } from 'react-router-dom';
import ApexCharts from 'apexcharts';
import "../Pages.css";


function Dashboard() {


    const { activation, setActivation } = useContext(MyContext);

    useEffect(() => {

        const any = window.location.href.split('/');
        const live = any[any.length - 1];
        setActivation(live)
        console.log(activation)


        var chart = new ApexCharts(document.querySelector("#chart"), options);
        var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);

        chart.render();
        chart1.render();

    }, [])


    var options = {

        series: [{
            name: 'فروش ماهانه',
            data: [0, 11, 32, 45, 32, 34, 52, 41, 0]
          
        }],

        chart: {
            // height: 350,
            width: '100%',
            type: 'area',
            fontFamily: 'yekan',
            toolbar: {
                show: false,
            },
        },
        grid: {
            borderColor: "#555",
            clipMarkers: false,
            yaxis: {
                lines: {
                    show: false
                }
            }
        },

        legend: {
            show: true,
            showForSingleSeries: true,
            position: 'top',
            texts: {
                show: false,
            }
        },
        fill: {
            gradient: {
                enabled: true,
                opacityFrom: 0.55,
                opacityTo: 0
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {

            categories: [1, 2, 3, 4, 5],
            labels: {
                show: false,
            }
        },
    }


    var options1 = {

        series: [{
            //     name: 'فروش هفتگی',
            //     data: [31, 40, 28, 51, 42, 109, 100]
            // }, 
            // {
            name: 'آمار استرداد',
            data: [0, 32, 45, 11, 20, 0]
        }],

        chart: {
            // height: 350,
            width: '100%',
            type: 'area',
            fontFamily: 'yekan',
            toolbar: {
                show: false,
            },
        },
        grid: {
            // borderColor: "#555",
            clipMarkers: false,
            yaxis: {
                lines: {
                    show: false
                }
            }
        },

        legend: {
            show: true,
            showForSingleSeries: true,
            position: 'top',
            texts: {
                show: false,
            }
        },
        fill: {
            gradient: {
                enabled: true,
                opacityFrom: 0.55,
                opacityTo: 0
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ["", "شنبه1", "شنبه3", "شنبه5", ""],
            labels: {
                show: false,
            }

        },
    }



    return (

        <>

            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Header />
                    <div className="layout-page">
                        <Nav />
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row">
                                    <div className="col-lg-12 mb-4 order-0">
                                        <div className="card">
                                            <div className="d-flex align-items-end row">
                                                <div className="col-sm-7">
                                                    <div className="card-body">
                                                        <h5 className="card-title text-primary mb-5">
                                                            تبریک امیررضا خصالی! 🎉
                                                        </h5>
                                                        <p className="mb-5">
                                                            در ماه گذشته به میزان <span>60%</span> افزایش فروش داشته اید.
                                                        </p>
                                                        <span className='me-3'>برای انجام سرویس های بیشتر کلیک کنید.</span>
                                                        <Link href='' className="btn btn-sm btn-label-primary" style={{ marginTop: '0.5rem' }}>وظایف جدید</Link>
                                                    </div>
                                                </div>
                                                <div className="col-sm-5 text-center text-sm-left">
                                                    <div className="card-body pb-0 px-0 px-md-4">
                                                        <img src="../../assets/img/illustrations/man-with-laptop-light.png" height={140} alt="View Badge User" data-app-dark-img="illustrations/man-with-laptop-dark.png" data-app-light-img="illustrations/man-with-laptop-light.png" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h4 className="fw-bold py-3 mb-4">
                                    نمودار عملکرد
                                </h4>

                                <div className="row">
                                    <div className='col-lg-12 mb-4 order-0'>
                                        <div className="card">

                                            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "baseline", flexWrap: "wrap" }}>
                                                <div>
                                                    <div id="chart">
                                                    </div>
                                                </div>
                                                <div>
                                                    <div id="chart1">
                                                    </div>
                                                </div>
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

export default Dashboard