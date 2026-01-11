import React, { useState } from 'react';
import Block from '../interactive/Block';
import Player from '../interactive/Player';
import SkillCard from '../interactive/SkillCard';
import HealthPickup from '../interactive/HealthPickup';
import '../../styles/levels.css';

const SkillsQuest = ({ playerPos, onLevelChange, onCollectItem, registerInteractable, unregisterInteractable }) => {
  const skills = [
    { x: 15, y: 25, name: 'React', icon: '⚛', color: '#61DAFB' },
    { x: 35, y: 25, name: 'JavaScript', icon: '🔶', color: '#F7DF1E' },
    { x: 55, y: 25, name: 'HTML/CSS', icon: '🎨', color: '#E34C26' },
    { x: 75, y: 25, name: 'Node.js', icon: '🟢', color: '#68A063' },
    { x: 25, y: 50, name: 'MongoDB', icon: '🍃', color: '#13AA52' },
    { x: 45, y: 50, name: 'Express', icon: '⚙', color: '#90C53F' },
    { x: 65, y: 50, name: 'Git', icon: '🔗', color: '#F1502F' },
  ];

  return (
    <div className='level skills-quest'>
      <div className='quest-background'>
        <div className='lava-pool' style={{ left: '10%', top: '60%' }}></div>
        <div className='lava-pool' style={{ left: '85%', top: '70%' }}></div>
      </div>

      {/* Return portal */}
      <Block
        x={5}
        y={85}
        type='portal'
        label='🚪 Return'
        color='#00FF00'
        onInteract={() => onLevelChange('spawn')}
        playerPos={playerPos}
        registerInteractable={registerInteractable}
        unregisterInteractable={unregisterInteractable}
      />

      {/* Skill Blocks */}
      {skills.map((skill, idx) => (
        <SkillCard
          key={idx}
          x={skill.x}
          y={skill.y}
          name={skill.name}
          icon={skill.icon}
          color={skill.color}
          onInteract={() => onCollectItem({ name: skill.name, icon: skill.icon, count: 1 })}
          playerPos={playerPos}
          registerInteractable={registerInteractable}
          unregisterInteractable={unregisterInteractable}
        />
      ))}

      {/* Player */}
      <Player x={playerPos.x} y={playerPos.y} />

      {/* Health Pickups - placed away from lava */}
      <HealthPickup x={50} y={20} onCollect={onCollectItem} playerPos={playerPos} />
      <HealthPickup x={30} y={75} onCollect={onCollectItem} playerPos={playerPos} />
      <HealthPickup x={70} y={75} onCollect={onCollectItem} playerPos={playerPos} />

      {/* Quest Title */}
      <div className='quest-title'>
        <h2>⚔ SKILLS QUEST ⚔</h2>
        <p>Collect all skill blocks to complete the quest!</p>
      </div>
    </div>
  );
};

export default SkillsQuest;
