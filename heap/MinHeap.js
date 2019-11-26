import Heap from './Heap.js';

export default class MinHeap extends Heap{
  isPairInRightOrder(parentHeapElement,currentHeapElement){
    return this.compare.lessThanOrEqual(parentHeapElement,currentHeapElement);
  }
}