import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
import imgOne from "../../../images/gallery/crowd.jpg";
import imgTwo from "../../../images/gallery/midKick.jpg";
import imgThree from "../../../images/gallery/goalkeeper.jpg";
import imgFour from "../../../images/gallery/cones.jpg";

const galleryItems = [
    {src:imgOne, alt:"Crowd in the stadium", caption:"Crowd in full support last week!"},
    {src:imgTwo, alt:"Player dribbling ball amongst opposition", caption:"Jones holding up the midfield."},
    {src:imgThree, alt:"Goalkeeper kicking the ball from the box", caption:"Our keeper clearing the ball."},
    {src:imgFour, alt:"A close up of cones on a soccer training pitch", caption:"The team is back at training after our last win."},
];

const galleryLayout = galleryItems.map((n,i) => (
    <div key={i}><img src={n.src} alt={n.alt} className="galleryImg"/><p className="legend">{n.caption}</p></div>
));

const PhotoGallery = () => {
    return (
        <div id="gallery" className="gallery">
            <h3>Photo gallery</h3>
            <Carousel>
                {galleryLayout}
            </Carousel>
        </div>
    )
}

export default PhotoGallery