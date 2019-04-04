// Page entièrement chargé, on lance le jeu
document.addEventListener("DOMContentLoaded", function () {
    new Game('canvas');
}, false);

Game = function(canvasId) {
	//Initialisation Variables 
	var canvas = document.getElementById(canvasId);
    this.moteur = new BABYLON.Engine(canvas, true);
	var moteur = this.moteur;
	this.scene =  new BABYLON.Scene(moteur);
	var scene = this.scene;
	var _this = this;
	this.speed = 20;
	new Arena (_this);
	window.addEventListener("resize", function () {
        if (moteur) {
            moteur.resize();
        }
    },false);
	//Etablis la couleur de fond de la scene
	scene.clearColor = new BABYLON.Color3(0.5,0.5,0.5);
	scene.collisionsEnabled = true;
	/*scene.gravity = new BABYLON.Vector3(0, -9.81, 0);*/
	/*scene.enablePhysics();*/
	moteur.runRenderLoop(function () { 
    scene.render(); 
	var fps = Math.round(1000/moteur.getDeltaTime());
	checkMove(fps);
	easterEgg();
	/*colision();*/
  });
	
	//CAMERA + PARENT
	
	this.maCamera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5, 0), scene);
	this.maCamera.setTarget(new BABYLON.Vector3(0, 5, 100));
	this.maCamera.checkCollisions = true;
	this.maCamera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
/*	this.maCamera.applyGravity = true;*/
	var maCamera = this.maCamera;

	this.maCamera.parent = this.cube;

	//ANIMATIONS
	this.angularSensibility = 200;
	this.verifAnim = [false, false, false, false];
	var verifAnim = this.verifAnim;
	
	// Quand les touches sont appuyées
    window.addEventListener("keydown", function(evt) {
        switch(evt.keyCode){
            case 90: //Haut
				verifAnim[0] = true;
            break;
            case 83: //Bas
				verifAnim[1] = true;
            break;
            case 81: //Gauche
				verifAnim[2] = true;
            break;
            case 68: //Droite
				verifAnim[3] = true;
            break;
			case 38: //Haut
				verifAnim[0] = true;
            break;
			case 40: //Bas
				verifAnim[1] = true;
            break;
			case 37: //Gauche
				verifAnim[2] = true;
            break;	
			case 39: //Droite
				verifAnim[3] = true;
            break;
        }
    }, false);
	// Quand les touches sont relevé
	window.addEventListener("keyup", function(evt) {
        switch(evt.keyCode){
            case 90: //Haut
				verifAnim[0] = false;
				
            break;
            case 83: //Bas
				verifAnim[1] = false;
				
            break;
            case 81: //Gauche
				verifAnim[2] = false;
				
            break;
            case 68: //Droite
				verifAnim[3] = false;
            break;
			case 38: //Haut
				verifAnim[0] = false;
            break;
			case 40: //Bas
				verifAnim[1] = false;
            break;
			case 37: //Gauche
				verifAnim[2] = false;
            break;	
			case 39: //Droite
				verifAnim[3] = false;
            break;	
        }
    }, false);
	function checkMove (ratioFps) {
        var relativeSpeed = _this.speed / ratioFps;
		
		if(verifAnim[0]){
			var forward = new BABYLON.Vector3(
			Math.sin(_this.cube.rotation.y)*relativeSpeed, 
            0, 
            Math.cos(_this.cube.rotation.y)*relativeSpeed
        );
			_this.cube.moveWithCollisions(forward);
        }
		if(verifAnim[1]){
            var backward = new BABYLON.Vector3(
			Math.sin(_this.cube.rotation.y)*-relativeSpeed, 
            0, 
            Math.cos(_this.cube.rotation.y)*-relativeSpeed
        );
			_this.cube.moveWithCollisions(backward);
		}
        if(verifAnim[2]){
			_this.cube.rotation.y+=-0.05*(_this.angularSensibility / 250);
		}
        if(verifAnim[3]){
			_this.cube.rotation.y+=0.05*(_this.angularSensibility / 250);
		}
    }
	
	
	//MESH
function shadow (objet){
	objet.receiveShadows = true;
	this.shadowGenerator1.getShadowMap().renderList.push(objet); 
}

var V = false;
var A = false;
var C = false;
var H = false;
var E = false;
	

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 86){
		V = true;
		console.log("V");
	}
});
window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 65 && V === true){
		A = true;
		console.log("A");
	}
	else {
		
	}
});
window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 67 && V === true && A === true)
	{
		C = true;
		console.log("C");
	}
	else {
		
	}
});
window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 72 && V === true && A === true && C === true)
	{
		 H = true;
		console.log("H");
	}
	else {
		
	}
});
window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 69 && V === true && A === true && C === true && H === true)
	{
		 E = true;
		console.log("E");
	}
	else {
		
	}
});
window.addEventListener("keydown", function(evt){
	if(evt.keyCode !== 86 && evt.keyCode !== 65 && evt.keyCode !== 67 && evt.keyCode !== 72 && evt.keyCode !== 69){
		console.log("pfffff");
		V = false;
		A = false;
		C = false;
		H = false;
		E = false;
	}
});
	function easterEgg() {
		if (V === true && A === true && C === true && H === true && E === true){
			_this.maCamera.attachControl(canvas, true);
			_this.maCamera.parent = undefined;
			_this.cube.isVisible = false;
		}
	}
	
};