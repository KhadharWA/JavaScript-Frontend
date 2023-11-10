import React from 'react'
import MyForm from '../../Generics/validate'


import './Form.css'



const Form = () => {
  return (
    <section className="leave-massage">
      <div id="status-messages"></div>
            <div className="container">
                <div className="section-title">
                    <h2>Leave us a message for any information.</h2>
                </div>   
               <MyForm />
            </div>
        </section>
  )
}

export default Form



