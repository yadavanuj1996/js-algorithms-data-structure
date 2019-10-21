import LinkedList from '../linked-list/LinkedList';

let defaultHashTableSize=32;
export default class HashTable{
  constructor(hashTableSize=defaultHashTableSize){
    this.buckets=Array(hashTableSize).fill(null).map((element) =>new LinkedList());
    this.keys={}; // optional 
  }
  hash(key){
    const reducer=(accumulator,currentVal)=>accumulator+currentVal.charCodeAt(0);
    const hashKey=key.split('').reduce(reducer,0);
    let hashKeyIndex=hashKey%(this.buckets.length);
    
    return hashKeyIndex;
  }
  set(key,value){
    let hashKey=this.hash(key);
    this.keys[key]=hashKey;
    let bucketLinkedList=this.buckets[hashKey];
    
    if(bucketLinkedList.isEmpty()){
      bucketLinkedList.insertAtEnd({'key':key,'value':value});
    }
    else{
       let searchCallback=(bucketLinkedListNode)=> bucketLinkedListNode.value.key===key;
      let node=bucketLinkedList.searchWithCallback(searchCallback);
      
      if(node===null){
        bucketLinkedList.insertAtEnd({'key':key,'value':value});
      }
      else{
        node.value.value=value;
      }
    }

  }
  get(key){
    let resultValue=null;
    let hashKey=this.hash(key);
    let bucketLinkedList=this.buckets[hashKey];
    let searchCallback=(bucketLinkedListNode)=> bucketLinkedListNode.value.key===key;
    let node=bucketLinkedList.searchWithCallback(searchCallback);
    if(node===null)
      resultValue=undefined;
    else 
      resultValue=node.value.value;
    
    return resultValue;
  }
  has(key){
    return this.keys.hasOwnProperty(key);
  }
  delete(key){
    let resultValue=null;
    let hashKey=this.hash(key);
    let bucketLinkedList=this.buckets[hashKey];
    let searchCallback=(bucketLinkedListNode)=> bucketLinkedListNode.value.key===key;
    let node=bucketLinkedList.searchWithCallback(searchCallback);
    if(node===null)
      resultValue=null;
    else{
      bucketLinkedList.remove(node.value);
      delete this.keys[key];
    }
    
    return resultValue;
  }
  getKeys(){
    return Object.keys(this.keys);
  }
  
}

