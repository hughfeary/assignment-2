import React from "react";
import Welcome from "./Welcome/Welcome";
import FurtherNavigation from "./FurtherNavigation/FurtherNavigation";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import ClubHistory from "./ClubHistory/ClubHistory";
import Membership from "./Membership/Membership";
import Aside from "./Aside/Aside";

const Main = () => {
    return (
        <div className="Main">
            <div className="bannerContainer">
                <Welcome />
                <FurtherNavigation />
            </div>
            <div className = "secondaryMain">
                <div className="mainLeft">
                    <PhotoGallery />
                    <ClubHistory />
                    <Membership />
                </div>
                <Aside />
            </div>
        </div>
    )
}

export default Main