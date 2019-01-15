import React from 'react';

const Answers = ({ answers, turn }) => {
  console.log('turn: ', turn);
  const answerList = Object.entries(answers).map(([
    id, content,
  ]) => (
    <div key={id}>
      {content}
      {turn ? <button>submit</button> : null}
    </div>
  ));
  return (
    <div>
      {answerList}
    </div>
  );
};

export default Answers;
