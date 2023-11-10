import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ type, url, title, description }) => {
  const getButtonClassName = () => {
    switch (type) {
      case 'yellow':
        return 'btn-yellow';
      case 'none':
        return 'btn-none';
      case 'black':
        return 'btn-black';
      case 'login':
        return 'btn-theme';
      case 'white':
        return 'btn-white';
      case 'grey':
        return 'btn-grey';
      default:
        return 'btn-yellow-long';
    }
  }

  if (type && url && title) {
    return (
      <Link className={getButtonClassName()} to={url}>{title}<i className="fa-regular fa-arrow-up-right"></i></Link>
    )
  } else {
    return (
      <Link className={getButtonClassName()} to={url}>{description}</Link>
    )
  }
}

export default Button;
