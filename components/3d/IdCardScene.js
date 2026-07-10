'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

function CardMesh({ profile, role }) {
  const group = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const avatarTexture = useTexture('/images/profile/profile-2.jfif');

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.x += (target.current.x - group.current.rotation.x) * Math.min(delta * 5, 1);
    group.current.rotation.y += (target.current.y - group.current.rotation.y) * Math.min(delta * 5, 1);
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.04;
  });

  return (
    <group
      ref={group}
      onPointerMove={(event) => {
        target.current = { x: -event.pointer.y * 0.12, y: event.pointer.x * 0.16 };
      }}
      onPointerLeave={() => { target.current = { x: 0, y: 0 }; }}
    >
      <mesh position={[0, 1.6, -0.01]}>
        <boxGeometry args={[0.3, 1.8, 0.05]} />
        <meshStandardMaterial color="#06b6d4" metalness={0.4} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.82, 0]}>
        <torusGeometry args={[0.14, 0.03, 8, 20]} />
        <meshStandardMaterial color="#67e8f9" metalness={0.65} roughness={0.22} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.8, 1.75, 0.08]} />
        <meshStandardMaterial color="#111827" metalness={0.35} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0, 0.045]}>
        <planeGeometry args={[2.6, 1.55]} />
        <meshStandardMaterial color="#172033" metalness={0.2} roughness={0.25} transparent opacity={0.92} />
      </mesh>
      {/* 3D Profile Photo Texture Mapping */}
      <mesh position={[-0.8, 0.35, 0.09]}>
        <planeGeometry args={[0.7, 0.7]} />
        <meshBasicMaterial map={avatarTexture} />
      </mesh>
      <mesh position={[0.1, 0.28, 0.1]}>
        <planeGeometry args={[1.5, 0.04]} />
        <meshBasicMaterial color="#e2e8f0" />
      </mesh>
      <mesh position={[0.1, 0.08, 0.1]}>
        <planeGeometry args={[1.2, 0.025]} />
        <meshBasicMaterial color="#67e8f9" />
      </mesh>
      <mesh position={[0.1, -0.16, 0.1]}>
        <planeGeometry args={[1.35, 0.018]} />
        <meshBasicMaterial color="#64748b" />
      </mesh>
      <mesh position={[0.3, -0.56, 0.12]} rotation={[0, 0, -0.15]}>
        <planeGeometry args={[1.3, 0.4]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.16} />
      </mesh>
      <mesh position={[0.15, 0.05, 0.13]} rotation={[0, 0, -0.22]}>
        <planeGeometry args={[2.9, 0.34]} />
        <meshBasicMaterial color="#ecfeff" transparent opacity={0.12} />
      </mesh>
      <pointLight position={[1.5, 1.5, 2]} intensity={3} color="#67e8f9" distance={5} />
      <pointLight position={[-1.5, -0.5, 1]} intensity={1.5} color="#3b82f6" distance={4} />
    </group>
  );
}

export default function IdCardScene({ profile, role }) {
  return (
    <Canvas camera={{ position: [0, 0, 4.8], fov: 34 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} aria-hidden="true">
      <ambientLight intensity={0.8} />
      <Suspense fallback={null}>
        <CardMesh profile={profile} role={role} />
      </Suspense>
    </Canvas>
  );
}
