import React, { useState, useEffect } from 'react';
import '../../styles/interactive.css';

const Block = ({ x, y, type, label, color, onInteract, playerPos, registerInteractable, unregisterInteractable }) => {
  const distance = Math.sqrt(Math.pow(playerPos.x - x, 2) + Math.pow(playerPos.y - y, 2));
  const isNear = distance < 15;
  const blockId = `block-${type}-${x}-${y}`;

  useEffect(() => {
    if (isNear && registerInteractable) {
      registerInteractable(blockId, onInteract);
    } else if (unregisterInteractable) {
      unregisterInteractable(blockId);
    }
    return () => {
      if (unregisterInteractable) {
        unregisterInteractable(blockId);
      }
    };
  }, [isNear, blockId, onInteract, registerInteractable, unregisterInteractable]);

  return (
    <div
      className={`block ${type} ${isNear ? 'interactive' : ''}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        backgroundColor: color,
        borderColor: isNear ? '#FFD700' : '#333',
      }}
    >
      <div className='block-label'>{label}</div>
      {isNear && <div className='interaction-hint'>SPACE</div>}
    </div>
  );
};

export default Block;
