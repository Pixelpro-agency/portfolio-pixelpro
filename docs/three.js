import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// hero section
const heroSection = document.querySelector('#hero-section');
heroSection.appendChild(renderer.domElement);

// importing 3d model

const loader = new GLTFLoader();
let model;

loader.load( './scene.gltf', function ( gltf ) {

    model = gltf.scene;
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

// orbitcontrols
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;

//lights
const ambientLight = new THREE.AmbientLight(0xffffff); // white color
const light = new THREE.AmbientLight(0x404040); // soft white light

scene.add(ambientLight, light);

// camera position
camera.position.set(0, 1, 5);
controls.update();

function animate() {
    requestAnimationFrame(animate);

    model.position.y = -2;
    controls.update();

    renderer.render(scene, camera);
}

animate();