import React from 'react'



import './Lista.css'
import ListaBox from './ListaBox'




const Lista = () => {
  return (
        <section className="listaa">
            <div className="container">
                <div className="box">
                    <i className="fa-regular fa-location-dot"></i>
                    <ListaBox title="Visit us" name="Sveavägen 31" email="111 34 STOCKHOLM" />   
                </div>
                <div className="box">
                    <i className="fa-light fa-phone"></i>
                    <ListaBox title="Call us" name="+46 (8) 121 470 50" email="+46 (8) 121 470 51" />                      
                </div>
                <div className="box">
                    <i className="fa-solid fa-envelope"></i>
                    <ListaBox title="Email us" name="info@crito.com" email="support@crito.com" />
                </div>
            </div>    
        </section>
  )
}

export default Lista