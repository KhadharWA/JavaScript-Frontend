import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [btnClasses, setBtnClasses] = useState('menu-bars')

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setBtnClasses(!showMenu ? 'menu-bars active' : 'menu-bars')
  };

  return (
    <header>
        
            <div className="container">
                
                    <button className={btnClasses} onClick={toggleMenu}>
                        <i className="fa-solid fa-bars-staggered"></i>
                    </button>
                {showMenu && (
                    <nav className="nav">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/Service">Service</NavLink></li>
                            <li><NavLink to="/News">News</NavLink></li>
                            <li><NavLink to="/Contacts">Contact</NavLink></li>
                        </ul>
                    </nav>
                )}
            </div>
        
    </header>
  );
};

export default Navigation;


