import React from 'react';

const Cards = ({ players, turn }) => {
  console.log('turn: ', turn);
  const cardsInHand = Object.entries(players).map(([
    id, cards,
  ]) => (
    <div key={id}>
      {cards}
      {turn ? <button>submit</button> : null}
    </div>
  ));
  return (
    <div>
      {cardsInHand}
    </div>
  );
};

export default Cards;
