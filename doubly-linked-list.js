//More efficient than singly linked list as there is no need to keep track of previous node
class doublyLinkedNode {
		constructor(value,next=null,prev=null){
				this.data=value;
				this.prev=prev;
				this.next=next;
		}	
}	
class doublyLinkedList {
	constructor(){
			this.head=null;
			this.tail=null;
	}	
	//add before head node
	prepend(value){
			var newNode = new doublyLinkedNode(value,this.head);
			//if empty list added element will be head and tail
			if(this.head === null){
				this.head = newNode;
				this.tail = newNode;

			} else { // add new node to previous of current head and change the head node 
				this.head.prev = newNode;
				this.head = newNode;
			}	
			
			return this;
	}	
	//add after tail node
	append(value){
		var newNode = new doublyLinkedNode(value,null,this.tail);
		//if empty list added element will be head and tail
			if(this.head === null){
				this.head = newNode;
				this.tail = newNode;

			} else { // add new node to next of current tail and change the tail node 
				this.tail.next = newNode;
				this.tail = newNode;
			}
		return this;	
	}
	//iterate over the list - find the element delete and update the reference
	delete(value){
		//if list is empty nothing to delete
		if(!this.head){
			return this;	
		}
		var currentNode = this.head;
		let deletedNode = null;
		while(currentNode) {
			if(currentNode.data === value){
				// if deleted node is head 
				if(currentNode === this.head){
					this.head = currentNode.next;
					if(this.head) { 
						this.head.prev = null;
					}
					// if all the node are being removed
					if(currentNode === this.tail){
						this.head = null;
						this.tail = null;	
					}					
				} else if(currentNode === this.tail) { // if element is last element update the tail
					this.tail = currentNode.prev;
					this.tail.next = null;
				}	else {
					currentNode.prev.next = currentNode.next;
				}	
				
			}	
			currentNode = currentNode.next;	

			}
			return this;
		}	
		
}	