import React from 'react'
import Button from '../../Generics/Button'
import SectionTitle from '../../Generics/SectionTitle'

import './About.css'
import AWomen from '../../../assets/images/A woman.svg'




const About = () => {
  return (
        <section className="About">
            <div className="container">
                <div className="left">
                    <div className="image-container">
                        <img src={AWomen} alt="a woman" />
                        <div className="text-box">
                            <h5 className="name">Samantha Brown,</h5>
                            <h5 className="role">Founder</h5>
                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="content">
                        <SectionTitle title="About Company" description="We Are Business Consulting & Credit Repair Experts" />
                        <div className="under-text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                            <p className="under-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                            <Button type="black" title="Learn More" url="/services/learn-more" />
                            <span className="play-button"><i className="fa-sharp fa-solid fa-play"></i></span>
                            <span className="play-text">Intro Video</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default About