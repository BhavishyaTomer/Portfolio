import React, { useState, useEffect } from 'react';
import '../styles/MobileControls.css';

const MobileControls = ({ onMove, onInteract, canInteract }) => {
  const [activeDirection, setActiveDirection] = useState(null);

  const handleTouchStart = (direction) => {
    setActiveDirection(direction);
    switch(direction) {
      case 'up':
        onMove({ x: 0, y: -1 });
        break;
      case 'down':
        onMove({ x: 0, y: 1 });
        break;
      case 'left':
        onMove({ x: -1, y: 0 });
        break;
      case 'right':
        onMove({ x: 1, y: 0 });
        break;
      default:
        break;
    }
  };

  const handleTouchEnd = () => {
    setActiveDirection(null);
    onMove({ x: 0, y: 0 });
  };

  return (
    <div className='mobile-controls'>
      <div className='dpad'>
        <button
          className={`dpad-btn up ${activeDirection === 'up' ? 'active' : ''}`}
          onTouchStart={() => handleTouchStart('up')}
          onTouchEnd={handleTouchEnd}
          onMouseDown={() => handleTouchStart('up')}
          onMouseUp={handleTouchEnd}
        >
          ▲
        </button>
        <div className='dpad-middle'>
          <button
            className={`dpad-btn left ${activeDirection === 'left' ? 'active' : ''}`}
            onTouchStart={() => handleTouchStart('left')}
            onTouchEnd={handleTouchEnd}
            onMouseDown={() => handleTouchStart('left')}
            onMouseUp={handleTouchEnd}
          >
            ◀
          </button>
          <div className='dpad-center'></div>
          <button
            className={`dpad-btn right ${activeDirection === 'right' ? 'active' : ''}`}
            onTouchStart={() => handleTouchStart('right')}
            onTouchEnd={handleTouchEnd}
            onMouseDown={() => handleTouchStart('right')}
            onMouseUp={handleTouchEnd}
          >
            ▶
          </button>
        </div>
        <button
          className={`dpad-btn down ${activeDirection === 'down' ? 'active' : ''}`}
          onTouchStart={() => handleTouchStart('down')}
          onTouchEnd={handleTouchEnd}
          onMouseDown={() => handleTouchStart('down')}
          onMouseUp={handleTouchEnd}
        >
          ▼
        </button>
      </div>

      <button
        className={`action-btn ${canInteract ? 'enabled' : ''}`}
        onClick={onInteract}
        disabled={!canInteract}
      >
        {canInteract ? 'INTERACT' : 'A'}
      </button>
    </div>
  );
};

export default MobileControls;
