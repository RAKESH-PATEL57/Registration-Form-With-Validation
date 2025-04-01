/* eslint-disable react/prop-types */

// import { useState } from "react";

function Heading({accountExists})
{

    
    return(
        
        <div className="heading-contents">
            <div className="intro-heading">
                <h1>{accountExists ? "LogIn Form" : "Resistration Form"}</h1>
            </div>
        </div>
    );
}


export default Heading;