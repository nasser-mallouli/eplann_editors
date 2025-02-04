import React, { useState, useEffect, useRef } from 'react';
import { Text } from 'react-konva';

interface EditableTextProps {
  x: number;
  y: number;
  text: string;
  width: number;
  height: number;
  fontSize: number;
  onTextChange: (newText: string) => void;
  isSelected: boolean;
}

const EditableText: React.FC<EditableTextProps> = ({ 
  x, y, text, width, height, fontSize, onTextChange, isSelected 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const textRef = useRef<any>(null);

  const handleTextClick = (e: any) => {
    if (isSelected) {
      console.log('Text clicked:', text);
      setIsEditing(true);
      e.cancelBubble = true;
    }
  };
  
  const handleTextChange = (e: any) => {
    const newText = e.target.value;
    console.log('New text:', newText);
    onTextChange(newText);
  };
  
  const handleBlur = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <Text
        x={x}
        y={y}
        text={text}
        width={width}
        height={height}
        fontSize={fontSize}
        fill="black"
        onClick={handleTextClick}
      />
      {isEditing && (
        <input
          style={{
            position: 'absolute',
            top: y + 'px',
            left: x + 'px',
            width: width + 'px',
            height: height + 'px',
            fontSize: fontSize + 'px',
            border: 'none',
            padding: '0px',
            margin: '0px',
            background: 'none',
            outline: 'none',
          }}
          value={text}
          onChange={handleTextChange}
          onBlur={handleBlur}
          onKeyDown={(e) => {
            handleBlur();
          }}
          onClick={() => {
            handleBlur();
          }}
    
          autoFocus
        />
      )}
    </>
  );
};

export default EditableText;
