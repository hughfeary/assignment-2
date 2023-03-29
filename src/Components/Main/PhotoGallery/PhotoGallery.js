import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
import imgOne from "../../../images/gallery/crowd.jpg";
import imgTwo from "../../../images/gallery/midKick.jpg";
import imgThree from "../../../images/gallery/goalkeeper.jpg";
import imgFour from "../../../images/gallery/cones.jpg";

const PhotoGallery = () => {
    return (
        <div id="Gallery" className="gallery">
            <h3>Photo gallery</h3>
            <Carousel>
                    <div className="gallerySlide">
                        <img src={imgOne} alt="Crowd in the stadium" />
                        <p className="legend">Crowd in full support last week!</p>
                    </div>
                    <div>
                        <img src={imgTwo} alt="Player dribbling ball amongst opposition" />
                        <p className="legend">Jones holding up the midfield.</p>
                    </div>
                    <div>
                        <img src={imgThree} alt="Goalkeeper kicking the ball from the box" />
                        <p className="legend">Our keeper clearing the ball.</p>
                    </div>
                    <div>
                        <img src={imgFour} alt="A close up of cones on a soccer training pitch" />
                        <p className="legend">The team is back at training after our last win.</p>
                    </div>
                
            </Carousel>
        </div>
    )
}

export default PhotoGallery