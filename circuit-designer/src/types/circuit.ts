// src/types/circuit.ts
export type ComponentType = 
  | 'Resistor' 
  | 'Capacitor' 
  | 'Inductor' 
  | 'Transistor' 
  | 'Pin' 
  | 'Wire' 
  | 'Device'
  | 'Diode'
  | 'LED'
  | 'IC'
  | 'Sensor'
  | 'Battery'
  | 'Switch'
  | 'Connector'
  | 'Relay'
  | 'Transformer'
  | 'Oscillator'
  | 'Fuse'
  | 'Potentiometer'
  | 'Display'
  | 'Antenna';


export interface CircuitComponent {
  id: string;
  type: ComponentType;
  position: [number, number];
  properties: {
    Resistance?: number;
    Capacitance?: number;
    inductance?: number;
    voltage?: number;
    label?: string;
    width?: number;
    height?: number;
  };
  isEditing?: boolean;
}

export interface ComponentPosition {
  x: number;
  y: number;
}

export interface ContextMenuPosition {
  x: number;
  y: number;
}
