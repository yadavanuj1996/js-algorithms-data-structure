import DoublyLinkedListNode from './DoublyLinkedListNode.js';

export default class DoublyLinkedList {
  constructor(){
    this.head=null;
    this.tail=null;
  }
  isEmpty(){
    return this.head===null;
  }
  hasSingleElement(){
    return this.head!==null && this.head===this.tail;
  }
  insertAtStart(value){
    let newNode=new DoublyLinkedListNode(value);
    if(this.isEmpty()){
      this.head=newNode;
      this.tail=newNode;
    }
    else{
      newNode.next=this.head;
      this.head.previous=newNode;
      this.head=newNode;
    }
  }
  insertAtEnd(value){
    let newNode=new DoublyLinkedListNode(value);
    if(this.isEmpty()){
      this.head=newNode;
      this.tail=newNode;
    }
    else{
      newNode.previous=this.tail;
      this.tail.next=newNode;
      this.tail=newNode;
    }
  }
  toString(callback){
    let resultString=null;
    if(this.head===null){
      resultString='';
    }
    else if(callback){
      resultString=`${callback(this.head.value)}`;
      let currentNode=this.head.next; //starting from next node of head
      while(currentNode!==null){
        resultString+=`,${callback(currentNode.value)}`;
        currentNode=currentNode.next;
      }
    }
    else{
      resultString=`${this.head.value}`;
      let currentNode=this.head.next; //starting from next node of head
      while(currentNode!==null){
        resultString+=`,${currentNode.value}`;
        currentNode=currentNode.next;
      }
    }
    return resultString;
  }
  fromArray(elementsArray){
    elementsArray.forEach((element)=>{
      this.insertAtEnd(element);
    });
  }
  remove(value){
    let deletedNode=null;
    if(this.isEmpty()){
      deletedNode=null;
    }
    else if(this.hasSingleElement()){
      deletedNode=this.head;
      this.head=null;
      this.tail=null;
    }
    else{
      let currentNode=this.head;
      while(currentNode!==null){
        if(currentNode.value===value){
          deletedNode=currentNode;
          if(this.head===currentNode){ // check for head
            this.head=this.head.next;
            currentNode.next.previous=currentNode.previous;
          }
          else if(this.tail===currentNode){ // check for tail
            this.tail=this.tail.previous;
            currentNode.previous.next=currentNode.next;
          }
          else{ // check for middle element
            currentNode.next.previous=currentNode.previous;
            currentNode.previous.next=currentNode.next;
          } 
        }
        currentNode=currentNode.next;
      }
    }
    return deletedNode;
  }
  removeTail(){
    let deletedNode=null;
    if(this.isEmpty()){
      deletedNode=null;
    }
    else if(this.hasSingleElement()){
      deletedNode=this.tail;
      this.head=null;
      this.tail=null;
    }
    else {
      deletedNode=this.tail;
      this.tail=this.tail.previous; // updating tail
      this.tail.next=null;
    }
    return deletedNode;
  }
  removeHead(){
    let deletedNode=null;
    if(this.isEmpty()){
      deletedNode=null;
    }
    else if(this.hasSingleElement()){
      deletedNode=this.head;
      this.head=null;
      this.tail=null;
    }
    else {
      deletedNode=this.head;
      this.head=this.head.next; // updating tail
      this.head.previous=null;
    }
    return deletedNode;
  }
}