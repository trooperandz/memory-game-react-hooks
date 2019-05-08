import React, { useState } from 'react';

import Board from './components/Board';
import ScoreContainer from './components/ScoreContainer';
import { createCards } from './util';

function App() {
  const [cardsArr, updateCardsArr] = useState(createCards());
  const [historyArr, updateHistoryArr] = useState([]);
  const [turnArr, updateTurnArr] = useState([]);
  const [isPlayerOneTurn, updatePlayerStatus] = useState(true);
  const [areCardsDisabled, updateDisabledGameStatus] = useState(false);
  const [isWinner, updateWinnerState] = useState(false);

  const handleCardClick = (id, cardObj, i) => {
    turnArr.push(cardObj);

    if (turnArr.length === 2) {
      // Check for match
      let newArr;
      arrLength = turnArr.filter(card => card.id === id).length;
      if (arrLength === 2) {
        newArr = cardsArr.map((card) => {
          if (card.id === id) card.selected = true;
          return card;
        });
        
        updateCardsArr(newArr);
        updateTurnArr([]);
      }
    } else {
      
    }
  };

  return (
    <div className="wrapper">
      <div className="game-container">
        <h1 className="heading">Memory - Jazz Albums</h1>
        <h4 className="player-status">Player 2's Turn</h4>
        <Board 
          cardsArr={cardsArr}
          onCardClick={handleCardClick} 
        />
        <ScoreContainer />
      </div>
    </div>
  );
}

export default App;
