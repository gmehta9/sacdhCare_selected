import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./includes/Footer";
import Header from "./includes/Header";

function MainLayout() {

    return (
        <>
            <Header />
            <Link to="/">Home</Link>
            <Link to="about-us">About</Link>
            <br />
            <Outlet />
            <Footer />
        </>
    );
}
export default MainLayout;