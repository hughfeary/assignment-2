import React from "react";


const MembershipForm = () => {
    return (
        <form id="membershipForm" name="membershipForm" method="post">
            <div className="rowForm">
                <div className="rowContainer">
                    <div id="titleBox" className="formBox">
                        <label className="label" for="title">Title</label>
                        <input id="titleInput" type="text" name="title" aria-label="Title" />
                    </div>
                    <div id="firstNameBox" className="formBox">
                        <label className="label" for="firstName">First name</label>
                        <input id="firstName" type="text" aria-label="First name" />
                    </div>
                    <div id="lastNameBox" className="formBox">
                        <label className="label" for="lastName">Last name</label>
                        <input id="lastName" type="text" aria-label="Last name" />
                    </div>
                </div>
            </div>
            <div className="rowForm">
                <div className="rowContainer">
                    <div id="emailBox" className="formBox">
                        <label className="label" for="email">Email</label>
                        <input type="text" name="email" aria-label="email" />
                    </div>
                    <div id="mobileBox" className="formBox">
                        <label className="label" for="mobile">Mobile</label>
                        <input type="text" name="mobile" aria-label="Mobile" />
                    </div>
                </div>
            </div>
            <div className="rowForm">
                <div id="durationHeader" className="rowContainerCentered">
                    <p>Membership Duration</p>
                </div>
            </div>
            <div className="rowForm">
                <div className="rowContainerCentered">
                    <div id="halfSeasonBox" className="formBox">
                        <label className="label" for="halfSeason">Half season</label>
                        <input type="radio" name="halfSeason" aria-label="Half season membership" />
                    </div>
                    <div id="fullSeason" className="formBox">
                        <label className="label" for="twelveMonths">Full season </label>
                        <input type="radio" name="fullSeason" aria-label="Full season membership" />
                    </div>
                </div>
            </div>
            <div className="rowForm">
                <div className="rowContainerCentered">
                    <div id="extendedText" className="formBox">
                        <label className="label" for="freeText">Comments</label>
                        <textarea id="freeText" placeholder="Questions, concerns or anything you would like to share..."></textarea>
                    </div>
                </div>
            </div>
            <div className="rowForm">
                <div className="rowContainerCentered">
                    <button id="formSubmit" onclick="buttonSubmit()" type="button" aria-label="Submit membership form">Submit</button>
                </div>
            </div>
            <div id="formConfirmation">
                <p>Thank you, your form has been submitted.</p>
                <button id="additionalForm" onclick="newForm()" type="button" aria-label="Submit another form">Submit another form</button>
            </div>
        </form>
    )
}

export default MembershipForm




