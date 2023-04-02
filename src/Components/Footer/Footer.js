import React from "react";
import Sponsorship from "./Sponsors/Sponsors";
import Copyright from "./Copyright/Copyright";
import MapFeature from "./Map/Map";
import ContactInfo from "./ContactInfo/ContactInfo";

const backToTop = (<div id="backToTop"><a id="backToTop" href=".header">Back to top</a></div>);

const Footer = () => {
    return (
        <div className="Footer">            
            {backToTop}
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