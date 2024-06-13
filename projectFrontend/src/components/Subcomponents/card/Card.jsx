import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <h1>{props.data.title}</h1>
        <p>{props.data.description}</p>
        <h3>Date & Time: {props.data.time}</h3>
    </div>
  )
}

export default Card