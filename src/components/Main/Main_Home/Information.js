import React from 'react'
import SectionTitle from '../../Generics/SectionTitle';
import Informationbox from './Informationbox';


import './Information.css';
import women from '../../../assets/images/woman.svg'




const Information = () => {
  return (
    <section className="info">
        <div className="container">
            <div className="main-menu">
                <SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency" />
                <div className="panel">
                    <i className="fa-light fa-thumbs-up"></i>
                    <Informationbox title="Process Excellence" description="Lorem, ipsum dolor sit amet consectetur." />
                </div>
                <div className="panel">
                    <i className="fa-sharp fa-regular fa-bullseye-arrow"></i>
                    <Informationbox title="Strategic Planning" description="Lorem, ipsum dolor sit amet consectetur." />
                </div>
                <div className="panel">
                    <i className="fa-sharp fa-light fa-pen-ruler"></i>
                    <Informationbox title="Experience Design" description="Lorem, ipsum dolor sit amet consectetur." />
                </div>
                <div className="panel-1">
                    <i className="fa-light fa-microchip-ai"></i>
                    <Informationbox title="Artificial Inteligence" description="Lorem, ipsum dolor sit amet consectetur." />
                </div>
            </div>
            <div className="center">

            </div>
            <div className="carousel">
                <div className="images">
                <img src={women} alt="woman talking to another woman" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Information