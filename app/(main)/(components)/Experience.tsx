import {
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
  useTexture,
} from "@react-three/drei";

import { useThree } from "@react-three/fiber";
import { Suspense } from "react";
import OleksiiModel from "./OleksiiModel";

import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    EyeLeft: THREE.Mesh;
  };
  materials: {};
};

type Props = {};

const Preloader = () => {
  const { nodes } = useGLTF("/models/preloader-avatar.glb") as GLTFResult;
  return (
    <group dispose={null} position-y={1}>
      <mesh castShadow receiveShadow geometry={nodes.EyeLeft.geometry}>
        <meshNormalMaterial wireframe />
      </mesh>
    </group>
  );
};

const Experience = (props: Props) => {
  const viewport = useThree((state) => state.viewport);
  const texture = useTexture("textures/Kyiv.jpg");

  return (
    <>
      <Environment preset="city" />
      <OrbitControls makeDefault />
      <group position-y={-1.3}>
        <ContactShadows
          opacity={0.6}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#141414"
        />

        <Suspense fallback={<Preloader />}>
          <OleksiiModel />
        </Suspense>
      </group>

      <mesh position-z={-3} position-y={0.25}>
        <boxGeometry args={[viewport.width * 1.78, viewport.height * 2, 0.8]} />
        <meshBasicMaterial map={texture} />
      </mesh>

      <mesh position={[0, -1.415, 0]} castShadow receiveShadow>
        <boxGeometry args={[7, 0.21, 7]} />
        <meshBasicMaterial color={"#333"} />
      </mesh>
    </>
  );
};

export default Experience;
