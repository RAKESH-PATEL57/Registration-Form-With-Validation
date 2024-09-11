import { useState } from "react";
import Heading from "./Heading";
import SignIn from "./SignIn";
import LogIn from "./LogIn";
function FormContents()
{
   
    const[condition, setCondition] = useState(true);

    function changeCondition()
    {
        console.log("click");
        setCondition(!condition);
    }
 
    return(
        <div className="form-contents">
            <Heading toggle={changeCondition}/>
            <form action="#">
              {(condition == true) ? <SignIn toggle={changeCondition} /> : <LogIn />} 
            </form>

        </div>
    );
}

export default FormContents;