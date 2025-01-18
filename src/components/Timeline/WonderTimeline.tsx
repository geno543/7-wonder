'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  period: string;
  location: string;
  builders: string;
  significance: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 'great-wall',
    title: 'Great Wall of China',
    date: '220 BCE - 1644 CE',
    description: 'The Great Wall of China was built over many centuries by various Chinese dynasties. The most well-known sections were built during the Ming Dynasty. It stretches over 13,171 miles and served as both a border defense system and regulated trade route.',
    image: '/images/wonders/great-wall-1.jpg',
    period: 'Various Dynasties, primarily Ming Dynasty',
    location: 'Northern China',
    builders: 'Multiple Chinese Dynasties',
    significance: 'World\'s longest man-made structure, symbol of Chinese civilization',
  },
  {
    id: 'petra',
    title: 'Petra',
    date: '312 BCE - 100 CE',
    description: 'Petra was established as the capital city of the Nabataean Kingdom. The city was carved into rose-colored rock faces and features sophisticated water conduit systems. It was an important junction for silk and spice trade routes.',
    image: '/images/wonders/petra-1.jpg',
    period: 'Nabataean Kingdom',
    location: 'Ma\'an Governorate, Jordan',
    builders: 'Nabataean Arabs',
    significance: 'Advanced architectural and water management achievements',
  },
  {
    id: 'christ-redeemer',
    title: 'Christ the Redeemer',
    date: '1922 - 1931',
    description: 'Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil. It stands 98 feet tall, not including its 26-foot pedestal, with arms stretching 92 feet wide.',
    image: '/images/wonders/christ-redeemer-1.jpg',
    period: 'Modern Era',
    location: 'Rio de Janeiro, Brazil',
    builders: 'Designed by Heitor da Silva Costa and Paul Landowski',
    significance: 'Largest Art Deco statue in the world, symbol of Christianity',
  },
  {
    id: 'machu-picchu',
    title: 'Machu Picchu',
    date: '1450 - 1572',
    description: 'Machu Picchu was built as an estate for the Inca emperor Pachacuti. The site features sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments.',
    image: '/images/wonders/machu-picchu-1.jpg',
    period: 'Inca Empire',
    location: 'Cusco Region, Peru',
    builders: 'Inca Empire',
    significance: 'Outstanding example of Inca architecture and engineering',
  },
  {
    id: 'chichen-itza',
    title: 'Chichen Itza',
    date: '600 - 1200 CE',
    description: 'Chichen Itza was a major focal point in the Northern Maya Lowlands. The site exhibits a multitude of architectural styles, reminiscent of styles seen in central Mexico and of the Puuc and Chenes styles of the Northern Maya lowlands.',
    image: '/images/wonders/chichen-itza-1.jpg',
    period: 'Late Classic to Early Postclassic period',
    location: 'Yucatan State, Mexico',
    builders: 'Maya civilization',
    significance: 'One of the largest Maya cities, important ceremonial center',
  },
  {
    id: 'colosseum',
    title: 'Colosseum',
    date: '70 - 80 CE',
    description: 'The Colosseum is an oval amphitheatre in Rome, built of travertine limestone, tuff, and brick-faced concrete. It could hold between 50,000 and 80,000 spectators and was used for gladiatorial contests, public spectacles, and dramas.',
    image: '/images/wonders/colosseum-1.jpg',
    period: 'Roman Empire',
    location: 'Rome, Italy',
    builders: 'Flavian Dynasty',
    significance: 'Largest amphitheatre ever built, symbol of Imperial Rome',
  },
  {
    id: 'taj-mahal',
    title: 'Taj Mahal',
    date: '1632 - 1653',
    description: 'The Taj Mahal was commissioned by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. This ivory-white marble mausoleum combines Persian, Ottoman Turkish and Indian architectural styles.',
    image: '/images/wonders/taj-mahal-1.jpg',
    period: 'Mughal Empire',
    location: 'Agra, Uttar Pradesh, India',
    builders: 'Emperor Shah Jahan',
    significance: 'Supreme example of Mughal architecture, symbol of eternal love',
  },
];

export default function WonderTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const sortedEvents = [...timelineEvents].sort((a, b) => {
    const dateA = parseInt(a.date.split(' ')[0].replace(/[^\d-]/g, ''));
    const dateB = parseInt(b.date.split(' ')[0].replace(/[^\d-]/g, ''));
    return dateA - dateB;
  });

  return (
    <div className="relative">
      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500/20" />
        <div className="space-y-12">
          {sortedEvents.map((event, index) => (
            <div
              key={event.id}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500" />
              
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                <motion.button
                  className="w-full text-left group"
                  onClick={() => setSelectedEvent(event)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <div className="relative h-48 w-full">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-blue-400 font-medium mb-2">{event.date}</p>
                      <p className="text-gray-300 line-clamp-2">{event.description}</p>
                    </div>
                  </div>
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  fill
                  className="object-cover"
                />
                <button
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  onClick={() => setSelectedEvent(null)}
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedEvent.title}</h2>
                <p className="text-blue-400 font-medium mb-4">{selectedEvent.date}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">Period</h3>
                    <p className="text-white">{selectedEvent.period}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">Location</h3>
                    <p className="text-white">{selectedEvent.location}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">Builders</h3>
                    <p className="text-white">{selectedEvent.builders}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">Significance</h3>
                    <p className="text-white">{selectedEvent.significance}</p>
                  </div>
                </div>
                
                <p className="text-gray-300">{selectedEvent.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
