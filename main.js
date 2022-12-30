import './style.css'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from 'three'
import { OrbitControls } from './addons/controls/OrbitControls.js';

const aspect = window.innerWidth / window.innerHeight;

const scene = new Scene()
const camera = new PerspectiveCamera(
  75,
  aspect,
  1,
  1000
)

const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

createBox(0, 0, 0, '#ff0000')
createBox(0, 1, 0, '#00ff00')
createBox(0, 2, 0, '#0000ff')
createBox(0, 2, 1, '#cccccc')
createBox(0, 2, 2, '#aaffaa')
createBox(0, 2, 3, '#bbbbff')

function createBox(x, y, z, color) {
  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshBasicMaterial({
    color
  })
  const cube = new Mesh(geometry, material)
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;
  scene.add(cube)
}

camera.position.set(-10, 0, 0)

const controls = new OrbitControls(camera, renderer.domElement);
controls.minZoom = 1;
controls.maxZoom = 1;

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate()
