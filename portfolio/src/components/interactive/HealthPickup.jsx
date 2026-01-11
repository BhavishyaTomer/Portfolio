import React, { useState, useEffect } from 'react';
import '../../styles/interactive.css';

const HealthPickup = ({ x, y, onCollect, playerPos }) => {
  const [collected, setCollected] = useState(false);
  const distance = Math.sqrt(Math.pow(playerPos.x - x, 2) + Math.pow(playerPos.y - y, 2));
  const isNear = distance < 10;

  useEffect(() => {
    if (isNear && !collected) {
      setCollected(true);
      onCollect({ type: 'health', amount: 4, icon: '❤', name: 'Health' });
    }
  }, [isNear, collected, onCollect]);

  if (collected) return null;

  return (
    <div
      className='health-pickup'
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      <div className='pickup-icon'>❤</div>
      <div className='pickup-float'>+4</div>
    </div>
  );
};

export default HealthPickup;
