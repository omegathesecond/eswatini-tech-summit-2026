import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import FloatingGeometry from './FloatingGeometry';
import { Suspense } from 'react';

export default function Scene3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7b2cbf" />

        <Suspense fallback={null}>
          <FloatingGeometry
            position={[-3, 2, 0]}
            geometry="octahedron"
            color="#00f5ff"
            speed={0.8}
          />
          <FloatingGeometry
            position={[3, -2, -2]}
            geometry="torus"
            color="#7b2cbf"
            speed={1.2}
          />
          <FloatingGeometry
            position={[0, 0, -3]}
            geometry="sphere"
            color="#ff006e"
            speed={1}
          />
          <FloatingGeometry
            position={[-4, -3, 1]}
            geometry="box"
            color="#00f5ff"
            speed={0.6}
          />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
