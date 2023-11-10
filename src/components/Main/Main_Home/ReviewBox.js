import React from 'react'

const ReviewBox = ({text, name, description, src}) => {
  return (
    <div className="the-review">
        <div>
            <div className="ratings">
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div>
                    <button className="review-text"><i className="fa-solid fa-angle-down"></i></button>
                </div>
            </div>
            <div className="text">
                <p className="hidden-text">{text}</p>
            </div>
            <div className="name">
                <img src={src} alt={name}  className="left-img" />
                <div className="right-info">
                    <h5>{name}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewBox