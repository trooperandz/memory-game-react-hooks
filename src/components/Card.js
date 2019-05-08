import React, { useState } from 'react';

import cardPattern from '../img/morocco-blue.png';

function Card({ id, selected, image }) {
  const [isFlipped, toggleFlipState] = useState(false);

  const flippedClass = (isFlipped || selected ? 'is-flipped' : '');
  const backStyle = { backgroundImage: `url(${image})` };
  const frontStyle = { backgroundImage: `url(${cardPattern})` };
  const selectedClass = (selected ? 'selected' : '');

  const handleCardClick = () => {
    if (selected || isFlipped) return null;
    
    toggleFlipState(!isFlipped);
  }

  return (
    <div className={`card-wrapper ${selectedClass}`} onClick={() => handleCardClick(id)}>
      <div className={`card ${flippedClass}`}>
        <div className="card__face card__face--front" style={frontStyle}></div>
        <div className="card__face card__face--back" style={backStyle}></div>
      </div>
    </div>
  );
}

export default Card;