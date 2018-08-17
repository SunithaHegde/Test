class linkedNode {
	constructor(value,next=null){
		this.data = value;
		this.next = next;
	}
}

class linkedList {
	constructor(){
		this.head = null;
		this.tail = null;
	}	
	prepend(value) 	{
		var newNode = new linkedNode(value, this.head);
			this.head =	newNode;
			if(!this.tail) {
				this.tail = newNode;
			}	
		return this;		
	}	
	append(value) {
		var newNode = new linkedNode(value);
		if(!this.head) {
				this.head = newNode;
				this.tail = newNode;
				return this;
			}	
		this.tail.next = newNode;
		this.tail = newNode;
		return this;
	}
	deleteNode(value) {

	}
	deleteHead() {
		if(this.head && this.head.next){
			this.head = this.head.next;	
		}	else {
			this.head = null;
			this.tail = null;
		}
		return this;	
	}	
	deleteTail(){
		
	}	
}	

class Queue {
		
	constructor(){
		this.linkedList = new linkedList();
	}
	add(value){
		return this.linkedList.append(value);
	}
	remove(){
		return this.linkedList.deleteHead();
	}
	isEmpty(){
		return this.linkedList.head === null;
	}	
	peek(){
		if (!this.linkedList.head) {
		  return null;
		}
		return this.linkedList.head.data;
	}	
}	