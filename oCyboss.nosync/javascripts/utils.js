import * as THREE from 'three';

// Image Constants
function getImageUrl(name) {
  return new URL(`../images/${name}`, import.meta.url).href
}

const questionMark = getImageUrl('questionMark.png');
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

const moveCameraRotation = (obj) => {
  obj.rotation.y += 0.01;
  obj.rotation.z += 0.01;
}

const animateRotation = (obj) => {
  obj.rotation.x += 0.01;
  obj.rotation.y += 0.005;
  obj.rotation.z += 0.01;
}

export { getImageUrl, createElement, moveCameraRotation, animateRotation };