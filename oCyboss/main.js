import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Image Constants
function getImageUrl(name) {
  return new URL(`./images/${name}`, import.meta.url).href
}

const previewCyboss = getImageUrl('preview100.png');
const questionMark = getImageUrl('questionMark.png');
const spaceBG = getImageUrl('spaceBG.webp');

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

// Yellow Element
const torusYellow = new THREE.Mesh(
  new THREE.TorusGeometry(15, 3, 16, 100),
  new THREE.MeshStandardMaterial({
    color: 0xf1bc7b
  })
);
scene.add(torusYellow);

const cybossTexture = new THREE.TextureLoader().load(previewCyboss);
const cyboss = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10),
  new THREE.MeshBasicMaterial({
    map: cybossTexture
  })
);
scene.add(cyboss);


// Create Element Function
const createElement = (colorCode, positionX, positionZ) => {
  const torus = new THREE.Mesh(
    new THREE.TorusGeometry(6, 1.5, 16, 100),
    new THREE.MeshStandardMaterial({
      color: colorCode
    })
  );
  torus.position.x = positionX;
  torus.position.z = positionZ;

  const questionTexture = new THREE.TextureLoader().load(questionMark);
  const questionBox = new THREE.Mesh(
    new THREE.BoxGeometry(3, 3, 3),
    new THREE.MeshBasicMaterial({
      map: questionTexture
    })
  );
  questionBox.position.x = positionX;
  questionBox.position.z = positionZ;
  return { torus, questionBox };
}

// Green Element
const torusGreen = createElement(0x45c4a2, 40, 0).torus;
const questionGreen = createElement(0x45c4a2, 40, 0).questionBox;
scene.add(torusGreen, questionGreen);

// Red Element
const torusRed = createElement(0xdc1469, -40, 0).torus;
const questionRed = createElement(0xdc1469, -40, 0).questionBox;
scene.add(torusRed, questionRed);

//Purple Element
const torusPurple = createElement(0x53288c, -90, -25).torus;
const questionPurple = createElement(0x53288c, -90, -25).questionBox;
scene.add(torusPurple, questionPurple);

//Purple Element
const torusBlue = createElement(0x3b7087, 90, -25).torus;
const questionBlue = createElement(0x3b7087, 90, -25).questionBox;
scene.add(torusBlue, questionBlue);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

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

const spaceTexture = new THREE.TextureLoader().load(spaceBG);

function resizeCanvasToDisplaySize() {
  const canvas = renderer.domElement;
  // look up the size the canvas is being displayed
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  // adjust displayBuffer size to match
  if (canvas.width !== width || canvas.height !== height) {
    // you must pass false here or three.js sadly fights the browser
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // update any render target sizes here
    scene.background = spaceTexture;
  }
}

const moveCamera = () => {
  const t = document.body.getBoundingClientRect().top;

  cyboss.rotation.y += 0.01;
  cyboss.rotation.z += 0.01;

  questionGreen.rotation.y += 0.01;
  questionGreen.rotation.z += 0.01;

  questionRed.rotation.y += 0.01;
  questionRed.rotation.z += 0.01;

  questionPurple.rotation.y += 0.01;
  questionPurple.rotation.z += 0.01;

  questionBlue.rotation.y += 0.01;
  questionBlue.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
}

document.body.onscroll = moveCamera;

const animate = () => {
  requestAnimationFrame(animate);

  torusYellow.rotation.x += 0.01;
  torusYellow.rotation.y += 0.005;
  torusYellow.rotation.z += 0.01;

  torusGreen.rotation.x += 0.01;
  torusGreen.rotation.y += 0.005;
  torusGreen.rotation.z += 0.01;

  torusRed.rotation.x += 0.01;
  torusRed.rotation.y += 0.005;
  torusRed.rotation.z += 0.01;

  torusPurple.rotation.x += 0.01;
  torusPurple.rotation.y += 0.005;
  torusPurple.rotation.z += 0.01;

  torusBlue.rotation.x += 0.01;
  torusBlue.rotation.y += 0.005;
  torusBlue.rotation.z += 0.01;

  controls.update();
  resizeCanvasToDisplaySize();
  renderer.render(scene, camera);
}

animate();