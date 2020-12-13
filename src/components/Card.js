import React from 'react'

const Card = props => {
  return (
    <div className="card">
      <img className="card-image" src={props.source} alt={props.name} onClick={() => props.incrementGame(props.name)} />
      <div className="card-name"><h4>{props.name}</h4></div>
    </div>
  )
}

export default Card;
