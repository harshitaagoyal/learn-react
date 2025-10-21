import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom"; //Outlet is used to render the child routes, it acts as a placeholder for the nested routes

function Layout(){
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout;
