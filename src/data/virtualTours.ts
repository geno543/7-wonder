export interface Position {
  x: number;
  y: number;
}

export interface Hotspot {
  id: string;
  position: Position;
  title: string;
  description: string;
  targetScene?: string;
}

export interface Scene {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  hotspots: Hotspot[];
  nextScene?: string;
  prevScene?: string;
}

export interface VirtualTour {
  id: string;
  name: string;
  description: string;
  startingScene: string;
  scenes: Scene[];
}

export const virtualTours: { [key: string]: VirtualTour } = {
  'great-wall': {
    id: 'great-wall',
    name: 'Great Wall of China',
    description: 'Experience the majesty of the Great Wall of China through an immersive virtual tour',
    startingScene: 'entrance',
    scenes: [
      {
        id: 'entrance',
        title: 'Main Entrance',
        imageUrl: '/images/wonders/great-wall-1.jpg',
        description: 'The magnificent entrance to the Great Wall',
        hotspots: [
          {
            id: 'architecture',
            position: { x: 50, y: 30 },
            title: 'Wall Architecture',
            description: 'The distinctive architectural style of the Great Wall',
          },
          {
            id: 'to-watchtower',
            position: { x: 70, y: 50 },
            title: 'To Watchtower',
            description: 'Proceed to the ancient watchtower',
            targetScene: 'watchtower',
          },
        ],
        nextScene: 'watchtower',
      },
      {
        id: 'watchtower',
        title: 'Ancient Watchtower',
        imageUrl: '/images/wonders/great-wall-2.jpg',
        description: 'One of the many watchtowers that dot the Great Wall',
        hotspots: [
          {
            id: 'defense',
            position: { x: 40, y: 60 },
            title: 'Defense System',
            description: 'Learn about the wall\'s defensive features',
          },
          {
            id: 'to-steps',
            position: { x: 50, y: 40 },
            title: 'To Steps',
            description: 'Walk the ancient steps',
            targetScene: 'steps',
          },
        ],
        prevScene: 'entrance',
        nextScene: 'steps',
      },
      {
        id: 'steps',
        title: 'The Steps',
        imageUrl: '/images/wonders/great-wall-3.jpg',
        description: 'The historic steps of the Great Wall',
        hotspots: [
          {
            id: 'construction',
            position: { x: 50, y: 50 },
            title: 'Construction',
            description: 'Marvel at the ancient construction techniques',
          },
        ],
        prevScene: 'watchtower',
      },
    ],
  },
  'petra': {
    id: 'petra',
    name: 'Petra',
    description: 'Explore the ancient city of Petra carved into rose-colored rock',
    startingScene: 'treasury',
    scenes: [
      {
        id: 'treasury',
        title: 'The Treasury',
        imageUrl: '/images/wonders/petra-1.jpg',
        description: 'The iconic Treasury facade at Petra',
        hotspots: [
          {
            id: 'facade',
            position: { x: 50, y: 30 },
            title: 'Treasury Facade',
            description: 'The intricate details of the Treasury\'s facade',
          },
          {
            id: 'to-siq',
            position: { x: 70, y: 50 },
            title: 'To The Siq',
            description: 'Enter the narrow canyon leading to Petra',
            targetScene: 'siq',
          },
        ],
        nextScene: 'siq',
      },
      {
        id: 'siq',
        title: 'The Siq',
        imageUrl: '/images/wonders/petra-2.jpg',
        description: 'The narrow canyon entrance to Petra',
        hotspots: [
          {
            id: 'geology',
            position: { x: 40, y: 60 },
            title: 'Rock Formations',
            description: 'The unique geological formations of the Siq',
          },
        ],
        prevScene: 'treasury',
      },
    ],
  },
  'christ-redeemer': {
    id: 'christ-redeemer',
    name: 'Christ the Redeemer',
    description: 'Visit the iconic statue overlooking Rio de Janeiro',
    startingScene: 'base',
    scenes: [
      {
        id: 'base',
        title: 'Base View',
        imageUrl: '/images/wonders/christ-redeemer-1.jpg',
        description: 'View from the base of Christ the Redeemer',
        hotspots: [
          {
            id: 'statue',
            position: { x: 50, y: 30 },
            title: 'Statue Details',
            description: 'The impressive scale and artistry of the statue',
          },
          {
            id: 'to-viewpoint',
            position: { x: 70, y: 50 },
            title: 'To Viewpoint',
            description: 'Go to the panoramic viewpoint',
            targetScene: 'viewpoint',
          },
        ],
        nextScene: 'viewpoint',
      },
      {
        id: 'viewpoint',
        title: 'Rio Viewpoint',
        imageUrl: '/images/wonders/christ-redeemer-2.jpg',
        description: 'Panoramic view of Rio de Janeiro',
        hotspots: [
          {
            id: 'city-view',
            position: { x: 40, y: 60 },
            title: 'City View',
            description: 'Breathtaking view of Rio de Janeiro',
          },
        ],
        prevScene: 'base',
      },
    ],
  },
  'machu-picchu': {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    description: 'Journey through the ancient Incan citadel',
    startingScene: 'entrance',
    scenes: [
      {
        id: 'entrance',
        title: 'Main Entrance',
        imageUrl: '/images/wonders/machu-picchu-1.jpg',
        description: 'The main entrance to Machu Picchu',
        hotspots: [
          {
            id: 'architecture',
            position: { x: 50, y: 30 },
            title: 'Incan Architecture',
            description: 'The remarkable precision of Incan stonework',
          },
          {
            id: 'to-terraces',
            position: { x: 70, y: 50 },
            title: 'To Terraces',
            description: 'Explore the agricultural terraces',
            targetScene: 'terraces',
          },
        ],
        nextScene: 'terraces',
      },
      {
        id: 'terraces',
        title: 'Agricultural Terraces',
        imageUrl: '/images/wonders/machu-picchu-2.jpg',
        description: 'The impressive agricultural terraces of Machu Picchu',
        hotspots: [
          {
            id: 'farming',
            position: { x: 40, y: 60 },
            title: 'Farming Techniques',
            description: 'Ancient Incan farming methods',
          },
        ],
        prevScene: 'entrance',
      },
    ],
  },
  'chichen-itza': {
    id: 'chichen-itza',
    name: 'Chichen Itza',
    description: 'Discover the ancient Mayan city of Chichen Itza',
    startingScene: 'pyramid',
    scenes: [
      {
        id: 'pyramid',
        title: 'El Castillo Pyramid',
        imageUrl: '/images/wonders/chichen-itza-1.jpg',
        description: 'The iconic pyramid of Kukulcan',
        hotspots: [
          {
            id: 'architecture',
            position: { x: 50, y: 30 },
            title: 'Pyramid Design',
            description: 'The mathematical precision of the pyramid',
          },
          {
            id: 'to-court',
            position: { x: 70, y: 50 },
            title: 'To Ball Court',
            description: 'Visit the ancient ball court',
            targetScene: 'court',
          },
        ],
        nextScene: 'court',
      },
      {
        id: 'court',
        title: 'Great Ball Court',
        imageUrl: '/images/wonders/chichen-itza-2.jpg',
        description: 'The largest ball court in ancient Mesoamerica',
        hotspots: [
          {
            id: 'game',
            position: { x: 40, y: 60 },
            title: 'The Game',
            description: 'Learn about the ancient Mayan ball game',
          },
        ],
        prevScene: 'pyramid',
      },
    ],
  },
  'colosseum': {
    id: 'colosseum',
    name: 'Colosseum',
    description: 'Walk through the ancient Roman amphitheater',
    startingScene: 'exterior',
    scenes: [
      {
        id: 'exterior',
        title: 'Exterior View',
        imageUrl: '/images/wonders/colosseum-1.jpg',
        description: 'The magnificent exterior of the Colosseum',
        hotspots: [
          {
            id: 'architecture',
            position: { x: 50, y: 30 },
            title: 'Architecture',
            description: 'The remarkable Roman architecture',
          },
          {
            id: 'to-arena',
            position: { x: 70, y: 50 },
            title: 'To Arena',
            description: 'Enter the ancient arena',
            targetScene: 'arena',
          },
        ],
        nextScene: 'arena',
      },
      {
        id: 'arena',
        title: 'Arena Floor',
        imageUrl: '/images/wonders/colosseum-2.jpg',
        description: 'The historic arena floor of the Colosseum',
        hotspots: [
          {
            id: 'history',
            position: { x: 40, y: 60 },
            title: 'Gladiator History',
            description: 'The history of gladiatorial combat',
          },
        ],
        prevScene: 'exterior',
      },
    ],
  },
  'taj-mahal': {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    description: 'Experience the magnificence of the Taj Mahal',
    startingScene: 'entrance',
    scenes: [
      {
        id: 'entrance',
        title: 'Main Entrance',
        imageUrl: '/images/wonders/taj-mahal-1.jpg',
        description: 'The magnificent main gateway to the Taj Mahal',
        hotspots: [
          {
            id: 'arch-details',
            position: { x: 50, y: 30 },
            title: 'Archway Details',
            description: 'Intricate Islamic calligraphy adorns the archways',
          },
          {
            id: 'to-gardens',
            position: { x: 70, y: 50 },
            title: 'To Gardens',
            description: 'Proceed to the Mughal Gardens',
            targetScene: 'gardens',
          },
        ],
        nextScene: 'gardens',
      },
      {
        id: 'gardens',
        title: 'Mughal Gardens',
        imageUrl: '/images/wonders/taj-mahal-2.jpg',
        description: 'The meticulously maintained Mughal Gardens',
        hotspots: [
          {
            id: 'fountain',
            position: { x: 40, y: 60 },
            title: 'Central Fountain',
            description: 'The central fountain reflects the perfect symmetry',
          },
          {
            id: 'to-mausoleum',
            position: { x: 50, y: 40 },
            title: 'To Mausoleum',
            description: 'Approach the main mausoleum',
            targetScene: 'mausoleum',
          },
        ],
        prevScene: 'entrance',
        nextScene: 'mausoleum',
      },
      {
        id: 'mausoleum',
        title: 'The Mausoleum',
        imageUrl: '/images/wonders/taj-mahal-3.jpg',
        description: 'The iconic ivory-white marble mausoleum',
        hotspots: [
          {
            id: 'dome',
            position: { x: 50, y: 20 },
            title: 'Main Dome',
            description: 'The magnificent central dome',
          },
        ],
        prevScene: 'gardens',
      },
    ],
  },
};
