import TWEEN from '@tweenjs/tween.js';
import * as THREE from 'three';
import { Object3D } from 'three';
import { CSS3DObject, CSS3DRenderer } from 'three-css3drenderer';
import skills from './skills.json';

export default elementRef => {
  let renderer, scene, camera, group, objectClicked, timeout;
  let tObject = new Object3D();

  let objects = [];
  const objectsCount = skills.length;

  const canvasWidth = window.innerWidth / 2 - 50;
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
    group = new THREE.Group();

    //create elements and position randomly inside the scene
    for (let i = 0; i < objectsCount; i++) {
      const { skill, rate } = skills[i];
      const element = document.createElement('div');
      element.className = 'element';
      element.setAttribute('id', i);
      element.addEventListener('click', elementOnClick, true);

      const skillText = document.createElement('div');
      skillText.className = 'symbol';
      skillText.textContent = skill;
      element.appendChild(skillText);

      const rating = document.createElement('div');
      rating.className = 'rating';

      // let ratingText = '';
      // for (let num = 1; num <= rate; num++) {
      //   ratingText += `<i class="fa fa-star"></i>`;
      // }

      // rating.innerHTML = ratingText;
      // element.appendChild(rating);

      const object = new CSS3DObject(element);

      object.position.x = (i % 5) * 400 - 800;
      object.position.y = -(Math.floor(i / 5) % 5) * 400 + 800;
      object.position.z = Math.floor(i / 25) * 1000 - 2000;

      group.add(object);
      objects.push(object);
    }

    scene.add(group);

    window.addEventListener('resize', onWindowResize, false);

    //transform
    transform();
  }

  function elementOnClick(event) {
    event.preventDefault();
    TWEEN.removeAll();

    if (timeout) {
      clearTimeout(timeout);
    }

    let id = event.target.getAttribute('id');
    if (!id) {
      id = event.target.closest('.element').getAttribute('id');
    }

    const object = objects[id];
    if (object === objectClicked) return;

    if (objectClicked) {
      const clonedObject = new Object3D().copy(tObject);
      moveSkill(
        objectClicked,
        clonedObject.position,
        clonedObject.rotation.toVector3(),
        clonedObject.scale
      );
    }

    objectClicked = object;

    //copy object
    tObject.copy(object);
    moveSkill(object);

    timeout = setTimeout(() => {
      const clonedObject = new Object3D().copy(tObject);
      moveSkill(
        objectClicked,
        clonedObject.position,
        clonedObject.rotation.toVector3(),
        clonedObject.scale,
        () => {
          spinAnimation();
        }
      );
    }, 3000);
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

    new TWEEN.Tween(group)
      .to({}, 2000 * 2)
      .onUpdate(render)
      .onComplete(function() {
        spinAnimation();
      })
      .start();

    animate();
  }

  function moveSkill(
    object,
    positionTo = { x: 0, y: 0, z: 0 },
    rotationTo = { x: 0, y: 0, z: 0 },
    scaleTo = { x: 5, y: 5, z: 1 },
    callBack = null
  ) {
    //new TWEEN.Tween(group.scale).to({ x: 0.8, y: 0.8, z: 0.8 }).start();
    new TWEEN.Tween(group.rotation).to({ x: 0, y: 0, z: 0 }).start();

    new TWEEN.Tween(object.position)
      .to(positionTo)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();

    new TWEEN.Tween(object.rotation)
      .to({ x: rotationTo.x, y: rotationTo.y, z: rotationTo.z })
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();

    new TWEEN.Tween(object.scale)
      .to(scaleTo)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();

    new TWEEN.Tween(this)
      .to({})
      .onUpdate(render)
      .onComplete(callBack)
      .start();
  }

  function spinAnimation() {
    //const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    const rotationAnimation = new TWEEN.Tween(group.rotation)
      .to(
        {
          x: Math.PI * 2,
          y: Math.PI * 2
        },
        20000
      )
      .onUpdate(render);

    const rotationBack = new TWEEN.Tween(group.rotation)
      .to(
        {
          x: -Math.PI * 2,
          y: -Math.PI * 2
        },
        20000
      )
      .onUpdate(render);

    rotationAnimation.chain(rotationBack).start();
    rotationBack.chain(rotationAnimation).start();
  }

  //actual animation function
  function animate() {
    requestAnimationFrame(animate);

    TWEEN.update();
  }

  //renderer
  function render() {
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }
};
