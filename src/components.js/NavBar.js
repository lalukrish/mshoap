import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css"
const NavBar = () =>{
 return(
   

    <div className="navbar-fixed">

    <nav>
        <div className="front_view">
            <div className="nav-wrapper green">
            <Link to="/" className="brand-logo center">HOME</Link>
            <Link to="/" data-target="sidenav-list" className="sidenav-trigger right"><i className="material-icons">menu</i></Link>
            <ul >
            <li><Link to ="/signup">signup</Link> </li>
            <li><Link to ="/signin">signin</Link> </li>
            <li><Link to ="/profile">createpost</Link></li>
        </ul>
       
   </div>
   </div>
 </nav>
 <ul id="sidenav-list" class="sidenav">
 <li><Link to="/"><i class="material-icons">cloud</i>First Link With Icon</Link></li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  


<h1>{document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  })};
</h1>


 </div>
 

 
     
 );
}

export default NavBar;