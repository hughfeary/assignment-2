import React, { useState } from "react";
import SearchBarEnhancement from "../SearchBar";

const Events = (props) => {

    const [tableData, setEventData] = useState([
        {date:"March 16",event:"Sausage sizzle"},
        {date:"April 6",event:"Poker night"},
        {date:"April 20",event:"Club anniversary dinner"},
        {date:"May 11",event:"Event TBC"}, 
        {date:"June 10",event:"Event TBC"},
    ]);
    
    const filteredData = tableData.filter((item) =>
    item.event.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
    item.date.toLowerCase().includes(props.searchTerm.toLowerCase())
    );

    return (
        <div id="Events">
            <h3>Upcoming events</h3>
                <table id="eventsTable" className="table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Event</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item)=> (
                            <tr key={item.date}>
                                <td>{item.date}</td>
                                <td>{item.event}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default SearchBarEnhancement(Events)