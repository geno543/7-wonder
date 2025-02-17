'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { wonders } from '@/data/wonders';

const Globe = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create Earth
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x2b3a67,
      wireframe: true,
    });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Add markers for wonders
    wonders.forEach((wonder) => {
      const markerGeometry = new THREE.SphereGeometry(0.1, 16, 16);
      const markerMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0000,
      });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      
      // Convert coordinates to 3D position
      const lat = wonder.coordinates.lat * (Math.PI / 180);
      const lon = -wonder.coordinates.lng * (Math.PI / 180);
      const radius = 5.2;
      
      marker.position.x = radius * Math.cos(lat) * Math.cos(lon);
      marker.position.y = radius * Math.sin(lat);
      marker.position.z = radius * Math.cos(lat) * Math.sin(lon);
      
      scene.add(marker);
    });

    // Position camera
    camera.position.z = 15;

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.002;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Globe;
