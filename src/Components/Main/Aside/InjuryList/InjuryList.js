import React from "react";

const InjuryList = () => {
    return (
        <div name="injuryList" className="asideItem">
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
                    <tr>
                        <td>T. Dover</td>
                        <td>Hamstring</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>W. Hunt</td>
                        <td>Back</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>J. Jones</td>
                        <td>Shoulder</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>G. Smith</td>
                        <td>Hip</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>M. Stewart</td>
                        <td>Rib</td>
                        <td>2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default InjuryList