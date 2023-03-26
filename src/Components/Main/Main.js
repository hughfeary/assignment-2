import React from "react";
import Welcome from "./Welcome/Welcome";
import FurtherNavigation from "./FurtherNavigation/FurtherNavigation";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import ClubHistory from "./ClubHistory/ClubHistory";
import Membership from "./Membership/Membership";
import Events from "./Aside/Events/Events";
import VideoHighlights from "./Aside/VideoHighlights/VideoHighlights"
import Fixture from "./Aside/Fixture/Fixture";
import InjuryList from "./Aside/InjuryList/InjuryList";
import ClubStatLeaderBoard from "./Aside/ClubStatLeaderBoard/ClubStatLeaderBoard";

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
                <div className="mainRight">
                    <Events />
                    <VideoHighlights />
                    <Fixture />
                    <InjuryList />
                    <ClubStatLeaderBoard />
                </div>
            </div>
        </div>
    )
}

export default Main