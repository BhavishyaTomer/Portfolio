import React, { useState, useEffect } from 'react';
import './App.css';
import GameScreen from './components/GameScreen';
import GameUI from './components/GameUI';
import Inventory from './components/Inventory';

const App = () => {
  const [gameState, setGameState] = useState({
    currentLevel: 'spawn', // spawn, skills, projects, contact
    inventory: [],
    health: 20,
    hungerBar: 10,
    experience: 0,
    visitedAreas: [],
  });

  const handleLevelChange = (level) => {
    setGameState(prev => ({
      ...prev,
      currentLevel: level,
      visitedAreas: [...new Set([...prev.visitedAreas, level])]
    }));
  };

  const addToInventory = (item) => {
    // If it's a health pickup, restore health
    if (item.type === 'health') {
      setGameState(prev => ({
        ...prev,
        health: Math.min(20, prev.health + item.amount),
        experience: prev.experience + 5
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        inventory: [...prev.inventory, item],
        experience: prev.experience + 10
      }));
    }
  };

  // Check for death and respawn
  useEffect(() => {
    if (gameState.health <= 0) {
      setTimeout(() => {
        alert('You died! Respawning at spawn...');
        setGameState(prev => ({
          ...prev,
          health: 20,
          currentLevel: 'spawn',
          inventory: [] // Optional: lose items on death
        }));
      }, 100);
    }
  }, [gameState.health]);

  return (
    <div className='minecraft-app'>
      <GameScreen 
        currentLevel={gameState.currentLevel} 
        onLevelChange={handleLevelChange} 
        onCollectItem={addToInventory}
        gameState={gameState}
        setGameState={setGameState}
      />
      <GameUI gameState={gameState} />
      <Inventory items={gameState.inventory} />
    </div>
  );
};

export default App;