import React from "react";
import startScreenPuppy from '../assets/images/pets/start-screen-puppy.png'
const StartScreen = () => {
    return (
        <>
            <section className="not-only">
                <div className="container">
                    <div className="not-only__content">
                        <h1 className="page-title">Not only people need a house</h1>
                        <p className="content-text color-dark-s paragraph-l">We offer to give a chance to a little and nice puppy with
                            an extremely
                            wide and open heart.
                            He or she will love you more than anybody else in the world, you will see!</p>
                        <button className="button button_primary">Make a friend</button>
                    </div>
                    <div className="not-only__image">
                        <img src={startScreenPuppy} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default StartScreen