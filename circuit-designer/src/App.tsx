import React, { useState } from 'react';
import CanvasStage from './components/CanvasStage';
import ContextMenu from './components/ContextMenu';
import { CircuitComponent, ComponentType, ContextMenuPosition } from './types/circuit';
import ComponentsPanel from './components/ComponentsPanel';

const App: React.FC = () => {
  const [components, setComponents] = useState<CircuitComponent[]>([]);
  const [menuPosition, setMenuPosition] = useState<ContextMenuPosition | null>(null);
  const [selectedComponentId, setSelectedComponentId] = useState<string | null>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Context menu triggered at:', e.clientX, e.clientY);
    setMenuPosition({ x: e.clientX, y: e.clientY });
  };

  const handleAddComponent = (type: ComponentType) => {
    if (menuPosition) {
      const newComponent: CircuitComponent = {
        id: Date.now().toString(),
        type,
        position: [menuPosition.x, menuPosition.y],
        properties: {}
      };
      setComponents([...components, newComponent]);
      setMenuPosition(null);
    }
  };
  const handleCanvasClick = () => {
    setSelectedComponentId(null);
  };

  const handleTextChange = (id: string, newText: string) => {
    try {
      const updatedProps = JSON.parse(newText);
      setComponents(prev => prev.map(comp => 
        comp.id === id ? { ...comp, properties: updatedProps } : comp
      ));
    } catch (e) {
      console.error('Invalid property update:', e);
    }
  };
  const handleResize = (id: string, newWidth: number, newHeight: number, newX: number, newY: number) => {
    setComponents(prev => prev.map(comp => 
      comp.id === id ? { 
        ...comp, 
        position: [newX, newY],
        properties: { ...comp.properties, width: newWidth, height: newHeight } 
      } : comp
    ));
  };
  
  

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const componentType = e.dataTransfer.getData('componentType') as ComponentType;
    if (componentType) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newComponent: CircuitComponent = {
        id: Date.now().toString(),
        type: componentType,
        position: [x, y],
        properties: {}
      };
      
      setComponents([...components, newComponent]);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <ComponentsPanel />
      
      <div 
        style={{ flex: 1, position: 'relative' }}
        onContextMenu={handleContextMenu}
        onClick={handleCanvasClick}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <CanvasStage 
          components={components}
          onTextChange={handleTextChange}
          onResize={handleResize}
          selectedComponentId={selectedComponentId}
          onSelectComponent={setSelectedComponentId}
        />

        {menuPosition && (
          <ContextMenu position={menuPosition} onAddComponent={handleAddComponent} />
        )}
      </div>
    </div>
  );
};


export default App;
