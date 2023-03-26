import React from "react";

const NavigationBar = () => {
    return (
        <div className="NavigationBar">
            <div className="a"><a href="#welcome">Welcome</a></div>
            <div className="b"><a href="#fixture">Fixture</a></div>
            <div className="a"><a href="#membership">Membership</a></div>
            <div className="b"><a href="#sponsorSection">Sponsors</a></div>
            <div className="a"><a href="#contactInfo">Contact us</a></div>
        </div>
    )
}

export default NavigationBar