class Node {
	constructor(data, priority) {
     this.data=data;
	 this.priority=priority;
	 this.parent=null;
	 this.right=null;
	 this.left=null;
	}

	appendChild(node) {
	if(node!==null)
	{
    if(this.left===null)
	  {
	    this.left=node;
		node.parent=this;
	  }
	else if(this.right===null)
	  {
	    this.right=node;
		node.parent=this;
	  }
	}
	
	}

	removeChild(node) {
    if(this.left==node) {this.left=null; node.parent=null;}
	else if(this.right==node) {this.right=null; node.parent=null;}
	else throw new Error;
	}

	remove() {
	if(this.parent!==null)
	    this.parent.removeChild(this);
	}

	swapWithParent() {
	
	if(this.parent===null) return;
	
	var father=this.parent;
	var grandFather=this.parent.parent;
	
	var childLeft=this.left;
	var childRight=this.right;
	
	var fatherSecondSonL=null;
	var fatherSecondSonR=null;
	
	if(grandFather!==null)
	  {
	     grandFather.removeChild(father);
		 grandFather.appendChild(this);		 
	  }
	
	if(father!==null)
	  {
	    if(father.left===this) father.left=null;
		else if (father.right===this) father.right=null;
		
		if(grandFather===null) 
		  {
		    this.parent=null;
		  }
		  
		  
		  if(father.left!==null) { fatherSecondSonL=father.left; father.left=null;}
		  
		  else if(father.right!==null) { fatherSecondSonR=father.right;  father.right=null;}
		  
		  if(childLeft!==null) {this.removeChild(childLeft); father.appendChild(childLeft);}
		  if(childRight!==null) {this.removeChild(childRight); father.appendChild(childRight);}
		  
		  if(fatherSecondSonL!==null) this.appendChild(fatherSecondSonL);
		  this.appendChild(father);
		  if(fatherSecondSonR!==null) this.appendChild(fatherSecondSonR);
	  }
	
	}
}

module.exports = Node;
