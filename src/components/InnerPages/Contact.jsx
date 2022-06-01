import React from "react";

function ContactUs() {

    return (
        <>
            <section className="section contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-5 ">
                            <div className="address-block">
                                <div className="media">
                                    <i className="far fa-map"></i>
                                    <div className="media-body">
                                        <h3>Location</h3>
                                        <p>
                                            Swami Amar Dev Hospital, Ashram Hari Mandir, <br />
                                            Pataudi, Gurugram<br />
                                            Haryana, 122503<br />
                                            INDIA
                                        </p>
                                    </div>
                                </div>
                                <div className="media">
                                    <i className="fas fa-phone"></i>
                                    <div className="media-body">
                                        <h3>Phone</h3>
                                        <p>
                                            <a href="tel:01242970919">0124 2970919</a> | <a href="tel:01242671918">0124-2671918</a> <br />
                                            <a href="tel:01242671919">0124-2671919</a> | <a href="tel:+919812008765">+91-9812008765</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="media">
                                    <i className="far fa-envelope"></i>
                                    <div className="media-body">
                                        <h3>Email</h3>
                                        <p>
                                            <a href="mailto:info@sadhcare.org">info@sadhcare.org</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7">
                            <div className="contact-form">
                                <form className="row">
                                    <div className="col-lg-6">
                                        <input type="text" name="name" className="form-control main" placeholder="Name" required="" />
                                    </div>

                                    <div className="col-lg-6">
                                        <input type="email" className="form-control main" placeholder="Email" required="" />
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="text" className="form-control main" placeholder="Phone" required="" />
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea name="message" rows="10" className="form-control main" placeholder="Your message"></textarea>
                                    </div>
                                    <div className="col-md-12 text-right">
                                        <button className="btn btn-style-one" type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ContactUs;