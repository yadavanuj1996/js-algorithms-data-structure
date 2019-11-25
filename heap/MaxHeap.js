import Heap from './Heap.js';

export default class MaxHeap extends Heap{
  isPairInRightOrder(parentHeapElement,currentHeapElement){
    return parentHeapElement>=currentHeapElement;
  }
}