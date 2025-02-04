// src/components/CanvasStage.tsx
import React from 'react';
import { Stage, Layer } from 'react-konva';
import CircuitGrid from './CircuitGrid';
import ComponentFactory from './ComponentFactory';
import { CircuitComponent } from '../types/circuit';
import Konva from 'konva';

const CanvasStage = ({ 
  components, 
  onResize, 
  onTextChange,
  selectedComponentId,
  onSelectComponent
}: { 
  components: CircuitComponent[], 
  onResize: (id: string, newWidth: number, newHeight: number, newX: number, newY: number) => void,
  onTextChange: (id: string, newText: string) => void,
  selectedComponentId: string | null,
  onSelectComponent: (id: string | null) => void
}) => {

  const handleDragOver = (e: Konva.KonvaEventObject<DragEvent>) => {
    e.evt.preventDefault();
  };
  
  return (
    <Stage 
      width={window.innerWidth} 
      height={window.innerHeight}
      onContextMenu={(e) => e.evt.preventDefault()} // Prevent default context menu
      >
      <Layer>
        <CircuitGrid />
        {components.map(component => (
          <ComponentFactory 
            key={component.id} 
            component={component} 
            onResize={onResize}
            onTextChange={onTextChange}
            isSelected={component.id === selectedComponentId}
            onSelect={onSelectComponent}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default CanvasStage;
