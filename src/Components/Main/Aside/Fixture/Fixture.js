import React from "react";
import SearchBarEnhancement from "../SearchBarEnhancement";

const Fixture = (props) => {
    const tableData = [
        {date:"March 18",versus:"Cobras",homeAway:"Home"},
        {date:"March 25",versus:"Renegades",homeAway:"Home"},
        {date:"April 4",versus:"Rovers",homeAway:"Away"},
        {date:"April 11",versus:"Tillsters",homeAway:"Home"},
        {date:"April 18",versus:"Dodgers",homeAway:"Away"},
    ];
    
    const filteredData = tableData.filter((item) =>
    item.date.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
    item.versus.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
    item.homeAway.toLowerCase().includes(props.searchTerm.toLowerCase())
    );

    return (
        <div id="Fixture">
            <h3>Fixture</h3>
            <table id="fixtureTable" className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Versus</th>
                        <th>Home/Away</th>
                    </tr>
                </thead>
                <tbody>
                {filteredData.map((item)=> (
                            <tr key={item.date}>
                                <td>{item.date}</td>
                                <td>{item.versus}</td>
                                <td>{item.homeAway}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )

}

export default SearchBarEnhancement(Fixture)