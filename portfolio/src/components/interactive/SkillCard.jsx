import React, { useState, useEffect } from 'react';
import '../../styles/interactive.css';

const SkillCard = ({ x, y, name, icon, color, onInteract, playerPos, registerInteractable, unregisterInteractable }) => {
  const distance = Math.sqrt(Math.pow(playerPos.x - x, 2) + Math.pow(playerPos.y - y, 2));
  const isNear = distance < 15;
  const skillId = `skill-${name}-${x}-${y}`;

  useEffect(() => {
    if (isNear && registerInteractable) {
      registerInteractable(skillId, onInteract);
    } else if (unregisterInteractable) {
      unregisterInteractable(skillId);
    }
    return () => {
      if (unregisterInteractable) {
        unregisterInteractable(skillId);
      }
    };
  }, [isNear, skillId, onInteract, registerInteractable, unregisterInteractable]);

  return (
    <div
      className={`skill-card ${isNear ? 'interactive' : ''}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        backgroundColor: color,
      }}
    >
      <div className='skill-icon'>{icon}</div>
      <div className='skill-name'>{name}</div>
      {isNear && <div className='collect-hint'>SPACE</div>}
    </div>
  );
};

export default SkillCard;
