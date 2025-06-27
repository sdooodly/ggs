import React, { useRef } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';

const WaterMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color(0x00bfa5),
    uMouse: new THREE.Vector2(0, 0),
  },
  // vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  `
    uniform float uTime;
    uniform vec3 uColor;
    uniform vec2 uMouse;
    varying vec2 vUv;

    float random(vec2 p) {
        return fract(sin(dot(p.xy, vec2(12.9898, 78.233))) * 43758.5453);
    }

    float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(random(i + vec2(0.0, 0.0)), random(i + vec2(1.0, 0.0)), u.x),
                   mix(random(i + vec2(0.0, 1.0)), random(i + vec2(1.0, 1.0)), u.x), u.y);
    }

    float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 6; i++) {
            value += amplitude * noise(p);
            p *= 2.0;
            amplitude *= 0.5;
        }
        return value;
    }

    void main() {
        vec2 st = vUv * 5.0;
        st.x += uTime * 0.05;
        st.y += sin(uTime * 0.2) * 0.05;
        
        vec2 q = vec2(0.0);
        q.x = fbm(st + uMouse * 0.05);
        q.y = fbm(st + vec2(1.0));

        vec2 r = vec2(0.0);
        r.x = fbm(st + q + vec2(1.7,9.2)+ 0.15*uTime );
        r.y = fbm(st + q + vec2(8.3,2.8)+ 0.126*uTime);

        float f = fbm(st+r);

        gl_FragColor = vec4(uColor * f, 1.0);
    }
  `
);

extend({ WaterMaterial });

function Sea() {
  const ref = useRef();
  const { viewport } = useThree();

  useFrame((state, delta) => {
    ref.current.uTime += delta;
    ref.current.uMouse.x = state.mouse.x;
    ref.current.uMouse.y = state.mouse.y;
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <waterMaterial ref={ref} />
    </mesh>
  );
}

function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 1], fov: 50 }} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <Sea />
    </Canvas>
  );
}

export default HeroCanvas;
