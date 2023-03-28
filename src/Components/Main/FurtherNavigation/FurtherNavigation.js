import React from "react";

const FurtherNavigation = () => {
    const navList = ["Gallery","Video Highlights","Events","Club History","Injury List","Player Stats","Copyright"];
    const navMap = navList.map((n,i) => (
        <li key={i}><a href={`#${n.split(" ").join("")}`}>{n}</a></li>
        ));

    return(
        <div className="topBannerRight">
            <h3>More Navigation</h3>
                <ul>{navMap}</ul>
        </div>
    )

}

export default FurtherNavigation