import React from "react";
import { useState } from "react";


const ClubHistory = () => {
    const historyText = `Chadstone Cobras was formed in 2001 by a group of fathers living the the area. They thought that sport was the perfect way to combine exercise and enjoyment. At the time, football, known better in Australia as soccer, was a shadow of Australian Rules Football.
    Despite this, the five original members would make it work, starting with a three versus two set up and rotating throughout the session. Gradually, interest grew and eventually the group was made up of twenty members. From here, the group was able grow and develop a league played throughout Melbourne.
    As of today, this competition is now nation wide, and the Chadstone Cobras are one of the most competitive teams in the league. As of 2023, the Cobras have claimed six division titles.`

    const paragraphs = historyText.split('\n').map((text,index) => {
        return (
        <div key={index}>
            <p>{text}</p>
        </div>
    )});

    const teamList = ["Derick Miller","Rayan French","Kane Griffin","Aidyn Jones","Grayson Smith","Finley Hampton", "Liam Daniels", "Lewis French"];
    const [hidden, setHidden] = useState(true);
    
    const teamMap = teamList.map((n,i)=> <li key={n.i}>{n}</li>);
    const styles = {
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
    return (
        <div id="clubHistory" className="clubHistory">
            <h3>Chadstone Cobras FC: A rich history</h3>
            {paragraphs}
            <div onMouseOver={()=>setHidden(false)} onMouseOut={()=>setHidden(true)}>
            <br />
                <p><span style={styles}>Hover here </span>to see the founding players:</p>
                {hidden ? ``: (<ul>{teamMap}</ul>)}
            </div>
        </div>
    )
}

export default ClubHistory