import React from 'react'
import Footer from '../components/Footer/Footer'
import Image from '../assets/images/Notfound.jpg'

import '../index.css'
import Button from '../components/Generics/Button'



const NotFound = () => {
  return (
    <div className="wrapper">
      <main>
        <section className="Notfound-section">
          <img src={Image}   alt=""/>
          <h1>Page not Found!</h1>
          <p>We're sorry, the page you requested could not be found</p>
          <p>Please go back to the homepage</p>
          <Button type="long-yellow" title="Go Home" url="/" />
        </section>
      </main>
      <Footer />
      </div>
    
  )
}

export default NotFound