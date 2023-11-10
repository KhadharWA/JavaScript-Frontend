import React from 'react'
import Header from '../components/Header/Header'
import OurServices from '../components/Main/Main_Home/OurServices'
import ShowcaseSection from '../components/Main/Main_Home/ShowcaseSection'
import Footer from '../components/Footer/Footer'
import Information from '../components/Main/Main_Home/Information'
import Brand from '../components/Main/Main_Home/Brand'
import Features from '../components/Main/Main_Home/Features'
import About from '../components/Main/Main_Home/About'
import ProjectAndCase from '../components/Main/Main_Home/ProjectAndCase'
import TeamMembers from '../components/Main/Main_Home/TeamMembers'
import Reviws from '../components/Main/Main_Home/Reviews'
import ArticleAndNews from '../components/Main/Main_Home/ArticleAndNews'
import SignUp from '../components/Main/Main_Home/SignUp'
import GoToTop from '../components/Generics/GoToTop'



import '../index.css'







const Home = () => {


  return (
    <div className="wrapper">
      <GoToTop  />
      <Header />
      <ShowcaseSection />
      <Brand />
      <Features />
      <About />
      <OurServices />
      <Information />
      <ProjectAndCase />
      <TeamMembers />
      <Reviws />
      <ArticleAndNews />
      <SignUp />
      <Footer />
    </div>
  )
}

export default Home