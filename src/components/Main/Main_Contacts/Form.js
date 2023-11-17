import React from 'react'
import MyFormQ from '../../Generics/MyFormQ'


import './Form.css'



const Form = () => {
  return (
    <section className="leave-massage">
      <div id="status-messages"></div>
            <div className="container">
                <div className="section-title">
                    <h2>Leave us a message for any information.</h2>
                </div>   
               <MyFormQ />
            </div>
        </section>
  )
}

export default Form



