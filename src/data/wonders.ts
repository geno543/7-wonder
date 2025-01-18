export interface Wonder {
  id: number;
  name: string;
  location: string;
  description: string;
  history: string;
  imageUrl: string;
  galleryImages: string[];
  virtualTourUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const wonders: Wonder[] = [
  {
    id: 1,
    name: 'Great Wall of China',
    location: 'China',
    description: 'The Great Wall of China is an ancient series of walls and fortifications located in northern China, built around 500 years ago. Estimates of its length vary from 5,500 to 13,171 miles, making it one of the most impressive ancient structures on Earth.',
    history: 'Construction of the Great Wall began more than 2,000 years ago during the Warring States Period (475-221 BC). The most famous sections were built during the Ming Dynasty (1368-1644). The wall was built to protect Chinese states and empires against nomadic invasions and served as border controls.',
    imageUrl: '/images/wonders/great-wall-1.jpg',
    galleryImages: [
      '/images/wonders/great-wall-2.jpg',
      '/images/wonders/great-wall-3.jpg',
      '/images/wonders/great-wall-4.jpg'
    ],
    virtualTourUrl: 'https://www.thechinaguide.com/destination/great-wall-of-china',
    coordinates: {
      lat: 40.4319,
      lng: 116.5704
    }
  },
  {
    id: 2,
    name: 'Petra',
    location: 'Jordan',
    description: 'Petra is a famous archaeological site in Jordan\'s southwestern desert. Dating to around 300 B.C., it was the capital of the Nabataean Kingdom. Accessed via a narrow canyon called Al Siq, it contains tombs and temples carved into pink sandstone cliffs.',
    history: 'Established possibly as early as 312 BC as the capital city of the Nabataeans, Petra is a symbol of Jordan. The city was lost to the world for hundreds of years and was rediscovered in 1812 by Swiss explorer Johann Ludwig Burckhardt.',
    imageUrl: '/images/wonders/petra-1.jpg',
    galleryImages: [
      '/images/wonders/petra-2.jpg',
      '/images/wonders/petra-3.jpg',
      '/images/wonders/petra-4.jpg'
    ],
    virtualTourUrl: 'https://www.google.com/maps/about/behind-the-scenes/streetview/treks/petra/',
    coordinates: {
      lat: 30.3285,
      lng: 35.4444
    }
  },
  {
    id: 3,
    name: 'Christ the Redeemer',
    location: 'Rio de Janeiro, Brazil',
    description: 'Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil. Standing 98 feet tall (not including its 26-foot pedestal), its arms stretch 92 feet wide. The statue sits atop Mount Corcovado, overlooking the city.',
    history: 'Construction began in 1922 and was completed in 1931. The statue was designed by Brazilian engineer Heitor da Silva Costa and French sculptor Paul Landowski. It is made of reinforced concrete and soapstone, and was built as a symbol of Christianity.',
    imageUrl: '/images/wonders/christ-redeemer-1.jpg',
    galleryImages: [
      '/images/wonders/christ-redeemer-2.jpg',
      '/images/wonders/christ-redeemer-3.jpg',
      '/images/wonders/christ-redeemer-4.jpg'
    ],
    virtualTourUrl: 'https://artsandculture.google.com/story/christ-the-redeemer-rio-de-janeiro/rgKCE_yMjvRpKg',
    coordinates: {
      lat: -22.9519,
      lng: -43.2105
    }
  },
  {
    id: 4,
    name: 'Machu Picchu',
    location: 'Peru',
    description: 'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru. Built in the 15th century and later abandoned, it\'s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar.',
    history: 'Built in the 15th century at the height of the Inca Empire, Machu Picchu was abandoned in the 16th century during the Spanish Conquest. It remained unknown to the outside world until American historian Hiram Bingham brought it to international attention in 1911.',
    imageUrl: '/images/wonders/machu-picchu-1.jpg',
    galleryImages: [
      '/images/wonders/machu-picchu-2.jpg',
      '/images/wonders/machu-picchu-3.jpg',
      '/images/wonders/machu-picchu-4.jpg'
    ],
    virtualTourUrl: 'https://www.youvisit.com/tour/machupicchu/',
    coordinates: {
      lat: -13.1631,
      lng: -72.5450
    }
  },
  {
    id: 5,
    name: 'Chichen Itza',
    location: 'Yucatan, Mexico',
    description: 'Chichen Itza was a large pre-Columbian city built by the Maya civilization. The archaeological site is located in Mexico\'s Yucatan state. Its iconic step pyramid, known as El Castillo, was named one of the New Seven Wonders of the World.',
    history: 'Flourishing from around 600 AD, Chichen Itza was one of the largest Maya cities and was likely one of the mythical great cities referred to in later Mesoamerican literature. The city was conquered by the Spanish Conquistadors in the 16th century.',
    imageUrl: '/images/wonders/chichen-itza-1.jpg',
    galleryImages: [
      '/images/wonders/chichen-itza-2.jpg',
      '/images/wonders/chichen-itza-3.jpg',
      '/images/wonders/chichen-itza-4.jpg'
    ],
    virtualTourUrl: 'https://www.google.com/maps/@20.6843,-88.5678,3a,75y,90t/data=!3m8!1e1!3m6!1sAF1QipP6HYFvVjkOvY9Qo9Bc9i4ZOrZoHIS8PeGhvYyA!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP6HYFvVjkOvY9Qo9Bc9i4ZOrZoHIS8PeGhvYyA%3Dw203-h100-k-no-pi-0-ya165.97368-ro0-fo100!7i8704!8i4352',
    coordinates: {
      lat: 20.6843,
      lng: -88.5678
    }
  },
  {
    id: 6,
    name: 'Colosseum',
    location: 'Rome, Italy',
    description: 'The Colosseum is an oval amphitheatre in the centre of Rome, Italy. Built of travertine limestone, tuff (volcanic rock), and brick-faced concrete, it was the largest amphitheatre ever built at the time and held 50,000 to 80,000 spectators.',
    history: 'Construction began under the emperor Vespasian in AD 72 and was completed in AD 80 under his successor and heir, Titus. The Colosseum was used for gladiatorial contests and public spectacles such as mock sea battles, animal hunts, executions, re-enactments of famous battles, and dramas based on Classical mythology.',
    imageUrl: '/images/wonders/colosseum-1.jpg',
    galleryImages: [
      '/images/wonders/colosseum-2.jpg',
      '/images/wonders/colosseum-3.jpg',
      '/images/wonders/colosseum-4.jpg'
    ],
    virtualTourUrl: 'https://www.google.com/maps/@41.8902,12.4922,3a,75y,90t/data=!3m8!1e1!3m6!1sAF1QipNkZnP6uRx8Fe0CkwVK7JizJyYJvCj3NEGK9mmF!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNkZnP6uRx8Fe0CkwVK7JizJyYJvCj3NEGK9mmF%3Dw203-h100-k-no-pi-0-ya141.97368-ro0-fo100!7i8704!8i4352',
    coordinates: {
      lat: 41.8902,
      lng: 12.4922
    }
  },
  {
    id: 7,
    name: 'Taj Mahal',
    location: 'Agra, India',
    description: 'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, India. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.',
    history: 'Construction of the mausoleum was essentially completed in 1643, but work continued on other phases of the project for another 10 years. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around 32 million rupees.',
    imageUrl: '/images/wonders/taj-mahal-1.jpg',
    galleryImages: [
      '/images/wonders/taj-mahal-2.jpg',
      '/images/wonders/taj-mahal-3.jpg',
      '/images/wonders/taj-mahal-4.jpg'
    ],
    virtualTourUrl: 'https://www.google.com/maps/@27.1751,78.0421,3a,75y,90t/data=!3m8!1e1!3m6!1sAF1QipMQYnZ5XdZHFsqYVJxeZQOn5GHn-r8QmjWxhZU_!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMQYnZ5XdZHFsqYVJxeZQOn5GHn-r8QmjWxhZU_%3Dw203-h100-k-no-pi-0-ya141.97368-ro0-fo100!7i8704!8i4352',
    coordinates: {
      lat: 27.1751,
      lng: 78.0421
    }
  }
];
