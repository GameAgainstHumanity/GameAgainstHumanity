import React from 'react';

const Players = ({ players }) => {
  const playerList = players.map(({
    name, points, turn, id,
  }) => (
    <div key={id}>
      NAME:
      {name}
      <br />
      Points:
      {points}
      <br />
      TURN:
      {turn ? 'Yes' : 'No'}
    </div>
  ));
  return (
    <div>
      {playerList}
    </div>
  );
};

export default Players;
