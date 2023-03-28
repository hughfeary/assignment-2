import React from "react";

const ClubStatLeaderBoard = () => {
    return (
        <div id = "PlayerStats" className="asideItem">
            <h3>Club Stats Leaderboard</h3>
            <table id="playerStatGoalsAssists" className="table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>Goals</th>
                        <th>Assists</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>B. Glover</td>
                        <td>6</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>M. Prince</td>
                        <td>4</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>J. Jones</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>G. Smith</td>
                        <td>1</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>M. Stewart</td>
                        <td>0</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ClubStatLeaderBoard