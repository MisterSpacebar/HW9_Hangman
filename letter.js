var letter = function(let){
	this.character = let;
	this.isAppear = false;
	this.letterRender = function(){
        if(!this.isAppear){
            return "_";
        } else {
            return this.character;
        }
	};
};

module.exports = letter;