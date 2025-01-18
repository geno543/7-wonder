'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { wonders } from '@/data/wonders';
import OptimizedImage from '@/components/OptimizedImage';

export default function WondersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Seven Wonders of the World
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the most magnificent monuments ever created by human civilization,
              each with its own unique history and cultural significance.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Wonders Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wonders.map((wonder, index) => (
            <motion.div
              key={wonder.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/wonders/${wonder.id}`}>
                <div className="group relative h-[400px] rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm">
                  <OptimizedImage
                    src={wonder.imageUrl}
                    alt={wonder.name}
                    fill
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {wonder.name}
                    </h2>
                    <p className="text-gray-300 text-lg mb-4">
                      {wonder.location}
                    </p>
                    <p className="text-gray-400 line-clamp-2">
                      {wonder.description}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-white font-medium">#{wonder.id}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
