import React from 'react'
import { NavLink } from 'react-router-dom'
import Backgroundlinesfooter from '../../assets/images/Background-lines-footer.svg'
import Logotype2 from '../../assets/images/Logo-type-2.svg'
import './Footer.css';
import ButtonForLinks from '../Generics/ButtonForLinks';

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
                <ButtonForLinks sectionName="Company" links={[
                    { label: "About", url: "eBooks.html" },
                    { label: "Features", url: "eBooks.html" },
                    { label: "Works", url: "eBooks.html" },
                    { label: "Career", url: "eBooks.html" },
                ]}  />
                <ButtonForLinks sectionName="Help" links={[
                    { label: "Customer Support", url: "/Support" },
                    { label: "Delivery Details", url: "/Support" },
                    { label: "Terms & Conditions", url: "/Support" },
                    { label: "Privacy Policy", url: "/Support" },
                ]}  />
                <ButtonForLinks sectionName="Resources" links={[
                    { label: "Free eBooks", url: "/eBooks" },
                    { label: "Development tutorial", url: "/eBooks" },
                    { label: "How to - Blog", url: "/eBooks" },
                    { label: "Youtube Playlist", url: "/eBooks" },
                ]}  />
                <ButtonForLinks sectionName="Links" links={[
                    { label: "Free eBooks", url: "/eBooks" },
                    { label: "Development tutorial", url: "/eBooks" },
                    { label: "How to - Blog", url: "/eBooks" },
                    { label: "Youtube Playlist", url: "/eBooks" },
                ]}  />
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