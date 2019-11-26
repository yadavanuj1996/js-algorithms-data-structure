import MinHeap from  '../heap/MinHeap';
import Comparator from '../utils/comparator/Comparator';

export default class PriorityQueue extends MinHeap{
  constructor(){
    super();
    this.priorities=new Map();
    this.compare =new Comparator(this.comparePriority.bind(this));
  }
  // add items to underlying heap ds and the js inbuit map 
  // Note: first add to this.priorities as it is used in Comparator fucntion that will be used in heap's metod
  add(item,priority){
    this.priorities.set(item,priority); 
    super.add(item);
    return this;
  }
  changePriority(item,newPriority){
    this.remove(item,new Comparator(this.compareByValue));
    this.priorities.set(item,newPriority);
    this.add(item,newPriority);
    return this;
  }
  comparePriority(a,b){
      if(this.priorities.get(a)-this.priorities.get(b)===0){
        return 0;
      }
      return this.priorities.get(a)>this.priorities.get(b)?1:-1;
  }
  compareByValue(a,b){
    if(a===b){
        return 0;
      }
      return a>b?1:-1;
  }
  hasValue(item){
    return this.find(item,new Comparator(this.compareByValue)).length>0?true: false;
  }
  
}