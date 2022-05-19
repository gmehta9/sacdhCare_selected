import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./includes/Footer";
import Header from "./includes/Header";

function MainLayout() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
export default MainLayout;