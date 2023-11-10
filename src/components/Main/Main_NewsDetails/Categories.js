import React from 'react'
import { Link } from 'react-router-dom'




const Categories = ({url, Categorie, posts}) => {
  return (
    
        
    <li><Link to={url}><p>{Categorie}  -  <span>{posts}</span></p></Link></li>
       
    
  )
}

export default Categories