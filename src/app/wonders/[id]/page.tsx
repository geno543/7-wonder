'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { wonders } from '@/data/wonders';
import OptimizedImage from '@/components/OptimizedImage';
import ImageGallery from '@/components/ImageGallery';

export default function WonderPage() {
  const { id } = useParams();
  const wonder = wonders.find(w => w.id === parseInt(id as string));
  const nextWonder = wonders.find(w => w.id === (wonder ? (wonder.id % wonders.length) + 1 : 1));

  if (!wonder) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Wonder Not Found</h1>
          <Link
            href="/wonders"
            className="text-blue-400 hover:text-blue-300"
          >
            Return to Wonders
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <OptimizedImage
          src={wonder.imageUrl}
          alt={wonder.name}
          fill
          priority
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-gray-900" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {wonder.name}
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              {wonder.location}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">About</h2>
              <p className="text-gray-300 text-lg mb-8">
                {wonder.description}
              </p>
              <h2 className="text-3xl font-bold text-white mb-6">History</h2>
              <p className="text-gray-300 text-lg mb-8">
                {wonder.history}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Gallery</h2>
              <ImageGallery images={wonder.galleryImages} alt={wonder.name} />
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-400 mb-1">Location</h4>
                  <p className="text-white">{wonder.location}</p>
                </div>
                <div>
                  <h4 className="text-gray-400 mb-1">Coordinates</h4>
                  <p className="text-white">
                    {wonder.coordinates.lat.toFixed(4)}°, {wonder.coordinates.lng.toFixed(4)}°
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-400 mb-1">Virtual Tour</h4>
                  <a
                    href={wonder.virtualTourUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Start Tour →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Next Wonder Preview */}
        {nextWonder && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-24"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Next Wonder</h2>
            <Link href={`/wonders/${nextWonder.id}`}>
              <div className="relative h-[40vh] rounded-2xl overflow-hidden group">
                <OptimizedImage
                  src={nextWonder.imageUrl}
                  alt={nextWonder.name}
                  fill
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {nextWonder.name}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {nextWonder.location}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
