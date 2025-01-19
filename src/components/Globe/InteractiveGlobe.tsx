'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { gsap } from 'gsap';

interface WonderLocation {
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  description: string;
}

const WONDERS: WonderLocation[] = [
  {
    name: 'Great Wall of China',
    coordinates: [40.4319, 116.5704],
    description: 'Ancient wall spanning thousands of miles across China',
  },
  {
    name: 'Petra',
    coordinates: [30.3285, 35.4444],
    description: 'Ancient city carved into rose-colored rock faces',
  },
  {
    name: 'Christ the Redeemer',
    coordinates: [-22.9519, -43.2105],
    description: 'Iconic statue overlooking Rio de Janeiro',
  },
  {
    name: 'Machu Picchu',
    coordinates: [-13.1631, -72.5450],
    description: 'Ancient Incan city in the Andes Mountains',
  },
  {
    name: 'Chichen Itza',
    coordinates: [20.6843, -88.5678],
    description: 'Ancient Mayan pyramid temple',
  },
  {
    name: 'Colosseum',
    coordinates: [41.8902, 12.4922],
    description: 'Ancient Roman amphitheater',
  },
  {
    name: 'Taj Mahal',
    coordinates: [27.1751, 78.0421],
    description: 'Magnificent marble mausoleum',
  },
];

