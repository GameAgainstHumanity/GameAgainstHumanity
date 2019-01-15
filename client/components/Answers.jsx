import React from 'react';

const Answers = ({ answers }) => {
  const answerList = Object.entries(answers).map(([
    id, content,
  ]) => (
    <div key={id}>
      {content}
    </div>
  ));
  return (
    <div>
      {answerList}
    </div>
  );
};

export default Answers;
