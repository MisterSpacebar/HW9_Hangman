var Word = require('./word.js');
var prompt = require('prompt');

prompt.start();

var game = {
 	wordBank: ["IMPORTANCE","GODPARENT","CONJUGATED","DUPLICATE","EMBRACING","OVERSTAY","PERSONALITY","SLUMBER","LUMBERJACK","THUNDERCLAP","SUBCATEGORY","FARSIGHTED","BACKGROUND","COPYRIGHT",
                "DOCUMENTARY","DANGEROUS","GEOPHYSICAL","BIRTHPLACE","CAMPGROUND","COUNTRYSIDE","SPACEFLIGHT","WORKMANSHIP","SHOCKINGLY","ISOGRAM","DOWNSTREAM","ATMOSPHERIC","BANKRUPTCY",
                "BLACKSMITH","COMPLAIN","HOSPITABLY","BOYFRIEND","CLOTHESPIN","GREYHOUND","INTRODUCE","NIGHTMARE","PATHFINDER","DRAGON","PHLEGMATIC","ULTRASONIC","BINOCULARS","TRAMPOLINE"],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWord: null,
 	
 	startGame: function(word) {
        var newWord = Math.floor(Math.random()* this.wordBank.length);

 		this.resetGuesses();
 		this.currentWord = new Word(this.wordBank[newWord]);
 		this.currentWord.getLetter();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		prompt.get(["guessLetter"], function(err, result){
 			console.log("You guessed: " + result.guessLetter);
            var manyGuessed = this.currentWord.checkLetter(result.guessLetter);
            console.log(manyGuessed); 

 			if(manyGuessed == 0) {
 				console.log("WRONG");
 				this.guessesRemaining--;
 				
 			} else {
 				console.log("CORRECT");
 					if(this.currentWord.findWord()){
 						console.log("You won!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + this.guessesRemaining);
 			console.log("-------------------");
 			if((this.guessesRemaining > 0) && (this.currentWord.found == false)){
 				this.promptUser();
 			}
 			else if(this.guessesRemaining == 0){
 				console.log("Game over. Correct Word " + this.currentWord.target);
 			} else {
 				console.log(this.currentWord.wordRender());
 			}
 		});

 	}


};

game.startGame();