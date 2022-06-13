import React, { useContext, useEffect } from "react";
import Banner from "./includes/Banner";
import Orthopedics from "../assets/images/resource/1.png";
import Diaginostic from "../assets/images/resource/2.png";
import Psycology from "../assets/images/resource/3.png";
import GeneralTreatment from "../assets/images/resource/4.png";
import TestimonialsSlider from "./includes/TestimonialsSlider";
import DepartmentsProvided from "./includes/DepartmentsProvided";

import doctor1 from "../assets/images/team/mt-dr-Col-tarun-kaul.jpg";
import doctor2 from "../assets/images/team/dr.majroli_tewari.jpg";
import doctor3 from "../assets/images/team/dr.colshashi_shukla.jpg";

import serviceone from "../assets/images/services/service-one.jpg";
import servicetwo from "../assets/images/services/service-two.jpg";
import servicethree from "../assets/images/services/service-three.jpg"
import servicefour from "../assets/images/services/service-four.jpg";
import servicefive from "../assets/images/services/service-five.jpg"
import AppContext from "./context/AppContext";
import Swal from 'sweetalert2';

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
                        <div className="col-lg-4 col-md-6 emmergency item">
                            <i className="fa fa-phone"></i>
                            <h2>Emegency Cases</h2>
                            <a href="tel:1-800-700-6200">1-800-700-6200</a>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 top-doctor item">
                            <i className="fa fa-stethoscope"></i>
                            <h2>24 Hour Service</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dignissimos officia dicta suscipit
                                vel eum</p>
                            <a href="service.html" className="btn btn-main">Read more</a>
                        </div>
                        <div className="col-lg-4 col-md-12 working-time item">
                            <i className="fa fa-hourglass-o"></i>
                            <h2>Working Hours</h2>
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

            {/* Best Features <span>of Our Hospital */}
            <section className="feature-section section bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="image-content">
                                <div className="section-title text-center">
                                    <h3>Best Features <span>of Our Hospital</span></h3>
                                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni in at debitis <br /> nam error officia vero tempora alias? Sunt?</p>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="item">
                                            <div className="icon-box">
                                                <figure>
                                                    <a href="services.html">
                                                        <img loading="lazy" src={Orthopedics} alt="features" />
                                                    </a>
                                                </figure>
                                            </div>
                                            <h3 className="mb-2">Orthopedics</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur
                                                ex sunt, est aspernatur
                                                at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="item">
                                            <div className="icon-box">
                                                <figure>
                                                    <a href="services.html">
                                                        <img loading="lazy" src={Diaginostic} alt="features " />
                                                    </a>
                                                </figure>
                                            </div>
                                            <h3 className="mb-2">Diaginostic</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur
                                                ex sunt, est aspernatur
                                                at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="item">
                                            <div className="icon-box">
                                                <figure>
                                                    <a href="services.html">
                                                        <img loading="lazy" src={Psycology} alt="features " />
                                                    </a>
                                                </figure>
                                            </div>
                                            <h3 className="mb-2">Psycology</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur
                                                ex sunt, est aspernatur
                                                at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="item">
                                            <div className="icon-box">
                                                <figure>
                                                    <a href="services.html">
                                                        <img loading="lazy" src={GeneralTreatment} alt="features " />
                                                    </a>
                                                </figure>
                                            </div>
                                            <h3 className="mb-2">General Treatment</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur
                                                ex sunt, est aspernatur
                                                at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="service-tab-section section">
                <div className="outer-box clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {/*  Nav tabs  */}
                                <div className="tabs mb-5">
                                    <ul className="nav nav-tabs justify-content-center" id="aboutTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link active" id="dormitory-tab" data-toggle="tab" href="#dormitory" role="tab" aria-controls="dormitory" aria-selected="true">dormitory</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="orthopedic-tab" data-toggle="tab" href="#orthopedic" role="tab" aria-controls="orthopedic" aria-selected="false">orthopedic</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="sonogram-tab" data-toggle="tab" href="#sonogram" role="tab" aria-controls="sonogram" aria-selected="false">sonogram</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="x-ray-tab" data-toggle="tab" href="#x-ray" role="tab" aria-controls="x-ray" aria-selected="false">x-ray</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="diagnostic-tab" data-toggle="tab" href="#diagnostic" role="tab" aria-controls="diagnostic" aria-selected="false">diagnostic</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Start single tab content */}
                                <div className="tab-content" id="aboutTab">
                                    <div className="service-box tab-pane fade show active" id="dormitory">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <img loading="lazy" className="img-fluid" src={serviceone} alt="service" />
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="contents">
                                                    <div className="section-title">
                                                        <h3>dormitory</h3>
                                                    </div>
                                                    <div className="text">
                                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                                                            then a dental prosthetic is added. then a
                                                            dental prosthetic is added.then a dental pros- thetic is added.</p>
                                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                                                            then a dental prosthetic is added. then a dental
                                                            prosthetic is added.then a dental pros- thetic is added.</p>
                                                    </div>
                                                    <ul className="content-list">
                                                        <li>
                                                            <i className="far fa-dot-circle"></i>Whitening is among the most popular dental
                                                        </li>
                                                        <li>
                                                            <i className="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                                                            involves</li>
                                                        <li>
                                                            <i className="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                                                            involves</li>
                                                    </ul>
                                                    <a href="services.html" className="btn btn-style-one">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End single tab content
                                    Start single tab content */}
                                    <div className="service-box tab-pane fade" id="orthopedic">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <img loading="lazy" className="img-fluid" src={servicetwo} alt="service" />
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="contents">
                                                    <div className="section-title">
                                                        <h3>orthopedic</h3>
                                                    </div>
                                                    <div className="text">
                                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                                                            then a dental prosthetic is added.
                                                            then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                                                            then a dental prosthetic is added.
                                                            then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                                    </div>
                                                    <ul className="content-list">
                                                        <li>
                                                            <i className="far fa-dot-circle"></i>Whitening is among the most popular dental
                                                        </li>
                                                        <li>
                                                            <i className="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                                                            involves</li>
                                                        <li>
                                                            <i className="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                                                            involves</li>
                                                    </ul>
                                                    <a href="services.html" className="btn btn-style-one">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End single tab content
                                    Start single tab content */}
                                    <div className="service-box tab-pane fade" id="sonogram">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <img loading="lazy" className="img-fluid" src={servicethree} alt="service" />
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="contents">
                                                    <div className="section-title">
                                                        <h3>sonogram</h3>
                                                    </div>
                                                    <div className="text">
                                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                                                            then a dental prosthetic is added.
                                                            then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                                                            then a dental prosthetic is added.
                                                            then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                                    </div>
                                                    <ul className="content-list">
                                                        <li>
                                                            <i className="far fa-dot-circle"></i>Whitening is among the most popular dental
                                                        </li>
                                                        <li>
                                                            <i className="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                                                            involves</li>
                                                        <li>
                                                            <i className="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                                                            involves</li>
                                                    </ul>
                                                    <a href="services.html" className="btn btn-style-one">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End single tab content
                                    Start single tab content */}
                                    <div className="service-box tab-pane fade" id="x-ray">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <img loading="lazy" className="img-fluid" src={servicefour} alt="service" />
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="contents">
                                                    <div className="section-title">
                                                        <h3>x-ray</h3>
                                                    </div>
                                                    <div className="text">
                                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                                                            then a dental prosthetic is added.
                                                            then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                                                            then a dental prosthetic is added.
                                                            then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                                    </div>
                                                    <ul className="content-list">
                                                        <li>
                                                            <i className="far fa-dot-circle"></i>Whitening is among the most popular dental
                                                        </li>
                                                        <li>
                                                            <i className="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                                                            involves</li>
                                                        <li>
                                                            <i className="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                                                            involves</li>
                                                    </ul>
                                                    <a href="services.html" className="btn btn-style-one">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End single tab content
                                    Start single tab content */}
                                    <div className="service-box tab-pane fade" id="diagnostic">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <img loading="lazy" className="img-fluid" src={servicefive} alt="service" />
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="contents">
                                                    <div className="section-title">
                                                        <h3>diagnostic</h3>
                                                    </div>
                                                    <div className="text">
                                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                                                            then a dental prosthetic is added.
                                                            then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                                                            then a dental prosthetic is added.
                                                            then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                                    </div>
                                                    <ul className="content-list">
                                                        <li>
                                                            <i className="far fa-dot-circle"></i>Whitening is among the most popular dental
                                                        </li>
                                                        <li>
                                                            <i className="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                                                            involves</li>
                                                        <li>
                                                            <i className="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                                                            involves</li>
                                                    </ul>
                                                    <a href="services.html" className="btn btn-style-one">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End single tab content */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Section */}
            <section className="service-section bg-gray section">
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
                                    <h5>Dr. (Maj.) Roli Tewari</h5>
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
            {/*  End Contact Section  */}

        </>
    );
}
export default Home;