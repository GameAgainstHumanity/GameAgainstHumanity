import React from 'react';

const Answers = ({ answers, turn }) => {
  const answerList = Object.entries(answers).map(([
    id, content,
  ]) => (
    <div key={id} className="answer">
      {content}
      {!turn ? <button>submit</button> : null}
    </div>
  ));
  return (
    <div className="answer-container">
      {answerList}
    </div>
  );
};

export default Answers;
