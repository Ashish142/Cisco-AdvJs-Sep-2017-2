function Spinner(){
	if (!(this instanceof Spinner))
		return new Spinner();
	var counter = 0;
	this.up = function(){ return ++counter; };
	this.down = function(){ return --counter; };
}