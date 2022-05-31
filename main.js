import * as THREE from './three.module.js';
import {PointerLockControls} from './PointerLockControls.js'
import { STLLoader } from '../STLLoader.js';
import Stats from '../stats.module.js';
var mod=document.getElementById('modelo');
var img1= document.getElementById('ko');
var esp=document.getElementById('esp');


    img1.addEventListener("click",function(e){
     esp.src="img/koya.jpg";
    })
    var img2= document.getElementById('r');
    img2.addEventListener("click",function(e){
    esp.src="img/rj.jpg";
    })
    var img3= document.getElementById('sho');
    img3.addEventListener("click",function(e){
    esp.src="img/shooky.png";
    })
    var img4= document.getElementById('ma');
    img4.addEventListener("click",function(e){
    esp.src="img/mang.jpg";
    })
    var img5= document.getElementById('co');
    img5.addEventListener("click",function(e){
    esp.src="img/cooky.png";
    })
    var img6= document.getElementById('ta');
    img6.addEventListener("click",function(e){
    esp.src="img/tata.png";
    })
    var img7= document.getElementById('chi');
    img7.addEventListener("click",function(e){
    esp.src="img/chimmy.png";
    })
    var img8= document.getElementById('va');
    img8.addEventListener("click",function(e){
    esp.src="img/van.png";
    })
  

  

        let camera, scene, renderer, pControl
        let xdir = 0, zdir = 0
        let tiempoI, tiempoF, vel, delta

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff)
        scene.fog = new THREE.Fog(0xffffff, 0, 500)

        scene.add(new THREE.GridHelper(10000, 1000))
        let mesh = new THREE.Mesh(
            new THREE.BoxGeometry(10,10,10),
            new THREE.MeshLambertMaterial({color: 0x0000ff})
        )
       /* mesh.position.z = -50
       
        scene.add(mesh)

        scene.add(new THREE.HemisphereLight(0xffffff))*/
        
        
        // ASCII file
       
        function chi(){
            init();
            animate();               
            function init() {  
                
        container.innerHTML="<div id='chi' class='img7'>"
        var conta = document.getElementById('chi');


        const loader = new STLLoader();
        loader.load( './mo/chimmy.stl', function ( geometry ) {
    
            const material = new THREE.MeshPhongMaterial( { color: 0xF9A825, specular: 0x000000, shininess: 200 } );
            const mesh = new THREE.Mesh( geometry, material );
    
            mesh.position.set( 0, 0, -50 );
            mesh.rotation.set( -1.7, 0, 70 );
            mesh.scale.set( .4, .4, .4 );
    
            mesh.castShadow = true;
            mesh.receiveShadow = true;
    
            scene.add( mesh );
    
        } );
        
        
    }
    
}
        
        
        
        
        
        
        
        
        camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.y = 10

        renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize( modelo.clientWidth, modelo.clientHeight );
        renderer.setPixelRatio(window.devicePixelRatio)
        modelo.appendChild( renderer.domElement );

        pControl = new PointerLockControls(camera, renderer.domElement)

        document.getElementById('btnPlay').onclick = ()=>{
            pControl.lock()
        }

        document.addEventListener('keydown', (e)=>{
            switch (e.keyCode) {
                case 37:
                    xdir = -1
                    break;
                case 38:
                    zdir = 1
                    break;
                case 39:
                    xdir = 1
                    break;
                case 40:
                    zdir = -1
                    break;
            }
        })

        document.addEventListener('keyup', (e)=>{
            switch (e.keyCode) {
                case 37:
                    xdir = 0
                    break;
                case 38:
                    zdir = 0
                    break;
                case 39:
                    xdir = 0
                    break;
                case 40:
                    zdir = 0
                    break;
            }
        })

        tiempoI = Date.now()
        vel = 50

        animate()

        function animate() {

            requestAnimationFrame( animate );

            if(pControl.isLocked === true){
                tiempoF = Date.now()

                delta = (tiempoF - tiempoI)/1000

                let xDis = xdir * vel * delta
                let zDis = zdir * vel * delta

                pControl.moveRight(xDis)
                pControl.moveForward(zDis)

                tiempoI = tiempoF
            }

            renderer.render( scene, camera );
        }
