import React from "react";


const ClubHistory = () => {
    const historyText = `Chadstone Cobras was formed in 2001 by a group of fathers living the the area. They thought that sport was the perfect way to combine exercise and enjoyment. At the time, football, known better in Australia as soccer, was a shadow of Australian Rules Football.\n 
    Despite this, the five original members would make it work, starting with a three versus two set up and rotating throughout the session. Gradually, interest grew and eventually the group was made up of twenty members. From here, the group was able grow and develop a league played throughout Melbourne.\n
    As of today, this competition is now nation wide, and the Chadstone Cobras are one of the most competitive teams in the league. As of 2023, the Cobras have claimed six division titles.`

    const paragraphs = historyText.split('\n').map((text,index) => {
        return (
        <div>
            <p key={index}>{text}</p>
        </div>
    )});

    return (
        <div className="clubHistory">
            <h3>Chadstone Cobras FC: A rich history</h3>
            {paragraphs}
            <br />
        </div>
    )
}

export default ClubHistory