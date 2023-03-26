import React from "react";
import SearchBarEnhancement from "../SearchBar";

const Events = () => {
    return (
        <div id="events" className="asideItem">
            <h3>Upcoming events</h3>
                <table id="eventsTable" className="table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Event</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>March 16</td>
                            <td>Sausage sizzle</td>
                        </tr>
                        <tr>
                            <td>April 6</td>
                            <td>Poker night</td>
                        </tr>
                        <tr>
                            <td>April 20</td>
                            <td>Club anniversary dinner</td>
                        </tr>
                        <tr>
                            <td>May 11</td>
                            <td>Event TBC</td>
                        </tr>
                        <tr>
                            <td>June 10</td>
                            <td>Event TBC</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default SearchBarEnhancement(Events)