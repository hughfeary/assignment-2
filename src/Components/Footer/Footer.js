import React from "react";
import Sponsorship from "./Sponsorship/Sponsorship";
import Copyright from "./Copyright/Copyright";
import MapFeature from "./Map/Map";
import ContactInfo from "./ContactInfo/ContactInfo";

const Footer = () => {
    return (
        <div className="Footer">
            <Sponsorship />
            <div className="footerUpperRow">
                <MapFeature />
                <ContactInfo />
            </div>
            <Copyright />
        </div>
    )
}

export default Footer