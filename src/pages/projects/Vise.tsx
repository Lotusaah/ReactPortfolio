import React, { useEffect, useRef } from 'react';
import './Project.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import subassembly from './3D-files/vise-subassembly.gltf'; // Import the GLTF file

export const Vise: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (mountRef.current === null) return;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight / 2);
    mountRef.current.appendChild(renderer.domElement);

    // Set up camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(40, 40, 20);
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

    // Create a group to hold the model
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);
    modelGroupRef.current = modelGroup;

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load(
      subassembly,
      function (gltf) {
        const model = gltf.scene;
        model.scale.set(250, 250, 250); // Adjust the scale if necessary
        model.position.set(0, -8, 10); // Adjust model position if necessary
        modelGroup.add(model);
        console.log('GLTF model added to group:', model);
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
    if (modelGroupRef.current) {
      modelGroupRef.current.rotation.y += 0.005; // Rotate the model around the Y-axis
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
