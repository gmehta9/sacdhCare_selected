import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../includes/Footer";
import Header from "../includes/Header";

function InnerPageLayout() {

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
export default InnerPageLayout;