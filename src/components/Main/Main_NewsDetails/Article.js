import React from 'react'


import './Article.css'
import Image from '../../../assets/images/Image.jpg'
import RecentPosts from './RecentPosts'
import Categories from './Categories'
import Button from '../../Generics/Button'
import SectionTitle from '../../Generics/SectionTitle'

const Article = () => {
  return (
            <section className="Article-and-News">
                <div className="container">
                    <div className="text-left">
                        <SectionTitle description="How To Use Digitalization In The Classroom" date="Mar 25, 2023" name="Kimberly Hansen" Categorie="Business" />
                        <div className="imgs">
                            <img src={Image} alt="" />
                        </div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                            <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.</p>
                            <p>Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                        </div>
                        <div className="text-2">
                            <i className="fa-sharp fa-solid fa-quote-right"></i><p className="big-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                        </div>
                        <div className="text-3">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                        </div>  
                        <div className="Tags">
                            <Button type="grey" url="/News" description="Digitalization" />
                            <Button type="grey" url="/News" description="School" />
                            <Button type="grey" url="/News" description="IT" />
                            <Button type="grey" url="/News" description="Design" />
                            <Button type="grey" url="/News" description="Work" />
                            <Button type="grey" url="/News" description="Tech" />
                        </div>
                    </div>
                    <div className="text-right">
                        <form className="Searchbox">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Type to search..." />
                        </form>
                        <div className="Post">
                            <div className="title">
                                <h4>Recent Posts</h4>
                            </div>
                            <RecentPosts url="/News" title="How To Blow Through Capital At An Incredible Rate" date="Jan 14, 2020" />
                            <RecentPosts url="/News" title="Design Studios That Everyone Should Know About? " date="Jan 14, 2020" />
                            <RecentPosts url="/News" title="How did we get 1M+ visitors in 30 days without anything!" date="Jan 14, 2020" />
                            <RecentPosts url="/News" title="Figma On Figma: How We Built Our Website Design System" date="Jan 14, 2020" />
                        </div>
                        <div className="Categories">
                            <div className="title">
                                <h4>Categories</h4>
                            </div>
                            <div className="box">
                                <div className="box-text">
                                    <Categories url="/News" Categorie="Technology" posts="20 Posts" />
                                    <Categories url="/News" Categorie="Freelancing  " posts="07 Posts" />
                                    <Categories url="/News" Categorie="Writing" posts="16 Posts" />
                                    <Categories url="/News" Categorie="Marketing" posts="11 Posts" />
                                    <Categories url="/News" Categorie="Business" posts="35 Posts" />
                                    <Categories url="/News" Categorie="Education" posts="14 Posts" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>
  )
}

export default Article