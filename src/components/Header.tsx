import React from "react";
import "./Header.css";
import Logo from "@public/Logo.svg";
import { Link, Outlet } from "react-router-dom";

export const Header = () => {
    return (
        <React.Fragment>
            <section className="header">
                <Link to="/">
                    <img alt="Marvel Logo" src={Logo} />
                </Link>
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


