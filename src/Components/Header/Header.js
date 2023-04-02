import React from "react";
import clubLogo from "../../images/clubLogo.png";


export default function Header (props) {
    return (
        <div className="header">
            <figure className="clubLogo">
                <img src={clubLogo} alt="Chadstone Cobra FC Logo" />
            </figure>
            <div className="titleAndMottoHeader">
                <h2>{props.clubName}</h2>
                <p className="clubMottoHeader">Go your hardest.</p>
            </div>
        </div>
    );
}