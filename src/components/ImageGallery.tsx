import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(index)}
            className="cursor-pointer rounded-lg overflow-hidden"
          >
            <OptimizedImage
              src={image}
              alt={`${alt} ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-48 md:h-64"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full aspect-video"
            >
              <OptimizedImage
                src={images[selectedImage]}
                alt={`${alt} ${selectedImage + 1}`}
                fill
                className="rounded-lg"
                priority
              />
            </motion.div>

            <button
              className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    selectedImage === index ? 'bg-white' : 'bg-gray-500'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(index);
                  }}
                />
              ))}
            </div>

            {selectedImage > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:text-gray-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
              >
                ←
              </button>
            )}

            {selectedImage < images.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:text-gray-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
              >
                →
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
