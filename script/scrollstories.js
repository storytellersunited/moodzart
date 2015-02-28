window.onload = function() { 
	init();
	scrollStory();
};

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1Co_byTntKETyuML9aZzfvUiX7HoPQA-AiC_U2Vm6380/pubhtml';

function init() {
Tabletop.init( { key: public_spreadsheet_url,
                 callback: showInfo,
                 simpleSheet: true } )
}

function showInfo(data, tabletop) {
alert("Successfully processed!")
console.log(data);
}

function scrollStory (argument) {
	console.log("scrollStory!");
	$('ul > li').each(function(i, element) {
		console.log("in!");
	    $(element).delay(i * 2000).fadeIn();
	});

	$('ul > li').each(function(i, element) {
		console.log("out!");
	    $(element).delay(4000 + i * 2000).fadeOut();
	});
}



