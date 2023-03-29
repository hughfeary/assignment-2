import React from "react";

const NavigationBar = () => {
    const navItems = ["Welcome","Fixture","Membership","Sponsors", "Contact Us"];

    const mappedNavItems = navItems.map((n,i) => (
        <div className={(i%2 === 0) ? "a" : "b"}><a href={`#${n.split(" ").join("")}`}>{n}</a></div>
    ))
    return (
        <div className="NavigationBar">
            {mappedNavItems}
        </div>
    )
}

export default NavigationBar