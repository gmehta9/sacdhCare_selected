import React, { useContext, useEffect } from "react";
import Banner from "./includes/Banner";

import specialities from "./jsonData/specialities.json"
import OurServices from "./jsonData/OurServices.json"

import TestimonialsSlider from "./includes/TestimonialsSlider";
import DepartmentsProvided from "./includes/DepartmentsProvided";

import doctor1 from "../assets/images/team/mt-dr-Col-tarun-kaul.jpg";
import doctor2 from "../assets/images/team/dr.majroli_tewari.jpg";
import doctor3 from "../assets/images/team/dr.colshashi_shukla.jpg";



import AppContext from "./context/AppContext";
import Swal from 'sweetalert2';
import Gallery from "./InnerPages/Gallery";
import AboutUs from "./InnerPages/AboutUs";

function Home() {
    const { setPageTitle, popShow, setPopShow } = useContext(AppContext)

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
    useEffect(() => {
        setPageTitle()
        if (popShow) {
            popHandler()
        }
        setPopShow(false)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dignissimos officia dicta suscipit
                                vel eum</p>
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
                                <li>Mon - Fri - <span>8:00 - 17:00</span></li>
                                <li>Mon - Fri - <span>8:00 - 17:00</span></li>
                                <li>Mon - Fri - <span>8:00 - 17:00</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* EMEGENCY  info section */}

            {/* About Section */}
            <AboutUs />


            {/* Best Features <span>of Our Hospital */}
            <section className="feature-section py-5 section bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="image-content">


                                <div className="row">
                                    <div className="col-md-6 service-box">
                                        <div class="section-title">
                                            <h3>Our Service</h3>
                                        </div>
                                        <div className="row">
                                            {OurServices.map((elm, index) =>
                                                <div className="col-md-6" key={index}>
                                                    <h6>{elm.title}</h6>
                                                    <ul class="content-list">
                                                        {elm.subitem.map((ee) =>
                                                            <li key={index + 3}>
                                                                <i class="far fa-check-circle"></i>{ee}
                                                            </li>
                                                        )}

                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="service-box">
                                            <div class="section-title">
                                                <h3>Specialities</h3>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {specialities.map((elm, idex) =>
                                                <div key={idex} className="col-sm-6">
                                                    <div className="item text-center">
                                                        <div className="icon-box">
                                                            <figure>
                                                                <a href="services.html">
                                                                    <img width={'50px'} height={'50px'} loading="lazy" src={`${process.env.PUBLIC_URL}/${elm.icon}`} alt="features" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <h6 className="mb-2">{elm.title}</h6>
                                                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur
                                                ex sunt, est aspernatur
                                                at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
                                            */}
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



            {/* Service Section */}
            <section className="service-section section">
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
            </section>
            {/* End Service Section */}
            <Gallery />
            {/* team section */}
            <section className="team-section section">
                <div className="container">
                    <div className="section-title text-center">
                        <h3>Our Expert
                            <span>Doctors</span>
                        </h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illo, rerum
                            <br />natus nobis deleniti doloremque minima odit voluptatibus ipsam animi?</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="team-member">
                                <img loading="lazy" src={doctor1} alt="doctor" className="img-fluid" />
                                <div className="contents text-center">
                                    <h5>Dr. (Col.) Tarun Kaul</h5>
                                    {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-member">
                                <img loading="lazy" src={doctor2} alt="doctor" className="img-fluid" />
                                <div className="contents text-center">
                                    <h5>Dr. (Col.) Shashi Shukla</h5>
                                    {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-member">
                                <img loading="lazy" src={doctor3} alt="doctor" className="img-fluid" />
                                <div className="contents text-center">
                                    <h5>Dr (Maj) Roli Tewari (Retd)</h5>
                                    {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur.</p> */}
                                </div>
                            </div>
                        </div>
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
            {/* End testimonial-section

 Contact Section  */}
            <section className="appoinment-section section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="accordion-section">
                                <div className="section-title">
                                    <h3>FAQ</h3>
                                </div>
                                <div className="accordion-holder">
                                    <div className="accordion" id="accordionGroup" role="tablist" aria-multiselectable="true">
                                        <div className="card">
                                            <div className="card-header" role="tab" id="headingOne">
                                                <h4 className="card-title">
                                                    <a role="button" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Why Should I choose Medical Health
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordionGroup">
                                                <div className="card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
                                                    officia aute,
                                                    non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                                    tempor,
                                                    sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                                                    vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                                    haven't
                                                    heard of them accusamus labore sustainable VHS.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" role="tab" id="headingTwo">
                                                <h4 className="card-title">
                                                    <a className="collapsed" role="button" data-toggle="collapse" href="#collapseTwo"
                                                        aria-expanded="false" aria-controls="collapseTwo">
                                                        What are the Centre’s visiting hours?
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordionGroup">
                                                <div className="card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
                                                    officia aute,
                                                    non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                                    tempor,
                                                    sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                                                    vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                                    haven't
                                                    heard of them accusamus labore sustainable VHS.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" role="tab" id="headingThree">
                                                <h4 className="card-title">
                                                    <a className="collapsed" role="button" data-toggle="collapse" href="#collapseThree"
                                                        aria-expanded="false" aria-controls="collapseThree">
                                                        How many visitors are allowed?
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordionGroup">
                                                <div className="card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
                                                    officia aute,
                                                    non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                                    tempor,
                                                    sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                                                    vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                                    haven't
                                                    heard of them accusamus labore sustainable VHS.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-area pl-0 pl-lg-5">
                                <div className="section-title">
                                    <h3>Request <span>Appointment</span>
                                    </h3>
                                </div>
                                <form name="contact_form" className="default-form contact-form" action="!#" method="post">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="Name" placeholder="Name" required="" />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" type="email" name="Email" placeholder="Email" required="" />
                                            </div>
                                            <div className="form-group">
                                                <select className="form-control" name="subject">
                                                    <option>Departments</option>
                                                    <option>Diagnostic</option>
                                                    <option>Psychological</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="Phone" placeholder="Phone" required="" />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="Date" placeholder="Date" required="" id="datepicker" autoComplete="off" />
                                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                            </div>
                                            <div className="form-group">
                                                <select className="form-control" name="subject">
                                                    <option>Doctor</option>
                                                    <option>Diagnostic</option>
                                                    <option>Psychological</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea className="form-control" name="form_message" placeholder="Your Message" required=""></textarea>
                                            </div>
                                            <div className="form-group text-center">
                                                <button type="submit" className="btn-style-one">submit now</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                            <img style={{ width: "200px" }} src="http://staging.beforegoinglive.com/sentiss1/wp-content/uploads/2020/10/Logo-in-white-bkg-1.png" alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </section>
            {/*  End Contact Section  */}

        </>
    );
}
export default Home;