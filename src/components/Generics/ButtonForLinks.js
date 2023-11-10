import React, { useState } from 'react';

const ButtonForLinks = () => {
    const [isListVisible, setListVisible] = useState(false);

        const toggleListVisibility = () => {
            setListVisible(!isListVisible);
        };



  return (
    <nav className="details">
    <h5>
      Link
      <button className="review-text" onClick={toggleListVisibility}>
        <i className={`fa-solid ${isListVisible ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
      </button>
    </h5>
    {isListVisible && (
      <ul>
        <li><a href="eBooks.html">Free eBooks</a></li>
        <li><a href="eBooks.html">Development tutorial</a></li>
        <li><a href="eBooks.html">How to - Blog</a></li>
        <li><a href="eBooks.html">Youtube Playlist</a></li>
      </ul>
    )}
  </nav>
  )
}

export default ButtonForLinks