import React from "react";
import NavBarSimple from "./NavBarSimple";
import Footer from "./Footer";

export default function Layout({children}){
    return(
        <>
        <NavBarSimple></NavBarSimple>
        {children}
        <Footer></Footer>
        </>
    )
}


