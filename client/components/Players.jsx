import React from 'react';

const Players = ({ players }) => {
  const playerList = players.map(({
    name, points, turn, id,
  }) => (
    <div key={id} className="player">
      <p>{name}</p>
      <p>{points}</p>
      <p>{turn ? String.fromCharCode(9752) : null}</p>
    </div>
  ));
  return (
    <div>
      {playerList}
    </div>
  );
};

export default Players;
