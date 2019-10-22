import Comparator from "../utils/comparator/Comparator";

export default class Heap {
  constructor(compareFunction) {
    //new.target in constructor return the class name with
    // code
    if (new.target === Heap) {
      throw new TypeError("Cannot construct Heap instance directly");
    }

    this.heapContainer = [];
    this.compare = new Comparator(compareFunction);
  }
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  getParentIndex(childIndex) {
    if (childIndex >= this.heapContainer.length || childIndex == 0) return null;

    return Math.floor((childIndex - 1) / 2);
  }
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) !== null;
  }
  hasLeftChild(parentIndex) {
    let leftChildIndex = this.getLeftChildIndex(parentIndex);
    return leftChildIndex < this.heapContainer.length;
  }
  hasRightChild(parentIndex) {
    let rightChildIndex = this.getRightChildIndex(parentIndex);
    return rightChildIndex < this.heapContainer.length;
  }
  heapHasIndex(index){
    if(index>=0 && index<this.heapContainer.length)
      return true;
    
    return false;
  }
  getLeftChild(parentIndex) {
    let leftChildIndex=this.getLeftChildIndex(parentIndex);
    if(!this.heapHasIndex(parentIndex) || !this.heapHasIndex(leftChildIndex))
      return null;

    return this.heapContainer[leftChildIndex];
  }
  getRightChild(parentIndex) {
    let rightChildIndex=this.getRightChildIndex(parentIndex);
     if(!this.heapHasIndex(parentIndex) || !this.heapHasIndex(rightChildIndex))
      return null;

    return this.heapContainer[rightChildIndex];
  }
  getParent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }
  // to swap two nodes in heap
  swap(firstIndex, secondIndex) {
    let temp = this.heapContainer[firstIndex];
    this.heapContainer[firstIndex] = this.heapContainer[secondIndex];
    this.heapContainer[secondIndex] = temp;
  }
  isEmpty() {
    return this.heapContainer.length === 0;
  }
  hasSingleElement() {
    return this.heapContainer.length === 1;
  }
  peek() {
    if (this.isEmpty()) return null;

    return this.heapContainer[0];
  }
  heapifyUp(index = this.heapContainer.length - 1) {
    let parentHeapElement = this.getParent(index);
    let currentHeapElement = this.heapContainer[index];
    while (
      this.hasParent(index) &&
      !this.isPairInRightOrder(parentHeapElement, currentHeapElement)
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }
  add(value) {
    this.heapContainer.push(value);
    this.heapifyUp();
  }
  heapifyDown(index = 0) {
    let currentElement = this.heapContainer[index];
    let leftChildElement = this.getLeftChild(index);
    let rightChildElement = this.getRightChild(index);
    if(currentElement===null || leftChildElement===null && rightChildElement===null)
      return ;
      
    if (
      (leftChildElement===null || this.isPairInRightOrder(currentElement, leftChildElement)) && (rightChildElement===null ||
      this.isPairInRightOrder(currentElement, rightChildElement))
    ) {
      return;
    } else if (
      (leftChildElement===null || !this.isPairInRightOrder(currentElement, leftChildElement)) && (rightChildElement===null ||
      this.isPairInRightOrder(currentElement, rightChildElement))
    ) {
      this.swap(index, this.getLeftChildIndex(index));
      this.heapifyDown(this.getLeftChildIndex(index));
    } else if (
      (leftChildElement===null || this.isPairInRightOrder(currentElement, leftChildElement)) && (rightChildElement===null ||
      !this.isPairInRightOrder(currentElement, rightChildElement))
    ) {
      this.swap(index, this.getRightChildIndex(index));
      this.heapifyDown(this.getRightChildIndex(index));
    } else if (
      (leftChildElement===null || !this.isPairInRightOrder(currentElement, leftChildElement)) && (rightChildElement===null ||
      !this.isPairInRightOrder(currentElement, rightChildElement))
    ) {
        if (this.isPairInRightOrder(leftChildElement, rightChildElement)) {
          this.swap(index, this.getLeftChildIndex(index));
          this.heapifyDown(this.getLeftChildIndex(index));
        } else {
          this.swap(index, this.getRightChildIndex(index));
          this.heapifyDown(this.getRightChildIndex(index));
        }
    }
  }
  poll() {
    let rootElement = null;
    if (this.isEmpty()) {
      rootElement = null;
    } else if (this.hasSingleElement()) {
      rootElement = this.heapContainer.pop();
    } else { 
      rootElement = this.heapContainer[0];
      this.heapContainer[0] = this.heapContainer.pop();
      this.heapifyDown();
    }
   
    return rootElement;
  }

  toString() {
    return this.heapContainer.toString();
  }
}