const InteractiveGlobe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<THREE.Group | undefined>();
  const markersRef = useRef<THREE.Group>(new THREE.Group());
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true,
        logarithmicDepthBuffer: true,
      });

      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      containerRef.current.appendChild(renderer.domElement);

      // Load Earth textures
      const textureLoader = new THREE.TextureLoader();
      const earthGroup = new THREE.Group();

      // Create Earth
      const earthGeometry = new THREE.SphereGeometry(5, 64, 64);
      
      // Create layered Earth materials
      const oceanMaterial = new THREE.MeshPhongMaterial({
        color: 0x001133,
        shininess: 60,
        transparent: true,
        opacity: 0.9,
      });

      const continentsMaterial = new THREE.MeshPhongMaterial({
        color: 0x225511,
        shininess: 30,
      });

      // Create ocean sphere (base layer)
      const oceanSphere = new THREE.Mesh(earthGeometry, oceanMaterial);
      earthGroup.add(oceanSphere);

      // Create continents sphere (slightly larger)
      const continentsGeometry = new THREE.SphereGeometry(5.01, 64, 64);
      const continentsSphere = new THREE.Mesh(continentsGeometry, continentsMaterial);
      earthGroup.add(continentsSphere);

      // Add atmosphere effect
      const atmosphereGeometry = new THREE.SphereGeometry(5.15, 64, 64);
      const atmosphereMaterial = new THREE.MeshPhongMaterial({
        color: 0x0077ff,
        transparent: true,
        opacity: 0.2,
        side: THREE.BackSide,
      });
      const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
      earthGroup.add(atmosphere);

      scene.add(earthGroup);
      globeRef.current = earthGroup;

      // Try to load textures and enhance the globe if available
      Promise.all([
        textureLoader.loadAsync('/textures/earth_daymap.jpg').catch(() => null),
        textureLoader.loadAsync('/textures/earth_normal_map.jpg').catch(() => null),
        textureLoader.loadAsync('/textures/earth_specular_map.jpg').catch(() => null),
        textureLoader.loadAsync('/textures/earth_clouds.jpg').catch(() => null),
      ]).then(([dayTexture, normalTexture, specularTexture, cloudsTexture]) => {
        if (dayTexture) {
          // Update ocean material with textures
          oceanSphere.material = new THREE.MeshPhongMaterial({
            map: dayTexture,
            normalMap: normalTexture || undefined,
            specularMap: specularTexture || undefined,
            color: 0x001133,
            shininess: 60,
            transparent: true,
            opacity: 0.9,
          });

          // Update continents material with textures
          continentsSphere.material = new THREE.MeshPhongMaterial({
            map: dayTexture,
            normalMap: normalTexture || undefined,
            specularMap: specularTexture || undefined,
            color: 0x225511,
            shininess: 30,
            transparent: true,
            opacity: 0.8,
          });

          // Add clouds if texture is available
          if (cloudsTexture) {
            const cloudsGeometry = new THREE.SphereGeometry(5.1, 64, 64);
            const cloudsMaterial = new THREE.MeshPhongMaterial({
              map: cloudsTexture,
              transparent: true,
              opacity: 0.4,
              depthWrite: false,
            });
            const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
            earthGroup.add(clouds);
            
            // Animate clouds
            gsap.to(clouds.rotation, {
              y: Math.PI * 2,
              duration: 100,
              repeat: -1,
              ease: "none"
            });
          }
        }
        setIsLoading(false);
      }).catch((error) => {
        console.error('Error loading textures:', error);
        setError('Failed to load some textures, using basic appearance');
        setIsLoading(false);
      });

      // Enhanced lighting for better continent visibility
      const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
      scene.add(ambientLight);

      const mainLight = new THREE.DirectionalLight(0xffffff, 1.5);
      mainLight.position.set(50, 0, 50);
      scene.add(mainLight);

      // Add rim light for better edge definition
      const rimLight = new THREE.DirectionalLight(0x404040, 0.5);
      rimLight.position.set(-50, 0, -50);
      scene.add(rimLight);

      // Add top light for better continent visibility
      const topLight = new THREE.DirectionalLight(0x404040, 0.4);
      topLight.position.set(0, 50, 0);
      scene.add(topLight);

      // Add markers for each wonder
      WONDERS.forEach((wonder) => {
        const markerGroup = new THREE.Group();
        
        // Create marker sphere
        const markerGeometry = new THREE.SphereGeometry(0.08, 16, 16);
        const markerMaterial = new THREE.MeshPhongMaterial({ 
          color: 0xff4444,
          emissive: 0xff0000,
          emissiveIntensity: 0.5,
        });
        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        
        // Add glow effect
        const glowGeometry = new THREE.SphereGeometry(0.12, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: 0xff4444,
          transparent: true,
          opacity: 0.5,
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        
        // Convert lat/long to 3D coordinates
        const phi = (90 - wonder.coordinates[0]) * (Math.PI / 180);
        const theta = (wonder.coordinates[1] + 180) * (Math.PI / 180);
        const x = -(5.2 * Math.sin(phi) * Math.cos(theta));
        const y = 5.2 * Math.cos(phi);
        const z = 5.2 * Math.sin(phi) * Math.sin(theta);
        
        markerGroup.position.set(x, y, z);
        markerGroup.add(marker);
        markerGroup.add(glow);
        
        // Store wonder data in the group
        markerGroup.userData = wonder;
        
        markersRef.current.add(markerGroup);
      });
      scene.add(markersRef.current);

      // Camera position
      camera.position.z = 15;

      // Controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.rotateSpeed = 0.5;
      controls.minDistance = 8;
      controls.maxDistance = 20;
      controls.enablePan = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        if (globeRef.current) {
          // Rotate clouds slightly faster than Earth
          const clouds = globeRef.current.children[1];
          if (clouds) {
            clouds.rotation.y += 0.0002;
          }
        }
        renderer.render(scene, camera);
      };
      animate();

      // Handle window resize
      const handleResize = () => {
        if (!containerRef.current) return;
        camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      };
      window.addEventListener('resize', handleResize);

      // Raycaster for marker interaction
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      const onMouseMove = (event: MouseEvent) => {
        if (!containerRef.current || !tooltipRef.current || !markersRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / containerRef.current.clientWidth) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / containerRef.current.clientHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        
        // Get all marker groups and their children
        const markerObjects = markersRef.current.children.flatMap(group => 
          group.children.map(child => {
            child.userData = group.userData; // Ensure child meshes have the same userData as their parent group
            return child;
          })
        );
        
        const intersects = raycaster.intersectObjects(markerObjects);

        if (intersects.length > 0) {
          const wonder = intersects[0].object.userData;
          if (wonder && wonder.name) {
            tooltipRef.current.style.display = 'block';
            tooltipRef.current.style.left = `${event.clientX + 10}px`;
            tooltipRef.current.style.top = `${event.clientY + 10}px`;
            tooltipRef.current.innerHTML = `
              <h3 class="text-lg font-bold mb-1">${wonder.name}</h3>
              <p class="text-sm">${wonder.description}</p>
            `;

            // Scale up the entire marker group
            const markerGroup = intersects[0].object.parent;
            if (markerGroup) {
              gsap.to(markerGroup.scale, {
                x: 1.5,
                y: 1.5,
                z: 1.5,
                duration: 0.3,
              });
            }
          }
        } else {
          tooltipRef.current.style.display = 'none';
          // Reset scale of all marker groups
          if (markersRef.current) {
            markersRef.current.children.forEach((markerGroup) => {
              gsap.to(markerGroup.scale, {
                x: 1,
                y: 1,
                z: 1,
                duration: 0.3,
              });
            });
          }
        }
      };

      containerRef.current.addEventListener('mousemove', onMouseMove);

      return () => {
        window.removeEventListener('resize', handleResize);
        containerRef.current?.removeEventListener('mousemove', onMouseMove);
        containerRef.current?.removeChild(renderer.domElement);
        renderer.dispose();
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to initialize globe');
      setIsLoading(false);
    }
  }, []);

  if (error) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center bg-gray-900 text-white">
        <p>Unable to load 3D globe. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[600px]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500" />
        </div>
      )}
      <div ref={containerRef} className="w-full h-full" />
      <div
        ref={tooltipRef}
        className="fixed hidden bg-black/80 text-white p-4 rounded-lg shadow-lg pointer-events-none z-50"
      />
    </div>
  );
};

export default InteractiveGlobe;
