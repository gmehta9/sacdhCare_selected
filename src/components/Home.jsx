import React, { useContext, useEffect } from "react";
import Banner from "./includes/Banner";

import OurServices from "./jsonData/OurServices.json";
import doctor from "./jsonData/doctorList.json";

import TestimonialsSlider from "./includes/TestimonialsSlider";

import AppContext from "./context/AppContext";
import Swal from 'sweetalert2';
import Gallery from "./InnerPages/Gallery";
import AboutUs from "./InnerPages/AboutUs";
import { useState } from "react";
import Appointment from "./includes/Appointment";
import Beneficiaries from "./includes/Beneficiaries";
import { Link } from "react-router-dom";

function Home() {
    const { setPageTitle, popShow, setPopShow } = useContext(AppContext)

    const [tabContent, setTabContent] = useState();

    const popHandler = () => {
        Swal.fire({
            // title: 'Custom width, padding, color, background.',
            padding: '0',
            margin: '0',
            customClass: {
                image: 'image-popup',
                actions: 'popup-btn',
                confirmButton: 'p-2 py-0'
            },
            confirmButtonText: 'X',
            imageUrl: '/sadhcare/background/popup_free_opd-1.jpg',

        })
    }

    const detailShow = (detail) => {
        if (detail?.descp) {
            Swal.fire({
                title: detail.name,
                padding: '0',
                margin: '0',
                customClass: {
                    actions: 'popup-btn',
                    confirmButton: 'p-2 py-0',
                    htmlContainer: 'text-justify'
                },
                confirmButtonText: 'X',
                html: detail?.descp,

            })
        }
    }

    useEffect(() => {
        setPageTitle()
        if (popShow) {
            popHandler()
        }
        setPopShow(false)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setTabContent(OurServices[0])
    }, [])

    console.log('tabContent', tabContent)
    return (
        <>
            <Banner />
            {/* EMEGENCY  info section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-block row no-gutters">
                        <div className="col-lg-4 col-md-6 top-doctor item">
                            <i className="fa fa-stethoscope"></i>
                            <h2>24 Hour Service</h2>
                            {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dignissimos officia dicta suscipit
                                vel eum</p> */}
                            {/* <a href="service.html" className="btn btn-main">Read more</a> */}
                        </div>
                        <div className="col-lg-4 col-md-6 emmergency item">
                            <i className="fa fa-certificate"></i>
                            <h2>Our certifications</h2>
                            {/* <   a href="tel:1-800-700-6200">1-800-700-6200</a> */}
                            <p>SADH care hospital is the only NABH certified hospital in Pataudi.
                                We are now Ayushman Bharat Empanelled.</p>
                        </div>
                        <div className="col-lg-4 col-md-12 working-time item">
                            <i className="fa fa-hourglass-o"></i>
                            <h2>OPD Timings</h2>
                            <ul className="w-hours">
                                <li>Mon - Fri - <span>8:00 AM - 05:00 PM</span></li>
                                {/* <li>Mon - Fri - <span>8:00 - 17:00</span></li>
                                <li>Mon - Fri - <span>8:00 - 17:00</span></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* EMEGENCY  info section */}
            <Appointment />
            {/* About Section */}
            <AboutUs />

            <Beneficiaries />
            <section className="service-tab-section py-5 feature-section section">
                <div className="outer-box clearfix">
                    <div className="container">
                        <div className="section-title text-center">
                            <h3>Our <span>Services</span> </h3>
                            <br />
                        </div>
                        <div className="row">
                            <div className="col-md-12">

                                <div className="tabs mb-3">
                                    <ul className="nav nav-tabs justify-content-center" id="aboutTab" role="tablist">
                                        {OurServices.map((elm, index) =>
                                            <li
                                                key={`service${index}`}
                                                onClick={() => setTabContent(elm)}
                                                className="nav-item" role="presentation">
                                                <a
                                                    className={` ${index === 0 ? 'active' : ''} nav-link `}
                                                    id={`service${index}`}
                                                    data-toggle="tab"
                                                    href={elm.showID}
                                                    role="tab"
                                                    aria-controls={elm.showID}
                                                    aria-selected="true">{elm.title}</a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className="  tab-content">
                                    <div
                                        className={` image-content fade show`}
                                    >
                                        <div className="row">

                                            {tabContent && tabContent.subitem.map((ee, ind) =>
                                                <div key={ind} className="col-sm-3">
                                                    <div className="item text-center">
                                                        <div className="icon-box">
                                                            <figure>
                                                                <img width={'50px'} height={'50px'} loading="lazy" src={`${process.env.PUBLIC_URL}/${ee.icon}`} alt="features" />
                                                            </figure>
                                                        </div>
                                                        <h6 className="mb-2">{ee.name}</h6>

                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Best Features <span>of Our Hospital */}

            {/* Service Section */}
            {/* <section className="service-section section">
                <div className="container">
                    <div className="section-title text-center">
                        <h3>HOSPITAL <span>INFRASTRUCTURE</span> </h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. qui suscipit atque <br />
                            fugiat officia corporis rerum eaque neque totam animi, sapiente culpa. Architecto!</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="items-container">
                                <DepartmentsProvided />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* End Service Section */}

            <Gallery />

            {/* team section */}
            <section className="team-section section ">
                <div className="container">
                    <div className="section-title text-center">
                        <h3>Our Expert
                            <span>Doctors</span>
                        </h3>
                        <p className="mb-0 pb-0 text-right"><Link to="/our-doctors"> View All</Link> </p>
                    </div>

                    <div className="row justify-content-center">
                        {doctor.slice(0, 4).map((elm, indec) =>
                            <div key={indec} className="col-lg-3 col-md-6">
                                <div
                                    onClick={() => detailShow(elm)}
                                    className={`${elm.descp ? 'available-descp' : ''} team-member`}
                                >
                                    <img
                                        loading="lazy"
                                        src={`${process.env.PUBLIC_URL}/${elm.image}`}
                                        alt="doctor"
                                        className="img-fluid" />
                                    <div className="contents text-center">
                                        <h6>{elm.name}</h6>
                                        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur.</p> */}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {/* End team section*/}

            {/* testimonial-section  */}
            <section className="testimonial-section" style={{ background: "url(/sadhcare/background/1.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h3>What Our
                                    <span>Patients Says</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonial-carousel">
                                <TestimonialsSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End testimonial-section */}

            <section className="feature-section py-5 section bg-gray">
                <div className="container service-box">
                    <div className="section-title ">
                        <h3>Our <span>partners</span>
                        </h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 text-center">
                            <div className="">
                                <strong>Class of 1979</strong> <br />
                                St. Columba's School, New Delhi
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <div className="">
                                <strong>SENTISS FOUNDATION</strong> <br />
                                The CSR division of Sentiss Pharma
                            </div>
                            <img style={{ width: "200px" }} src="http://staging.beforegoinglive.com/sentiss1/wp-content/uploads/2020/10/Logo-in-white-bkg-1.png" alt="" srcSet="" />
                        </div>
                    </div>
                </div>
            </section>
            {/*  End Contact Section  */}

        </>
    );
}
export default Home;