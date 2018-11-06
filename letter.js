var Letter = function(char){
	this.character = char;
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