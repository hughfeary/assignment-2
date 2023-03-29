import React, {useState} from "react";
import SearchBarEnhancement from "../SearchBar";

const InjuryList = (props) => {

    const [tableData, setEventData] = useState([
        {player:"T. Dover",injury:"Hamstring",estReturn:"2"},
        {player:"W. Hunt",injury:"Back",estReturn:"1"},
        {player:"J. Jones",injury:"Shoulder",estReturn:"3"},
        {player:"G. Smith",injury:"Hip",estReturn:"1"},
        {player:"M. Stewart",injury:"Rib",estReturn:"2"},
    ]);
    
    const filteredData = tableData.filter((item) =>
    item.player.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
    item.injury.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
    item.estReturn.toLowerCase().includes(props.searchTerm.toLowerCase())
    );

    return (
        <div id="InjuryList" name="injuryList">
            <h3>Injury List</h3>
            <table id="injuryListTable" className="table">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Injury</th>
                        <th>Est. return (wk)</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item)=> (
                        <tr key={item.player}>
                            <td>{item.player}</td>
                            <td>{item.injury}</td>
                            <td>{item.estReturn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default SearchBarEnhancement(InjuryList)