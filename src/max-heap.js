const Node = require('./node');

class MaxHeap {
	constructor() {
	
		this.root=null;
		this.parentNodes=[];
		
		this.heapSize=0;

	}

	push(data, priority) {
	var New = new Node(data, priority);
		this.insertNode(New);
		this.shiftNodeUp(New);
	}
	pop() {

		if(this.heapSize>0)
		{
		var d=this.detachRoot();
		this.restoreRootFromLastInsertedNode(d);
		if(this.heapSize>1)  this.shiftNodeDown(this.root);
		return d.data;
		}
	}

	detachRoot() {
	
	this.heapSize--;
	
	if(this.root.right===null) this.parentNodes.shift();
	var root=this.root;
	this.root=null;
	
	return root;

	}

	restoreRootFromLastInsertedNode(detached) {
	if(Object.keys(detached).length != 0&&this.parentNodes.length>0)
	  {
	    this.root=this.parentNodes.pop();
	
	    if(this.root.parent!=null && this.root.parent !== detached &&this.root.parent.right!=null&&this.root.parent.left!=null)
				this.parentNodes.unshift(this.root.parent);
	
	    if(this.root.parent!==null)
	      {
	        var dad=this.root.parent;
	        dad.removeChild(this.root);
	      }
		  
		  
	
	    if(detached.left!==null) this.root.appendChild(detached.left);
	    if(detached.right!==null) this.root.appendChild(detached.right);
		if(this.heapSize<=2) this.parentNodes.unshift(this.root);
      }

	}

	size() {
	
	return this.heapSize;
		
	}

	isEmpty() {
		if(this.heapSize===0)
		  return true;
		else 
		  return false;
	}

	clear() {
	
	  this.root=null;
	  this.parentNodes=[];
	  this.heapSize=0;
	  
	}

	insertNode(node) {
		
	if(this.isEmpty()) {this.root = node; this.parentNodes.push(node); this.heapSize=1;}
	
    else if(this.heapSize%2===1) {this.parentNodes[0].appendChild(node); this.parentNodes.push(node); this.heapSize++;}
	
	else if(this.heapSize%2===0) {this.parentNodes[0].appendChild(node); this.parentNodes.push(node); this.parentNodes.splice(0,1); this.heapSize++; }
    
	}

	shiftNodeUp(node) {

	if(node!==null)
	{
	   if(node.parent!==null)
      	{
			if(node.priority>node.parent.priority){	

            if(node.parent.right!==null)
              {
			    this.parentNodes.splice(this.parentNodes.indexOf(node), 1, node.parent);
			  }	
            else 
              {
			     var tmp=node;
				 this.parentNodes.splice(this.parentNodes.indexOf(node), 1, node.parent);
				 this.parentNodes[0]=tmp;
				 
			  }			
			node.swapWithParent();  
			
			this.shiftNodeUp(node);
			
			}
		}
		else 
		 { 
           this.root=node; 
         } 
      }
	}

	shiftNodeDown(node) {
	
	if(node!==null)
	  { 
	    if(node.left!==null&&node.right!==null)
		    {
			  var max = (node.left.priority>node.right.priority)?node.left:node.right;
			   if(max.priority>node.priority)
			    {
				   if(node==this.root) this.root=max;
				   this.parentNodes.splice(this.parentNodes.indexOf(max), 1, node);
				   
				   max.swapWithParent();
				   
				   this.shiftNodeDown(node);
			    }
				 
			}
		else if(node.left!==null&&node.right===null)
            {
			   if(node.priority<node.left.priority)
			     {
				   if(node==this.root) this.root=node.left;
				   
			       var tmp=node.left;
			       this.parentNodes.splice(this.parentNodes.indexOf(node.left), 1, node);
			       this.parentNodes[0]=tmp; 
				   
				   node.left.swapWithParent(); 
				   
				   this.shiftNodeDown(node);
			     }
				 
			 }
			 
    
			
		   }
		
		}
    
	
}
module.exports = MaxHeap;
