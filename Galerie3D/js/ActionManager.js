ActionManager = function(game){
	var _this = this;
	this.game = game;
	var scene = game.scene;
	
	game.dessin1.actionManager = new BABYLON.ActionManager(scene);
	game.dessin1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("dessin1");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.dessin2.actionManager = new BABYLON.ActionManager(scene);
	game.dessin2.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("dessin2");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.dessin3.actionManager = new BABYLON.ActionManager(scene);
	game.dessin3.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("dessin3");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.dessin4.actionManager = new BABYLON.ActionManager(scene);
	game.dessin4.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("dessin4");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.dessin5.actionManager = new BABYLON.ActionManager(scene);
	game.dessin5.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("dessin5");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.dessin6.actionManager = new BABYLON.ActionManager(scene);
	game.dessin6.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("dessin6");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.dessin1T.actionManager = new BABYLON.ActionManager(scene);
	game.dessin1T.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("dessin7");
	$("#canvas").css("filter", "blur(5px)");
}));
	game.dessin2T.actionManager = new BABYLON.ActionManager(scene);
	game.dessin2T.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("dessin8");
	$("#canvas").css("filter", "blur(5px)");
}));
	game.dessin3T.actionManager = new BABYLON.ActionManager(scene);
	game.dessin3T.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("dessin9");
	$("#canvas").css("filter", "blur(5px)");
}));
	game.dessin4T.actionManager = new BABYLON.ActionManager(scene);
	game.dessin4T.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("dessin10");
	$("#canvas").css("filter", "blur(5px)");
}));
	game.dessin6bis.actionManager = new BABYLON.ActionManager(scene);
	game.dessin6bis.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("dessin11");
	$("#canvas").css("filter", "blur(5px)");
}));
	game.dessin5bis.actionManager = new BABYLON.ActionManager(scene);
	game.dessin5bis.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("dessin12");
	$("#canvas").css("filter", "blur(5px)");
}));
	game.dessin4bis.actionManager = new BABYLON.ActionManager(scene);
	game.dessin4bis.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("dessin13");
	$("#canvas").css("filter", "blur(5px)");
}));
	game.dessin3bis.actionManager = new BABYLON.ActionManager(scene);
	game.dessin3bis.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("dessin14");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers1.actionManager = new BABYLON.ActionManager(scene);
	game.divers1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers1");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers2.actionManager = new BABYLON.ActionManager(scene);
	game.divers2.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers2");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers3.actionManager = new BABYLON.ActionManager(scene);
	game.divers3.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers3");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers4.actionManager = new BABYLON.ActionManager(scene);
	game.divers4.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers4");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers5.actionManager = new BABYLON.ActionManager(scene);
	game.divers5.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers5");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers6.actionManager = new BABYLON.ActionManager(scene);
	game.divers6.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers6");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers7.actionManager = new BABYLON.ActionManager(scene);
	game.divers7.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers7");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers8.actionManager = new BABYLON.ActionManager(scene);
	game.divers8.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers8");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers1T.actionManager = new BABYLON.ActionManager(scene);
	game.divers1T.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers9");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers2T.actionManager = new BABYLON.ActionManager(scene);
	game.divers2T.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers10");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers3T.actionManager = new BABYLON.ActionManager(scene);
	game.divers3T.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers11");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers4T.actionManager = new BABYLON.ActionManager(scene);
	game.divers4T.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers12");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers1bis.actionManager = new BABYLON.ActionManager(scene);
	game.divers1bis.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers13");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers2bis.actionManager = new BABYLON.ActionManager(scene);
	game.divers2bis.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers14");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers3bis.actionManager = new BABYLON.ActionManager(scene);
	game.divers3bis.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers15");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers4bis.actionManager = new BABYLON.ActionManager(scene);
	game.divers4bis.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers16");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers5bis.actionManager = new BABYLON.ActionManager(scene);
	game.divers5bis.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers17");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers6bis.actionManager = new BABYLON.ActionManager(scene);
	game.divers6bis.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers18");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers1Tbis.actionManager = new BABYLON.ActionManager(scene);
	game.divers1Tbis.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers19");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers2Tbis.actionManager = new BABYLON.ActionManager(scene);
	game.divers2Tbis.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers20");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers3Tbis.actionManager = new BABYLON.ActionManager(scene);
	game.divers3Tbis.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers21");
	$("#canvas").css("filter", "blur(5px)");
}));
	
	game.divers4Tbis.actionManager = new BABYLON.ActionManager(scene);
	game.divers4Tbis.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
   show_div("divers22");
	$("#canvas").css("filter", "blur(5px)");
}));
}