import React from 'react';

import Card from './Card';
// import { shuffle, cardsArr } from '../util';

// function generateCards() {
//   const shuffledCardArr = shuffle(cardsArr.concat(cardsArr));

//   return shuffledCardArr.map(({ id, image, selected }) => {
//     return (
//       <Card 
//         id={id} 
//         image={image} 
//         selected={selected} 
//       />
//     );
//   });
// }

function generateCards(cardsArr) {
  // const shuffledCardArr = shuffle(cardsArr.concat(cardsArr));

  return cardsArr.map(({ id, image, selected }) => {
    return (
      <Card 
        id={id} 
        image={image} 
        selected={selected} 
      />
    );
  });
}

function Board({ cardsArr }) {
  return (
    <div className="board-container">
      {generateCards(cardsArr)}
    </div>
  );
}

export default Board;