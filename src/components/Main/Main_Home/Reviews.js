import React from 'react'
import SectionTitle from '../../Generics/SectionTitle'
import ReviewBox from './ReviewBox'
import Button from '../../Generics/Button'


import './Reviews.css'
import CassandraWarren from '../../../assets/images/Cassandra Warren.png'
import AmandaTulling from '../../../assets/images/Amanda-tulling.png'
import JackMcDogglas from '../../../assets/images/Jack-McDogglas.png'




const Reviws = () => {
  return (
    <section className="review">
        <div className="container">
            <SectionTitle title="Testimonial" description="What Our Client Says" />
            <div className="reviews">
                <ReviewBox text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" src={CassandraWarren} name="Cassandra Warren" description="Business Manager, Dorfus" />
                <ReviewBox text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" src={AmandaTulling} name="Amanda Tulling" description="Senior Developer, Square" />
                <ReviewBox text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" src={JackMcDogglas} name="Jack McDogglas" description="Key Account Manager, Gobona" />
            </div>
            <div className="center-content">
                <Button type="black" title="All Reviews" url="/services/reviews" />
            </div>
        </div>
    </section>
  )
}

export default Reviws