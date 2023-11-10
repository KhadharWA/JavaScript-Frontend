import React from 'react'
import { NavLink } from 'react-router-dom'
import Backgroundlinesfooter from '../../assets/images/Background-lines-footer.svg'
import Logotype2 from '../../assets/images/Logo-type-2.svg'
import './Footer.css';

const Footer = () => {
  return (
    <footer>
    
    <section className="footer">
        <img className="Background-lines-footer" src={Backgroundlinesfooter} alt="Background lines" />
        <div className="container">
            <div className="About-Company">
                <a href="Home.html"><img src={Logotype2} alt="crito Logotype" /></a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>
            <nav className="details">
                <h5>Company <button className="review-text"><i className="fa-solid fa-angle-down"></i></button></h5>
                <ul>
                    <li><a href="About.html">About</a></li>
                    <li><a href="Features.html">Features</a></li>
                    <li><a href="Works.html">Works</a></li>
                    <li><a href="Career.html">Career</a></li>
                </ul>
                </nav>
                <nav className="details">
                    <h5>Help <button className="review-text"><i className="fa-solid fa-angle-down"></i></button></h5>
                    <ul>
                        <li><a href="contacts.html">Customer Support</a></li>
                        <li><a href="contacts.html">Delivery Details</a></li>
                        <li><a href="contacts.html">Terms & conditions</a></li>
                        <li><a href="contacts.html">Privacy policy</a></li>
                    </ul>
                </nav>
                <nav className="details">
                    <h5>Resources <button className="review-text"><i className="fa-solid fa-angle-down"></i></button></h5>
                    <ul>
                        <li><a href="eBooks.html">Free eBooks</a></li>
                        <li><a href="eBooks.html">Development tutorial</a></li>
                        <li><a href="eBooks.html">How to - Blog</a></li>
                        <li><a href="eBooks.html">Youtube Playlist</a></li>
                    </ul>
                </nav>
                <nav className="details">
                    <h5>Link <button className="review-text"><i className="fa-solid fa-angle-down"></i></button></h5>
                    <ul>
                        <li><a href="eBooks.html">Free eBooks</a></li>
                        <li><a href="eBooks.html">Development tutorial</a></li>
                        <li><a href="eBooks.html">How to - Blog</a></li>
                        <li><a href="eBooks.html">Youtube Playlist</a></li>
                    </ul>
                </nav>
    </div>
</section>

    
    <section className="copyright">
        <div className="container">
            <div className="last">
                <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
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
    </section>
</footer>
  )
}

export default Footer