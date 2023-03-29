import React from "react";
import SearchBarEnhancement from "../SearchBar";

const ClubStatLeaderBoard = (props) => {
    
    const tableData = [
        {rank:"1",player:"B. Glover",goals:"6",assists:"4"},
        {rank:"2",player:"M. Prince",goals:"4",assists:"3"},
        {rank:"3",player:"J. Jones",goals:"3",assists:"3"},
        {rank:"4",player:"G. Smith",goals:"1",assists:"4"},
        {rank:"5",player:"M. Stewart",goals:"0",assists:"3"},
    ];
    
    const filteredData = tableData.filter((item) =>
    item.rank.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
    item.player.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
    item.goals.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
    item.assists.toLowerCase().includes(props.searchTerm.toLowerCase())
    );


    return (
        <div id = "PlayerStats">
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
                    {filteredData.map((item)=> (
                        <tr key={item.player}>
                            <td>{item.rank}</td>
                            <td>{item.player}</td>
                            <td>{item.goals}</td>
                            <td>{item.assists}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SearchBarEnhancement(ClubStatLeaderBoard)