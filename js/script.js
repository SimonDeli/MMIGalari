$(".page").hide();
$("#pageDessins").hide();
$(".menuFixe").hide(); 
$(".sousChoix").hide();
$("#contact").hide();
$("#APropos").hide();
var verif = false; //initialisation de certains éléments de la page
var contact = false;
var aPropos = false;

$(document).ready(function(){
	$("#titre").hide();
	$(".bande_droite").hide(0, function(){
		$(".page").fadeIn(1000, function(){
			$(".bande_droite").slideDown(700);
			$("#titre").slideDown(700);
			
		});
	});
});// a faire après le chargement de la page

$(window).scroll(function(){
		if($(window).scrollTop() > ($(".bande_droite").offset().top + $(".bande_droite").height()))
		{
			$(".menuFixe").show(200);
		}
		else 
		{
			$(".menuFixe").hide(200);
		}
		
}); // fonction liées aux scroll de la page

$(".sousMenu .choix").click(function(){
	console.log("sous menu "+verif)
	var _this = $(this);
	if(verif === false){
		_this.next().slideDown(150);
		verif = true;
	}
	else {
		$(".sousChoix:visible").slideUp(150, function(){
			_this.next().slideDown(150);
		});
		verif = true;
	}
});

$("#page").click(function(evt){
	console.log("window "+verif)
       if(evt.target.id === "choix1" || evt.target.id === "choix2" || evt.target.id === "choix3" || evt.target.id === "choix4") {
		   return;
	   }
	else {
		$(".sousChoix:visible").slideUp(150);
		verif = false;
	}
});
$(".glyphicon-envelope").click(function(){
	if(contact === false){
		if(aPropos === true){
			$("#APropos").hide(300, function(){
			aPropos = false;
			$("#contact").show(300);
			contact = true;
			})
			$(".glyphicon-remove").addClass("glyphicon-question-sign");
			$(".glyphicon-question-sign").removeClass("glyphicon-remove");
		}
		else{
			console.log("bonjour");
			$("#contact").show(300);
			contact = true;
		}
		$(this).removeClass("glyphicon-envelope");
		$(this).addClass("glyphicon-remove");
	}
	else {
		$("#contact").hide(300);
		contact = false;
		$(this).addClass("glyphicon-envelope");
		$(this).removeClass("glyphicon-remove");
	}
});

$(".glyphicon-question-sign").click(function(){
	if(aPropos === false){
		if(contact === true){
			$("#contact").hide(300, function(){
				contact = false;
				$("#APropos").show(300);
				aPropos = true;
			})
			$(".glyphicon-remove").addClass("glyphicon-envelope");
			$(".glyphicon-envelope").removeClass("glyphicon-remove");
		}
		else{
		console.log("bonjour");
		$("#APropos").show(300);
		aPropos = true;
		}
		$(this).removeClass("glyphicon-question-sign");
		$(this).addClass("glyphicon-remove");
	}
	else {
		$("#APropos").hide(300);
		aPropos = false;
		$(this).addClass("glyphicon-question-sign");
		$(this).removeClass("glyphicon-remove");
	}
	
});

	
//fonction autre
function afficherPlus () {
	
	var affPlus = document.getElementById("afficherPlus");
	var subMenu = document.getElementById("subMenu");
	var page = document.getElementById("page");
	var titre = document.getElementById("titre2");
	
	page.style.height = "1230px";
	affPlus.style.display = "none";
	$(".subMenu").hide();
	subMenu.style.display = "block";
	titre.style.display = "block";
	
	$(".subMenu:eq(0)").slideDown(150, function(){
		$(".subMenu:eq(1)").slideDown(150, function (){
			$(".subMenu:eq(2)").slideDown(150);
		});				
	});
	$(window).scroll(function(){
		animSubMenu(".sousMenu:eq(0)", "subMenuAnimated");
		animSubMenu(".sousMenu:eq(1)", "subMenuAnimated");
		animSubMenu(".sousMenu:eq(2)", "subMenuAnimated");
		animSubMenu(".sousMenu:eq(3)", "subMenuAnimated");
	});
} 
function animSubMenu (elem, classe){
	if($(window).scrollTop() >= ($(elem).offset().top - $(window).height())){
			$(elem).addClass(classe);
		}
	else {
			$(elem).removeClass(classe);
		}
} 



