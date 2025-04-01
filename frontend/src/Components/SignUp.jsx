/* eslint-disable react/prop-types */
function SignUp()
{
    return (
       <>
         <div className="user-details">
                <div className="input-containers">
                    <input type="text" placeholder="Enter Your Name" required/>
                </div>
                <div className="input-containers">
                    <input type="email" placeholder="Email" required/>
                </div>
                <div className="input-containers">
                    <input type="password" placeholder="Password" required/>
                </div>
                <div className="input-containers">
                    <input type="password" placeholder="Confirm Password" required/>
                </div>
         </div>
              
        <button className="subBtn" type="submit">Create account</button>
       </>
    )
}

export default SignUp;