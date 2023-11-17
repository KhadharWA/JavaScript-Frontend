import React, { useState, useEffect } from 'react'

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);


    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }          
    };

    const scrollToTop = () => {
        window.scrollTo ({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);


    return (
        <button type="button" title="Scroll to Top"
            className={`go-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}> 
            <i className="fa-solid fa-arrow-up"></i>  
        </button>
        
      )
    

}



  

export default GoToTop;