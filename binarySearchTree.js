// tree - search o(log n) - balanced , not balanced 0(n)
// 

class treeNode {
	constructor(data, left=null,right=null){
		this.data = data;
		this.left = left;
		this.right = right;	
	}	
	
}	

class BinarySearchTree {
	constructor(){
		this.root = null;
	}	
	insert(data){
		var newTreeNode = new treeNode(data);
		if( this.root === null){
			this.root = newTreeNode;
		} else {	
			this.insertNode(this.root, newTreeNode);
		}	
	}	
	insertNode(node, newTreeNode){
		if(node.data < newTreeNode.data){
			if(node.left === null){
				node.left = newTreeNode;	
			} else {
				this.insertNode(node.left,newTreeNode);
			}	
		} else {
			if(node.right === null){
				node.right = newTreeNode;	
			} else {
				this.insertNode(node.right,newTreeNode);
			}
		}	
		
	}	
	remove(data){
	 this.removeNode(data, this.root);		
	}	
	removeNode(data, node){
		if(node === null) {
			return ;
		} 	else if(data < node.data){
				 this.removeNode(data, node.left);
		}	else if(data > node.data){
				 this.removeNode(data, node.right);	
		}	else {
				if(!node.left && !node.right){
					node = null;
				} else if(!node.left){
					node = node.right;
				}	else if(!node.right){
					node = node.left;	
				}	else {
					var minNode = this.findMin(node.right);
					this.removeNode(minNode.data, node.right);	
					node.data = minNode.data;

				}	
		}	
	}
	findMin(node){
		if(node.left ===  null){
			return node;	
		}	else {
			return this.findMin(node.left);	
		}	
	}	
	inorder(){
		this.traverseInorder(this.root);		
	}
	traverseInorder(node) {
		if(node != null){
			this.traverseInorder(node.left);
			console.log(node.data);
			this.traverseInorder(node.right);
		}	
	}
	preOrder(){
		this.traversePreOrder(this.root);		
	}
	traversePreOrder(node) {
		if(node != null){
			console.log(node.data);
			this.traversePreOrder(node.left);
			this.traversePreOrder(node.right);
		}
	}	
	postOrder(){
		this.traversePostOrder(this.root);		
	}
	traversePostOrder(node) {
		if(node != null){
			this.traversePostOrder(node.left);
			this.traversePostOrder(node.right);
			console.log(node.data);

		}	

	}
	search(data) {
		return this.searchRecursive(data, this.root);	
	}
	searchRecursive(data, node){
		if(node === null){
			return false;
		} else {
			if(node.data === data){
				return true;
			} else if(data < node.data){
				return this.searchRecursive(data, node.left);
			} else {
				return this.searchRecursive(data, node.right);
			}	
		}	
	}	
}