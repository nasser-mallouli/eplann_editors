import React from 'react';
import { Stage, Layer } from 'react-konva';
import { ComponentType } from '../types/circuit';
import { components } from '../types/components';

// Add this to ComponentsPanel.tsx

const ComponentPreview = ({ type }: { type: ComponentType }) => {
    const ComponentShape = components[type]?.shape;
    if (!ComponentShape) return null;
  
    return (
      <Stage width={50} height={50}>
        <Layer>
          <ComponentShape
            x={0}
            y={0}
            width={50}
            height={50}
            properties={{}}
            isSelected={false}
            onPropertyChange={() => {}}
          />
        </Layer>
      </Stage>
    );
  };
  

const ComponentsPanel: React.FC = () => {
  const componentList: ComponentType[] = [
    'Resistor', 'Capacitor', 'Inductor', 'Transistor', 'Pin', 'Wire', 'Device',
    'Diode', 'LED', 'IC', 'Sensor', 'Battery', 'Switch', 'Connector', 'Relay',
    'Transformer', 'Oscillator', 'Fuse', 'Potentiometer', 'Display', 'Antenna'
  ];

  return (
    <div style={{
      minWidth: '250px',
      height: '100vh',
      overflowY: 'auto',
      borderRight: '2px solid #2d3436',
      padding: '10px',
      background: '#f8f9fa'
    }}>
      <h3>Components Library</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
        {componentList.map((type) => (
          <div
            key={type}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('componentType', type);
              e.dataTransfer.effectAllowed = 'move';
            }}
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'grab',
              background: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div style={{ width: '50px', height: '50px', marginBottom: '8px' }}>
                <div style={{ width: '50px', height: '50px', marginBottom: '8px' }}>
                <ComponentPreview type={type} />
                </div>
            </div>
            <span style={{ fontSize: '12px', textAlign: 'center' }}>{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentsPanel;