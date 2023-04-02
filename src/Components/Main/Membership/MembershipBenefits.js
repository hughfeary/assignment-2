import React from "react";

const MembershipBenefits = () => {
    const benefitList = ["Free tickets to regular season games","Discounted finals tickets","Access to our Cobra's Social Club","Priority seating at home games","Entry into the Weekly raffle","And much more!"]
    const memberBenefits = benefitList.map((n,i) => (
        <li key={i}>{n}</li>
    ));

    return (
        <div className="MembershipBenefits">
            <h3>As a member you get:</h3>
                <ul>
                    {memberBenefits}
                </ul>
        </div>
    )
}

export default MembershipBenefits