import React,{useState} from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";


const Signup =()=>{
  const history = useHistory();
     const [name, setName] = useState(" ");
     const [password, setPassword] = useState(" ");
     const [email, setEmail] = useState(" ");
     const postData = () => {
      
        fetch("/signup", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            password,
            email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.error) M.toast({ html: data.error, classes: "#f44336 red" });
            else {
              M.toast({ html: data.message, classes: "#4caf50 green" });
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
    <div class="coloumn">

        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text"  class="validate" value={name} onChange={(e)=>setName(e.target.value)}></input>
          <label for="icon_prefix"> Name</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">email</i>
          <input id="icon_telephone" type="tel" class="validate" value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
          <label for="icon_telephone">Email</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">password</i>
          <input id="icon_telephone" type="tel" class="validate" class="validate" value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
          <label for="icon_telephone">Password</label>
          <button className="btn #2196f3 blue" onClick={()=> postData()}>Login</button>
            <h5> <Link to ="signup">Don't have have an account </Link>{ " "} </h5>
        </div>
      </div>
      </div>
      </div>
  )
}
 export default Signup;