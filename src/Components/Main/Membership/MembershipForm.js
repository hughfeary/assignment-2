import React from "react";




export function newForm() {
    let rowsCent = document.getElementsByClassName("rowContainerCentered");
    let rows = document.getElementsByClassName("rowContainer");
    let inputList = document.getElementsByTagName("input");
    for (let i=0;i<rowsCent.length;i+=1) {
        rowsCent[i].style.display="flex";
    }
    for (let i=0; i<rows.length;i+=1) {
        rows[i].style.display="flex";
    }
    document.getElementById("formConfirmation").style.display = "none";
    
    for (let i=0;i<inputList.length;i+=1) {
        inputList[i].value="";
    }
    document.getElementById("freeText").value = "";
}

export function buttonSubmit() {
    let rowsCent = document.getElementsByClassName("rowContainerCentered");
    let rows = document.getElementsByClassName("rowContainer");
   
    for (let i=0;i<rowsCent.length;i+=1) {
        rowsCent[i].style.display="none";
    }
    for (let i=0; i<rows.length;i+=1) {
        rows[i].style.display="none";
    }
    document.getElementById("formConfirmation").style.display ="flex";
}



const MembershipForm = (props) => {
    function focus(id) {
        document.getElementById(id).style.backgroundColor = "#CCFFFF";
    }

    const blur = (id) => {
        document.getElementById(id).style.backgroundColor = "rgb(247, 251, 255)";
    }
    
    
    return (
        <form id="membershipForm" name="membershipForm" method="post">
            <div className="rowForm">
                <div className="rowContainer">
                    <div id="titleBox" className="formBox">
                        <label className="label" for="title">Title</label>
                        <input id="titleInput" onFocus={() => focus("titleInput")} onBlur={()=>blur("titleInput")} type="text" name="title" aria-label="Title" />
                    </div>
                    <div id="firstNameBox" className="formBox">
                        <label className="label" for="firstName">First name</label>
                        <input id="firstName" onFocus={() => focus("firstName")} onBlur={()=>blur("firstName")} type="text" aria-label="First name" />
                    </div>
                    <div id="lastNameBox" className="formBox">
                        <label className="label" for="lastName">Last name</label>
                        <input id="lastName" onFocus={() => focus("lastName")} onBlur={()=>blur("lastName")} type="text" aria-label="Last name" />
                    </div>
                </div>
            </div>
            <div className="rowForm">
                <div className="rowContainer">
                    <div id="emailBox" className="formBox">
                        <label className="label" for="email">Email</label>
                        <input type="text" name="email" id="email" onFocus={() => focus("email")} onBlur={()=>blur("email")} aria-label="email" />
                    </div>
                    <div id="mobileBox" className="formBox">
                        <label className="label" for="mobile">Mobile</label>
                        <input type="text" name="mobile" id="mobile" onFocus={() => focus("mobile")} onBlur={()=>blur("mobile")} aria-label="Mobile" />
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
                        <textarea id="freeText" onFocus={() => focus("freeText")} onBlur={()=>blur("freeText")} placeholder="Questions, concerns or anything you would like to share..."></textarea>
                    </div>
                </div>
            </div>
            <div className="rowForm">
                <div className="rowContainerCentered">
                    <button id="buttonSubmit" onClick={()=>props.buttonSubmit()} type="button" aria-label="Submit membership form">Submit</button>
                </div>
            </div>
            <div id="formConfirmation">
                <p>Thank you, your form has been submitted.</p>
                <button id="newForm" onClick={() => props.newForm()} type="button" aria-label="Submit another form">Submit another form</button>
            </div>
        </form>
    )
}

export default MembershipForm




