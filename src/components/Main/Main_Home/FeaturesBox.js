import React from 'react'

const FeaturesBox = ({title, description}) => {
  return (
    <div className="panel">
        <div className="panel-content">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default FeaturesBox