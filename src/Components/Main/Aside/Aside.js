import React from "react";
import ClubStatLeaderBoard from "./ClubStatLeaderBoard/ClubStatLeaderBoard";
import Events from "./Events/Events";
import Fixture from "./Fixture/Fixture";
import InjuryList from "./InjuryList/InjuryList";
import VideoHighlights from "./VideoHighlights/VideoHighlights";

const Aside = () => (
        <div className="aside">
            <Events />
            <VideoHighlights />
            <Fixture />
            <InjuryList />
            <ClubStatLeaderBoard />
        </div>
    )

export default Aside