import React from 'react';
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <div>
     
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
       
  <div className="container-fluid">
    <a className="navbar-brand" href="#">React-CART</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
      
      <li className="nav-item">
      

       <NavLink className='nav-link' exact to="/">Home</NavLink>
      
      </li>
      <li className="nav-item">
       
       <NavLink className='nav-link' exact to="signup">Sign-Up</NavLink>
      </li>
      <li className="nav-item">
       
       <NavLink className='nav-link'  to="login">Login</NavLink>
      </li>
      <li className="nav-item">
       
       <NavLink className='nav-link' to="contact">Contacts</NavLink>
      </li>
      
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
 
</nav>
 

    </div>
  )
}

export default Navbar