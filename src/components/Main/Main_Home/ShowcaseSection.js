import React from 'react'
import BackgroundHeaderlines from '../../../assets/images/Background-Header-lines.svg'
import Man from '../../../assets/images/Man.svg'



import './ShowcaseSaction.css';
import Button from '../../Generics/Button';




const ShowcaseSection = () => {
  return (
    <section className="showcase">
            <img className="Background-lines" src={BackgroundHeaderlines} alt="" />
            <div className="container">
                <div className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <Button type="yellow" title="Get Consulting" url="/services/get-consulting" />
                    <Button type="none" title="Learn More" url="/services/learn-more" />
                    
                </div>
                <img src={Man} alt="a man" />

                </div>

        </section>
  )
}

export default ShowcaseSection