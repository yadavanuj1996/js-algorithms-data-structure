import LinkedList from '../linked-list/LinkedList';

let defaultHashTableSize=32;
export default class HashTable{
  constructor(hashTableSize=defaultHashTableSize){
    this.buckets=Array(hashTableSize).fill(new LinkedList());
    this.keys={}; // optional 
  }
  hash(key){
    const reducer=(accumulator,currentValue)=>accumulator+currentValue.charCodeAt(0);
    const hashKey=Array.from(key).reduce(reducer,0);
    let hashKeyIndex=hashKey%(this.buckets.length);
    return hashKeyIndex;
  }
  
}