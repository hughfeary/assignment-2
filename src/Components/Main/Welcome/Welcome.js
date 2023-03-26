import React from "react";

const Welcome = () => {
    const welcomePara = `This is the online hub for Chadstone Cobras FC. Here you can see
    any and all information about the club including the fixture, results,
    club membership and much more. Scroll down or use the navigation above. 
    We look forward to having you as part of the club.`
    return (
        <div className="topBannerLeft">
            <h2>Welcome to the Cobra Den</h2>
            <p>{welcomePara}</p>
        </div>
    )
}

export default Welcome