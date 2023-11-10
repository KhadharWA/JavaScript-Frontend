import React from 'react'

const SectionTitle = ({title, description, date, Categorie, name}) => {

  if (description && date && name && Categorie) {
      return (
                <div className="section-title">
                <h2>{description}</h2>
                <div className="nav">
                    <p>{date}</p>
                    <i className="fa-solid fa-circle"></i>
                    <p>{Categorie}</p>
                    <i className="fa-solid fa-circle"></i>
                    <p>{name}</p>
                </div>
            </div>
    )
  } else  {
      return (
            <>
            <div className="section-title">
                <p>{title}</p>
                <h2>{description}</h2>
            </div>
            
        </>
    )
  }
  
}

export default SectionTitle


