import React from 'react'
import ArticleBox from './ArticleBox'
import SectionTitle from '../../Generics/SectionTitle'
import Button from '../../Generics/Button'

import './ArticleAndNews.css'



const ArticleAndNews = () => {
  return (
    <section className="article-news">
        <div className="container">
            <div className="tophead">
                <SectionTitle title="Article & News" description="Get Every Single Articles & News" />
                <div className="right-content">
                    <Button type="white" title="Browse Articles" url="/news" />
                </div>
            </div>
            <div className="News">
                <ArticleBox articleId={"cb24396b-ae21-4c34-a267-d0cd0600aa6d"} />
                <ArticleBox articleId={"cc6c2b75-8ee7-4e4e-8a99-66fe89a4b789"} />
                <ArticleBox articleId={"228c829d-4f66-431f-bb20-1b3aed2869b6"} />
                
            </div>
            <div className="center-content">
                <i id="active" className="fa-duotone fa-circle"></i>
                <i className="fa-duotone fa-circle"></i>
                <i className="fa-duotone fa-circle"></i>
                <i className="fa-duotone fa-circle"></i>
                <i className="fa-duotone fa-circle"></i>
            </div>    
        </div>
    </section>
  )
}

export default ArticleAndNews