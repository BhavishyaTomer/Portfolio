import React, { useState, useEffect } from 'react';
import '../../styles/interactive.css';

const ProjectBlock = ({ x, y, title, desc, icon, link, playerPos, registerInteractable, unregisterInteractable }) => {
  const [showModal, setShowModal] = useState(false);
  const distance = Math.sqrt(Math.pow(playerPos.x - x, 2) + Math.pow(playerPos.y - y, 2));
  const isNear = distance < 15;
  const projectId = `project-${title}-${x}-${y}`;

  useEffect(() => {
    if (isNear && registerInteractable) {
      registerInteractable(projectId, () => setShowModal(true));
    } else if (unregisterInteractable) {
      unregisterInteractable(projectId);
    }
    return () => {
      if (unregisterInteractable) {
        unregisterInteractable(projectId);
      }
    };
  }, [isNear, projectId, registerInteractable, unregisterInteractable]);

  return (
    <>
      <div
        className={`project-block ${isNear ? 'interactive' : ''}`}
        style={{
          left: `${x}%`,
          top: `${y}%`,
        }}
      >
        <div className='project-icon'>{icon}</div>
        <div className='project-label'>{title}</div>
        {isNear && <div className='open-hint'>SPACE</div>}
      </div>

      {showModal && (
        <div className='project-modal' onClick={() => setShowModal(false)}>
          <div className='modal-content' onClick={e => e.stopPropagation()}>
            <button className='modal-close' onClick={() => setShowModal(false)}>✕</button>
            <div className='modal-icon'>{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <a href={link} target='_blank' rel='noopener noreferrer' className='project-link'>
              View on GitHub →
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectBlock;
