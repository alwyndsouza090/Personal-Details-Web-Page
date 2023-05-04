import React from 'react'
import profileimg from "../images/profile.png"
import "../Pages/style.css"
import "react-bootstrap"
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
<div className='row'>
<div className='col-5'>
<img src={profileimg} className='proimg'/>
</div>
<div className='col-5'>
<Navbar/>
</div>
</div>
    </>
  )
}

export default Home