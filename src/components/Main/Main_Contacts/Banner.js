import React from 'react'
import { NavLink } from 'react-router-dom'


import './Banner.css'
import BackgroundHeaderlines from '../../../assets/images/Background-Header-lines.svg'



const Banner = () => {
  return (
    <section className="banner">
        <img className="Background-lines" src={BackgroundHeaderlines} alt=""/>
        <div className="container">
            <div className="center-content2">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Contacts">Contact</NavLink></li>
            </div>    
            <div className="SectionTitle">
                <h1>Let’s Connect</h1> 
            </div>         
        </div>
    </section>
  )
}

export default Banner