import React from 'react';
import '../styles/Inventory.css';

const Inventory = ({ items }) => {
  return (
    <div className='inventory-panel'>
      <h3 className='inventory-title'>INVENTORY</h3>
      <div className='inventory-grid'>
        {Array(27).fill(0).map((_, i) => (
          <div key={i} className={`inventory-slot ${i < items.length ? 'filled' : ''}`}>
            {i < items.length && (
              <div className='item'>
                <span className='item-icon'>{items[i].icon}</span>
                <span className='item-count'>{items[i].count || 1}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='inventory-crafting'>
        <h4>CRAFTING</h4>
        <div className='craft-grid'>
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className='craft-slot'></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
