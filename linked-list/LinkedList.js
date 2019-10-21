import LinkedListNode from './LinkedListNode';

export default class LinkedList{
  constructor(){
    this.head=null;
    this.tail=null;
  }
  insertAtStart(value){
    const newNode=new LinkedListNode(value);
    if(this.head===null)
      this.tail=newNode;
    else if(this.head!==null)
      newNode.next=this.head;

    this.head=newNode;
  }
  insertAtEnd(value){
    const newNode=new LinkedListNode(value);
    if(this.head===null){
      this.head=newNode;
      this.tail=newNode;
      return ;
    }
    this.tail.next=newNode;
    this.tail=newNode;
  }
  remove(value){
    let deletedNode=null;
    if(this.head === null)  // no element
      deletedNode=null;
    else if (this.head === this.tail && this.head.value===value){ // single element
      deletedNode=this.head;
      this.head=null;
      this.tail=null;
    }
    else if(this.head.value===value){ //more than 1 element
      deletedNode=this.head;
      this.head=this.head.next;
      if(this.head.value===value){
        let deleteNode=this.remove(value);
        return deleteNode;
      }
    }
    
    const currentNode=this.head;
    while(currentNode !== null){
      if(currentNode.next!==null && currentNode.next.value===value){
        if(currentNode.next===this.tail){
          this.tail=currentNode;
        } 
        deletedNode=currentNode.next;
        currentNode.next=currentNode.next.next;
        continue;
      }
      currentNode=currentNode.next;
    }
    return deletedNode;
  }

  search(value){
    if(this.head === null)  // no element
      return null;
    
    let currentNode=this.head;
    while(currentNode !== null){
      if(currentNode.value===value){
       return currentNode;
      }
      currentNode=currentNode.next;
    }
    return null;
  }
  searchWithCallback(callback){
    let currentNode=this.head;
    let matchedNode=null;
    while(currentNode!=null){
      if(callback(currentNode)){
        matchedNode=currentNode;
        break; 
      }
      currentNode=currentNode.next;
    }
    return matchedNode;
  }
  isEmpty(){
    return this.head===null;
  }
  hasSingleElement(){
    return this.head!==null && this.head===this.tail;
  }
  removeTail(){
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
        if(currentNode.next!==null && currentNode.next===this.tail){
          deletedNode=currentNode.next;
          this.tail=currentNode;
          currentNode.next=currentNode.next.next;
          break;
        }
        currentNode=currentNode.next;
      }
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
    else{
      deletedNode=this.head;
      this.head=this.head.next;
    }
    return deletedNode;
  }
  toString(callback) {
    if(this.head===null)
        return '';
    let linkedListString;
    if(callback){
      linkedListString=`${callback(this.head.value)}`;
      let currentNode=this.head.next;
      while(currentNode!=null){
        linkedListString=`${linkedListString},${callback(currentNode.value)}`;
        currentNode=currentNode.next;
      }
    }
    else{
      linkedListString=`${this.head.value}`;
      let currentNode=this.head.next;
      while(currentNode!=null){
        linkedListString=`${linkedListString},${currentNode.value}`;
        currentNode=currentNode.next;
      }
    }
    
    return linkedListString;
  }
  fromArray(elementArray){
    elementArray.forEach((element)=>{
      this.insertAtEnd(element);
    });
  }
  reverse(){
    if(this.isEmpty()){
      return ;
    }
    else if(this.hasSingleElement()){
      return ;
    }
    else{
      let currentNode=this.head;
      let previousNode=null;
      let nextNode=null;
      while(currentNode!==null){
        nextNode=currentNode.next;
        currentNode.next=previousNode;
        previousNode=currentNode;
        currentNode=nextNode;
      }
      this.tail=this.head;
      this.head=previousNode;
    }
  }
   
} 

