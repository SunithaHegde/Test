
var mySingleton = (function(){
	var instance;
	function private() {
		var x ={};
		x.name = "X";
		x.age = "X";
	}
	return {
		getInstance: function() {
			if( !instance){
				instance = new private();
			}
			return instance;	
		}
	}

})()
var z = mySingleton.getInstance()
var x = mySingleton.getInstance()
console.log(z == x)