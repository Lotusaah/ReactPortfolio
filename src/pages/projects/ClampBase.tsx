import React, { useEffect, useRef } from 'react';
import './Project.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import clampBase from './3D-files/clamp-base-v2.gltf'; // Import the GLTF file

export const ClampBase: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (mountRef.current === null) return;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight / 2);
    mountRef.current.appendChild(renderer.domElement);

    // Set up camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(10, 10, 10);
    camera.aspect = window.innerWidth / (window.innerHeight /2 );
    camera.updateProjectionMatrix();

    // Set up scene
    const scene = new THREE.Scene();

    // Set up lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Set up OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.minDistance = 10;
    controls.maxDistance = 500;
    controls.maxPolarAngle = Math.PI / 2;

    // Load GLTF model
    const loader = new GLTFLoader();
    console.log('Loading GLTF from:', clampBase);

    loader.load(
      clampBase,
      function (gltf) {
        const model = gltf.scene;
        model.scale.set(100, 100, 100); // Adjust the scale if necessary
        model.position.set(0, -1, 0);
        model.rotateOnAxis(new THREE.Vector3(0, 1, 0), THREE.MathUtils.degToRad(23)); // Rotate around Y axis by 23 degrees
        scene.add(model);
        modelRef.current = model;
        console.log('GLTF model added to scene:', model);
      },
      undefined,
      function (error) {
        console.error('Error loading GLTF file:', error);
      }
    );

    // Animation loop
   const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Rotate the model around the Y-axis
    }
    renderer.render(scene, camera);
  };
  animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight /2;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef} className="w-full h-full rounded-lg overflow-hidden bg-white shadow-lg project-moody transition-all" />
  );
};
