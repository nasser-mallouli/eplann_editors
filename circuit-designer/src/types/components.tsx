import React from "react";
import { Group, Rect, Circle, Text, Line } from "react-konva";
import EditableText from "../components/EditableText";

export const components = {
  Resistor: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Rect
          width={60}
          height={20}
          fill="#e6e6e6"
          stroke="#2d3436"
          strokeWidth={2}
        />
        <Line points={[0, 10, 10, 10]} stroke="#2d3436" strokeWidth={2} />
        <Line points={[50, 10, 60, 10]} stroke="#2d3436" strokeWidth={2} />
        {[15, 25, 35, 45].map((x) => (
          <Rect key={x} x={x} y={0} width={5} height={20} fill="#8B4513" />
        ))}
        <EditableText
          x={5}
          y={25}
          text={`R: ${props.resistance || 0}Ω`}
          width={50}
          height={20}
          fontSize={12}
          onTextChange={(value) => {
            const resistance = parseFloat(value.replace(/[^0-9.]/g, ""));
            props.onPropertyChange?.("resistance", resistance);
          }}
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },
  Capacitor: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Line points={[0, 10, 20, 10]} stroke="#2d3436" strokeWidth={2} />
        <Rect
          x={20}
          y={0}
          width={5}
          height={20}
          fill="#b3b3b3"
          stroke="#2d3436"
          strokeWidth={1}
        />
        <Rect
          x={35}
          y={0}
          width={5}
          height={20}
          fill="#b3b3b3"
          stroke="#2d3436"
          strokeWidth={1}
        />
        <Line points={[40, 10, 60, 10]} stroke="#2d3436" strokeWidth={2} />
        <EditableText
          x={5}
          y={25}
          text={`C: ${props.capacitance || 0}F`}
          width={50}
          height={20}
          fontSize={12}
          onTextChange={(value) =>
            props.onPropertyChange?.(
              "Capacitance",
              parseFloat(value.replace(/[^0-9.]/g, ""))
            )
          }
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },
  Inductor: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Line points={[0, 10, 10, 10]} stroke="#2d3436" strokeWidth={2} />
        {[15, 25, 35, 45].map((x, i) => (
          <Circle
            key={i}
            x={x}
            y={10}
            radius={5}
            fill="#fff"
            stroke="#2d3436"
            strokeWidth={2}
          />
        ))}
        <Line points={[50, 10, 60, 10]} stroke="#2d3436" strokeWidth={2} />
        <EditableText
          x={5}
          y={25}
          text={`L: ${props.inductance || 0}H`}
          width={50}
          height={20}
          fontSize={12}
          onTextChange={(value) =>
            props.onPropertyChange?.(
              "inductance",
              parseFloat(value.replace(/[^0-9.]/g, ""))
            )
          }
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },
  Transistor: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Circle radius={20} fill="#f0f0f0" stroke="#2d3436" strokeWidth={2} />
        <Line points={[0, 20, 15, 20]} stroke="#2d3436" strokeWidth={2} />
        <Line points={[20, 0, 20, 40]} stroke="#2d3436" strokeWidth={2} />
        <Line points={[25, 20, 40, 20]} stroke="#2d3436" strokeWidth={2} />
        <Line points={[20, 15, 30, 5]} stroke="#2d3436" strokeWidth={2} />
        <Line points={[20, 25, 30, 35]} stroke="#2d3436" strokeWidth={2} />
        <EditableText
          x={15}
          y={15}
          text={props.label || "T"}
          width={30}
          height={20}
          fontSize={12}
          onTextChange={(value) => props.onPropertyChange?.("label", value)}
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },
  Pin: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Circle radius={8} fill="#2d3436" />
        <EditableText
          x={10}
          y={-15}
          text={props.label || "PIN"}
          width={40}
          height={20}
          fontSize={12}
          onTextChange={(value) => props.onPropertyChange?.("label", value)}
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },
  Wire: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Line
          points={[0, 0, props.width || 100, 0]}
          stroke="#2d3436"
          strokeWidth={2}
        />
      </Group>
    )),
    resizable: true,
  },
  Device: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Rect
          width={props.width || 100}
          height={props.height || 60}
          fill="#f0f0f0"
          stroke="#2d3436"
          strokeWidth={2}
        />
        <EditableText
          x={5}
          y={5}
          text={props.label || "Device"}
          width={(props.width || 100) - 10}
          height={20}
          fontSize={12}
          onTextChange={(newValue) => props.onPropertyChange("label", newValue)}
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },
  Diode: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Line points={[0, 10, 20, 10]} stroke="#2d3436" strokeWidth={2} />
        <Line
          points={[20, 0, 20, 20, 40, 10, 20, 0]}
          stroke="#2d3436"
          strokeWidth={2}
          fill="#f0f0f0"
        />
        <Line points={[40, 10, 60, 10]} stroke="#2d3436" strokeWidth={2} />
        <EditableText
          x={5}
          y={25}
          text={`${props.type || "D"} ${props.voltage || "0.7V"}`}
          width={50}
          height={20}
          fontSize={12}
          onTextChange={(value) => props.onPropertyChange?.("type", value)}
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },
  LED: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Line points={[0, 10, 20, 10]} stroke="#2d3436" strokeWidth={2} />
        <Line
          points={[20, 0, 20, 20, 40, 10, 20, 0]}
          stroke="#2d3436"
          strokeWidth={2}
          fill={props.color || "red"}
        />
        <Line points={[40, 10, 60, 10]} stroke="#2d3436" strokeWidth={2} />
        <Line points={[45, 0, 55, -10]} stroke="#2d3436" strokeWidth={2} />
        <Line points={[50, 0, 60, -10]} stroke="#2d3436" strokeWidth={2} />
        <EditableText
          x={5}
          y={25}
          text={`LED ${props.color || "Red"}`}
          width={50}
          height={20}
          fontSize={12}
          onTextChange={(value) => props.onPropertyChange?.("color", value)}
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },
  IC: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Rect
          width={80}
          height={40}
          fill="#fff"
          stroke="#2d3436"
          strokeWidth={2}
        />
        {Array.from({ length: 8 }).map((_, i) => (
          <Rect
            key={i}
            x={i < 4 ? -5 : 85}
            y={(i % 4) * 10 + 5}
            width={5}
            height={2}
            fill="#2d3436"
          />
        ))}
        <Circle x={5} y={35} radius={2} fill="#2d3436" />
        <EditableText
          x={10}
          y={15}
          text={props.partNumber || "IC"}
          width={60}
          height={20}
          fontSize={12}
          onTextChange={(value) =>
            props.onPropertyChange?.("partNumber", value)
          }
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },
  Sensor: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Circle radius={20} fill="#fff" stroke="#2d3436" strokeWidth={2} />
        <Line points={[0, 20, 40, 20]} stroke="#2d3436" strokeWidth={2} />
        <Line points={[20, 0, 20, 40]} stroke="#2d3436" strokeWidth={2} />
        <Circle x={20} y={20} radius={5} fill="#2d3436" />
        <EditableText
          x={5}
          y={45}
          text={props.type || "Sensor"}
          width={50}
          height={20}
          fontSize={12}
          onTextChange={(value) => props.onPropertyChange?.("type", value)}
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },
  Battery: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Line points={[0, 10, 20, 10]} stroke="#2d3436" strokeWidth={2} />
        <Rect
          x={20}
          y={0}
          width={10}
          height={20}
          fill="#fff"
          stroke="#2d3436"
          strokeWidth={2}
        />
        <Rect
          x={30}
          y={5}
          width={20}
          height={10}
          fill="#fff"
          stroke="#2d3436"
          strokeWidth={2}
        />
        <Line points={[50, 10, 70, 10]} stroke="#2d3436" strokeWidth={2} />
        <EditableText
          x={25}
          y={25}
          text={`${props.voltage || "9V"}`}
          width={30}
          height={20}
          fontSize={12}
          onTextChange={(value) => props.onPropertyChange?.("voltage", value)}
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },
  Switch: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Line points={[0, 10, 20, 10]} stroke="#2d3436" strokeWidth={2} />
        <Circle x={20} y={10} radius={3} fill="#2d3436" />
        <Line
          points={props.state === "closed" ? [20, 10, 40, 10] : [20, 10, 40, 0]}
          stroke="#2d3436"
          strokeWidth={2}
        />
        <Circle x={40} y={10} radius={3} fill="#2d3436" />
        <Line points={[40, 10, 60, 10]} stroke="#2d3436" strokeWidth={2} />
        <EditableText
          x={5}
          y={20}
          text={props.state || "Open"}
          width={50}
          height={20}
          fontSize={12}
          onTextChange={(value) => props.onPropertyChange?.("state", value)}
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },
  Connector: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Rect
          width={60}
          height={30}
          fill="#fff"
          stroke="#2d3436"
          strokeWidth={2}
        />
        {Array.from({ length: 4 }).map((_, i) => (
          <Rect
            key={i}
            x={5 + i * 15}
            y={-5}
            width={10}
            height={10}
            fill="#2d3436"
          />
        ))}
        <EditableText
          x={5}
          y={15}
          text={props.type || "Conn"}
          width={50}
          height={20}
          fontSize={12}
          onTextChange={(value) => props.onPropertyChange?.("type", value)}
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },
  Relay: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Rect
          width={80}
          height={40}
          fill="#fff"
          stroke="#2d3436"
          strokeWidth={2}
        />
        <Line
          points={[10, 20, 20, 20, 30, 10, 40, 30, 50, 10, 60, 30, 70, 20]}
          stroke="#2d3436"
          strokeWidth={2}
        />
        <Line points={[10, 5, 25, 5]} stroke="#2d3436" strokeWidth={2} />
        <Line points={[10, 35, 25, 35]} stroke="#2d3436" strokeWidth={2} />
        <Line points={[20, 5, 20, 35]} stroke="#2d3436" strokeWidth={2} />
        <EditableText
          x={5}
          y={45}
          text={`${props.coilVoltage || "12V"} Relay`}
          width={80}
          height={20}
          fontSize={12}
          onTextChange={(value) =>
            props.onPropertyChange?.("coilVoltage", value)
          }
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },
  Transformer: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        {/* Primary coil */}
        <Line
          points={[0, 10, 10, 10, 20, 0, 30, 20, 40, 0, 50, 20, 60, 10]}
          stroke="#2d3436"
          strokeWidth={2}
        />
        {/* Secondary coil */}
        <Line
          points={[0, 30, 10, 30, 20, 20, 30, 40, 40, 20, 50, 40, 60, 30]}
          stroke="#2d3436"
          strokeWidth={2}
        />
        {/* Coupling lines */}
        <Line points={[30, 10, 30, 30]} stroke="#2d3436" strokeWidth={1} />
        <Line points={[35, 10, 35, 30]} stroke="#2d3436" strokeWidth={1} />
        <EditableText
          x={5}
          y={45}
          text={`${props.ratio || "1:1"} Transformer`}
          width={80}
          height={20}
          fontSize={12}
          onTextChange={(value) => props.onPropertyChange?.("ratio", value)}
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },

  Oscillator: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Rect
          width={60}
          height={40}
          fill="#fff"
          stroke="#2d3436"
          strokeWidth={2}
        />
        <Line
          points={[10, 20, 20, 10, 30, 30, 40, 10, 50, 20]}
          stroke="#2d3436"
          strokeWidth={2}
        />
        <EditableText
          x={5}
          y={45}
          text={`${props.frequency || "1MHz"} OSC`}
          width={50}
          height={20}
          fontSize={12}
          onTextChange={(value) => props.onPropertyChange?.("frequency", value)}
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },

  Fuse: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Line points={[0, 10, 30, 10]} stroke="#2d3436" strokeWidth={2} />
        <Line points={[40, 10, 70, 10]} stroke="#2d3436" strokeWidth={2} />
        <Line points={[30, 0, 40, 20]} stroke="#2d3436" strokeWidth={2} />
        <EditableText
          x={25}
          y={15}
          text={`${props.rating || "1A"} Fuse`}
          width={40}
          height={20}
          fontSize={12}
          onTextChange={(value) => props.onPropertyChange?.("rating", value)}
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },

  Potentiometer: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Rect
          width={60}
          height={20}
          fill="#fff"
          stroke="#2d3436"
          strokeWidth={2}
        />
        <Line points={[40, 5, 50, 15]} stroke="#2d3436" strokeWidth={2} />
        <EditableText
          x={5}
          y={5}
          text={`P: ${props.resistance || "10k"}Ω`}
          width={50}
          height={20}
          fontSize={12}
          onTextChange={(value) => {
            const resistance = parseFloat(value.replace(/[^0-9.]/g, ""));
            props.onPropertyChange?.("resistance", resistance);
          }}
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },

  Display: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Rect
          width={80}
          height={40}
          fill="#fff"
          stroke="#2d3436"
          strokeWidth={2}
        />
        {/* 7-segment display elements */}
        {/* Top segment */}
        <Line points={[20, 10, 40, 10]} stroke="#2d3436" strokeWidth={2} />
        {/* Right top */}
        <Line points={[45, 15, 45, 25]} stroke="#2d3436" strokeWidth={2} />
        {/* Right bottom */}
        <Line points={[45, 30, 45, 40]} stroke="#2d3436" strokeWidth={2} />
        {/* Bottom */}
        <Line points={[20, 45, 40, 45]} stroke="#2d3436" strokeWidth={2} />
        {/* Left bottom */}
        <Line points={[15, 30, 15, 40]} stroke="#2d3436" strokeWidth={2} />
        {/* Left top */}
        <Line points={[15, 15, 15, 25]} stroke="#2d3436" strokeWidth={2} />
        {/* Middle */}
        <Line points={[20, 25, 40, 25]} stroke="#2d3436" strokeWidth={2} />

        {/* Using Konva Text instead of HTML text */}
        <EditableText
          x={50}
          y={15}
          text={props.value || "8"}
          width={20}
          height={20}
          fontSize={16}
          onTextChange={(value) => props.onPropertyChange?.("value", value)}
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },

  Antenna: {
    shape: React.forwardRef((props: any, ref) => (
      <Group ref={ref} {...props}>
        <Line points={[30, 0, 30, 20]} stroke="#2d3436" strokeWidth={2} />
        <Line points={[10, 20, 50, 20]} stroke="#2d3436" strokeWidth={2} />
        <Line points={[20, 25, 40, 25]} stroke="#2d3436" strokeWidth={2} />
        <Line points={[15, 30, 45, 30]} stroke="#2d3436" strokeWidth={2} />
        <EditableText
          x={5}
          y={35}
          text={`${props.frequency || "2.4GHz"}`}
          width={60}
          height={20}
          fontSize={12}
          onTextChange={(value) => props.onPropertyChange?.("frequency", value)}
          isSelected={props.isSelected}
        />
      </Group>
    )),
    resizable: true,
  },
};
