import React from "react";
import { Link } from "react-router-dom";
// import postthumb from "../../assets/images/blog/post-thumb-small.jpg";
import mainLogo from "../../assets/images/sadhcare.png"

function Footer() {

    return (
        <footer className="footer-main">
            <div className="footer-top">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="about-widget">
                                <div className="footer-logo">
                                    <figure>
                                        <Link to="index.html">
                                            <img
                                                loading="auto"
                                                className="img-fluid"
                                                src={mainLogo}
                                                width="100px"
                                                alt="medic"
                                            />
                                        </Link>
                                    </figure>
                                </div>
                                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, temporibus?</p> */}
                                <ul className="location-link">
                                    <li className="item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>SADH Care Hospital, <br />
                                            Ashram Hari Mandir, Pataudi<br />
                                            Gurugram, Haryana<br />
                                            122503<br />
                                        </p>
                                    </li>
                                    <li className="item">
                                        <i className="far fa-envelope" aria-hidden="true"></i>
                                        <Link to="mailto:info@sadhcare.org">
                                            <p>info@sadhcare.org</p>
                                        </Link>
                                    </li>
                                    <li className="item">
                                        <i className="fas fa-phone" aria-hidden="true"></i>
                                        <p>
                                            <a href="tel:01242970919">0124 2970919</a> | <a href="tel:01242671918">0124-2671918</a> <br />
                                            <a href="tel:01242671919">0124-2671919</a> | <a href="tel:+919812008765">+91-9812008765</a>
                                        </p>
                                    </li>
                                </ul>
                                <ul className="list-inline social-icons">
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/sadhcare/" aria-label="facebook">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/company/sadh-care-hospital/" aria-label="twitter">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5 mb-3 mb-md-0">
                            <h2>USEFUL LINKS</h2>
                            <ul className="menu-link">
                                <li>
                                    <span
                                        className="hand"
                                        onClick={() =>
                                            window.open(`${process.env.PUBLIC_URL}/pdf/HSPCB-BMW-GUIDELINES-COVID.pdf`, '_blank')}
                                    >
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        Haryana Govt. Policy Guideline
                                    </span>
                                </li>
                                <li>
                                    <Link to="/donations">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        Donate
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/associates">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        Associates
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/gallery">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        Gallery
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-7">
                            <h2>QUICK LINKS</h2>
                            <ul className="menu-link">
                                <li>
                                    <Link to="/our-programmes">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        Programmes
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/our-services">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        Medical Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/our-doctors">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        Doctor’s List
                                    </Link>
                                </li>
                            </ul>
                            {/* <div className="social-links">
                                <h2>Recent Posts</h2>
                                <ul>
                                    <li className="item">
                                        <div className="media">
                                            <div className="media-left mr-3">
                                                <Link to="blog-details.html">
                                                    <img loading="lazy" src={postthumb} alt="post-thumb" />
                                                </Link>
                                            </div>
                                            <div className="media-body">
                                                <h5>
                                                    <Link to="blog-details.html">A lesson adip isicing</Link>
                                                </h5>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <div className="media">
                                            <div className="media-left mr-3">
                                                <Link to="blog-details.html">
                                                    <img loading="lazy" src={postthumb} alt="post-thumb" />
                                                </Link>
                                            </div>
                                            <div className="media-body">
                                                <h5>
                                                    <Link to="blog-details.html">How to make an event</Link></h5>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="footer-bottom">
                <div className="container clearfix">
                    <div className="copyright-text">
                        <p>&copy; Copyright 2021. Designed &amp; Developed by
                            <Link to="/">Themefisher</Link>
                        </p>
                    </div>
                    <ul className="footer-bottom-link">
                        <li>
                            <Link to="index.html">Home</Link>
                        </li>
                        <li>
                            <Link to="about.html">About</Link>
                        </li>
                        <li>
                            <Link to="contact.html">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div> */}
        </footer>
    );
}
export default Footer;