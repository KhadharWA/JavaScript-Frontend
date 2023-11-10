import React from 'react'
import ArticleList from '../../Generics/ArticleList'
import SectionTitle from '../../Generics/SectionTitle'
import { Link } from 'react-router-dom'



import './News.css'




const NewsArticel = () => {
  return (
    <section className="News">
        <div className="container">
            <SectionTitle  description="Our News & Articles"/>
            <div className="Article">

                <ArticleList articleId={"cb24396b-ae21-4c34-a267-d0cd0600aa6d"} date="25" month="Mar" />
                <ArticleList articleId={"cc6c2b75-8ee7-4e4e-8a99-66fe89a4b789"} date="17" month="Mar" />
                <ArticleList articleId={"228c829d-4f66-431f-bb20-1b3aed2869b6"} date="13" month="Mar" />
                <ArticleList articleId={"64c35699-a737-4712-a85e-f76c7dc43172"} date="12" month="Mar" />
                <ArticleList articleId={"d0f52440-87b3-4fe4-b9ad-649bab1822b4"} date="07" month="Mar" />
                <ArticleList articleId={"9a686f0a-8397-41c2-8adb-bd731eea59ac"} date="02" month="Mar" />
                <ArticleList articleId={"98267e89-b18a-4356-b95a-d2c4b0ddc224"} date="28" month="Feb" />
                <ArticleList articleId={"ef44d5ef-7c50-4fbe-90a2-d1e0a498d9b5"} date="18" month="Feb" />
                <ArticleList articleId={"f2bc8043-5ba0-4a8a-8a68-ec259ec9d3c3"} date="11" month="Feb" />
                
                
            </div>
            <div className="center-content">
                <Link to="/News/page"><i className="fa-solid fa-angle-left"></i></Link>
                <Link className="active" to="/News/page1">1</Link>
                <Link to="/News/page2">2</Link>
                <Link to="/News/page3">3</Link>
                <Link to="/News/page">...</Link>
                <Link to="/News/page9">9</Link>
                <Link to="/News/page"><i className="fa-solid fa-angle-right"></i></Link>
            </div>
        </div>
    </section>
  )
}

export default NewsArticel