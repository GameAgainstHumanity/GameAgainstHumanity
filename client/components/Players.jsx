import React from 'react';

const Players = ({ players }) => {
  const playerList = players.map(({
    name, points, turn, id,
  }) => (
    <div key={id}>
      <p>NAME: {name}</p>
      <p>Points: {points} </p>
      <p>Turn: {turn ? 'Yes' : 'No'}</p>
    </div>
  ));
  return (
    <div>
      {playerList}
    </div>
  );
};

export default Players;
