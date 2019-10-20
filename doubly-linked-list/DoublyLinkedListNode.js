export default class DoublyLinkedListNode{
  constructor(value,next=null,previous=null){
    this.value=value;
    this.previous=previous;
    this.next=next;
  }
  toString(callback){
    let resultString;
    if (this.head===null){
      resultString=null;
    }
    else if(callback){
      resultString=callback(this.value);
    }
    else{
      resultString=`${this.value}`;
    }
    return resultString;
  }
}