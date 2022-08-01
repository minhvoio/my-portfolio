import * as THREE from 'three';
import { getImageUrl, createElement } from './utils'

const previewCyboss = getImageUrl('preview100-min.png');

// Yellow Element
const torusYellow = new THREE.Mesh(
  new THREE.TorusGeometry(15, 3, 16, 100),
  new THREE.MeshStandardMaterial({
    color: 0xf1bc7b
  })
);

const cybossTexture = new THREE.TextureLoader().load(previewCyboss);
const cybossCube = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10),
  new THREE.MeshBasicMaterial({
    map: cybossTexture
  })
);

// Green Element
const torusGreen = createElement(0x45c4a2, 40, 0).torus;
const questionGreen = createElement(0x45c4a2, 40, 0).questionBox;

// Red Element
const torusRed = createElement(0xdc1469, -40, 0).torus;
const questionRed = createElement(0xdc1469, -40, 0).questionBox;

//Purple Element
const torusPurple = createElement(0x53288c, -90, -25).torus;
const questionPurple = createElement(0x53288c, -90, -25).questionBox;

//Blue Element
const torusBlue = createElement(0x3b7087, 90, -25).torus;
const questionBlue = createElement(0x3b7087, 90, -25).questionBox;

//Light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
const ambientLight = new THREE.AmbientLight(0xffffff);

//Background
const spaceBG = getImageUrl('spaceBG.webp');
const spaceTexture = new THREE.TextureLoader().load(spaceBG);

export { 
  torusYellow, cybossCube, 
  torusGreen,questionGreen,
  torusRed,questionRed,
  torusPurple,questionPurple,
  torusBlue,questionBlue,
  pointLight,ambientLight,
  spaceTexture
};