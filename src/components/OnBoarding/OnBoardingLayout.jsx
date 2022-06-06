import React from "react";
import { Outlet } from "react-router";
import Footer from "../includes/Footer";
import Header from "../includes/Header";

function OnboardingLayout() {

    return (
        <>
            <Header />
            <section className="story">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-8 col-md-6">
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