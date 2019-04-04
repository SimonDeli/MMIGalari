var imageAfficher = false;

function degToRad(deg)
{
	return (Math.PI*deg)/180;
}
function radToDeg(rad)
{
	return (rad*180)/Math.PI;
}

function show_div(nomdiv){
	document.getElementById(nomdiv).click();
	imageAfficher = true;
}

$(".croix").click(function(){
	$("#canvas").css("filter", "blur(0px)");
});

$(".oeuvres").mouseover(function(){
	$(".nomPrenom").css("opacity", "1");
}).mouseout(function(){
	$(".nomPrenom").css("opacity", "0");
});

window.addEventListener("keydown", function(evt) {
	$("#explication").fadeOut(100);
	if (imageAfficher === true)
	{
		document.getElementById("close").click();
		imageAfficher = false;
	}
});

$("#explication").click(function(){
	$(this).fadeOut(100);
})