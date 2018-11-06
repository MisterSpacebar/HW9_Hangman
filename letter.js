var Letter = function(let){
	this.character = let;
	this.isAppear = false;
	this.letterRender = function(){
        if(this.isAppear){
            return this.character
        } else {
            return "_"
        }
	};
};

module.exports = Letter;