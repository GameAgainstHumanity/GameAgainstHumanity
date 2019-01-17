import React from 'react';

const Submission = ({ submissions, playerLength }) => {
  let submissionList = Object.entries(submissions);
  submissionList = Object.entries(submissions).map(([
    playerid, submission,
  ]) => (
    <div key={playerid}>
      {submission}
      {submissionList.length === playerLength - 1 ? <button>choose</button>: null}
    </div>
  ));
  return (
    <div>
      {submissionList}
    </div>
  );
};

export default Submission;