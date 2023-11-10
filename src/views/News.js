import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ShowCase from '../components/Main/Main_News/ShowCase'
import NewsArticel from '../components/Main/Main_News/NewsArticel'
import SignUp from '../components/Main/Main_News/SignUp'
import GoToTop from '../components/Generics/GoToTop'




const News = () => {
  return (
    <div className="wrapper">
      <GoToTop />
      <Header />
      <ShowCase />
      <NewsArticel />
      <SignUp />
      <Footer />
    </div>
  )
}

export default News