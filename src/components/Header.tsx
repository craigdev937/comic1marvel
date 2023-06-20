import React from "react";
import "./Header.css";
import Logo from "@public/Logo.svg";
import { Outlet } from "react-router-dom";

export const Header = () => {
    return (
        <React.Fragment>
            <section className="header">
                <img src={Logo} alt="Marvel Logo" />
                <input 
                    className="header__search" 
                    type="text" 
                    placeholder="Enter Character"
                />
            </section>
            <Outlet />
        </React.Fragment>
    );
};


