import React from 'react'
import Button from '../../Generics/Button'
import SectionTitle from '../../Generics/SectionTitle'
import Article from '../../Generics/Article'


import './ProjectAndCase.css'



const ProjectAndCase = () => {
  return (
    <section className="project-and-case">
        <div className="container">
            <SectionTitle title="Project & Case Studies" description="Let’s Looks Our Global Projects" />
            <div className="project-and-cases">
                <div className="Top">
                    <Article articleId={"9a686f0a-8397-41c2-8adb-bd731eea59ac"} />
                    <Article articleId={"f2bc8043-5ba0-4a8a-8a68-ec259ec9d3c3"} />
                </div>
                <div className="bottom">
                    <Article articleId={"ef44d5ef-7c50-4fbe-90a2-d1e0a498d9b5"} />
                    <Article articleId={"98267e89-b18a-4356-b95a-d2c4b0ddc224"}  isSpecial={true}/>
                </div>
            </div>
            <div className="center-content">
            <Button type="black" title="All Recent Projects" url="/News" />
            </div>
        </div>
    </section>
  )
}

export default ProjectAndCase