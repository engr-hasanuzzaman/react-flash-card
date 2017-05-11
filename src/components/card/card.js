import React from 'react'
import './Card.css'

class Card extends React.Component{
  render(){
    return (
      <div className='Card'>
        <p>{this.props.question}</p>
        <p> {this.props.answer}</p>
      </div>
    )
  }
}

export default  Card;
