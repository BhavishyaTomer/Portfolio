import React from 'react';
import Block from '../interactive/Block';
import Player from '../interactive/Player';
import ProjectBlock from '../interactive/ProjectBlock';
import '../../styles/levels.css';

const ProjectsQuest = ({ playerPos, onLevelChange, onCollectItem, registerInteractable, unregisterInteractable }) => {
  const projects = [
    {
      x: 20,
      y: 30,
      title: 'Chat App',
      desc: 'Socket.IO Communication',
      icon: '💬',
      link: 'https://github.com/BhavishyaTomer/React-Projects/tree/main/chatapp'
    },
    {
      x: 50,
      y: 30,
      title: 'CRUD Operation',
      desc: 'Angular Material',
      icon: '📝',
      link: 'https://github.com/BhavishyaTomer/tech-assignment'
    },
    {
      x: 80,
      y: 30,
      title: 'Social Media',
      desc: 'Full Stack Platform',
      icon: '👥',
      link: 'https://github.com/LetsGetConnectED/ConnectED-A-Social-Networking-Platform'
    },
    {
      x: 35,
      y: 60,
      title: 'URL Shortener',
      desc: 'React & ShadCN',
      icon: '🔗',
      link: 'https://github.com/BhavishyaTomer/Url-shortner/tree/main/Url-shortner'
    },
    {
      x: 65,
      y: 60,
      title: 'Portfolio',
      desc: 'React Bootstrap',
      icon: '🎨',
      link: '#'
    },
  ];

  return (
    <div className='level projects-quest'>
      <div className='dungeon-background'>
        {Array(10).fill(0).map((_, i) => (
          <div
            key={i}
            className='stone-block'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
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

      {/* Project Blocks */}
      {projects.map((project, idx) => (
        <ProjectBlock
          key={idx}
          x={project.x}
          y={project.y}
          title={project.title}
          desc={project.desc}
          icon={project.icon}
          link={project.link}
          playerPos={playerPos}
          registerInteractable={registerInteractable}
          unregisterInteractable={unregisterInteractable}
        />
      ))}

      {/* Player */}
      <Player x={playerPos.x} y={playerPos.y} />

      {/* Quest Title */}
      <div className='quest-title dungeon-title'>
        <h2>🎮 PROJECTS DUNGEON 🎮</h2>
        <p>Discover all projects and claim your treasures!</p>
      </div>
    </div>
  );
};

export default ProjectsQuest;
