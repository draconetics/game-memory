import React, { Component } from 'react'
import Card from './Card';
import './Board.css';

const cardArray = [
    {
      id:0,
      name: 'fries',
      img: './images/fries.png',
      hidden: true
    },
    {
      id:1,
      name: 'cheeseburger',
      img: './images/cheeseburger.png',
      hidden: true
    },
    {
      id:2,
      name: 'ice-cream',
      img: './images/ice-cream.png',
      hidden: true
    },
    {
      id:3,
      name: 'pizza',
      img: './images/pizza.png',
      hidden: true
    },
    {
        id:4,
      name: 'milkshake',
      img: './images/milkshake.png',
      hidden: true
    },
    {
        id:5,
      name: 'hotdog',
      img: './images/hotdog.png',
      hidden: true
    },
    {
        id:6,
      name: 'fries',
      img: './images/fries.png',
      hidden: true
    },
    {
        id:7,
      name: 'cheeseburger',
      img: './images/cheeseburger.png',
      hidden: true
    },
    {
        id:8,
      name: 'ice-cream',
      img: './images/ice-cream.png',
      hidden: true
    },
    {
        id:9,
      name: 'pizza',
      img: './images/pizza.png',
      hidden: true
    },
    {
        id:10,
      name: 'milkshake',
      img: './images/milkshake.png',
      hidden: true
    },
    {
        id:11,
      name: 'hotdog',
      img: './images/hotdog.png',
      hidden: true
    }
  ]
cardArray.sort(() => 0.5 - Math.random())
export default class Board extends Component {
    constructor(props){
        super(props);
        this.DEFAULT_URL = './images/blank.png';
        this.state = {
            firstChosenCard:null,
            cardsWon:[]
        }
        this.addChosenCard = this.addChosenCard.bind(this);
    }

    addChosenCard(item, index){
        if(this.state.firstChosenCard === null){
            this.setState({
                ...this.state,
                firstChosenCard:item
            });
        }else if(this.state.firstChosenCard) {
            setTimeout(this.checkForMatch(item),2000);
        }
    }

    checkForMatch(secondChosenCard){
        if(this.state.firstChosenCard.id === secondChosenCard.id){
            alert('you clicke the same image twice')
        }else if(this.state.firstChosenCard.name === secondChosenCard.name){
            this.setState({
                ...this.state,
                cardsWon: [...this.state.cardsWon, [ this.state.firstChosenCard, secondChosenCard]]
            })
            alert('match correct !!');
        }else{
            alert('Sorry, try again');
        }
        

    }

  render() {
    return (
      <div className="board">
        {cardArray && cardArray.map((item,index)=>{
            return (<div index={index}>
                <Card 
                    url={this.DEFAULT_URL}
                    item={item}
                    addChosenCard={this.addChosenCard}      
                />
            </div>);
        })}
      </div>
    )
  }
}
