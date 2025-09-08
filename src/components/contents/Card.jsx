import React from 'react';
import '../../assets/scss/section/_game.scss'; 

const Card = ({ korean, german, isFlipped, isCompleted, onClick }) => {
  const cardClasses = `word-card ${isFlipped ? 'flipped' : ''} ${isCompleted ? 'completed' : ''}`;

  return (
    <div className={cardClasses} onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">{korean}</div>
        <div className="card-back">{german}</div>
      </div>
    </div>
  );
};

export default Card;