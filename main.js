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
createBox(0, 0, 1, '#0ff000')
createBox(1, 0, 0, '#00ff00')
createBox(1, 0, 1, '#000ff0')
createBox(2, 0, 0, '#0000ff')
createBox(0, 0, 2, '#f00fff')
createBox(2, 0, 1, '#f00f0f')
createBox(1, 0, 2, '#f0f00f')
createBox(0, 1, 0, '#ff00ff')

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

camera.position.set(10, 10, 10)

const controls = new OrbitControls(camera, renderer.domElement);
controls.minZoom = 1;
controls.maxZoom = 1;

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate()
