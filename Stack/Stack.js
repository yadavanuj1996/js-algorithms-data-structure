import LinkedList from '../linked-list/LinkedList';

export default class Stack{
  constructor(){
    // Linked list based implementation
    this.linkedList=new LinkedList();
  }
  push(value){
    this.linkedList.insertAtStart(value);
  }
  pop(){
    let poppedNode=this.linkedList.removeHead();
    let poppedValue=null;
    if(poppedNode!==null)
      poppedValue=poppedNode.value;
    else  
      poppedValue=null;
    
    return poppedValue;
  }
  isEmpty(){
    return this.linkedList.isEmpty();
  }
  peek(){
    let peekNode=this.linkedList.head;
    let peekValue=null;
    if(peekNode!==null)
      peekValue=peekNode.value;
    else 
      peekValue=null;
    
    return peekValue;
  }
  toString(callback){
    return this.linkedList.toString(callback);
  }
  toArray(){
    let elementArray=[];
    let currentNode=this.linkedList.head;
    while(currentNode!=null){
      elementArray.push(currentNode.value);
      currentNode=currentNode.next;
    }
    return elementArray;
  }
}