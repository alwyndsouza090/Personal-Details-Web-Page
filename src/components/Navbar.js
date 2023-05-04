import { useState } from "react"
import React from 'react'
import "../components/navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {


    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <div style={{margin:'70px'}}>
<div className='nav my-5' >
    <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className='item px-4'> 
            <NavLink to="/Resume" className="navlink">Resume</NavLink>
        </li>

        <li className='item px-4'>
            <NavLink to="/Projects" className="navlink">Projects</NavLink>
        </li>

        <li className='item px-4'>
            <NavLink to="/Contactus" className="navlink">ContactUs</NavLink>
        </li>
        
    </ul>
    <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
</div>
<h3 className='h3'>ALWYN D'SOUZA

</h3>
<div className=''>
    <h1>TECHNICAL SKILLS:-</h1>
    <h4>Front-End Technologies:-</h4>
    <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JAVASCRIPT</li>
        <li>REACT JS</li>
    </ul>
    <h4>Back-End Technologies:-</h4>
    <ul>
        <li>NODE Js</li>
    </ul>

    <h4>Data Base Languages:-</h4>
    <ul>
        <li>SQL (STRUCTURAL QUERY LANGUAGE)</li>
        <li>MYSQL</li>
        <li>MONGODB</li>
    </ul>
    
</div>
    </div>

  )
}

export default Navbar