
var mood = 2;

function getMood(){
	document.querySelector('#range-mood').addEventListener('change', function(e){
		mood = this.value;
		setMood();
		repopulateData(mood);
	});
}

function setMood(){
		document.getElementsByTagName('body')[0].setAttribute('class', 'mood'+mood);
}

setMood();