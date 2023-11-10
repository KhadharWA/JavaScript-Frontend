import React from 'react'

const ListaBox = ({title, name, email}) => {
  return (
    
        
        <div>
                <h5>{title}</h5>
                <p>{name}</p>
                <p>{email}</p>
        </div>                       
    
  )
}

export default ListaBox