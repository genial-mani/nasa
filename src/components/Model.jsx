import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Model = ({ path }) => {
  const { scene } = useGLTF(path);
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y += 0.005;
    ref.current.rotation.z += 0.005;
  });

  return <primitive ref={ref} object={scene} />;
};

export default Model;
