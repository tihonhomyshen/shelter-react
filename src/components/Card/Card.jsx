import React from "react";

const Card = ({id, src, name}) => {
    return (
        <>
            <div className="card-item" id={id}>
                <img class="card-item__image" src={src} alt="" />
                <p className="name fs-subtitle color-dark-l">{name}</p>
                <button className="button button_secondray">Learn More</button>
            </div>
            {console.log(id, src, name)}
        </>
    )
}

export default Card