import React,{ useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const Signin = () =>{
    const history = useHistory();
  
    const [password, setPassword] = useState(" ");
    const [email, setEmail] = useState(" ");
    const postData = () => {
       
       fetch("/signin", {
         method: "post",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
        
           password,
           email,
         }),
       })
         .then((res) => res.json())
         .then((data) => {
           if (data.error) M.toast({ html: data.error, classes: "#f44336 red" });
           else {
              localStorage.setItem("jwt",data.token)
              localStorage.setItem("user",JSON.stringify(data.user))
             M.toast({ html:"okey your succcesfully logged in", classes: "#4caf50 green" });
             history.push("/");
           }
         })
         .catch((err) => {
           console.log(err);
         });
       
     };
   return(
       <div className="mycard">
           <div className="card auth_card">
               <h2>your profile</h2>
            
               <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
               <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
           <button className="btn #2196f3 blue" onClick={()=> postData()}>Login</button>
           <h5> <Link to ="signup">Don't have have an account </Link>{ " "} </h5>
           </div>
       </div>
   )
}

export default Signin