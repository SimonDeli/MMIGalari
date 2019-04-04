Dessins = function(miniatures, images, textes){
$("#pageDessins").hide();
$(".photoPrincipale img").hide();
$(".miniaturesDroite").hide();
$(".infos").hide();
$("#menuGauche").hide();
 //initialisation de certains éléments de la page

$(document).ready(function(){ 
	$(".bande_droite").hide(0, function(){
		$("#pageDessins").fadeIn(1000, function(){
			$(".photoPrincipale img").slideDown(500, function(){
				$("#menuGauche").fadeIn(300);
			});
			$(".bande_droite").slideDown(700);
			$(".miniaturesDroite").slideDown(500);
			$(".infos").show();
			
		});
	});
});//APPARITION ELEMENT CHARGEMENT DE LA PAGE

$("#photo").mouseover(function(){ 
	$(".infos").css("opacity", 1);
	$("#photo img").css("filter", "brightness(0.4)");
}).mouseout(function(){
	$(".infos").css("opacity", 0);
	$("#photo img").css("filter", "brightness(1)");
});
$(".infos").mouseover(function(){
	$(".infos").css("opacity", 1);
	$("#photo img").css("filter", "brightness(0.4)");
}).mouseout(function(){
	$(".infos").css("opacity", 0);
	$("#photo img").css("filter", "brightness(1)");
});//APPARITION TEXTE PHOTO PRINCIPALE

$(".flecheBas").click(function(){
		$(".miniature img").each(function(){

		var name = parseInt($(this).attr("value"));
		if(name !== miniatures.length){
			var source = miniatures[name];
			var couleur = couleurBorder[name];
			$(this).attr("src", source);
			$(this).css("border", couleur);
			$(this).attr("value", name+1);
		}
		else {
			var couleur = couleurBorder[0]
			var source = miniatures[0];
			$(this).attr("src", source);
			$(this).css("border", couleur);
			$(this).attr("value", 1);
		}
		
	});
});
//BANDE DROITE, FLECHE HAUT

$(".flecheHaut").click(function(){
	$(".miniature img").each(function(){
		var name = parseInt($(this).attr("value"));
		
		if(name !== 1){
			name = name - 1;
			var source = miniatures[name-1];
			var couleur = couleurBorder[name-1];
			$(this).attr("src", source);
			$(this).css("border", couleur);
			$(this).attr("value", name);
		}
		else {
			console.log(miniatures.length);
			var longueurTab = miniatures.length;
			var source = miniatures[longueurTab-1];
			var couleur = couleurBorder[longueurTab-1];
			$(this).attr("src", source);
			$(this).css("border", couleur);
			$(this).attr("value", longueurTab);
		}
	});
});//BANDE DROITE, FLECHE BAS

$(".imagesGalerie").click(function(){ 
	var value = parseInt($(this).attr("value"));
	console.log(value);
	var source = images[value-1];
	console.log(source);
	var info = textes[value-1];
	console.log(info);
	$(".photoPrincipale img").attr("src", source);
	$(".photoPrincipale img").attr("value", value);
	$(".infos").html(info);
}); //CHANGER LA PHOTO PRINCIPALE AU CLICK

$(".imgSuivante").mouseover(function(){ 
	$(".textImgSuivante").css("opacity", 1);
}).mouseout(function(){
		$(".textImgSuivante").css("opacity", 0);
	});

$(".imgPrecedente").mouseover(function(){
	$(".textImgPrecedente").css("opacity", 1);
}).mouseout(function(){
		$(".textImgPrecedente").css("opacity", 0);
	});

$(".diapo").mouseover(function(){
	$(".textDiapo").css("opacity", 1);
}).mouseout(function(){
		$(".textDiapo").css("opacity", 0);
	});

$(".stopDiapo").mouseover(function(){
	$(".textStopDiapo").css("opacity", 1);
}).mouseout(function(){
		$(".textStopDiapo").css("opacity", 0);
	}); 

$(".retourAccueil").mouseover(function(){
	$(".textRetourAccueil").css("opacity", 1);
}).mouseout(function(){
		$(".textRetourAccueil").css("opacity", 0);
	});//BANDE GAUCHE APPARITION TEXTE MENU

$(".imgSuivante").click(function(){
	imgSuivante(images, textes);
	
}); //BANDE GAUCHE IMAGE SUIVANTE

$(".imgPrecedente").click(function(){
	imgPrecedente(images, textes);
	
}); //BANDE GAUCHE IMAGE PRECEDENTE

var v; 							//variable qui sert pour le diaporama
$(".diapo").click(function(){
	v = setInterval(frames, 2500);
	$(".glyphicon-play").css("color", "#FF9900");
	function frames (){
		var value = parseInt($(".photoPrincipale img").attr("value"));
				console.log(value);
				if (value !== images.length) {
					var source = images[value];
					var info = textes[value];
					$(".photoPrincipale img").attr("src", source);
					$(".photoPrincipale img").attr("value", value+1);
					$(".infos").html(info);
				}
				else {
					var source2 = images[0];
					var info2 = textes[0];
					$(".photoPrincipale img").attr("src", source2);
					$(".photoPrincipale img").attr("value", 1);
					$(".infos").html(info2);
				}
	}
 }); //DIAPORAMA AUTOMATIQUE
$(".stopDiapo").click(function(){
	clearInterval(v);
	$(".glyphicon-play").css("color", "black");
}); //STOPPER LE DIAPORAMA

window.addEventListener("keydown", function(evt) {
        switch(evt.keyCode){
            case 37: //Gauche
				imgPrecedente(images, textes);
            break;
            case 39: //Droite
				imgSuivante(images, textes);
            break;
        }
    }, false);
 //IMAGE SUIV/PREC AVEC FLECHES DIRECTIONNELLES

function imgSuivante (images, textes) {
	var value = parseInt($(".photoPrincipale img").attr("value"));
				console.log(value);
				if (value !== images.length) {
					var source = images[value];
					var info = textes[value];
					$(".photoPrincipale img").attr("src", source);
					$(".photoPrincipale img").attr("value", value+1);
					$(".infos").html(info);
				}
				else {
					var source2 = images[0];
					var info2 = textes[0];
					$(".photoPrincipale img").attr("src", source2);
					$(".photoPrincipale img").attr("value", 1);
					$(".infos").html(info2);
				}
}
function imgPrecedente (images, textes) {
	var value = parseInt($(".photoPrincipale img").attr("value"));
				console.log(value);
				if (value !== 1) {
					var source = images[value-2];
					var info = textes[value-2];
					$(".photoPrincipale img").attr("src", source);
					$(".photoPrincipale img").attr("value", value-1);
					$(".infos").html(info);
				}
				else {
					var longueurTab = images.length;
					var source2 = images[longueurTab-1];
					var info2 = textes[longueurTab-1];
					$(".photoPrincipale img").attr("src", source2);
					$(".photoPrincipale img").attr("value", longueurTab);
					$(".infos").html(info2);
				}
}
}


