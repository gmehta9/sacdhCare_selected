import React from "react";

function Appointment() {

    return (
        <section className="appoinment-section section bg-gray">
            <div className="container">
                <div className="row justify-content-center">

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
                    <div class="col-lg-6 mb-4 mb-lg-0 order-0 order-lg-1">
                        <div class="appointment-image-holder ml-0 ml-lg-4">
                            <figure>
                                <img loading="lazy" class="w-100" src={`${process.env.PUBLIC_URL}/background/appoinment.jpg`} alt="Appointment" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Appointment;