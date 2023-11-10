import React from 'react'

const ServiceBox = ({title, description, url, className}) => {
  return (
    <div className={className}>
        <div className="panel-content">
            <h4>{title}</h4>
            <p>{description}</p>
            <a href={url} className="arrow-circle"><i className="fa-sharp fa-light fa-arrow-right"></i></a>
        </div>
    </div>
  )
}

export default ServiceBox