import React, { useRef, useEffect, useState } from 'react';
import { Group, Transformer } from 'react-konva';
import { CircuitComponent } from '../types/circuit';
import { components } from '../types/components';
import EditableText from './EditableText';

const ComponentFactory = ({
  component,
  onResize,
  onTextChange,
  isSelected,
  onSelect
}: {
  component: CircuitComponent,
  onResize: (id: string, newWidth: number, newHeight: number, newX: number, newY: number) => void,
  onTextChange: (id: string, newText: string) => void,
  isSelected: boolean,
  onSelect: (id: string | null) => void
}) => {
  const shapeRef = useRef<any>(null);
  const trRef = useRef<any>(null);

  // Determine if the component is resizable.
  const isResizable = components[component.type]?.resizable;
  
  useEffect(() => {
    if (isResizable && isSelected && shapeRef.current && trRef.current) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected, isResizable]);
  
  


  const ComponentShape = components[component.type]?.shape;
  if (!ComponentShape) return null;

  const handleResize = () => {
    if (isResizable && onResize && shapeRef.current) {
      const node = shapeRef.current;
      const scaleX = node.scaleX();
      const scaleY = node.scaleY();
      const newWidth = Math.max(30, node.width() * scaleX);
      const newHeight = Math.max(30, node.height() * scaleY);
      const newX = node.x();
      const newY = node.y();
  
      // Reset scale
      node.scaleX(1);
      node.scaleY(1);
  
      // Update component in your state
      onResize(component.id, newWidth, newHeight, newX, newY);
    }
  };
  

  const handlePropertyChange = (property: string, value: any) => {
    onTextChange(component.id, JSON.stringify({
      ...component.properties,
      [property]: value
    }));
  };


  return (
    <Group
      x={component.position[0]}
      y={component.position[1]}
      draggable
      onClick={(e) => {
        console.log("we selected")
        onSelect(component.id);
        e.cancelBubble = true;
      }}
    >
      <ComponentShape
        {...component.properties}
        onPropertyChange={handlePropertyChange}
        ref={shapeRef}
        isSelected={isSelected}
        draggable
      />
      {isResizable && isSelected && (
        <Transformer
          ref={trRef}
          enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
          boundBoxFunc={(oldBox, newBox) => {
            if (component.type === 'Wire') {
              newBox.height = 2;
            }
            return newBox;
          }}
          onTransformEnd={handleResize}
          onClick={() => {
            console.log("we selected")
          }}
        />
      )}
    </Group>
  );
};

export default ComponentFactory;
