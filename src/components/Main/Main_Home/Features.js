import React from 'react'
import Button from '../../Generics/Button'
import FeaturesBox from './FeaturesBox'


import './Features.css'

const Features = () => {
  return (
    <section className="Features">
        <div className="container">
            <div className="section-title">
                <p>Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <Button type="/" title="Learn More" url="/services/learn-more" />
            </div>
            <div className="right-details">
                <div className="box">
                    <div className="box-1">
                        <i className="fa-light fa-handshake"></i>
                        <FeaturesBox title="Business Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    </div>    
                </div>
                <div className="box">
                    <div className="box-1">
                        <i className="fa-sharp fa-light fa-lightbulb-on"></i>    
                        <FeaturesBox title="Startup Business" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />            
                    </div>    
                </div>
                <div className="box">
                    <div className="box-1">
                        <i className="fa-sharp fa-light fa-chart-mixed"></i>
                        <FeaturesBox title="Financial Advices" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    </div>    
                </div>
                <div className="box">
                    <div className="box-1">
                        <i className="fa-sharp fa-light fa-user-gear"></i>
                        <FeaturesBox title="Risk Management" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    </div>    
                </div>
            </div>
        </div>       
    </section>
  )
}

export default Features