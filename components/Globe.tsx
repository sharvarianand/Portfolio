'use client';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useClientTheme } from '../hooks/useClientTheme';

const GeodesicDome = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const meshRef = useRef<THREE.LineSegments>(null!);
  const particlesRef = useRef<THREE.Points>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });

  const domeGeometry = useMemo(() => {
    const geometry = new THREE.IcosahedronGeometry(2.5, 2);
    const edges = new THREE.EdgesGeometry(geometry);
    return edges;
  }, []);

  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const particleCount = 80;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.5 + Math.random() * 1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  const domeMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({
      color: new THREE.Color(isDarkMode ? '#3b82f6' : '#2563eb'),
      transparent: true,
      opacity: isDarkMode ? 0.8 : 1.0,
    });
  }, [isDarkMode]);

  const particleColor = isDarkMode ? '#8b5cf6' : '#7c3aed';
  const innerGlowColor = isDarkMode ? '#3b82f6' : '#2563eb';

  return (
    <group>
      <lineSegments ref={meshRef} geometry={domeGeometry} material={domeMaterial} />

      <points ref={particlesRef} geometry={particlesGeometry}>
        <pointsMaterial
          color={particleColor}
          size={0.03}
          transparent
          opacity={isDarkMode ? 0.6 : 0.8}
          sizeAttenuation={true}
        />
      </points>

      <mesh>
        <sphereGeometry args={[2.3, 32, 32]} />
        <meshBasicMaterial
          color={innerGlowColor}
          transparent
          opacity={isDarkMode ? 0.02 : 0.05}
        />
      </mesh>
    </group>
  );
};

const Globe = () => {
  const { resolvedTheme, mounted } = useClientTheme();
  const isDarkMode = mounted && resolvedTheme === 'dark';

  const light1Color = isDarkMode ? '#3b82f6' : '#2563eb';
  const light2Color = isDarkMode ? '#8b5cf6' : '#7c3aed';

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={isDarkMode ? 0.2 : 0.5} />
      <pointLight position={[5, 5, 5]} intensity={isDarkMode ? 0.3 : 0.6} color={light1Color} />
      <pointLight position={[-5, -5, -5]} intensity={isDarkMode ? 0.2 : 0.4} color={light2Color} />
      <GeodesicDome isDarkMode={isDarkMode} />
    </Canvas>
  );
};

export default Globe; 