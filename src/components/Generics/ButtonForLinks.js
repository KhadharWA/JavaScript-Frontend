import React, { useState, useEffect } from 'react';

const ButtonForLinks = ({ sectionName, links }) => {
  const [isListVisible, setListVisible] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth <= 768);

  const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="details">
      <h5>
        {sectionName}
        <button className="review-text" onClick={toggleListVisibility}>
          <i className={`fa-solid ${isListVisible ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
        </button>
      </h5>
      {isMobileScreen && isListVisible && (
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      )}
      {!isMobileScreen && (
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default ButtonForLinks;
