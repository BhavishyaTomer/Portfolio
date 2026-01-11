import React from 'react';
import Block from '../interactive/Block';
import Player from '../interactive/Player';
import HealthPickup from '../interactive/HealthPickup';
import '../../styles/levels.css';

const SpawnArea = ({ playerPos, onLevelChange, onCollectItem, registerInteractable, unregisterInteractable }) => {
  const questBlocks = [
    { x: 20, y: 20, type: 'skills', label: '⚔ SKILLS QUEST', color: '#8B4513' },
    { x: 70, y: 20, type: 'projects', label: '🎮 PROJECTS DUNGEON', color: '#4B0082' },
    { x: 45, y: 60, type: 'contact', label: '📧 CONTACT PORTAL', color: '#FF6347' },
  ];

  return (
    <div className='level spawn-area'>
      <div className='background-blocks'>
        {/* Sky and clouds */}
        <div className='sky'></div>
        
        {/* Terrain blocks */}
        {Array(15).fill(0).map((_, i) =>
          Array(15).fill(0).map((_, j) => (
            <div
              key={`${i}-${j}`}
              className='terrain-block'
              style={{
                left: `${i * 6.67}%`,
                top: `${j * 6.67}%`,
              }}
            ></div>
          ))
        )}

        {/* Trees */}
        <div className='tree' style={{ left: '15%', top: '30%' }}></div>
        <div className='tree' style={{ left: '85%', top: '40%' }}></div>
      </div>

      {/* Quest Blocks */}
      {questBlocks.map((block, idx) => (
        <Block
          key={idx}
          x={block.x}
          y={block.y}
          type={block.type}
          label={block.label}
          color={block.color}
          onInteract={() => onLevelChange(block.type)}
          playerPos={playerPos}
          registerInteractable={registerInteractable}
          unregisterInteractable={unregisterInteractable}
        />
      ))}

      {/* Player */}
      <Player x={playerPos.x} y={playerPos.y} />

      {/* Health Pickups */}
      <HealthPickup x={30} y={75} onCollect={onCollectItem} playerPos={playerPos} />
      <HealthPickup x={70} y={75} onCollect={onCollectItem} playerPos={playerPos} />

      {/* Welcome Sign */}
      <div className='welcome-sign'>
        <div className='sign-post'></div>
        <div className='sign-board'>
          <h2>WELCOME!</h2>
          <p>Use WASD to move</p>
          <p>Click blocks to explore</p>
        </div>
      </div>
    </div>
  );
};

export default SpawnArea;
