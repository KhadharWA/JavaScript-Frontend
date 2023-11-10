import React from 'react'
import { Link } from 'react-router-dom'

const RecentPosts = ({url, title, date}) => {
  return (
    <div className="Links">
        <div className="links-text">
            <li><Link to={url}><h6>{title}</h6></Link></li>
            <p>{date}</p>
        </div>
    </div>
  )
}

export default RecentPosts