'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const WireframeGlobe = ({ color }: { color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x += 0.001;
    }
  });

  return (
    <mesh ref={meshRef}>
      <Icosahedron args={[2.5, 4]}>
        <meshStandardMaterial wireframe color={color} />
      </Icosahedron>
    </mesh>
  );
};

const Globe = ({ color }: { color: string }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <WireframeGlobe color={color} />
    </Canvas>
  );
};

export default Globe; 