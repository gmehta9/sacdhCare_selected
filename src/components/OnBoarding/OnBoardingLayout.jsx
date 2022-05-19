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
                    <Outlet />
                </div>
            </section>
            <Footer />
        </>
    );
}
export default OnboardingLayout;