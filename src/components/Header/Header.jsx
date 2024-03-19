import React from "react";
import { Link } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <>
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
                                <li className="nav-menu__item"><Link className="color-dark-s" to="">Our pets</Link></li>
                                <li className="nav-menu__item"><Link className="color-dark-s" to="">Help the shelter</Link></li>
                                <li className="nav-menu__item"><Link className="color-dark-s" to="">Contacts</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Header