var Letter = require('./letter.js');

var Word = function(target) {
	this.target = target;
	this.letters = [];
	this.isFound = false;

	this.getLetter = function() {
		for (var i=0; i < this.target.length; i++) {
			this.letters.push(new Letter(this.target[i]));
		}
	};

	this.findWord = function() {
		this.isFound = this.letters.every(function(currentLetter) {
			return currentLetter.isAppear;
		});
		return this.found;
	};

	this.checkLetter = function(guessLetter) {
		var toReturn = 0;

		for (var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].character == guessLetter){
				this.letters[i].isAppear = true;
				toReturn++;
			}
		}
		return toReturn;
	};

	this.wordRender = function() {
		var string = "";
		for (var i=0; i < this.letters.length; i++){
			string += this.letters[i].letterRender();
		}
		return string;
	};

}

module.exports = Word;