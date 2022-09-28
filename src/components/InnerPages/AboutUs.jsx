import React from "react";
import { useLocation } from "react-router";
import servicetwo from "../../assets/images/services/service-two.jpg";

function AboutUs() {

    const location = useLocation()


    return (
        <React.Fragment>
            <section className="service-tab-section section">
                <div className="outer-box clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="service-box" >
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <img
                                                loading="auto"
                                                className="img-fluid"
                                                src={servicetwo}
                                                alt="service" />
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="contents">
                                                <div className="section-title">
                                                    <h3>About Us</h3>
                                                </div>
                                                <div className="text">
                                                    <p>SADH Care Hospital is developing a sustainable healthcare facility in an underserved area of
                                                        Pataudi, and its neighboring rural areas, in the Indian State of Haryana in India. We are a not-for-

                                                        “know more” takes to “about us” page

                                                        profit hospital dedicated to provide quality healthcare services.
                                                        The area lacked centers with proper healthcare facilities, the people of Pataudi and nearby areas
                                                        had no choice but to travel 40-60 km to the nearest metro, Gurugram, for childbirth and proper
                                                        healthcare facilities which are costlier.
                                                        SADH Care hospital provides good quality mother and childcare facility, eye-care, dental,
                                                        nephrology, neurology, etc., at subsidized rates. The hospital also caters to accidents &amp; emergency
                                                        services, like a cardiac arrest – people die every year due to lack of immediate medical attention.
                                                        In view of above, Sentiss Foundation along with Swami Amardev Vidhalaya Trust, has set up a
                                                        25-bed not-for-profit hospital and providing specialist services at highly subsidized rates.</p>
                                                </div>
                                                <ul className="content-list">
                                                    <li>
                                                        <i className="far fa-dot-circle"></i>SADH CARE HOSPITAL ACTS AS A BEACON OF HOPE FOR THE RESIDENTS IN AND AROUND
                                                        PATAUDI
                                                    </li>
                                                </ul>
                                                <div className="text">
                                                    <p>The hospital is determined to bring healthcare equity to the people of Pataudi and surrounding
                                                        areas by providing basic healthcare services, especially strengthening the mother and child
                                                        healthcare services by introducing affordable treatment and diagnostic facilities.</p>
                                                </div>

                                                {location.pathname !== '/about-us' &&
                                                    <a href="#/about-us" className="btn btn-style-one">Read more</a>
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
export default AboutUs;