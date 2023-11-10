import React from 'react';
import ServiceBox from './ServiceBox';
import SectionTitle from '../../Generics/SectionTitle';
import Button from '../../Generics/Button';

import './OurServices.css';
import BackgroundServiceslines from '../../../assets/images/Background-Services-lines.svg'






const OurServices = (title, description) => {
  return (
    <section className="services">
        <img className="Background-Services-lines" src={BackgroundServiceslines} alt="" />
        <div className="container">
            <div className="center-content1">
                <SectionTitle title="Our Services" description="We Provide The Best Service For Consulting" />               
                <div className="main">
                    

                    <ServiceBox className="panel"   title ="Business Advice" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/businessadvice" />
                    <ServiceBox className="panel-2" title ="Startup Business" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/startupbusiness"  />
                    <ServiceBox className="panel"   title ="Financial Advice" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/ginancialadvice"  />
                    <ServiceBox className="panel"   title ="Risk Management" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/riskmanagement"  />



                </div>
                <div className="link">
                    <Button type="none" title="Browse Services" url="/services" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurServices