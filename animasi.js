import * as THREE from './three.js-master/three.js-master/build/three.module.js'
import {GLTFLoader} from './three.js-master/three.js-master/examples/jsm/loaders/GLTFLoader.js'
import {OrbitControls} from './three.js-master/three.js-master/examples/jsm/controls/OrbitControls.js'

const canvas =  document.querySelector('.webgl')
const scene = new THREE.Scene()

// Load Gambar 3D
const loader = new GLTFLoader()
loader.load ('assets/uploads_files_3056734_Robot+v1.glb ', function(glb){

    console.log(glb)
    const root = glb.scene;
   
    root.scale.set(0.01,0.01,0.01)  // mengatur gambar 3D
    
    // root.rotation.x=1
    // root.rotation.y=5
    // camera.rotation.z=30

    scene.add(root);
}, function(xhr){
    console.log((xhr.loaded/xhr.total * 100) + "% loaded")
}, function(error){
    console.log('eror ')
})


// ===================================================================================
    // mewarnai gambar 3D
    const hlight = new THREE.AmbientLight (0x4040404,200)
    scene.add(hlight)

    const cahaya = new THREE.PointLight(0x040404,190)
    cahaya.position.set(0,300,500)
    scene.add(cahaya)

    const cahaya1 = new THREE.PointLight(0x040404,210)
    cahaya1.position.set(500,100,0)
    scene.add(cahaya1)
    
    const cahaya2 = new THREE.PointLight(0x040404,190)
    cahaya2.position.set(0,100,-500)
    scene.add(cahaya2)

    const cahaya3 = new THREE.PointLight(0x040404,190)
    cahaya3.position.set(-500,300,0)
    scene.add(cahaya3)

    const light = new THREE.DirectionalLight(0xffffff,0.1)
    light.position.set(2,2,5)
    light.castShadow = true
    scene.add(light)



    const sizes = {
        with: 600,
        height : window.innerHeight
    }

    const camera = new THREE.PerspectiveCamera(76, sizes.with/sizes.height, 1, 1000)
    camera.position.set(0,1,2)
    scene.add(camera);

    
   

 
    const controls = new OrbitControls( camera,canvas);  // Menggerakkan Gambar 3D


    // camera.position.set( 0, 20, 100 );
    // controls.update();

    
    const renderer = new THREE.WebGL1Renderer({
        canvas:canvas,
        alpha:true
    })



renderer.setSize(sizes.with,sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.shadowMap.enabled = true
renderer.gammaOuput = true

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
    controls.update()
    controls.enableDamping = true
}

animate();