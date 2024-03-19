import React from "react";
import './Footer.css'
import email from '../../assets/images/icons/footer/icon-email.svg'
import phone from '../../assets/images/icons/footer/icon-phone.svg'
import marker from '../../assets/images/icons/footer/icon-marker.svg'
import puppy from '../../assets/images/pets/footer-puppy.png'



const Footer = () => {
    return (
        <>
            <footer className="footer" id="footer_section">
                <div className="container">
                    <div className="info">
                        <h2 className="color-light-xl">For questions and suggestions</h2>
                        <div className="info__detail">
                            <img src={email} alt="email" />
                            <p className="info__detail-text color-primary fs-subtitle">email@shelter.com</p>
                        </div>
                        <div className="info__detail">
                            <img src={phone} alt="phone" />
                            <p className="info__detail-text color-primary fs-subtitle">+13 674 567 75 54</p>
                        </div>
                    </div>
                    <div className="info">
                        <h2 className="color-light-xl">We are waiting for your visit</h2>
                        <div className="info__detail">
                            <a target="_blank" href="https://maps.app.goo.gl/7Jr4TtouTkGgz7y97">
                                <img src={marker} alt="marker point" />
                                <p className="info__detail-text color-primary fs-subtitle">1 Central Street, Boston (entrance
                                    from the store)</p>
                            </a>
                        </div>
                        <div className="info__detail">
                            <a target="_blank" href="https://maps.app.goo.gl/QNxgPxuKANfpCjfD9">
                                <img src={marker} alt="marker point" />
                                <p className="info__detail-text color-primary fs-subtitle">18 South Park, London </p>
                            </a>
                        </div>
                    </div>
                    <div className="info__image">
                        <img src={puppy} alt="Footer puppy" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer