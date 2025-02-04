import { Line } from 'react-konva';

const CircuitGrid = () => {
  const GRID_SIZE = 20;
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <>
      {/* Vertical lines */}
      {Array.from({ length: Math.floor(width / GRID_SIZE) }).map((_, i) => (
        <Line
          key={`v_${i}`}
          points={[i * GRID_SIZE, 0, i * GRID_SIZE, height]}
          stroke="#e0e0e0"
          strokeWidth={1}
        />
      ))}
      
      {/* Horizontal lines */}
      {Array.from({ length: Math.floor(height / GRID_SIZE) }).map((_, i) => (
        <Line
          key={`h_${i}`}
          points={[0, i * GRID_SIZE, width, i * GRID_SIZE]}
          stroke="#e0e0e0"
          strokeWidth={1}
        />
      ))}
    </>
  );
};

export default CircuitGrid;
