import React from "react";
import './MainPage.css'
import aboutPets from '../../assets/images/pets/about-pets.png'
import leftArrow from '../../assets/images/icons/arrows/left-arrow.png'
import rightArrow from '../../assets/images/icons/arrows/right-arrow.png'
import bowlsAndCups from '../../assets/images/icons/help-list/icon-bowls-and-cups.svg'
import collarsLeashes from '../../assets/images/icons/help-list/icon-collars-leashes.svg'
import medicines from '../../assets/images/icons/help-list/icon-medicines.svg'
import petFood from '../../assets/images/icons/help-list/icon-pet-food.svg'
import shampoos from '../../assets/images/icons/help-list/icon-shampoos.svg'
import sleepingArea from '../../assets/images/icons/help-list/icon-sleeping-area.svg'
import toys from '../../assets/images/icons/help-list/icon-toys.svg'
import transportation from '../../assets/images/icons/help-list/icon-transportation.svg'
import vitamins from '../../assets/images/icons/help-list/icon-vitamins.svg'
import donationDog from '../../assets/images/pets/donation-dog.png'
import creditCard from '../../assets/images/icons/donation/icon-credit-card.svg'



const MainPage = () => {
    return (
        <>
            <main className="main">
                <section className="about-shelter">
                    <div className="container">
                        <div className="about-shelter__content">
                            <div className="image-block">
                                <img src={aboutPets} alt="" />
                            </div>
                            <div className="description">
                                <h2 className="color-dark-l">About the shelter "Cozy House"</h2>
                                <p className="paragraph-l color-dark-xl">Currently we have 121 dogs and 342 cats on our hands and
                                    statistics show
                                    that only 20% of them
                                    will find a family.
                                    The others will continue to live with us and will be waiting for a lucky chance to become dearly
                                    loved.</p>
                                <p className="paragraph-l color-dark-xl">We feed our wards with the best food and make sure that
                                    they do not get
                                    sick, feel comfortable
                                    (including psychologically) and well.
                                    We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the
                                    animals are taken by the shelter staff. Taking care of the animals, they become attached to the
                                    pets and would hardly ever leave them alone.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="our-friends background-light-l">
                    <div className="container">
                        <h2 className="color-dark-l">Our friends who are looking for a house</h2>
                        <div className="slider main-page">
                            <span className="left-arrow span-circle active">
                                <img src={leftArrow} alt="left arrow" />
                            </span>
                            <div className="slider__container">

                            </div>
                            <span className="right-arrow span-circle active">
                                <img src={rightArrow} alt="right arrow" />
                            </span>
                        </div>
                        <div className="slider-arrows">
                            <span className="left-arrow span-circle active">
                                <img src={leftArrow} alt="left arrow" />
                            </span>
                            <span className="right-arrow span-circle active">
                                <img src={rightArrow} alt="right arrow" />
                            </span>
                        </div>
                        <button className="button button_primary"><a href="pets.html">Get to know the
                            rest</a></button>
                    </div>
                </section>
                <section className="help" id="help_section">
                    <div className="container">
                        <h2 className="color-dark-l">How you can help  your shelter</h2>
                        <ul role="list" className="help-list">
                            <li className="help-list__item">
                                <img className="help-list__image" src={petFood} alt="Pet food" />
                                <p className="fs-subtitle color-dark-l">Pet Food</p>
                            </li>
                            <li className="help-list__item">
                                <img className="help-list__image" src={transportation} alt="Transportation" />
                                <p className="fs-subtitle color-dark-l">Transportation</p>
                            </li>
                            <li className="help-list__item">
                                <img className="help-list__image" src={toys} alt="Toys" />
                                <p className="fs-subtitle color-dark-l">Toys</p>
                            </li>
                            <li className="help-list__item">
                                <img className="help-list__image" src={bowlsAndCups} alt="Bowls and Cups" />
                                <p className="fs-subtitle color-dark-l">Bowls and cups</p>
                            </li>
                            <li className="help-list__item">
                                <img className="help-list__image" src={shampoos} alt="Shampoos" />
                                <p className="fs-subtitle color-dark-l">Shampoos</p>
                            </li>
                            <li className="help-list__item">
                                <img className="help-list__image" src={vitamins} alt="Vitamins" />
                                <p className="fs-subtitle color-dark-l">Vitamins</p>
                            </li>
                            <li className="help-list__item">
                                <img className="help-list__image" src={medicines} alt="Medicines" />
                                <p className="fs-subtitle color-dark-l">Medicines</p>
                            </li>
                            <li className="help-list__item">
                                <img className="help-list__image" src={collarsLeashes} alt="Collars-leashes" />
                                <p className="fs-subtitle color-dark-l">Collars / leashes</p>
                            </li>
                            <li className="help-list__item">
                                <img className="help-list__image" src={sleepingArea} alt="Sleeping area" />
                                <p className="fs-subtitle color-dark-l">Sleeping areas</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="donation">
                <div className="container">
                    <div className="donation__content">
                        <div className="image-block">
                            <img src={donationDog} alt=""/>
                        </div>
                        <div className="description">
                            <h2 className="color-dark-l">You can also make a donation</h2>
                            <h5 className="color-dark-l">Name of the bank / Type of bank account</h5>
                            <div className="credit-card background-color-primary">
                                <img className="image" src={creditCard} alt="Credit Card"/>
                                <p className="credit-card__number fs-subtitle color-dark-l">8380 2880 8028 8791 7435</p>
                            </div>
                            <p className="note-text fs-small color-dark-m">Legal information and lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Maecenas a ipsum at libero sagittis dignissim sed ac diam.
                                Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum
                                primis
                                in faucibus.</p>
                        </div>
                    </div>
                </div>
            </section>
            </main>
        </>
    )
}

export default MainPage