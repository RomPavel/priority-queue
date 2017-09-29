const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
	if(arguments.length==0)
     	this.maxSize=30;
	else  
	    this.maxSize=maxSize;
		
	this.heap=new MaxHeap;
	}

	push(data, priority) {
	if(this.maxSize==this.heap.heapSize) 
	  throw new Error;
	else 
        this.heap.push(data, priority);
	}

	shift() {
	if(this.heap.heapSize==0) 
	  throw new Error;
	else 
      return this.heap.pop();
	}

	size() {
     return this.heap.heapSize;
	}

	isEmpty() {
		if(this.size()==0)
		  return true;
		else 
		  return false;
	}
}

module.exports = PriorityQueue;
