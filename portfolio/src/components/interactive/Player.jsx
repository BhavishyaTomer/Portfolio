import React from 'react';
import '../../styles/interactive.css';

const Player = ({ x, y }) => {
  return (
    <div
      className='player'
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      <div className='player-head'></div>
      <div className='player-body'></div>
      <div className='player-arm-left'></div>
      <div className='player-arm-right'></div>
      <div className='player-leg-left'></div>
      <div className='player-leg-right'></div>
    </div>
  );
};

export default Player;
