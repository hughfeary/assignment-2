import React from "react";
import MembershipForm from "./MembershipForm";
import MembershipBenefits from "./MembershipBenefits";
import MembershipHeader from "./MembershipHeader"


const Membership = () => {
    return (
        <div id="Membership" className="Membership">
            <MembershipHeader />
            <div className="membershipBottomRow">
                <MembershipBenefits />
                <MembershipForm />
            </div>
        </div>
    )
}

export default Membership