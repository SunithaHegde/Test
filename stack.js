//Stack - linear data structure, LIFO, no fixed size
//stack overflow exception

class Node {
	constructor(data,next=null){
		this.data = data;
		this.next = next;
	}
}

class Stack {
	
	constructor(){
		this.topNode = null;
	}	
	push(value){
		var newNode = new Node(value);
		newNode.next = this.topNode;
		this.topNode = newNode;	
		return this;
	}	
	pop(){
		if(this.topNode){
			this.topNode = this.topNode.next
		}	
		return this;
	}	
	isEmpty(){
		return this.topNode === null;	
	}	
}