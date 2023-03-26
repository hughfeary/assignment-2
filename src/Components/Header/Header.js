import React from "react";
import clubLogo from "../../images/clubLogo.png";


export default function Header (props) {
    return (
        <div className="Header">
            <figure className="clubLogo">
                <img src={clubLogo} alt="Chadstone Cobra FC Logo" />
            </figure>
            <div className="titleAndMottoHeader">
                <h2>{props.clubName}</h2>
                <p className="clubMottoHeader">Go your hardest.</p>
            </div>
            <div className="searchContainer">
                    <label for="keywords">Search</label>
                    <div className="barWithButton">
                        <input type="text" className="searchBar" placeholder="Type here" aria-label="Search bar" />
                        <button className="searchButton" type="button" aria-label="Submit search">Go</button>
                    </div>
            </div>
        </div>
    );
}