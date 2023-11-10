import React from 'react'
import SectionTitle from '../../Generics/SectionTitle'
import Button from '../../Generics/Button'

import '../Main_Home/SignUp.css'
import Backgroundwavylines from '../../../assets/images/Background-wavy-lines.svg'

const SignUp = () => {
  return (
    <section className="signup">
        <img className="Background-wavy-lines" src={Backgroundwavylines} alt="" />
        <div className="container">
            <SectionTitle  description="Get News Updates By Signup" />
            <form  className="signup-info">
                <input id="email" type="email" placeholder="username@domain.com"  />
                <Button type="yellow" title="Subscribe" url="/subscribe" />
            </form>
        </div>
    </section> 
  )
}

export default SignUp