import React from "react";
import vidHighlight from "../../../../videos/highlightVideo.mp4"
import SearchBarEnhancement from "../SearchBar";

const VideoHighlights = () => {
    return (
        <div id="VideoHighlights" className="asideItem">
            <h3>Highlights</h3>
            <video muted controls>
                <source src={vidHighlight} type="video/mp4" alt="Video highlight of the team getting a goal very soon after to kickoff" />
            </video>
        </div>
    )

}

export default VideoHighlights