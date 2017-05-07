import React from 'react'

class Card extends React.Component{
  render(){
    return (
      <div className='card'>
        <p>{props.question}</p>
        <p> {props.answer}</p>
      </div>
    )
  }
}
