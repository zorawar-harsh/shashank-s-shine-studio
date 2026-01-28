import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import { Float, Environment, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function CarModel() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Car body - stylized sports car shape */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.6, 1.2]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Car cabin */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1.8, 0.5, 1]} />
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} transparent opacity={0.8} />
      </mesh>
      
      {/* Hood slope */}
      <mesh position={[1.2, 0.25, 0]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[1, 0.3, 1.1]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Rear slope */}
      <mesh position={[-1.1, 0.25, 0]} rotation={[0, 0, 0.4]}>
        <boxGeometry args={[0.8, 0.3, 1.1]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Wheels */}
      {[[-1, -0.3, 0.7], [-1, -0.3, -0.7], [1, -0.3, 0.7], [1, -0.3, -0.7]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
          <meshStandardMaterial color="#333333" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
      
      {/* Red accent stripe */}
      <mesh position={[0, 0.31, 0]}>
        <boxGeometry args={[3.1, 0.02, 0.1]} />
        <meshStandardMaterial color="#e53935" emissive="#e53935" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Headlights */}
      <mesh position={[1.5, 0.1, 0.4]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
      </mesh>
      <mesh position={[1.5, 0.1, -0.4]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
      </mesh>
      
      {/* Tail lights */}
      <mesh position={[-1.5, 0.1, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#e53935" emissive="#e53935" emissiveIntensity={2} />
      </mesh>
      <mesh position={[-1.5, 0.1, -0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#e53935" emissive="#e53935" emissiveIntensity={2} />
      </mesh>
    </group>
  );
}

function GlowingSphere() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[0.5, 32, 32]} position={[3, 1, -2]}>
        <MeshDistortMaterial
          color="#e53935"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 100;
  
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#e53935" transparent opacity={0.6} />
    </points>
  );
}

export default function Car3D() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [4, 2, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <spotLight position={[-10, 5, 10]} angle={0.3} penumbra={1} intensity={0.5} color="#e53935" />
          <pointLight position={[0, 5, 0]} intensity={0.5} color="#e53935" />
          
          <CarModel />
          <GlowingSphere />
          <FloatingParticles />
          
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
