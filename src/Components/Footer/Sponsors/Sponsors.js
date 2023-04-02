import React from "react";
import logoOne from "../../../images/sponsorLogo/feathertechLogo.png";
import logoTwo from "../../../images/sponsorLogo/willscharityLogo.png";
import logoThree from "../../../images/sponsorLogo/equationLogo.png";
import logoFour from "../../../images/sponsorLogo/puzzlechampLogo.png"

const Sponsors = () => {
    const sponsorLogos = [
        {src: logoOne, alt:"Feather Tech company logo"},
        {src: logoTwo, alt:"Will's Charity company logo"},
        {src:logoThree, alt:"Equation company logo"},
        {src:logoFour, alt:"PuzzleChamp company logo"}
    ]
    const sponsorLogoLayout = sponsorLogos.map((n,i) => (
        <figure><img className="sponsorLogo" src={n.src} alt={n.alt}/></figure>
    ))
    return (
        <div id="Sponsors">
            <div>
                <h3>Club sponsors</h3>
                <p>We are proud to be sponsored by the following organisations</p>
            </div>
            <div id="sponsorLogoBanner">
                {sponsorLogoLayout}
            </div>
            <p>Their support is and will continue to be pivotal to our success as an organisation.</p>
        </div>
    )
}

export default Sponsors