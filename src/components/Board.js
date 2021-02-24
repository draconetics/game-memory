import React, { Component } from 'react'
import Card from './Card';
import './Board.css';
import cardList from '../data/cardList';
import BoardScore from './BoardScore';

export default class Board extends Component {
    constructor(props){
        super(props);
        this.DEFAULT_URL = './images/card.png';
        this.WHITE_URL = './images/white.png'
        this.state = {
            firstChosenCard:null,
            cardsWon:[],
            cardArray:[]
        }
        this.addChosenCard = this.addChosenCard.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
      this.reset();
    }

    reset(){
      console.log(this.state.cardArray);
      const customCardList = cardList.map(item =>{
        let customItem = item;
        customItem.hidden = false;
        return item;
      });
      console.log(customCardList);
      this.setState({
        ...this.state,
        cardArray: customCardList,
        cardsWon:[],
        firstChosenCard:null
      });
    }

    addChosenCard(itemReference, index){
        //console.log(itemReference.current.dataset.id);
        if(this.state.firstChosenCard === null){
            this.setState({
                ...this.state,
                firstChosenCard:itemReference
            });
        }else if(this.state.firstChosenCard) {
            let delay = setTimeout(() => {
              this.checkForMatch(itemReference);
            }, 500);
        }
    }

    checkForMatch(secondChosenCard){
        const {firstChosenCard} = this.state;
        if(firstChosenCard.current.dataset.id === secondChosenCard.current.dataset.id){
            this.setState({
              ...this.state,
              firstChosenCard: null
          })
            alert('you clicked the same image twice')
        }else if(firstChosenCard.current.alt === secondChosenCard.current.alt){
            this.changeItemsToHidden(firstChosenCard, secondChosenCard);
            alert('match correct !!');
        }else{
            this.setState({
              ...this.state,
              firstChosenCard: null
            })
            alert('failes, another chance?');
        }
        firstChosenCard.current.src = this.DEFAULT_URL;
        secondChosenCard.current.src = this.DEFAULT_URL;
    }

    changeItemsToHidden(firstItem, secondItem){
      const { cardArray } = this.state;
      const customCardArray = cardArray.map((item) => {
        const firstAlt = firstItem.current.alt;
        const secondAlt = secondItem.current.alt;
        if(item.name === firstAlt || item.name === secondAlt){
          console.log('entra a true');
          item.hidden=true;
        }
        return item;
      });
      console.log(customCardArray);
      this.setState({
          ...this.state,
          cardArray: customCardArray,
          firstChosenCard: null,
          cardsWon: [...this.state.cardsWon, [ firstItem, secondItem]]
      })
    }

  render() {
    const { cardArray, cardsWon } = this.state;
    console.log('render board')
    return (
      <div className="board">
        <div className="board__container">
          {cardArray && cardArray.map((item,index)=>{
              return (
                <div key={index}>
                  <Card 
                    url={this.DEFAULT_URL}
                    item={item}
                    addChosenCard={this.addChosenCard}  
                    index={index}    
                  />
                </div>
              );
          })}
        </div>
        <BoardScore cardsWonLength={cardsWon.length} reset={this.reset} />
      </div>
    )
  }
}
