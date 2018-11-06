var Word = require('./word.js');
var prompt = require('prompt');

prompt.start();

var game = {
 	wordBank: ["IMPORTANCE","GODPARENT","CONJUGATED","DUPLICATE","EMBRACING","OVERSTAY","PERSONALITY","SLUMBER","LUMBERJACK","THUNDERCLAP","SUBCATEGORY","FARSIGHTED","BACKGROUND","COPYRIGHT",
                "DOCUMENTARY","DANGEROUS","GEOPHYSICAL","BIRTHPLACE","CAMPGROUND","COUNTRYSIDE","SPACEFLIGHT","WORKMANSHIP","SHOCKINGLY","ISOGRAM","DOWNSTREAM","ATMOSPHERIC","BANKRUPTCY",
                "BLACKSMITH","COMPLAIN","HOSPITABLY","BOYFRIEND","CLOTHESPIN","GREYHOUND","INTRODUCE","NIGHTMARE","PATHFINDER","DRAGON","PHLEGMATIC","ULTRASONIC","BINOCULARS","TRAMPOLINE"],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWrd: null,
 	
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWrd.getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLet'], function(err, result){
 			console.log("You guessed: " + result.guessLet);
 			var manyGuessed = self.currentWrd.checkLetter(result.guessLet);

 			if(manyGuessed ==0) {
 				console.log("WRONG");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("CORRECT");
 					if(self.currentWrd.findWord()){
 						console.log("You won!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log("-------------------");
 			if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. Correct Word ", self.currentWrd.target);
 			} else {
 				console.log(self.currentWrd.wordRender());
 			}
 		});

 	}


};

game.startGame();