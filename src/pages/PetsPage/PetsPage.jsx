import React from "react";
import './PetsPage.css'

const PetsPage = () => {
    return (
        <>
            <main class="main">
                <section class="our-friends pets-page background-light-l">
                    <div class="container">
                        <h2 class="color-dark-l">Our friends who are looking for a house</h2>
                        <div class="slider">

                        </div>
                        <div class="pagination-block">
                            <div class="pagination-row">
                                <span class="span-circle previous-page">&lt;</span>
                                <span class="span-circle previous-page">&lt;&lt;</span>
                                <span class="span-circle page-number">1</span>
                                <span class="span-circle next-page active">&gt;</span>
                                <span class="span-circle next-page active">&gt;&gt;</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PetsPage