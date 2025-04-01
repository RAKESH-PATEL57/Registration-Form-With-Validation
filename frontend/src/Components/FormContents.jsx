import { useState } from "react";
import Heading from "./Heading";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
function FormContents()
{
   
    const[cretatedAccount, setCretatedAccount] = useState(true);

    function handleFormChange()
    {
        setCretatedAccount(!cretatedAccount);
    }
 
    return(
        <div className="form-contents">
            <Heading accountExists={cretatedAccount}/>
            <form action="#">
              {(cretatedAccount == true) ? <LogIn/> : <SignUp />} 
            </form>
            <div className="form-bottom">
                 <p className="sub-heading"> {cretatedAccount ? "Don't have an Account ? " : "Already a have an Account ? "}</p>
                 <button onClick={handleFormChange}>{cretatedAccount ? "SignUp" : "LogIn"}</button>
            </div>
        </div>
    );
}

export default FormContents;