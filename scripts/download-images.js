});
      const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
  earthGroup.add(atmosphere);
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
        const fs = require('fs');
const https = require('https');
const path = require('path');

const wonderImages = {
  'great-wall': [
    'https://images.unsplash.com/photo-1508804185872-d7badad00f7d',
    'https://images.unsplash.com/photo-1549893072-4bc678117f45',
    'https://images.unsplash.com/photo-1508804052814-cd3ba865a116',
    'https://images.unsplash.com/photo-1608037521244-f1c6c7635194'
  ],
  'petra': [
    'https://images.unsplash.com/photo-1579606032821-4e6161c81bd3',
    'https://images.unsplash.com/photo-        id: 'watchtower',
    // 
    //         imageUr        description: 'One of the many watchtowers that dot the Great Wall',
    //         hotspots: [
    // 
    //                     },
    //   id: 'defense',
    // 
    //             title: 'Defense System',
    //             description: 'Learn about the wall\'s defensive features',
    //           },
    //           {
    //             id: 'to-steps',        id: 'steps',
            title: 'The Steps',
                    imageUrl: '/images/wonders/great-wall-3.jpg',
                            description: 'The historic steps of the Gre    ],
  },
    'petra': {
          id: 'petra',
              name: 'Petra',
                  description: 'Explore the ancient city of Petra carved into rose-colored rock',
                      startingScene: 'treasury',
                          scenes: [
                        
                                id: 'treasury',
                                        title: 'The Treasury',
                                
                                        description: 'The iconic Treasury facade at Petra',
                                                hotspots: [
                                                            {
                                                                          id: 'facade',
                                                                                      position: { x: 50, y: 30 },
                                                                                                  title: 'Treasury Facade',
                                                                                                              description: 'The intricate details of the Treasury\'s facade',
                                                                                                        
                                                                                                                        {
                                                                                                                                      id: 'to-siq',
                                                                                                                                                  position: { x: 70, y: 50 },
                                                                                                                                                              title: 'To The Siq',
                                                                                                                                                                          description: 'Enter the narrow canyon leading to Petra',
                                                                                                                                                                                      targetScene: 'siq',
                                                                                                                        },            position: { x: 70, y: 50 },
                                                                                                                                    title: 'To The Siq',
                                                                                                                                                description: 'Enter the narrow canyon leading to Petra',
                                                                                                                                                            targetScene: 'siq',
                                                                                                                      },
                                                                                                                    ],
                                                                                                                            nextScene: 'siq',
                                                                                                                  },
                                                                                                              
                                                                                                          
                                                                                                                          title: 'The Siq',
                                                                                                                                  imageUrl: '/images/wonders/petra-2.jpg',
                                                                                                                          
                                                                                                                                          hotspots: [
                                                                                                                                                      {

                                                                                                                                                      }
                                                                                                                                          ]
                                                                                                                      ],
                                                                                                                              nextScene: 'siq',
                                                                                                                    },
                                                                                                                          {
                                                                                                                                    id: 'siq',
                                                                                          id: 'christ-redeemer',
                                                                                              name: 'Christ the Redeemer',
                                                                                                  description: 'Visit the iconic statue overlooking Rio de Janeiro',
                                                                                                      startingScene: 'base',        nextScene: 'viewpoint',
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
                                                                                                                                                 'machu-picchu': {
                                                                                                                                                      id: 'machu-picchu',
                                                                                                                                                          name: 'Machu Picchu',
                                                                                                                                                              descr    scenes: [
                                                                                                                                                                iption: 'Journey through the ancient Incan citadel',
                                                                                                                                                                  startingScene: 'entrance',

                                                                                                                                                 }                               },

                                                                                                                                                                                      }
                                                                                                                                                                          ]
                                                                                                                                }
                                                                                                          scenes: [
                                                                                                        
                                                                                                    
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

                                                                                                                                                                  }
                                                                                                                                                        }
                                                                                                                                            ]
                                                                                                          ]                                      
                                                                                                                                            imageUrl: '/images/wonders/petra-2.jpg',
                                                                                                                                                    description: 'The narrow canyon entrance to Petra',
                                                                                                                                                            hotspots: [
                                                                                                                                                                        {
                                                                                                                                                                                      id: 'geology',
                                                                                                                                                                                                  position: { x: 40, y: 60 },
                                                                                                                                                                                                              title: 'Rock Formations',
                                                                                                                                                                                                                          description: 'The unique geological formations of the Siq',
                                                                                                                                                                        },
                                                                                                                                                                  
                                                                                                                                                                                prevScene: 'treasury',
                                                                                                                                                                            
                                                                                                                                                                      ],
                                                                                                                                                                              id: 'treasury',
                                                                                                                                                                                      title: 'The Treasury',
                                                                                                                                                                                              imageUrl: '/images/wonders/petra-1.jpg',

                                                                                                                                                                        }
                                                                                                                                                            ]
                                                                                                                          }
                                                                                                                        }
                                                            }
                                                ]        at Wall',
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

                                                }
                                    ]
    //             position: { x: 50, y: 40 },
    //             title: 'To Steps',
    //             description: 'Walk the ancient steps',
    //             targetScene: 'steps',
    // l: '/images/wonders/great-wall-2.jpg',
    // 1501232060322-aa87215ab531',
    'https://images.unsplash.com/photo-1501232060322-aa87215ab531',
    'https://images.unsplash.com/photo-1501232060322-aa87215ab531'
  ],
  'christ-redeemer': [
    'https://images.unsplash.com/photo-1564659907532-6b5f98c8e70f',
    'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f',
    'https://images.unsplash.com/photo-1593995863951-57c27e518295',
    'https://images.unsplash.com/photo-1593995863951-57c27e518295'
  ],
  'machu-picchu': [
    'https://images.unsplash.com/photo-1526392060635-9d6019884377',
    'https://images.unsplash.com/photo-1587595431973-160d0d94add1',
    'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46',
    'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4'
  ],
  'chichen-itza': [
    'https://images.unsplash.com/photo-1518638150340-f706e86654de',
    'https://images.unsplash.com/photo-1518638150340-f706e86654de',
    'https://images.unsplash.com/photo-1518638150340-f706e86654de',
    'https://images.unsplash.com/photo-1518638150340-f706e86654de'
  ],
  'colosseum': [
    'https://images.unsplash.com/photo-1552432552-06c0b0a94dda',
    'https://images.unsplash.com/photo-1555992828-ca4dbe41d294',
    'https://images.unsplash.com/photo-1555992336-fb0d29498b13',
    'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8'
  ],
  'taj-mahal': [
    'https://images.unsplash.com/photo-1564507592333-c60657eea523',
    'https://images.unsplash.com/photo-1548013146-72479768bada',
    'https://images.unsplash.com/photo-1564507592333-c60657eea523',
    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da'
  ]
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(`${url}?auto=format&fit=crop&w=1200&q=80`, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
};

async function downloadAllImages() {
  const baseDir = path.join(__dirname, '..', 'public', 'images', 'wonders');
  
  // Create directories if they don't exist
  if (!fs.existsSync(baseDir)){
    fs.mkdirSync(baseDir, { recursive: true });
  }

  for (const [wonder, urls] of Object.entries(wonderImages)) {
    console.log(`Downloading images for ${wonder}...`);
    
    for (let i = 0; i < urls.length; i++) {
      const filename = `${wonder}-${i + 1}.jpg`;
      const filepath = path.join(baseDir, filename);
      
      try {
        await downloadImage(urls[i], filepath);
        console.log(`Downloaded ${filename}`);
      } catch (err) {
        console.error(`Error downloading ${filename}:`, err.message);
      }
    }
  }
}

downloadAllImages().then(() => {
  console.log('All images downloaded successfully!');
}).catch(err => {
  console.error('Error:', err);
});
