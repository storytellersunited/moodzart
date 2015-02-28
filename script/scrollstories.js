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

scrollStory();