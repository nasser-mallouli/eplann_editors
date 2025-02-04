import React from 'react';
import { ComponentPosition, ComponentType } from '../types/circuit';

interface ContextMenuProps {
  position: ComponentPosition;
  onAddComponent: (type: ComponentType) => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ position, onAddComponent }) => {
  
  // Update the components array
  const components: ComponentType[] = [
    'Resistor', 
    'Capacitor', 
    'Inductor', 
    'Transistor', 
    'Pin', 
    'Wire', 
    'Device',
    'Diode',
    'LED',
    'IC',
    'Sensor',
    'Battery',
    'Switch',
    'Connector',
    'Relay',
    'Transformer',
    'Oscillator',
    'Fuse',
    'Potentiometer',
    'Display',
    'Antenna'
  ];


  return (
    <div style={{
      position: 'absolute',
      left: position.x,
      top: position.y,
      background: '#ffffff',
      border: '1px solid #2d3436',
      borderRadius: '5px',
      padding: '5px'
    }}>
      {components.map((comp) => (
        <div
          key={comp}
          onClick={() => onAddComponent(comp)}
          style={{
            padding: '5px 10px',
            cursor: 'pointer'
          }}
        >
          {comp}
        </div>
      ))}
    </div>
  );
};

export default ContextMenu;
