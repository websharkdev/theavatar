"use client";
import { Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Suspense } from "react";

import { lazy } from "react";

const Experience = lazy(() => import("./(components)"));

const Loader = () => {
  const { progress } = useProgress();
  return (
    <>
      <color attach="background" args={["#333333"]} />
      <Html>
        <div className="text-2xl text-white font-medium text-center flex justify-center items-center">
          {progress.toFixed(0)}% loaded
        </div>
      </Html>
    </>
  );
};

const Main = () => {
  const { perfomance } = useControls("perfomance", {
    perfomance: false,
  });
  return (
    <div className={`flex w-full justify-center items-center`}>
      <div className="h-[95dvh] w-full">
        <Canvas flat shadows camera={{ fov: 20 }}>
          <color attach="background" args={["#ececec"]} />
          {perfomance && <Perf position="top-left" />}
          <directionalLight position={[1, 2, 3]} intensity={1.5} />
          <ambientLight intensity={0.5} />

          <Suspense fallback={<Loader />}>
            <Experience />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Main;
