declare module 'three/examples/jsm/controls/OrbitControls.js' {
  import { Camera, EventDispatcher } from 'three';

  export class OrbitControls extends EventDispatcher {
    constructor(camera: Camera, domElement?: HTMLElement);
    enabled: boolean;
    target: THREE.Vector3;
    enableDamping: boolean;
    dampingFactor: number;
    rotateSpeed: number;
    update(): void;
    dispose(): void;
  }
}
