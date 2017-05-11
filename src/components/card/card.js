import React from 'react'
import './Card.css'

class Card extends React.Component{
  constructor(props){
    super(props);
    this.state = props;
    // hard binding to ensure binding card with in function
    this.toggleShow = this.toggleShow.bind(this);
  }

  render(){
    return (
      <div className='Card'>
        <p>{this.state.question}</p>
        { this.state.showResult && <p> {this.state.answer}</p> }
        <button className="toggleResult" onClick={this.toggleShow}>toggle result</button>
      </div>
    )
  }

  toggleShow(){
    this.setState(prevState => (
      { showResult: !prevState.showResult }
    ));
  }
}

export default  Card;
