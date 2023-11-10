import React from 'react'

const Informationbox = ({title, description}) => {
  return (
    <div className="text-content">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Informationbox