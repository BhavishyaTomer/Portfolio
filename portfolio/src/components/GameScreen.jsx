import React, { useState, useEffect, useCallback } from 'react';
import SpawnArea from './levels/SpawnArea';
import SkillsQuest from './levels/SkillsQuest';
import ProjectsQuest from './levels/ProjectsQuest';
import ContactQuest from './levels/ContactQuest';
import MobileControls from './MobileControls';
import '../styles/GameScreen.css';

const GameScreen = ({ currentLevel, onLevelChange, onCollectItem, gameState, setGameState }) => {
  const [playerPos, setPlayerPos] = useState({ x: 50, y: 50 });
  const [nearbyInteractable, setNearbyInteractable] = useState(null);
  const [spacePressed, setSpacePressed] = useState(false);
  const [touchDirection, setTouchDirection] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [showDamage, setShowDamage] = useState(false);

  const registerInteractable = useCallback((id, action) => {
    setNearbyInteractable({ id, action });
  }, []);

  const unregisterInteractable = useCallback((id) => {
    setNearbyInteractable(prev => prev?.id === id ? null : prev);
  }, []);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Touch/mobile movement
  useEffect(() => {
    if (touchDirection.x !== 0 || touchDirection.y !== 0) {
      const speed = 3;
      setPlayerPos(prev => ({
        x: Math.max(5, Math.min(95, prev.x + touchDirection.x * speed)),
        y: Math.max(5, Math.min(95, prev.y + touchDirection.y * speed))
      }));
    }
  }, [touchDirection]);

  // Check for hazards and reduce health
  useEffect(() => {
    const checkHazards = () => {
      // In SkillsQuest, lava pools damage player
      if (currentLevel === 'skills') {
        const lavaZones = [
          { x: 10, y: 60, width: 20, height: 10 },
          { x: 85, y: 70, width: 20, height: 10 }
        ];
        
        lavaZones.forEach(zone => {
          if (playerPos.x >= zone.x && playerPos.x <= zone.x + zone.width &&
              playerPos.y >= zone.y && playerPos.y <= zone.y + zone.height) {
            setGameState(prev => ({
              ...prev,
              health: Math.max(0, prev.health - 1)
            }));
            setShowDamage(true);
            setTimeout(() => setShowDamage(false), 500);
          }
        });
      }
    };

    const hazardInterval = setInterval(checkHazards, 1000);
    return () => clearInterval(hazardInterval);
  }, [playerPos, currentLevel, setGameState]);

  const handleMobileInteract = () => {
    if (nearbyInteractable?.action) {
      nearbyInteractable.action();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const speed = 5;
      switch(e.key.toLowerCase()) {
        case 'w':
        case 'arrowup':
          setPlayerPos(prev => ({ ...prev, y: Math.max(5, prev.y - speed) }));
          break;
        case 's':
        case 'arrowdown':
          setPlayerPos(prev => ({ ...prev, y: Math.min(95, prev.y + speed) }));
          break;
        case 'a':
        case 'arrowleft':
          setPlayerPos(prev => ({ ...prev, x: Math.max(5, prev.x - speed) }));
          break;
        case 'd':
        case 'arrowright':
          setPlayerPos(prev => ({ ...prev, x: Math.min(95, prev.x + speed) }));
          break;
        case ' ':
          e.preventDefault();
          setSpacePressed(true);
          if (nearbyInteractable?.action) {
            nearbyInteractable.action();
          }
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === ' ') {
        setSpacePressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [nearbyInteractable]);

  const renderLevel = () => {
    const levelProps = {
      playerPos,
      onLevelChange,
      onCollectItem,
      registerInteractable,
      unregisterInteractable,
      spacePressed,
    };

    switch(currentLevel) {
      case 'spawn':
        return <SpawnArea {...levelProps} />;
      case 'skills':
        return <SkillsQuest {...levelProps} />;
      case 'projects':
        return <ProjectsQuest {...levelProps} />;
      case 'contact':
        return <ContactQuest {...levelProps} />;
      default:
        return <SpawnArea {...levelProps} />;
    }
  };

  return (
    <div className='game-screen'>
      {renderLevel()}
      {showDamage && <div className='damage-overlay'></div>}
      {isMobile && (
        <MobileControls
          onMove={setTouchDirection}
          onInteract={handleMobileInteract}
          canInteract={nearbyInteractable !== null}
        />
      )}
    </div>
  );
};

export default GameScreen;
