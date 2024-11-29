import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

interface PatternCubeProps {
  position: [number, number, number];
  pattern: string;
  hovered: boolean;
  onClick: () => void;
}

export function PatternCube({ position, pattern, hovered, onClick }: PatternCubeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const { scale } = useSpring({
    scale: hovered ? 1.1 : 1,
    config: { tension: 300, friction: 10 }
  });

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <animated.mesh
      position={position}
      ref={meshRef}
      scale={scale}
      onClick={onClick}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={hovered ? "#9333ea" : "#6366f1"}
        metalness={0.5}
        roughness={0.2}
      />
      <Text
        position={[0, 0, 0.6]}
        fontSize={0.1}
        color="#ffffff"
      >
        {pattern}
      </Text>
    </animated.mesh>
  );
}