'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { virtualTours } from '@/data/virtualTours';
import type { Scene } from '@/data/virtualTours';

interface TourViewerProps {
  tourId: string;
}

export default function TourViewer({ tourId }: TourViewerProps) {
  const [currentSceneId, setCurrentSceneId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  const tour = virtualTours[tourId];
  
  useEffect(() => {
    setCurrentSceneId(tour.startingScene);
    setIsLoading(true);
  }, [tourId, tour.startingScene]);

  if (!tour) {
    return <div className="text-white">Tour not found</div>;
  }

  const currentScene = tour.scenes.find(scene => scene.id === currentSceneId);
  if (!currentScene) {
    return <div className="text-white">Scene not found</div>;
  }

  const navigateScene = (direction: 'prev' | 'next') => {
    if (!currentScene) return;

    const targetSceneId = direction === 'prev' ? currentScene.prevScene : currentScene.nextScene;
    if (targetSceneId) {
      setCurrentSceneId(targetSceneId);
      setIsLoading(true);
    }
  };

  const navigateToScene = (sceneId: string) => {
    setCurrentSceneId(sceneId);
    setIsLoading(true);
  };

  return (
    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-gray-800">
      {/* Scene Image */}
      <div className="absolute inset-0">
        <Image
          src={currentScene.imageUrl}
          alt={currentScene.title}
          fill
          className="object-cover"
          onLoad={() => setIsLoading(false)}
          priority
        />
      </div>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-900/80 flex items-center justify-center"
          >
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
        <button
          onClick={() => navigateScene('prev')}
          className={`px-4 py-2 bg-black/50 rounded-lg backdrop-blur-sm transition-opacity ${
            currentScene.prevScene ? 'opacity-100 hover:bg-black/70' : 'opacity-50 cursor-not-allowed'
          }`}
          disabled={!currentScene.prevScene}
        >
          Previous
        </button>
        <button
          onClick={() => navigateScene('next')}
          className={`px-4 py-2 bg-black/50 rounded-lg backdrop-blur-sm transition-opacity ${
            currentScene.nextScene ? 'opacity-100 hover:bg-black/70' : 'opacity-50 cursor-not-allowed'
          }`}
          disabled={!currentScene.nextScene}
        >
          Next
        </button>
      </div>

      {/* Scene Info */}
      <div className="absolute top-4 left-4 right-4">
        <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-2">{currentScene.title}</h3>
          <p className="text-gray-200">{currentScene.description}</p>
        </div>
      </div>

      {/* Hotspots */}
      {currentScene.hotspots.map((hotspot) => (
        <button
          key={hotspot.id}
          style={{
            left: `${hotspot.position.x}%`,
            top: `${hotspot.position.y}%`,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 group"
          onClick={() => hotspot.targetScene && navigateToScene(hotspot.targetScene)}
        >
          <div className="w-8 h-8 rounded-full bg-blue-500/50 backdrop-blur-sm ring-2 ring-white flex items-center justify-center group-hover:bg-blue-500/70 transition-colors">
            {hotspot.targetScene ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            )}
          </div>
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-black/50 backdrop-blur-sm px-3 py-2 rounded whitespace-nowrap">
              <p className="text-white font-medium">{hotspot.title}</p>
              <p className="text-sm text-gray-200">{hotspot.description}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
