"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import * as THREE from "three";

type Props = {
  className?: string;
  style?: CSSProperties;
  opacity?: number;
  duration?: number; // Animation duration in seconds
};

export function ShaderAnimation({
  className = "w-full h-screen",
  style,
  opacity = 0.25,
  duration = 5.0, // Default 5 seconds
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    camera: THREE.Camera;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    uniforms: any;
    animationId: number;
  } | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const isCompleteRef = useRef<boolean>(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Reset animation state when component mounts (new page load/navigation)
    startTimeRef.current = null;
    isCompleteRef.current = false;

    // Vertex shader
    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `;

    // Fragment shader
    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time*0.05;
        float lineWidth = 0.002;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 5; i++){
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
          }
        }
        
        gl_FragColor = vec4(color[0],color[1],color[2],1.0);
      }
    `;

    // Initialize Three.js scene
    const camera = new THREE.Camera();
    camera.position.z = 1;

    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);

    // Animation speed: original increments by 0.05 per frame
    // At ~60fps, that's approximately 3.0 per second
    const timeSpeed = 3.0; // Time units per second

    const uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
    };

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    // Make the canvas subtle and non-intrusive
    renderer.domElement.style.opacity = `${opacity}`;
    renderer.domElement.style.display = "block";

    container.appendChild(renderer.domElement);

    // Handle window resize
    const onWindowResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      uniforms.resolution.value.x = renderer.domElement.width;
      uniforms.resolution.value.y = renderer.domElement.height;
    };

    // Initial resize
    onWindowResize();
    window.addEventListener("resize", onWindowResize, false);

    // Animation loop - plays once and stops at last frame
    const animate = (currentTime: number) => {
      // Initialize start time on first frame
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }

      // Calculate elapsed time in seconds
      const elapsed = (currentTime - startTimeRef.current) / 1000;

      if (!isCompleteRef.current) {
        // Calculate time value based on elapsed time
        // Start at 1.0, increment by timeSpeed per second
        if (elapsed < duration) {
          // Linear interpolation: start value + (speed * elapsed time)
          uniforms.time.value = 1.0 + elapsed * timeSpeed;
        } else {
          // Animation complete - stop at last frame
          uniforms.time.value = 1.0 + duration * timeSpeed;
          isCompleteRef.current = true;
        }
      }
      // Continue rendering even after animation completes to show last frame
      renderer.render(scene, camera);

      // Continue animation loop
      const animationId = requestAnimationFrame(animate);

      if (sceneRef.current) {
        sceneRef.current.animationId = animationId;
      }
    };

    // Store scene references for cleanup
    sceneRef.current = {
      camera,
      scene,
      renderer,
      uniforms,
      animationId: 0,
    };

    // Start animation
    requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onWindowResize);

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);

        if (container && sceneRef.current.renderer.domElement) {
          container.removeChild(sceneRef.current.renderer.domElement);
        }

        sceneRef.current.renderer.dispose();
        geometry.dispose();
        material.dispose();
      }
    };
  }, [duration, opacity]); // Re-run when duration or opacity changes (triggers on page navigation)

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        background: "transparent",
        overflow: "hidden",
        position: style?.position,
        ...style,
      }}
    />
  );
}


