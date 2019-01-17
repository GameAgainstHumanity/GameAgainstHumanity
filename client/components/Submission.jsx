import React from 'react';

const Submission = ({ submissions, playerLength }) => {
  let submissionList = Object.entries(submissions);
  submissionList = Object.entries(submissions).map(([
    playerid, submission,
  ]) => (
    <div key={playerid} className="answer">
      {submission}
      {submissionList.length === playerLength - 1 ? <button>choose</button>: null}
    </div>
  ));
  return (
    <div className="submission">
      {submissionList}
    </div>
  );
};

export default Submission;
