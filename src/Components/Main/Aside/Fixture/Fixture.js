import React from "react";
import SearchBarEnhancement from "../SearchBar";

const Fixture = () => {
    return (
        <div id="fixture" className="asideItem">
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
                    <tr>
                        <td>March 18</td>
                        <td>Cobras</td>
                        <td>Home</td>
                    </tr>
                    <tr>
                        <td>March 25</td>
                        <td>Renegades</td>
                        <td>Home</td>
                    </tr>
                    <tr>
                        <td>April 4</td>
                        <td>Rovers</td>
                        <td>Away</td>
                    </tr>
                    <tr>
                        <td>April 11</td>
                        <td>Tillsters</td>
                        <td>Home</td>
                    </tr>
                    <tr>
                        <td>April 18</td>
                        <td>Dodgers</td>
                        <td>Away</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default SearchBarEnhancement(Fixture)