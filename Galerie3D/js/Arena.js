Arena = function (game) {
	var _this = this;
	this.game = game;
	var scene = game.scene;
	
	
	//LUMIERE
	var light3 = game.light3 = new BABYLON.HemisphericLight("light3", new BABYLON.Vector3(43, 50, 0), scene);
	light3.intensity = 0.35;
	light3.specular = new BABYLON.Color3(1,1,1);
	
	var light4 = game.light4 = new BABYLON.HemisphericLight("light4", new BABYLON.Vector3(-43, 50, 0), scene);
	light4.intensity = 0.35;
	light4.specular = new BABYLON.Color3(1,1,1);
	
	
		//LUM OMBRES
	var light = game.light = new BABYLON.PointLight("nom", new BABYLON.Vector3(43, 23, 0), scene);
	light.intensity = 0.9;
	
	var shadowGenerator1 = game.shadowGenerator1 = new BABYLON.ShadowGenerator(1024, light);
	shadowGenerator1.usePoissonSampling = true;
	shadowGenerator1.bias = 0.0006;
	
	
	var light2 = game.light2 = new BABYLON.PointLight("nom", new BABYLON.Vector3(-43, 23, 0), scene);
	light2.intensity = 0.9;
	
	var shadowGenerator2 = game.shadowGenerator2 = new BABYLON.ShadowGenerator(1024, light2);
	shadowGenerator2.usePoissonSampling = true;
	shadowGenerator2.bias = 0.0006;
	
	
	//MESH UTILES
	game.cube = new BABYLON.Mesh.CreateBox("cube", 4, scene);
	var cube = game.cube;
	cube.scaling.x = 1;
	
	cube.checkCollisions = true;
	cube.position = new BABYLON.Vector3(0, 2, -50);
	cube.ellipsoid = new BABYLON.Vector3(1, 0.25, 1);
	cube.applyGravity = true;

	shadow(cube);
	
		// FOND DE LA PIECE
	var ciel = textures("ciel", "assets/textures/ciel.jpg")
	var herbe = textures("herbe", "assets/textures/herbes.jpg");
	herbe.diffuseTexture.vScale = 7;
	herbe.diffuseTexture.uScale = 7;

	var piece = game.piece = new BABYLON.Mesh.CreateBox("piece", 200, scene, false, BABYLON.Mesh.BACKSIDE);
	var sol = game.sol = new BABYLON.Mesh.CreateGround("sol", 200, 200, 2, scene);
	sol.position.y = -99;
	sol.material = herbe;
	
	piece.material = ciel;
	piece.checkCollisions = true;
	
	
	//PLAN DE LA SALLE	
	var bois = textures("bois", "assets/textures/bois2.jpg")
	var tapis = textures("tapisRouge", "assets/textures/tapis_rouge.jpg")
	
	bois.diffuseTexture.uScale = 1.0;
	bois.diffuseTexture.vScale = 15.0;
	
	tapis.diffuseTexture.vScale = 10;
	tapis.diffuseTexture.uScale = 0.9;
	tapis.diffuseTexture.uOffset = 1.05;
	
	game.couloir = new BABYLON.Mesh.CreateGround("couloir", 5.95, 70, 2, scene);
	var couloir = game.couloir;
	couloir.material = tapis;
	couloir.position = new BABYLON.Vector3(0, 0.1, -20);
	couloir.checkCollisions = true;
	
	var salleDessin = new BABYLON.Mesh.CreateGround("salleDessin", 80, 50, 2, scene);
	salleDessin.material = bois;
	salleDessin.position = new BABYLON.Vector3(43, 0.1, 0);
	salleDessin.checkCollisions = true;
	
	var salleDivers = salleDessin.clone("salleDivers");
	salleDivers.position = new BABYLON.Vector3(-43, 0.1, 0);
	salleDivers.checkCollisions = true;
	
	shadow(salleDessin);
	shadow(salleDivers);
	shadow(couloir);
	
	
		//PANNEAUS INDICATIONS
	var panneauDessin = new BABYLON.Mesh.CreateBox("panneDessin", 4, scene);
	
	var materialPanneauDessin = textures("panneauDessin", "assets/images/dessinFleche.jpg");
	var materialPanneauDiver = textures("panneauDiver", "assets/images/diverFleche.jpg");
	
	panneauDessin.scaling.x = 5;
	panneauDessin.scaling.z = 0.025;
	panneauDessin.scaling.y = 2.5;
	panneauDessin.position = new BABYLON.Vector3(17, 17, 30)
	
	panneauDiver = panneauDessin.clone("panneauDiver");
	panneauDiver.position.x = -17;
	
	panneauDessin.material = materialPanneauDessin;
	panneauDiver.material = materialPanneauDiver;
	
	shadow(panneauDessin);
	shadow(panneauDiver);
	
	//BORD DE LA SALLE
	var crepis = textures("crepis", "assets/textures/crepis.jpg");
	
		//MUR AXE Z	
	var murZ = new BABYLON.Mesh.CreateBox("murZ", 10, scene);
	
	murZ.checkCollisions = true;
	shadow(murZ);
	
	murZ.material = crepis;
	
	murZ.scaling = new BABYLON.Vector3(0.03, 0.5, 5);
	murZ.position = new BABYLON.Vector3(83, 2.5, 0);
	
	var murZbis = murZ.clone("murZbis");
	murZbis.position.x = 3;
	murZbis.position.z = -10;
	murZbis.scaling.z = 3;
	
	var murZbis2 = murZbis.clone("murZbis2");
	murZbis2.scaling.z = 1;
	murZbis2.position.z = 20;
	
	
	var murZ2 = murZ.clone("murZ2");
	var murZ2bis = murZ.clone("murZbis");
	murZ2.position.x = -3;
	murZ2.position.z = -10;
	murZ2.scaling.z = 3;
	
	var murZ22 = murZ2.clone("murZ22");
	murZ22.scaling.z = 1;
	murZ22.position.z = 20;
	
	murZ2bis.position.x = -83;
	
		//MUR AXE X
	var murX = new BABYLON.Mesh.CreateBox("murX", 10, scene);
	murX.scaling.z = murZ.scaling.x;
	murX.scaling.x = 8;
	murX.scaling.y = murZ.scaling.y;
	murX.position = new BABYLON.Vector3(43, 2.5 ,25);
	
	murX.checkCollisions = true;
	shadow(murX);
	
	murX.material = crepis;
	
	var murXbis = murX.clone("murXbis");
	murXbis.position.z = -25;
	
	var murX2 = murX.clone("murX2");
	murX2.position.x = -43;
	
	var murX2bis = murX2.clone("murX2bis");
	murX2bis.position.z = -25;
	
	var murFinCouloir = new BABYLON.Mesh.CreateBox("murFCouloir", 2);
	murFinCouloir.scaling.x = 3;
	murFinCouloir.scaling.z = 0.03;
	murFinCouloir.scaling.y = 5/2;
	murFinCouloir.position.z = 15;
	murFinCouloir.position.y = 5/2;
	
	murFinCouloir.checkCollisions = true;
	shadow(murFinCouloir);
	murFinCouloir.material = crepis;

	// OEUVRES

		//TEXTURES
	var materialDessin1 = textures("dessin1", "assets/oeuvres/dessins/gregory/dessin1.jpg");
	var materialDessin2 = textures("dessin2", "assets/oeuvres/dessins/gregory/dessin2.jpg");
	var materialDessin3 = textures("dessin3", "assets/oeuvres/dessins/gregory/dessin3.jpg");
	var materialDessin4 = textures("dessin4", "assets/oeuvres/dessins/gregory/dessin4.jpg");
	var materialDessin5 = textures("dessin5", "assets/oeuvres/dessins/gregory/dessin5.jpg");
	var materialDessin6 = textures("dessin6", "assets/oeuvres/dessins/sophie/dessin1.jpg");
	var materialDessin7 = textures("dessin7", "assets/oeuvres/dessins/sophie/dessin2.jpg");
	var materialDessin8 = textures("dessin8", "assets/oeuvres/dessins/sophie/dessin3.jpg");
	var materialDessin9 = textures("dessin9", "assets/oeuvres/dessins/perrine/dessin1.jpg");
	var materialDessin10 = textures("dessin10", "assets/oeuvres/dessins/clothilde/dessin1.jpg");
	var materialDessin11 = textures("dessin11", "assets/oeuvres/dessins/clothilde/dessin2.jpg");
	var materialDessin12 = textures("dessin12", "assets/oeuvres/dessins/clothilde/dessin3.jpg");
	var materialDessin13 = textures("dessin13", "assets/oeuvres/dessins/clothilde/dessin4.jpg");
	var materialDessin14 = textures("dessin14", "assets/oeuvres/dessins/clothilde/dessin5.jpg");
	
	var materialDivers1 = textures("divers1", "assets/oeuvres/divers/perrine/poeme1.jpg"); 
	var materialDivers2 = textures("divers2", "assets/oeuvres/divers/perrine/poeme2.jpg");
	var materialDivers3 = textures("divers3", "assets/oeuvres/divers/louise/photo1.jpg");
	var materialDivers4 = textures("divers4", "assets/oeuvres/divers/louise/photo2.jpg");
	var materialDivers5 = textures("divers5", "assets/oeuvres/divers/louise/photo3.jpg");
	var materialDivers6 = textures("divers6", "assets/oeuvres/divers/louise/photo4.jpg");
	var materialDivers7 = textures("divers7", "assets/oeuvres/divers/louise/photo5.jpg");
	var materialDivers8 = textures("divers8", "assets/oeuvres/divers/timothey/image1.png");
	var materialDivers9 = textures("divers9", "assets/oeuvres/divers/timothey/image2.png"); 
	var materialDivers10 = textures("divers10", "assets/oeuvres/divers/timothey/image3.jpg");
	var materialDivers11 = textures("divers11", "assets/oeuvres/divers/timothey/image4.png");
	var materialDivers12 = textures("divers12", "assets/oeuvres/divers/timothey/image5.png");
	var materialDivers13 = textures("divers13", "assets/oeuvres/divers/matthieu/poeme1.jpg");
	var materialDivers14 = textures("divers14", "assets/oeuvres/divers/soifia/photo1.jpg");
	var materialDivers15 = textures("divers15", "assets/oeuvres/divers/soifia/photo2.jpg");
	var materialDivers16 = textures("divers16", "assets/oeuvres/divers/soifia/photo3.jpg");
	var materialDivers17 = textures("divers17", "assets/oeuvres/divers/soifia/photo4.jpg");
	var materialDivers18 = textures("divers18", "assets/oeuvres/divers/soifia/photo5.jpg");
	var materialDivers19 = textures("divers19", "assets/oeuvres/divers/guillaume/image1.png");
	var materialDivers20 = textures("divers20", "assets/oeuvres/divers/guillaume/image2.png");
	var materialDivers21 = textures("divers21", "assets/oeuvres/divers/guillaume/image3.png");
	var materialDivers22 = textures("divers22", "assets/oeuvres/divers/guillaume/image4.png");
	
	
	var materialTest = new BABYLON.StandardMaterial("test", scene);
	materialTest.diffuseColor = new BABYLON.Color3(51/255, 0, 0);
	
		//DESSIN 
	var dessin1 = game.dessin1 = new BABYLON.Mesh.CreateBox("dessin1", 3, scene);
	dessin1.scaling.z = 0.01;
	dessin1.scaling.y = 0.8;
	dessin1.scaling.x *= 2;
	dessin1.scaling.y *= 2;
	dessin1.position = new BABYLON.Vector3(10, 5, 23);
	
	shadow(dessin1);
	dessin1.checkCollisions = true;
	
	var dessin2 = game.dessin2 = dessin1.clone("dessin1");
	dessin2.position.x += 9;
	
	var dessin3 = game.dessin3 = dessin2.clone("dessin3");
	dessin3.position.x += 18;
	var dessin4 = game.dessin4 = dessin3.clone("dessin4");
	dessin4.position.x += 9;
	
	var dessin5 = game.dessin5 = dessin4.clone("dessin5");
	dessin5.position.x += 18;
	var dessin6 = game.dessin6 = dessin5.clone("dessin6");
	dessin6.position.x += 9;
		//DESSIN BIS
	var dessin1bis = game.dessin1bis = dessin1.clone("dessin1bis");
	dessin1bis.position = new BABYLON.Vector3(10, 5, -23.3);
	dessin1bis.rotation.y = degToRad(180);
	var dessin2bis = game.dessin2bis = dessin1bis.clone("dessin2bis");
	dessin2bis.position.x += 9;
	
	var dessin3bis = game.dessin3bis = dessin2bis.clone("dessin3bis");
	dessin3bis.position.x += 18;
	var dessin4bis = game.dessin4bis = dessin3bis.clone("dessin4bis");
	dessin4bis.position.x += 9;
	
	var dessin5bis = game.dessin5bis = dessin4bis.clone("dessin5bis");
	dessin5bis.position.x += 18;
	var dessin6bis = game.dessin6bis = dessin5bis.clone("dessin6bis");
	dessin6bis.position.x += 9;
		//DESSIN 90DEG
	var dessin1T = game.dessin1T = dessin6.clone("dessin1T");
	dessin1T.rotation.y = degToRad(90);
	dessin1T.position = new BABYLON.Vector3(80.2, 5, 13);
	
	var dessin2T = game.dessin2T = dessin1T.clone("dessin2T");
	dessin2T.position.z -= 9;
	
	var dessin3T = game.dessin3T = dessin2T.clone("dessin3T");
	dessin3T.position.z -= 9;
	var dessin4T = game.dessin4T = dessin3T.clone("dessin4T");
	dessin4T.position.z -= 9;
		//DESSIN 90DEG BIS
	var dessin1Tbis = game.dessin1Tbis = dessin3T.clone("dessin1Tbis");
	dessin1Tbis.rotation.y = degToRad(90);
	dessin1Tbis.position = new BABYLON.Vector3(3.8, 5, -5);
	var dessin2Tbis = game.dessin2Tbis = dessin1Tbis.clone("dessin2Tbis");
	dessin2Tbis.position.z -= 9;
	
		//DIVERS
	var divers1 = game.divers1 = dessin1.clone("divers1");
	divers1.position.x = -10;
	
	divers1.checkCollisions = true;
	
	var divers2 = game.divers2 = divers1.clone("divers2");
	divers2.position.x -= 9;
	
	var divers3 = game.divers3 = divers2.clone("divers3");
	divers3.position.x -=10;
	var divers4 = game.divers4 = divers3.clone("divers4");
	divers4.position.x -= 9;
	
	var divers5 = game.divers5 = divers4.clone("divers5");
	divers5.position.x -= 10;
	var divers6 = game.divers6 = divers5.clone("divers6");
	divers6.position.x -= 9;
	
	var divers7 = game.divers7 = divers6.clone("divers7");
	divers7.position.x -= 10;
	var divers8 = game.divers8 = divers7.clone("divers8");
	divers8.position.x -= 9;
	
		// DIVERS TOUNRE 90
	var divers1T = game.divers1T = divers8.clone("divers1T");
	divers1T.rotation.y = degToRad(-90);
	divers1T.position.x = -80.2;
	divers1T.position.z -= 4.3;
	var divers2T = game.divers2T = divers1T.clone("divers2T");
	divers2T.position.z -= 6.4;
	
	var divers3T = game.divers3T = divers2T.clone("divers3T");
	divers3T.position.z -= 8.6;
	var divers4T = game.divers4T = divers3T.clone("divers4T");
	divers4T.position.z -= 6.4;
	
		//DIVERS BIS
	var divers1bis = game.divers1bis = divers1.clone("divers1bis");
	divers1bis.position.z -= 46.1;
	divers1bis.position.x -= 5;
	divers1bis.rotation.y = degToRad(180);
	var divers2bis = game.divers2bis = divers1bis.clone("divers2bis");
	divers2bis.position.x -= 9;
	
	var divers3bis = game.divers3bis = divers2bis.clone("divers3bis");
	divers3bis.position.x -= 10;
	var divers4bis = game.divers4bis = divers3bis.clone("divers4bis");
	divers4bis.position.x -= 9;
	
	var divers5bis = game.divers5bis = divers4bis.clone("divers5bis");
	divers5bis.position.x -= 10;
	var divers6bis = game.divers6bis = divers5bis.clone("divers6bis");
	divers6bis.position.x -= 9;
	
		//DIVERS BIS TOUNRE 90
	var divers1Tbis = game.divers1Tbis = divers1T.clone("divers1Tbis");
	divers1Tbis.position.x = -4.1;
	divers1Tbis.position.z = 1;
	divers1Tbis.rotation.y = degToRad(90);
	var divers2Tbis = game.divers2Tbis = divers1Tbis.clone("divers2Tbis");
	divers2Tbis.position.z -= 6.4;
	
	var divers3Tbis = game.divers3Tbis = divers2Tbis.clone("divers3Tbis");
	divers3Tbis.position.z -= 7.6;
	var divers4Tbis = game.divers4Tbis = divers3Tbis.clone("divers4Tbis");
	divers4Tbis.position.z -= 6.4;
	
		//AFFECT DESSIN MATERIAL
	dessin1.material = materialDessin1;
	dessin2.material = materialDessin2;
	dessin3.material = materialDessin3;
	dessin4.material = materialDessin4;
	dessin5.material = materialDessin5;
	dessin6.material = materialDessin6;
	dessin1T.material = materialDessin7;
	dessin2T.material = materialDessin8;
	dessin3T.material = materialDessin9;
	dessin4T.material = materialDessin10;
	dessin6bis.material = materialDessin11;
	dessin5bis.material = materialDessin12;
	dessin4bis.material = materialDessin13;
	dessin3bis.material = materialDessin14;
	
		//AFFECT DIVERS MATERIAL
	divers1.material = materialDivers1;
	divers2.material = materialDivers2;
	divers3.material = materialDivers3;
	divers4.material = materialDivers4;
	divers5.material = materialDivers5;
	divers6.material = materialDivers6;
	divers7.material = materialDivers7;
	divers8.material = materialDivers8;
	divers1T.material = materialDivers9;
	divers2T.material = materialDivers10;
	divers3T.material = materialDivers11;
	divers4T.material = materialDivers12;
	divers1bis.material = materialDivers13;
	divers2bis.material = materialDivers14;
	divers3bis.material = materialDivers15;
	divers4bis.material = materialDivers16;
	divers5bis.material = materialDivers17;
	divers6bis.material = materialDivers18;
	divers1Tbis.material = materialDivers19;
	divers2Tbis.material = materialDivers20;
	divers3Tbis.material = materialDivers21;
	divers4Tbis.material = materialDivers22;
	
	//IMPORTATION BLENDER
BABYLON.SceneLoader.ImportMesh("", "assets/blender/", "banquette.babylon", scene, function(newMeshes, particleSystems) {  
    banquette(newMeshes);
}); 
	
	BABYLON.SceneLoader.ImportMesh("", "assets/blender/", "planete.babylon", scene, function(newMeshes, particleSystems) {  
    planete(newMeshes);
}); 
	BABYLON.SceneLoader.ImportMesh("", "assets/blender/", "lustre.babylon", scene, function(newMeshes, particleSystems) {  
    lustre1(newMeshes);
}); 
	BABYLON.SceneLoader.ImportMesh("", "assets/blender/", "lustre.babylon", scene, function(newMeshes, particleSystems) {  
    lustre2(newMeshes);
}); 
	BABYLON.SceneLoader.ImportMesh("", "assets/blender/", "table.babylon", scene, function(newMeshes, particleSystems) {  
    table(newMeshes);
}); 
	BABYLON.SceneLoader.ImportMesh("", "assets/blender/", "cadre_rectangle.babylon", scene, function(newMeshes, particleSystems) {  
    cadreRectangle(newMeshes);
}); 
	BABYLON.SceneLoader.ImportMesh("", "assets/blender/", "cadre_carre.babylon", scene, function(newMeshes, particleSystems) {  
    cadreCarre(newMeshes);
}); 
	
	//FUNCTION D'IMPORTATION
	function banquette(newMeshes){
		var banquette = newMeshes [0];
		banquette.scaling.x *= 3;
		banquette.scaling.y *= 3;
		banquette.scaling.z *= 3;
		banquette.position = new BABYLON.Vector3(43, 0.5, 2);
		
		shadow(banquette);
		
		banquette.checkCollisions = true;
		banquette.material = materialTest;
		
		var banquetteBis = banquette.clone("banquetteBis");
		banquetteBis.position.z = -2;
		banquetteBis.rotation.y = degToRad(180);
		
		var banquette2 = banquette.clone("banquette2");
		banquette2.position.x = -43;
		var banquette2Bis= banquetteBis.clone("banquette2Bis");
		banquette2Bis.position.x =-43;
		
	}
	function planete(newMeshes){
		var planete= newMeshes[0];
		planete.position = new BABYLON.Vector3(-75, 6, -15);
		planete.scaling = new BABYLON.Vector3(4, 4, 4);
		var matPlanete = textures("planete", "assets/blender/bonjour.jpg");
		planete.material = matPlanete;
	}
	function lustre1(newMeshes){
		var materialLustre = new BABYLON.StandardMaterial("materialLustre", scene);
		materialLustre.diffuseColor = new BABYLON.Color3(215/255, 121/255, 0);
		for (var i = 0 ; i < newMeshes.length ; i++){
			newMeshes[i].position.y += 15;
			newMeshes[i].position.z -= 3;
			newMeshes[i].position.x += 40;
			newMeshes[i].material = materialLustre;
		}
	}
	function lustre2(newMeshes){
		var materialLustre = new BABYLON.StandardMaterial("materialLustre", scene);
		materialLustre.diffuseColor = new BABYLON.Color3(215/255, 121/255, 0);
		for (var i = 0 ; i < newMeshes.length ; i++){
			newMeshes[i].position.y += 15;
			newMeshes[i].position.z -= 3;
			newMeshes[i].position.x -= 40;
			newMeshes[i].material = materialLustre;
		}
	}
	function table(newMeshes){
		var table = newMeshes[0];
		table.position = new BABYLON.Vector3(-75, 4, -15);
		table.scaling.x *= 3;
		table.scaling.y *= 3;
		table.scaling.z *= 3;
		table.rotation.y = degToRad(90);
		
		shadow(table);
		table.checkCollisions = true;
		
		var materialMarron = new BABYLON.StandardMaterial("materialMarron", scene);
		materialMarron.diffuseColor = new BABYLON.Color3(91/255, 48/255, 32/255);
		table.material = materialMarron;
	}
	function cadreRectangle(newMeshes){
		var material = new BABYLON.StandardMaterial("orange", scene);
		material.diffuseColor = new BABYLON.Color3(231/255, 78/255, 8/255);
		
		//SALLE DESSIN
		var cadre_rectangle = newMeshes[0];
		cadre_rectangle.position = new BABYLON.Vector3(20, 5, 22.8);
		cadre_rectangle.rotation.x = degToRad(90);
		cadre_rectangle.rotation.z = degToRad(180);
		cadre_rectangle.scaling.x *= 2;
		cadre_rectangle.scaling.z *= 2;
		
		cadre_rectangle.checkCollisions = true;
		shadow(cadre_rectangle);
		cadre_rectangle.material = material;
		
		var cadre_rectanglebis = cadre_rectangle.clone("cadre_rectanglebis");
		cadre_rectanglebis.position.z -= 46;
		var cadre_rectangle2 = cadre_rectangle.clone("cadre_rectangle2");
		cadre_rectangle2.position.x += 27;
		var cadre_rectangle2bis = cadre_rectangle2.clone("cadre_rectangle2bis");
		cadre_rectangle2bis.position.z -= 46;
		var cadre_rectangle3 = cadre_rectangle2.clone("cadre_rectangle3");
		cadre_rectangle3.position.x += 27;
		var cadre_rectangle3bis = cadre_rectangle3.clone("cadre_rectangle3bis");
		cadre_rectangle3bis.position.z -=46;
		
		var cadre_rectangleT = cadre_rectangle.clone("cadre_rectangleT");
		cadre_rectangleT.position = new BABYLON.Vector3(80, 5, 3);
		cadre_rectangleT.rotation.y = degToRad(90);
		var cadre_rectangleT2 = cadre_rectangleT.clone("cadre_rectangleT2");
		cadre_rectangleT2.position.z -= 18;
		var cadre_rectangleT2bis = cadre_rectangleT2.clone("cadre_rectangleT2bis");
		cadre_rectangleT2bis.position.x = 4;
		
		//SALLE DIVERS
		var Gcadre_rectangle = cadre_rectangle.clone("Gcadre_rectangle");
		Gcadre_rectangle.position = new BABYLON.Vector3(-9, 5, 22.8);
		
		var Gcadre_rectangle2 = Gcadre_rectangle.clone("Gcadre_rectangle2");
		Gcadre_rectangle2.position.x -= 19;
		
		var Gcadre_rectangle3 = Gcadre_rectangle2.clone("Gcadre_rectangle3");
		Gcadre_rectangle3.position.x -= 19;
		
		var Gcadre_rectangle4 = Gcadre_rectangle3.clone("Gcadre_rectangle4");
		Gcadre_rectangle4.position.x -= 19;
		
		var Gcadre_rectangleT = cadre_rectangleT.clone("Gcadre_rectangleT");
		Gcadre_rectangleT.position.x = -80;
		Gcadre_rectangleT.position.z += 8;
		Gcadre_rectangleT.scaling.x *= 0.8;
		
		var Gcadre_rectangleT2 = Gcadre_rectangleT.clone("Gcadre_rectangleT2");
		Gcadre_rectangleT2.position.z -= 15;
		
		var Gcadre_rectangleTbis = Gcadre_rectangleT.clone("Gcare_rectangleTbis");
		Gcadre_rectangleTbis.position.x = -4;
		Gcadre_rectangleTbis.position.z -= 17.5;
		
		var Gcadre_rectangleT2bis = Gcadre_rectangleTbis.clone("Gcadre_rectangleT2bis");
		Gcadre_rectangleT2bis.position.z -= 14;
		
		var Gcadre_rectanglebis = Gcadre_rectangle.clone("Gcadre_rectanglebis");
		Gcadre_rectanglebis.position.z -= 46;
		Gcadre_rectanglebis.position.x -= 5;
		
		var Gcadre_rectangle2bis = Gcadre_rectanglebis.clone("Gcadre_rectangle2bis");
		Gcadre_rectangle2bis.position.x -= 19;
		
		var Gcadre_rectangle3bis = Gcadre_rectangle2bis.clone("Gcadre_rectangle3bis");
		Gcadre_rectangle3bis.position.x -= 19;
	}		
	function cadreCarre (newMeshes){
		var cadre_carre = newMeshes[0];
		
		var material = new BABYLON.StandardMaterial("marronClair", scene);
		material.diffuseColor = new BABYLON.Color3(118/255, 80/255, 56/255);
		
		//SALLE DESSIN
		cadre_carre.position = new BABYLON.Vector3(10, 5, 22.8);
		cadre_carre.rotation.x = degToRad(90);
		cadre_carre.rotation.z = degToRad(180);
		cadre_carre.scaling.z = 1.3;
		cadre_carre.scaling.z *= 2;
		cadre_carre.scaling.x *= 2;
		
		cadre_carre.material = material;
		shadow(cadre_carre);
		cadre_carre.checkCollisions = true;
		
		var cadre_carrebis = cadre_carre.clone("cadrebis");
		cadre_carrebis.position.z -= 46;
		
		var cadre_carre2 = cadre_carre.clone("cadre2");
		cadre_carre2.position.x += 9;
		var cadre_carre2bis = cadre_carre2.clone("cadre_carre2bis");
		cadre_carre2bis.position.z -= 46;
		
		var cadre_carre3 = cadre_carre2.clone("cadre3");
		cadre_carre3.position.x += 18;
		var cadre_carre3bis = cadre_carre3.clone("cadre_carre3bis");
		cadre_carre3bis.position.z -= 46;
		var cadre_carre4 = cadre_carre3.clone("cadre4");
		cadre_carre4.position.x += 9;
		var cadre_carre4bis = cadre_carre4.clone("cadre_carre4bis");
		cadre_carre4bis.position.z -= 46;
		
		var cadre_carre5 = cadre_carre4.clone("cadre5");
		cadre_carre5.position.x += 18;
		var cadre_carre5bis = cadre_carre5.clone("cadre_carre5bis");
		cadre_carre5bis.position.z -= 46;
		var cadre_carre6 = cadre_carre5.clone("cadre6");
		cadre_carre6.position.x += 9;
		var cadre_carre6bis = cadre_carre6.clone("cadre_carre6bis");
		cadre_carre6bis.position.z -= 46;
		
		var cadre_carreT = cadre_carre.clone("cadre_carreT");
		cadre_carreT.rotation.y = degToRad(90);
		cadre_carreT.position = new BABYLON.Vector3(80, 5, 13);
		var cadre_carreT2 = cadre_carreT.clone("cadre_carreT2");
		cadre_carreT2.position.z -= 9;
		var cadre_carreT3 = cadre_carreT2.clone("cadre_carreT3");
		cadre_carreT3.position.z -= 9;
		var cadre_carreT4 = cadre_carreT3.clone("cadre_carreT4");
		cadre_carreT4.position.z -= 9;
		
		var cadre_carreTbis = cadre_carreT3.clone("cadre_carreTbis");
		cadre_carreTbis.position = new BABYLON.Vector3(4, 5, -5);
		var cadre_carreT2bis = cadre_carreTbis.clone("cadre_carreT2bis");
		cadre_carreT2bis.position.z -= 9;
		
		//SALLE DIVERS
		var Gcadre_carre = cadre_carre.clone("Gcadre_carre");
		Gcadre_carre.position.x = -10;
		
		var Gcadre_carre2 = Gcadre_carre.clone("Gcadre_carre2");
		Gcadre_carre2.position.x -= 9;
		
		var Gcadre_carre3 = Gcadre_carre2.clone("Gcadre_carre3");
		Gcadre_carre3.position.x -= 10;
		var Gcadre_carre4 = Gcadre_carre3.clone("Gcadre_carre4");
		Gcadre_carre4.position.x -= 9;
		
		var Gcadre_carre5 = Gcadre_carre4.clone("Gcadre_carre5");
		Gcadre_carre5.position.x -= 10;
		var Gcadre_carre6 = Gcadre_carre5.clone("Gcadre_carre6");
		Gcadre_carre6.position.x -= 9;
		
		var Gcadre_carre7 = Gcadre_carre6.clone("Gcadre_carre7");
		Gcadre_carre7.position.x -= 10;
		var Gcadre_carre8 = Gcadre_carre7.clone("Gcadre_carre8");
		Gcadre_carre8.position.x -= 9;
		
		var Gcadre_carreT = Gcadre_carre8.clone("Gcadre_carreT");
		Gcadre_carreT.rotation.y = degToRad(90);
		Gcadre_carreT.position.x = -80;
		Gcadre_carreT.position.z -= 4.3;
		var Gcadre_carreT2 = Gcadre_carreT.clone("Gcadre_carreT2");
		Gcadre_carreT2.position.z -= 6.4;
		
		var Gcadre_carreT3 = Gcadre_carreT2.clone("Gcadre_carreT3");
		Gcadre_carreT3.position.z -= 8.6;
		var Gcadre_carreT4 = Gcadre_carreT3.clone("Gcadre_carreT4");
		Gcadre_carreT4.position.z -= 6.4;
		
		var Gcadre_carrebis = Gcadre_carre.clone("Gcadre_carrebis");
		Gcadre_carrebis.position.z -= 46;
		Gcadre_carrebis.position.x -= 5;
		var Gcadre_carre2bis = Gcadre_carrebis.clone("Gcadre_carre2bis");
		Gcadre_carre2bis.position.x -= 9;
		
		var Gcadre_carre3bis = Gcadre_carre2bis.clone("Gcadre_carre3bis");
		Gcadre_carre3bis.position.x -= 10;
		var Gcadre_carre4bis = Gcadre_carre3bis.clone("Gcadre_carre4bis");
		Gcadre_carre4bis.position.x -= 9;
		
		var Gcadre_carre5bis = Gcadre_carre4bis.clone("Gcadre_carre5bis");
		Gcadre_carre5bis.position.x -= 10;
		var Gcadre_carre6bis = Gcadre_carre5bis.clone("Gcadre_carre6bis");
		Gcadre_carre6bis.position.x -= 9;
		
		var Gcadre_carreTbis = Gcadre_carreT.clone("Gcadre_carreTbis");
		Gcadre_carreTbis.position.x = -4;
		Gcadre_carreTbis.position.z = 1;
		var Gcadre_carreT2bis = Gcadre_carreTbis.clone("Gcadre_carreT2bis");
		Gcadre_carreT2bis.position.z -= 6.4;
		
		var Gcadre_carreT3bis = Gcadre_carreT2bis.clone("Gcadre_carreT3bis");
		Gcadre_carreT3bis.position.z -= 7.6;
		var Gcadre_carreT4bis = Gcadre_carreT3bis.clone("Gcadre_carreT4bis");
		Gcadre_carreT4bis.position.z -= 6.4;
		
	}
	
	function shadow(objet){
	objet.receiveShadows = true;
	shadowGenerator1.getShadowMap().renderList.push(objet);
	shadowGenerator2.getShadowMap().renderList.push(objet); 
}
	
	function textures(nom, src){
		var material = new BABYLON.StandardMaterial(nom, scene);
		material.diffuseTexture = new BABYLON.Texture(src, scene);
		return material;
	}
	
	new ActionManager(game);
};