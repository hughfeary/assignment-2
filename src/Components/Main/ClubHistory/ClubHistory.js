import React from "react";
import { useState } from "react";


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

    const teamList = ["Derick Miller","Rayan French","Kane Griffin","Aidyn Jones","Grayson Smith","Finley Hampton", "Liam Daniels", "Lewis French"];
    const [hidden, setHidden] = useState(true);
    
    function showPlayers () {
        teamList.map((n, i) => {
            return (
                <div>
                    <ul><li key={i}>{n}</li></ul>
                </div>
            )
        });
    };

    return (
        <div className="clubHistory">
            <h3>Chadstone Cobras FC: A rich history</h3>
            {paragraphs}
            <br />
            <span>
                <p onMouseOver={()=>setHidden(false)} onMouseOut={()=>setHidden(true)}>Hover here to see the founding players:</p>
                {hidden ? `hidden`: showPlayers()}
            </span>
        </div>
    )
}

export default ClubHistory