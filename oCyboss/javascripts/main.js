import '../stylesheets/style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { moveCameraRotation, animateRotation} from './utils'
import { 
  torusYellow, cybossCube, 
  torusGreen,questionGreen,
  torusRed,questionRed,
  torusPurple,questionPurple,
  torusBlue,questionBlue,
  pointLight,ambientLight,
  spaceTexture
} from './objects'

// Set up
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

scene.add(
  torusYellow, cybossCube, 
  torusGreen,questionGreen,
  torusRed,questionRed,
  torusPurple,questionPurple,
  torusBlue,questionBlue,
  pointLight,ambientLight
);

scene.background = spaceTexture;

renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);

const addStar = () => {
  const geometry = new THREE.SphereGeometry(0.24, 4, 4);
  const material = new THREE.MeshStandardMaterial(0xffffff);
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

const moveCamera = () => {
  const t = document.body.getBoundingClientRect().top;

  moveCameraRotation(cybossCube);
  moveCameraRotation(questionGreen);
  moveCameraRotation(questionRed);
  moveCameraRotation(questionPurple);
  moveCameraRotation(questionBlue);

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
}

document.body.onscroll = moveCamera;

const animate = () => {
  requestAnimationFrame(animate);

  animateRotation(torusYellow);
  animateRotation(torusGreen);
  animateRotation(torusRed);
  animateRotation(torusPurple);
  animateRotation(torusBlue);

  controls.update();
  renderer.render(scene, camera);
}

animate();