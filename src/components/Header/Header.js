import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logotype from '../../assets/images/Logo-type.svg'
import './Header.css';
import Button from '../Generics/Button';
import Navigation from '../Generics/Navigation';


const Header = () => {
  return (
    <header>
        <section className="NavSection">
            <div className="container">
                
                    <li className="Logo"><Link to="/"><img src={Logotype} alt="crito Logotype" /></Link></li>
                
                <Navigation />
                <div className="menu">
                    <div className="top-menu">
                        <div className="contact-information">
                            <div className="content-box">
                                <i className="fa-regular fa-phone-volume"></i>
                                +46 (8) 121 470 50
                            </div>
                            <div className="content-box">
                                <i className="fa-regular fa-envelope"></i>
                                info@crito.com
                            </div>
                            <div className="content-box last">
                                <i className="fa-regular fa-location-dot"></i>
                                Sveavägen 31, 111 34 STOCKHOLM
                            </div>
                        </div>
                        <div className="social-media">
                            <ul>
                                <li><NavLink to="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></NavLink></li>
                                <li><NavLink to="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></NavLink></li>
                                <li><NavLink to="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></NavLink></li>
                                <li><NavLink to="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-menu">
                        <nav>
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/Service">Service</NavLink></li>
                                <li><NavLink to="/News">News</NavLink></li>
                                <li><NavLink to="/Contacts">Contact</NavLink></li>
                            </ul>
                        </nav>
                        <Button type="login" title="Login" url="/login" />
                        
                        
                    </div>
                </div>
            </div>
        </section>
    </header>
  )
}

export default Header