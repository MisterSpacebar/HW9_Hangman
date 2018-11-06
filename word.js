var Letter = require('./letter.js');

var World = function(target) {
	this.target = target;
	this.lets = [];
	this.isFound = false;

	this.getLetter = function() {
		for (var i=0; i < this.target.length; i++) {
			this.lets.push(new Letter(this.target[i]));
		}
	};

	this.findWord = function() {
		this.isFound = this.lets.every(function(currentLetter) {
			return currentLetter.appear;
		});
		return this.found;
	};

	this.checkLetter = function(guessLetter) {
		var toReturn = 0;

		for (var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].charac == guessLetter){
				this.lets[i].appear = true;
				toReturn++;
			}
		}
		return toReturn;
	};

	this.wordRender = function() {
		var string = '';
		for (var i=0; i < this.lets.length; i++){
			string += this.lets[i].letterRender();
		}
		return string;
	};

}

module.exports = Word;