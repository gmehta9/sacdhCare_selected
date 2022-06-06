import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../includes/Footer";
import Header from "../includes/Header";

function InnerPageLayout() {

    return (
        <React.Fragment>
            <Header />
            <section className="story">
                <div className="container">
                    <Outlet />
                </div>
            </section>
            <Footer />
        </React.Fragment>
    );
}
export default InnerPageLayout;