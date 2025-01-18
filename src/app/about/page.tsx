'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  const features = [
    {
      title: 'Interactive 3D Globe',
      description: 'Explore the Seven Wonders through our interactive 3D globe visualization.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Virtual Tours',
      description: 'Take immersive virtual tours of each wonder from the comfort of your home.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Historical Insights',
      description: 'Discover rich historical information and fascinating facts about each wonder.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Lead Developer',
      image: '/images/team/sarah.jpg',
    },
    {
      name: 'Michael Chen',
      role: '3D Graphics Specialist',
      image: '/images/team/michael.jpg',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Historical Research',
      image: '/images/team/emily.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black py-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            About Seven Wonders
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're passionate about bringing the world's most magnificent landmarks to life through
            technology and storytelling. Our mission is to make these wonders accessible to everyone.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8"
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
            </div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg">
              Our goal is to preserve and share the magnificence of the Seven Wonders of the World
              through cutting-edge technology and immersive experiences. We believe that everyone
              should have the opportunity to explore and learn about these incredible monuments,
              regardless of their location or circumstances.
            </p>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-gray-300 text-lg mb-8">
              Have questions or suggestions? We'd love to hear from you. Reach out to us anytime.
            </p>
            <a
              href="mailto:contact@sevenwonders.com"
              className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
