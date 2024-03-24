import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import './Header.css'


const Header = () => {

    const { pathname } = useLocation()

    const isMainPage = pathname === '/'
    return (
        <>
            <header className={`header ${isMainPage ?  '': 'pets-page'}`}>
                <div className="container">
                    <div className="logo">
                        <p className={`logo__title fs-logo ${isMainPage ? 'color-primary' : ''}`}>
                            <a href="/">Cozy House</a>
                        </p>
                        <p className={`logo__subtitle ${isMainPage ? 'color-light-xl' : 'color-dark-3xl'}`}>Shelter for pets in Boston</p>
                    </div>
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