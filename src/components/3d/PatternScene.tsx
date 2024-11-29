import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { PatternCube } from './PatternCube';

interface Pattern {
  name: string;
  position: [number, number, number];
}

const patterns: Pattern[] = [
  { name: "Singleton", position: [-2, 0, 0] },
  { name: "Factory", position: [0, 0, 0] },
  { name: "Observer", position: [2, 0, 0] },
];

export function PatternScene() {
  const [hoveredPattern, setHoveredPattern] = useState<string | null>(null);

  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />
        
        {patterns.map((pattern) => (
          <PatternCube
            key={pattern.name}
            pattern={pattern.name}
            position={pattern.position}
            hovered={hoveredPattern === pattern.name}
            onClick={() => console.log(`Clicked ${pattern.name}`)}
          />
        ))}
      </Canvas>
    </div>
  );
}