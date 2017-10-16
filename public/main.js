




var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();


function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 1;

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	material = new THREE.MeshNormalMaterial();

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

}

function animate() {

	requestAnimationFrame( animate );

	mesh.rotation.x = x * (Math.PI/180);
  mesh.rotation.y = y * (Math.PI/180);
  mesh.rotation.z = z * (Math.PI/180);

  console.log(x);

	renderer.render( scene, camera );

}

// main();
//
// //
// // start here
// //
// function main() {
//   const canvas = document.querySelector("#glCanvas");
//   // Initialize the GL context
//   const gl = canvas.getContext("webgl");
//
//   // Only continue if WebGL is available and working
//   if (!gl) {
//     alert("Unable to initialize WebGL. Your browser or machine may not support it.");
//     return;
//   }
//
//   // Set clear color to black, fully opaque
//   gl.clearColor(0.3, 0.1, 0.6, 1.0);
//   // Clear the color buffer with specified clear color
//   gl.clear(gl.COLOR_BUFFER_BIT);
// }
