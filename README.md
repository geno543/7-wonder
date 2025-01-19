# Seven Wonders of the World

An interactive 3D globe visualization of the Seven Wonders of the World built with Next.js, Three.js, and TypeScript.

## Features

- Interactive 3D Earth globe with realistic textures
- Markers for each of the Seven Wonders of the World
- Smooth camera controls with auto-rotation
- Responsive design that works on all screen sizes
- Interactive tooltips showing wonder information
- Beautiful atmospheric effects and cloud animations

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **3D Graphics**: [Three.js](https://threejs.org/)
- **Animation**: [GSAP](https://greensock.com/gsap/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)


## Project Structure

```
7-wonder/
├── src/
│   ├── app/              # Next.js app router
│   ├── components/       # React components
│   │   └── Globe/        # 3D globe components
│   ├── data/            # Static data
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
│   └── textures/        # Earth textures
└── package.json         # Project dependencies
```

## Development

- The main globe visualization is in `src/components/Globe/InteractiveGlobe.tsx`
- Wonder locations are defined in `src/data/wonders.ts`
- Custom Three.js type definitions are in `src/types/three-types.d.ts`

## Deployment

The project is deployed on [Vercel](https://7-wonder-iwul9tztz-geno543s-projects.vercel.app/). Any push to the `master` branch will trigger an automatic deployment.

