import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ShowCase from '../components/Main/Main_News/ShowCase'
import Article from '../components/Main/Main_NewsDetails/Article'
import ArticleAndNews from '../components/Main/Main_Home/ArticleAndNews'
import GoToTop from '../components/Generics/GoToTop'



const NewsDetails = () => {
  return (
    <div className="wrapper">
      <GoToTop />
      <Header />
      <ShowCase />
      <Article />
      <ArticleAndNews />
      <Footer />
    </div>
  )
}

export default NewsDetails