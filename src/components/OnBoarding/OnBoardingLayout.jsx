import React from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "../includes/Footer";
import Header from "../includes/Header";

function OnboardingLayout() {
    const location = useLocation()

    return (
        <>
            <Header />
            <section className="story">
                <div className="container">
                    <div className="row justify-content-center">
                        <div
                            className={`${location.pathname === "/user/logged" ? 'col-12' : 'col-12'}  `}>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
export default OnboardingLayout;