/* eslint-disable react/prop-types */

// import { useState } from "react";

function Heading(props)
{

    
    return(
        
        <div className="heading-contents">
            <p className="sub-heading">START FOR FREE</p>
            <div className="intro-heading">
                <h1>Create</h1>
                <h1>your account</h1>
            </div>
            <p className="sub-heading">Already a have an Account ? <button onClick={ props.toggle}>Log In</button></p>
        </div>
    );
}


export default Heading;