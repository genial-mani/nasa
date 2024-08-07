import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

const Home = () => {
  return (
    <section className="home-section">
      <div className="div-1 flex items-center justify-center">
        <Canvas camera={{position: [80,80,10]}}>
          <Suspense fallback={null}>
            <ambientLight intensity={5} />
            <directionalLight position={[0, 0, 0]} />
            <Model path="/low-polyish_satellite/scene.gltf" />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Home;
