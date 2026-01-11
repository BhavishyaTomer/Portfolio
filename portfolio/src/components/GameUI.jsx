import React from 'react';
import '../styles/GameUI.css';

const GameUI = ({ gameState }) => {
  return (
    <div className='game-ui'>
      <div className='ui-top'>
        <div className='health-display'>
          {Array(10).fill(0).map((_, i) => (
            <span key={i} className={`heart ${i < Math.ceil(gameState.health / 2) ? 'full' : 'empty'}`}>❤</span>
          ))}
        </div>
        
        <div className='level-display'>
          {gameState.currentLevel.toUpperCase()}
        </div>
        
        <div className='xp-display'>
          ⭐ {gameState.experience} XP
        </div>
      </div>

      <div className='controls-hint'>
        WASD: Move | SPACE: Interact
      </div>
    </div>
  );
};

export default GameUI;
