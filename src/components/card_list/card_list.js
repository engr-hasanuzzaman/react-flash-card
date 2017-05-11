/**
 * Created by sumon on 5/11/17.
 */
import React from 'react';
import Card from '../card/card';

class CardList extends React.Component{
  constructor(props){
    super(props);
    this.cardsData = props.cardsData;
    this.printCards = this.printCards.bind(this);
  }

  render(){
    return(
      <div className="card-container">{this.printCards()}</div>
    )
  }

  printCards() {
    if(this.cardsData.length === 0)
      return [];

    return this.cardsData.map((card) => (
      <Card question={card.question} answer={card.answer} showResult={card.showResult}/>
    ));
  }
}

export default CardList;
