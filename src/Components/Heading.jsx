/* eslint-disable react/prop-types */

import { useState } from "react";

function Heading(props)
{

    const[condition,setCondition] = useState(true);

    function changeName()
    {
        setCondition(!condition);
    }

    function changing()
    {
        props.toggle;
        changeName();
    }
    
    return(
        
        <div className="heading-contents">
            <p className="sub-heading">START FOR FREE</p>
            <div className="intro-heading">
                <h1>Create</h1>
                <h1>your account</h1>
            </div>
            <p className="sub-heading">Already a member? <button onClick={changing}>{condition ? "Log In": "Sign In"}</button></p>
        </div>
    );
}


export default Heading;