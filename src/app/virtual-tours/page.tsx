'use client';

import { wonders } from '@/data/wonders';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VirtualToursPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Virtual Tours
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the Seven Wonders from anywhere in the world through our immersive virtual tours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {wonders.map((wonder, index) => (
            <motion.div
              key={wonder.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[300px] md:h-full">
                  <Image
                    src={wonder.imageUrl}
                    alt={wonder.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-white mb-4">{wonder.name}</h2>
                  <p className="text-gray-300 mb-6">{wonder.description}</p>
                  <a
                    href={wonder.virtualTourUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    Start Virtual Tour
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
