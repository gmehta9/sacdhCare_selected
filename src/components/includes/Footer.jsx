import React from "react";
import { Link } from "react-router-dom";
import postthumb from "../../assets/images/blog/post-thumb-small.jpg";
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
                                            <img loading="lazy" className="img-fluid" src={mainLogo} width="100px" alt="medic" />
                                        </Link>
                                    </figure>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, temporibus?</p>
                                <ul className="location-link">
                                    <li className="item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>Modamba, NY 80021, United States</p>
                                    </li>
                                    <li className="item">
                                        <i className="far fa-envelope" aria-hidden="true"></i>
                                        <Link to="mailto:support@sadhcare.org">
                                            <p>support@sadhcare.org</p>
                                        </Link>
                                    </li>
                                    <li className="item">
                                        <i className="fas fa-phone" aria-hidden="true"></i>
                                        <p>(88017) +123 4567</p>
                                    </li>
                                </ul>
                                <ul className="list-inline social-icons">
                                    <li className="list-inline-item">
                                        <Link to="https://facebook.com/themefisher" aria-label="facebook"><i className="fab fa-facebook-f"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="https://twitter.com/themefisher" aria-label="twitter">
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="https://instagram.com/themefisher" aria-label="instagram"><i className="fab fa-instagram"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="https://github.com/themefisher" aria-label="github">
                                            <i className="fab fa-github"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5 mb-3 mb-md-0">
                            <h2>Services</h2>
                            <ul className="menu-link">
                                <li>
                                    <Link to="service.html">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        Orthopadic Liabilities
                                    </Link>
                                </li>
                                <li>
                                    <Link to="service.html">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        Dental Clinic
                                    </Link>
                                </li>
                                <li>
                                    <Link to="service.html">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        Dormamu Clinic
                                    </Link>
                                </li>
                                <li>
                                    <Link to="service.html">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        Psycological Clinic
                                    </Link>
                                </li>
                                <li>
                                    <Link to="service.html">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        Gynaecological Clinic
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-7">
                            <div className="social-links">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
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
            </div>
        </footer>
    );
}
export default Footer;