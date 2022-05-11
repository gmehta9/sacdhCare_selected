import React from "react";
import { Link, NavLink } from "react-router-dom";
import mainLogo from "../../assets/images/sadhcare.png"

function Header() {

    return (
        <>
            <div className="header-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="top-left text-center text-md-left">
                                <h6>Opening Hours : Saturday to Tuesday - 8am to 10pm</h6>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="top-right text-center text-md-right">
                                <ul className="social-links">
                                    <li>
                                        <Link to="https://themefisher.com/" aria-label="facebook">
                                            <i className="fab fa-facebook-f"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://themefisher.com/" aria-label="twitter">
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://themefisher.com/" aria-label="google-plus">
                                            <i className="fab fa-google-plus-g"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://themefisher.com/" aria-label="instagram">
                                            <i className="fab fa-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://themefisher.com/" aria-label="pinterest">
                                            <i className="fab fa-pinterest-p"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="header-uper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-3">
                            <div className="logo">
                                <a href="index.html">
                                    <img loading="lazy" className="img-fluid" width={"110px"} src={mainLogo} alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-9">
                            <div className="right-side">
                                <ul className="contact-info pl-0 mb-4 mb-md-0">
                                    <li className="item text-left">
                                        <div className="icon-box">
                                            <i className="far fa-envelope"></i>
                                        </div>
                                        <strong>Email</strong>
                                        <br />
                                        <a href="mailto:info@medic.com">
                                            <span>info@medic.com</span>
                                        </a>
                                    </li>
                                    <li className="item text-left">
                                        <div className="icon-box">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <strong>Call Now</strong>
                                        <br />
                                        <span>+ (88017) - 123 - 4567</span>
                                    </li>
                                </ul>
                                <div className="link-btn text-center text-lg-right">
                                    <a href="contact.html" className="btn-style-one">Appoinment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarLinks">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="index.html">Home</NavLink>
                            </li>
                            <li className="nav-item @@about">
                                <NavLink className="nav-link" to="about.html">About</NavLink>
                            </li>
                            <li className="nav-item @@service">
                                <NavLink className="nav-link" to="service.html">Service</NavLink>
                            </li>
                            <li className="nav-item @@gallery">
                                <NavLink className="nav-link" to="gallery.html">Gallery</NavLink>
                            </li>
                            <li className="nav-item @@team">
                                <NavLink className="nav-link" to="team.html">Team</NavLink>
                            </li>
                            <li className="nav-item @@appointment">
                                <NavLink className="nav-link" to="appointment.html">Appointment</NavLink>
                            </li>
                            <li className="nav-item dropdown @@blogs">
                                <NavLink className="nav-link dropdown-toggle" to="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blogs</NavLink>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <NavLink className="dropdown-item @@blog" to="blog.html">Blog</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item @@blogDetails" to="blog-details.html">Blog Details</NavLink>
                                    </li>
                                    <li className="dropdown dropdown-submenu dropright">
                                        <NavLink className="dropdown-item dropdown-toggle" to="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</NavLink>

                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <NavLink className="dropdown-item" to="index.html">Submenu 01</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="dropdown-item" to="index.html">Submenu 02</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item @@contact">
                                <NavLink className="nav-link" to="contact.html">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Header;
