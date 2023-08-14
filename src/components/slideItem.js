import React from 'react'

const slideItem = (props) => {
  return (
    <div className='card'>
        <img draggable={false} className='svg' alt='coffee' src={props.img}/><br/>
        <div>{props.name}</div>
    </div>
  )
}

export default slideItem