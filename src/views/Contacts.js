import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Main/Main_Contacts/Banner'
import Lista from '../components/Main/Main_Contacts/Lista'
import Form from '../components/Main/Main_Contacts/Form'
import GPS from '../components/Main/Main_Contacts/GPS'
import GoToTop from '../components/Generics/GoToTop'

const Contacts = () => {
  return (
    <div className="wrapper">
      <GoToTop />
      <Header />
      <Banner />
      <Lista />
      <Form />
      <GPS />
      <Footer />
    </div>
  )
}

export default Contacts