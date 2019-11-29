import { delay } from '@/Utils/delay';
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';
import {
  CSS3DRenderer,
  CSS3DObject
} from 'three/examples/jsm/renderers/CSS3DRenderer';
import { TrackballControls } from 'three-trackballcontrols-ts';

import skills from './skills.json';

export default elementRef => {
  let controls, renderer, scene, camera;
  let objects = [];
  const objectsCount = skills.length;

  const canvasWidth = window.innerWidth / 2 - 100;
  const canvasHeight = window.innerHeight - 100;

  init();
  animate();

  //initialize everything
  function init() {
    //create a scene
    scene = new THREE.Scene();

    //create camera
    camera = new THREE.PerspectiveCamera(
      40,
      canvasWidth / canvasHeight,
      1,
      10000
    );
    camera.position.z = 4000;

    //create renderer
    renderer = new CSS3DRenderer();
    renderer.setSize(canvasWidth, canvasHeight);
    elementRef.appendChild(renderer.domElement);

    //create controls
    controls = new TrackballControls(camera, renderer.domElement);
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);

    //create elements and position randomly inside the scene
    for (let i = 0; i < objectsCount; i++) {
      const { skill, rate } = skills[i];
      const element = document.createElement('div');
      element.className = 'element';

      const skillText = document.createElement('div');
      skillText.className = 'symbol';
      skillText.textContent = skill;
      element.appendChild(skillText);

      const rating = document.createElement('div');
      rating.className = 'rating';

      let ratingText = '';
      for (let num = 1; num <= rate; num++) {
        ratingText += `<i class="fa fa-star"></i>`;
      }

      rating.innerHTML = ratingText;
      element.appendChild(rating);

      const object = new CSS3DObject(element);

      object.position.x = (i % 5) * 400 - 800;
      object.position.y = -(Math.floor(i / 5) % 5) * 400 + 800;
      object.position.z = Math.floor(i / 25) * 1000 - 2000;

      scene.add(object);
      objects.push(object);
    }

    window.addEventListener('resize', onWindowResize, false);

    //transform
    transform();
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / 2 / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth / 2 - 100, window.innerHeight - 100);
    render();
  }

  function createSpherePosition() {
    const vector = new THREE.Vector3();
    const tObjects = [];

    for (let i = 0; i < objectsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / objectsCount);
      const theta = Math.sqrt(objectsCount * Math.PI) * phi;

      const d3Object = new THREE.Object3D();
      d3Object.position.setFromSphericalCoords(canvasWidth, phi, theta);

      vector.copy(d3Object.position).multiplyScalar(2);
      d3Object.lookAt(vector);

      tObjects.push(d3Object);
    }

    return tObjects;
  }

  //function to move objects into their positions
  function transform() {
    const sphereObjects = createSpherePosition();

    TWEEN.removeAll();

    for (var i = 0; i < objects.length; i++) {
      const object = objects[i];
      const target = sphereObjects[i];
      const duration = 2000;

      new TWEEN.Tween(object.position)
        .to(
          { x: target.position.x, y: target.position.y, z: target.position.z },
          Math.random() * duration + duration
        )
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();
      new TWEEN.Tween(object.rotation)
        .to(
          { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z },
          Math.random() * duration + duration
        )
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();
    }

    new TWEEN.Tween(this)
      .to({}, 2000 * 2)
      .onUpdate(render)
      .start();
    animate();
  }

  //actual animation function
  function animate() {
    requestAnimationFrame(animate);

    TWEEN.update();

    controls.update();
  }

  //renderer
  function render() {
    renderer.render(scene, camera);
  }
};
