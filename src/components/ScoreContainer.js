import React from 'react';

function ScoreContainer() {
  return (
    <div className="score-container">
      <h2 className="score-heading">Score</h2>
      <hr />
      <div className="score">Player One: --</div>
      <div className="score">Player Two: --</div>
    </div>
  );
}

export default ScoreContainer;