import React from "react";
import './PetsPage.css'

const PetsPage = () => {
    return (
        <>
            <main className="main">
                <section className="our-friends pets-page background-light-l">
                    <div className="container">
                        <h2 className="color-dark-l">Our friends who are looking for a house</h2>
                        <div className="slider">

                        </div>
                        <div className="pagination-block">
                            <div className="pagination-row">
                                <span className="span-circle previous-page">&lt;</span>
                                <span className="span-circle previous-page">&lt;&lt;</span>
                                <span className="span-circle page-number">1</span>
                                <span className="span-circle next-page active">&gt;</span>
                                <span className="span-circle next-page active">&gt;&gt;</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PetsPage