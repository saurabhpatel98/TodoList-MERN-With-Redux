import React from 'react';
import {Link,NavLink,withRouter} from 'react-router-dom'
function Navbar (props){
  return (
     <nav>
        <div className="nav-wrapper" style={{background:"#6200ee"}}>
        <Link to="/home" className="brand-logo">Todo List</Link>
        <ul id="nav-mobile" className="right">
            <li><NavLink to="/home">home</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
        </ul>
        </div>
  </nav>
  )
}

export default withRouter(Navbar);