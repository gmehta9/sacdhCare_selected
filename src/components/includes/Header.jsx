import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import mainLogo from "../../assets/images/sadhcare.png"
import Auth from "../auth/Auth";
import PageTitleInfo from "./PageTileInfo";
import { AppContext } from "../context/AppContext";

function Header() {
    const auth = Auth.user()
    const { pageTitle } = useContext(AppContext)
    return (
        <React.Fragment>
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
                                        <a href="https://www.facebook.com/sadhcare/">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/sadh-care-hospital/" >
                                            <i className="fab fa-linkedin"></i>
                                        </a>
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
                        <div className="col-xl-4 col-lg-3 col-3">
                            <div className="logo">
                                <Link to="/">
                                    <img loading="lazy" className="img-fluid" width={"110px"} src={mainLogo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-9 col-9">
                            <div className="right-side">
                                <ul className="contact-info pl-0 mb-4 mb-md-0">
                                    <li className="item text-left">
                                        <div className="icon-box">
                                            <i className="far fa-envelope"></i>
                                        </div>
                                        <strong>Email</strong>
                                        <br />
                                        <a href="mailto:info@sadhcare.org">
                                            <span>info@sadhcare.org</span>
                                        </a>
                                    </li>
                                    <li className="item text-left">
                                        <div className="icon-box">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <strong>Call Now</strong>
                                        <br />
                                        <a href="tel:01242970919">0124 2970919</a>
                                    </li>
                                </ul>
                                <div className="link-btn text-center text-lg-right">
                                    <Link to="/" className="btn-style-one">Appoinment</Link>
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
                            <li className={`nav-item`} >
                                <NavLink activeclassname="active" className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className={`nav-item`}>
                                <NavLink activeclassname="active" className="nav-link" to="/our-doctors">Our Doctors</NavLink>
                            </li>
                            <li className={`nav-item`}>
                                <NavLink activeclassname="active" className="nav-link" to="/our-services">Services</NavLink>
                            </li>
                            <li className={`nav-item`}>
                                <NavLink activeclassname="active" className="nav-link" to="/our-programmes">Our Programmes</NavLink>
                            </li>

                            <li className={`nav-item`}>
                                <NavLink activeclassname="active" className="nav-link" to="/gallery">Gallery</NavLink>
                            </li>
                            <li className={`nav-item`}>
                                <NavLink activeclassname="active" className="nav-link" to="/book-appointment">Book Appointment</NavLink>
                            </li>
                            <li className={`nav-item`}>
                                <NavLink activeclassname="active" className="nav-link" to="/user/login">
                                    {auth ? 'My Account ' : 'Login | Register'}
                                </NavLink>
                            </li>
                            <li className={`nav-item`}>
                                <NavLink activeclassname="active" className="nav-link" to="/donations">Donate</NavLink>
                            </li>
                            <li className={`nav-item`}>
                                <NavLink activeclassname="active" className="nav-link" to="/contact-us">Contact Us</NavLink>
                            </li>
                            {/* <li className="nav-item dropdown @@blogs">
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
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            {/*  */}
            {pageTitle && <PageTitleInfo pageTitle={pageTitle} />}
        </React.Fragment>
    );
}
export default Header;
