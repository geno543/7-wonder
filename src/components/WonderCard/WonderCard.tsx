'use client';

import { Wonder } from '@/data/wonders';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface WonderCardProps {
  wonder: Wonder;
  index: number;
}

export const WonderCard = ({ wonder, index }: WonderCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        <Image
          src={wonder.imageUrl}
          alt={wonder.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-end p-6">
        <motion.div
          animate={{ y: isHovered ? -20 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-white mb-2">{wonder.name}</h3>
          <p className="text-gray-300 mb-4">{wonder.location}</p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-300 line-clamp-2">{wonder.description}</p>
          <div className="flex gap-3">
            <Link
              href={`/wonders/${wonder.id}`}
              className="flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white py-2 rounded-lg text-center transition-colors"
            >
              Learn More
            </Link>
            <Link
              href={wonder.virtualTourUrl}
              target="_blank"
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-center transition-colors"
            >
              Virtual Tour
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
