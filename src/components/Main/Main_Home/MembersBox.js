import React from 'react'

const MembersBox = ({src, title, description}) => {
  return (
        <div>
            <img src={src} alt=""/>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
  )
}

export default MembersBox