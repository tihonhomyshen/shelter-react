import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import './Header.css'


const Header = () => {

    return (
        <>
            <header className="header">
                <div className="container">
                    <a className="logo" href="/">
                        <p className="logo__title fs-logo color-primary">Cozy House</p>
                        <p className="logo__subtitle color-light-xl">Shelter for pets in Boston</p>
                    </a>
                    <div className="menu-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="nav-wrapper">
                        <nav className="nav-menu">
                            <ul role="list" className="nav-menu__items">
                                <li className="nav-menu__item"><a className="color-dark-s" href="/">About the shelter</a></li>
                                <li className="nav-menu__item"><Link className="color-dark-s" to="/pets">Our pets</Link></li>
                                <li className="nav-menu__item"><a className="color-dark-s" href="#help_section">Help the shelter</a></li>
                                <li className="nav-menu__item"><a className="color-dark-s" href="#footer_section">Contacts</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Header