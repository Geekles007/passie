import React, { memo, useRef } from 'react';
import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';

interface ModelProps {}

const Model = ({}: ModelProps) => {
  const meshRef = useRef<any>(null);
  const { nodes } = useGLTF('/medias/torus.glb');
  const { viewport } = useThree();

  useFrame(() => {
    meshRef.current.rotation.x += 0.02;
  });

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  return (
    <group scale={viewport.width / 8.5}>
      <Text fontWeight={700}>ibird agency</Text>
      <mesh ref={meshRef} {...nodes.Torus}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};

export default memo(Model);
