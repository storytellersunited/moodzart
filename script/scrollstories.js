
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1Co_byTntKETyuML9aZzfvUiX7HoPQA-AiC_U2Vm6380/pubhtml';
// var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1MwOgW4TIbLq1uDg2_UP3bPKD5AZSnZuFy3Lm3AvkVT8/pubhtml';
var sheetData;

function getData() {
	console.log("getData!!!");
Tabletop.init( { key: public_spreadsheet_url,
                 callback: populateData,
                 simpleSheet: true } )
}

function populateData (data, tabletop) {
	sheetData = data;
	console.log("populateData!!!");
	console.log(mood);
	for (var i = 0; i < data.length; i++) {
		// console.log(data[i]['Text']);
		if (data[i]['Mood'] === String(mood)) {
			$('ul').append('<li class="inactive">'+data[i]['Text']+'</li>')	
		};
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

function repopulateData (mood) {
	console.log("repopulateData!!!");
	console.log(mood);
	$('ul#storylist').empty();
	for (var i = 0; i < sheetData.length; i++) {
		// console.log(sheetData[i]['Text']);
		if (sheetData[i]['Mood'] === String(mood)) {
			$('ul').append('<li class="inactive">'+sheetData[i]['Text']+'</li>')	
		};
	};
	scrollStory();
}