import React from "react";

const Contact = () => {
    return (
        <div id="ContactUs" className="Contact">
            <h3>Contact us</h3>
            <address>
            <a href="mailto:admin@chadstonecobrasfc.com@subject=Enquiriry">Email our team</a>
            </address>
            <div className="contactContainer">
                <p className="lineOne">Phone</p>
                <p className="lineTwo">(03) 9881 7261</p>
            </div>
            <div className="contactContainer">
                <p className="lineOne">Address</p>
                <p className="lineTwo">Jordan Reserve <br/> 36 Burton Street<br/>Chadstone<br/>
            VIC 3148</p>
            </div>
        </div>
    )
}

export default Contact