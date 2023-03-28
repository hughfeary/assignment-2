import React from "react";
import imgOne from "../../../images/gallery/crowd.jpg";
import imgTwo from "../../../images/gallery/midKick.jpg";
import imgThree from "../../../images/gallery/goalkeeper.jpg";
import imgFour from "../../../images/gallery/cones.jpg";

const PhotoGallery = () => {
    return (
        <div id="Gallery" className="gallery">
            <h3>Photo gallery</h3>
            <div className="galleryRow">
                <figure className="galleryOne">
                    <img src={imgOne} alt="Crowd in the stadium" />
                    <figcaption>Crowd in full support last week!</figcaption>
                </figure>
                <figure className="galleryTwo">
                    <img src={imgTwo} alt="Player dribbling ball amongst opposition" />
                    <figcaption>Jones holding up the midfield.</figcaption>
                </figure>
            </div>
            <div className="galleryRow">
                <figure className="galleryThree">
                    <img src={imgThree} alt="Goalkeeper kicking the ball from the box" />
                    <figcaption>Our keeper clearing the ball.</figcaption>
                </figure>
                <figure className="galleryFour">
                    <img src={imgFour} alt="A close up of cones on a soccer training pitch" />
                    <figcaption>The team is back at training after our last win.</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default PhotoGallery