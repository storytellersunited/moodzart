
$( document ).ready(function() {


WebFont.load({
	google: {
		families: [
				"Nixie+One::latin"
			]
		}
	});

getMood();

getData();

});



$( window ).load(function() {

var d = document.documentElement;
d.className = d.className + " loaded";

});