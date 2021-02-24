import React from 'react';

export default function BoardScore({cardsWonLength, reset}) {
  const detail = () => <span>score:{cardsWonLength}/6</span>;
  const congratulations = () => {
    return (
    <>
    <h1>Congratulations !!!<br></br> you win !!</h1>
    <button type="button" onClick={()=>reset()}>
      Start again?
    </button>
    </>
    );
  }
  return (
    <div className="board__score">
      {cardsWonLength === 6?congratulations():detail()}
    </div>
  );
}
