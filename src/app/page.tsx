'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import InteractiveGlobe from '@/components/Globe/InteractiveGlobe';
import WonderTimeline from '@/components/Timeline/WonderTimeline';
import TourViewer from '@/components/VirtualTour/TourViewer';
import { virtualTours } from '@/data/virtualTours';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function Home() {
  const [selectedTour, setSelectedTour] = useState('taj-mahal');

  const features = [
    {
      title: 'Interactive 3D Globe',
      description: 'Explore the Seven Wonders through our interactive 3D globe visualization.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Virtual Tours',
      description: 'Take immersive virtual tours of each wonder from the comfort of your home.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Historical Insights',
      description: 'Discover rich historical information and fascinating facts about each wonder.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/wonders/taj-mahal-1.jpg"
              alt="Seven Wonders Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-gray-900" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto pt-20 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Seven Wonders of the World
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Embark on a journey to explore the most magnificent monuments ever created by human civilization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/wonders"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              >
                Explore Wonders
              </Link>
              <Link
                href="/virtual-tours"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              >
                Take Virtual Tour
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Experience the Wonders
            </h2>
            <p className="text-xl text-gray-300">
              Discover the world's most magnificent landmarks through our immersive platform.
            </p>
          </motion.div>

          {/* Interactive Globe */}
          <div className="mb-24">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Interactive 3D Globe</h3>
            <Suspense fallback={<LoadingSpinner />}>
              <InteractiveGlobe />
            </Suspense>
          </div>

          {/* Timeline Section */}
          <div className="mb-24">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Historical Timeline</h3>
            <Suspense fallback={<LoadingSpinner />}>
              <WonderTimeline />
            </Suspense>
          </div>

          {/* Virtual Tour Section */}
          <section className="py-16 bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Virtual Tour Experience
              </h2>
              
              {/* Tour Selector */}
              <div className="max-w-6xl mx-auto mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.values(virtualTours).map((tour) => (
                    <button
                      key={tour.id}
                      onClick={() => setSelectedTour(tour.id)}
                      className={`p-4 rounded-lg transition-all ${
                        selectedTour === tour.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <h3 className="font-semibold mb-2">{tour.name}</h3>
                      <p className="text-sm opacity-80">{tour.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tour Viewer */}
              <div className="max-w-6xl mx-auto">
                <TourViewer tourId={selectedTour} />
              </div>
              <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
                Experience the magnificence of the Seven Wonders through our immersive virtual tours. 
                Navigate through different viewpoints and discover interesting details about each location.
              </p>
            </div>
          </section>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-colors"
              >
                <div className="text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden"
          >
            <div className="relative px-8 py-16 md:px-16">
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Begin your virtual exploration of the Seven Wonders today.
                </p>
                <Link
                  href="/wonders"
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Get Started
                </Link>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
