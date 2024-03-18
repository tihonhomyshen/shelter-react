import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css'


const Header = () => {
    return (
        <>
            <div className="start-screen">
                <header className="header">
                    <div className="container">
                        <Link className="logo" to="/">
                            <p className="logo__title fs-logo color-primary">Cozy House</p>
                            <p className="logo__subtitle color-light-xl">Shelter for pets in Boston</p>
                        </Link>
                        <div className="menu-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="nav-wrapper">
                            <nav className="nav-menu">
                                <ul role="list" className="nav-menu__items">
                                    <li className="nav-menu__item"><Link className="color-dark-s" to="/">About the shelter</Link></li>
                                    <li className="nav-menu__item"><Link className="color-dark-s" to="/pets">Our pets</Link></li>
                                    <li className="nav-menu__item"><Link className="color-dark-s" to="#help">Help the shelter</Link></li>
                                    <li className="nav-menu__item"><Link className="color-dark-s" to="#footer">Contacts</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}


export default Header