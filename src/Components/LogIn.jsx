function LogIn()
{
    return (
       <>
         <div className="user-details">
                <div className="input-containers">
                    <input type="text" placeholder="Enter Your First Name" required/>
                </div>
                <div className="input-containers">
                    <input type="text" placeholder="Enter Your Last Name" required/>
                </div>
         </div>
         <div className="user-details">
                <div className="input-containers">
                    <input type="email" placeholder="Email" required/>
                </div>
                <div className="input-containers">
                    <input type="password" placeholder="Password" required/>
                </div>
         </div>       
         <button className="subBtn" type="submit">Log In</button>
       </>
    )
}

export default LogIn;