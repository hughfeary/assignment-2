import React from "react";
import MembershipForm from "./MembershipForm";
import MembershipBenefits from "./MembershipBenefits";
import MembershipHeader from "./MembershipHeader";
import { buttonSubmit } from "./MembershipForm";
import { newForm } from "./MembershipForm";


const Membership = () => {
    return (
        <div id="Membership" className="Membership">
            <MembershipHeader />
            <div className="membershipBottomRow">
                <MembershipBenefits />
                <MembershipForm buttonSubmit={buttonSubmit} newForm={newForm}/>
            </div>
        </div>
    )
}

export default Membership