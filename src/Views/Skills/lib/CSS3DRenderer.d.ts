import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three-css3drenderer';

export class CSS3DObject extends THREE.Object3D {
  constructor(element: HTMLElement);
  element: HTMLElement;
}

export class CSS3DSprite extends THREE.CSS3DObject {
  constructor(element: HTMLElement);
}

export class CSS3DRenderer {
  constructor();
  domElement: HTMLElement;

  getSize(): { width: number; height: number };
  setSize(width: number, height: number): void;
  render(scene: Scene, camera: Camera): void;
}
