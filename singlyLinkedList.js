// Each node consists of value and pointer to next element
function node(data) {
	this.data = data;
	this.next = null;
}
//linked list consists of head node and length 
function linkedList(){
	this._length = 0;
	this.head = null;
}
// adds at the end of linked list
linkedList.prototype.add = function(data){
	var newNode = new node(data);
	var currentNode = this.head;
	// if linked list is empty, make it a head node 
	if(!currentNode){
		this.head = newNode;
	} else {
		// iterate through the list and add at the end of the list
		while(currentNode.next){
			currentNode = currentNode.next;
		}
		currentNode.next = newNode;
	}
	this._length++;
	return newNode;

}
//check if element is present in the list
linkedList.prototype.search = function(data){
	var currentNode = this.head;
	var found = false;
	while(currentNode){	
		if(currentNode.data === data){
			found = true;
			return found;
		} else {
			currentNode = currentNode.next;
		}
	}
	return found;
}
//delete data at given position
linkedList.prototype.delete = function(pos){
	var currentNode = this.head;
	var count = 1;
	var prevNode = this.head;
	var nextNode = null;
		/*while(currentNode){
			if(this.head.data === data){
				
				if(this.head.next){
					this.head = this.head.next;
				} else {
					this.head = null;	
				}
				-- this._length;
				++count;
			}	
			else {
				if(currentNode.next.data === data){
					prevNode =	currentNode;
					nextNode = currentNode.next.next;
					delete currentNode.next;
					currentNode = nextNode;
					++count;
					-- this._length;

				}
			}
		}	
		return count;
		*/
		var deletedNode = null;
	// check if position is valid
		if(pos < 1 || pos > this._length){
			return false;
		} else if(pos === 1){ // if it's first element, then assign 2 to head element 
			this.head = currentNode.next;
			deletedNode = currentNode;
			delete currentNode;
			return deletedNode;
		} else { // assign prev element's next to the deleted node's next element
			while(currentNode.next){
				prevNode = currentNode;
				++count;
				if(count === pos){
					prevNode.next = currentNode.next.next;
					deletedNode = currentNode.next;
					delete currentNode.next;
					return deletedNode;
				}
			}
		}
		
}

