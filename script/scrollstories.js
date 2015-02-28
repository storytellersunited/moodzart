
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1Co_byTntKETyuML9aZzfvUiX7HoPQA-AiC_U2Vm6380/pubhtml';

function getData() {
Tabletop.init( { key: public_spreadsheet_url,
                 callback: populateData,
                 simpleSheet: true } )
}

function showInfo(data, tabletop) {
	console.log(data[1]["Text"]);
}

function populateData (data, tabletop) {
	for (var i = 0; i < data.length; i++) {
		$('ul').append('<li class="inactive">'+data[i]['Text']+'</li>')
	};
	scrollStory();
}

function scrollStory (argument) {
	$('ul#storylist > li').each(function(i, element) {
	    $(element).delay(i * 2000).fadeIn();
	});

	$('ul#storylist > li').each(function(i, element) {
	    $(element).delay(2000 + (i * 2000)).fadeOut();
	});
}