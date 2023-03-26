import React from "react";
import logoOne from "../../../images/sponsorLogo/feathertechLogo.png";
import logoTwo from "../../../images/sponsorLogo/willscharityLogo.png";
import logoThree from "../../../images/sponsorLogo/equationLogo.png";
import logoFour from "../../../images/sponsorLogo/puzzlechampLogo.png"

const Sponsorship = () => {
    
    return (
        <div id="SponsorSection">
            <div>
                <h3>Club sponsors</h3>
                <p>We are proud to be sponsored by the following organisations</p>
            </div>
            <div id="sponsorLogoBanner">
                <figure className="sponsorLogo">
                    <img className="sponsorLogo" src={logoOne} alt="Feather Tech company logo" />
                </figure>
                <figure className="sponsorLogo">
                    <img className="sponsorLogo" src={logoTwo} alt="Will's Charity company logo" />
                </figure>
                <figure className="sponsorLogo">
                    <img className="sponsorLogo" src={logoThree} alt="Equation company logo" />
                </figure>
                <figure className="sponsorLogo">
                    <img className="sponsorLogo" src={logoFour} alt="PuzzleChamp company logo" />
                </figure>
            </div>
            <p>Their support is and will continue to be pivotal to our success as an organisation.</p>
        </div>
    )
}

export default Sponsorship