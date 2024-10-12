'use client';

import React, { memo } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from '@/components/3d-donut-banner/model';
import { Environment } from '@react-three/drei';

interface SceneProps {}

const Scene = ({}: SceneProps) => {
  return (
    <Canvas className={'bg-black'}>
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment preset={'city'} />
      <Model />
    </Canvas>
  );
};

export default memo(Scene);
