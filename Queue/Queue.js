import LinkedList from '../linked-list/LinkedList';
// Linked List Based implementation 
// using the already defined linked list
export default class Queue{
  constructor(){
    this.linkedList=new LinkedList();
  }
  enqueue(value){
    this.linkedList.insertAtEnd(value);
  }
  dequeue(){
    let removedNode=this.linkedList.removeHead();
    let dequeueValue=null;

    if(removedNode!=null)
      dequeueValue=removedNode.value;
    else 
      dequeueValue=null;
    
    return dequeueValue;
  }
  toString(callback){
    return this.linkedList.toString(callback);
  }
  isEmpty(){
    return this.linkedList.isEmpty();
  }
  peek(){
    let peekNode=this.linkedList.head;
    let resultNode=null;

    if(peekNode!==null)
      resultNode=peekNode.value;
    else 
      resultNode=null;

    return resultNode;
  }

}