import TrieNode from './TrieNode';

export default class Trie{
  constructor(){
    this.head=new TrieNode('*');;
  }
  addWord(word){
    let currentNode=this.head;
    word.split('').forEach((character,i)=>{
      let isWordCompleted=false;
      if(i===word.length-1)
        isWordCompleted=true;
      currentNode=currentNode.addChild(character,isWordCompleted);
    });
  }
  doesWordExist(word){
    let currentNode=this.head;
    let isWordPresent=true;
    for(let i=0;i<word.length;i++){
      let character=word.substring(i,i+1);
    
      if(!currentNode.hasChild(character)){
        isWordPresent=false;
        break;
      }
      let childNode=currentNode.getChild(character);
      if(i===word.length-1 && childNode.isWordComplete===false){
        isWordPresent=false;
        break;
      }
      currentNode=currentNode.getChild(character);
    }
    return isWordPresent;
  }
  suggestNextCharacters(word){
    let currentNode=this.head;
    let suggestedCharacters=[];
    for(let i=0;i<word.length;i++){
      let character=word.substring(i,i+1);
      if(currentNode.hasChild(character)){
        if(i===word.length-1){
          let childNode=currentNode.getChild(character);
          suggestedCharacters=[...childNode.suggestChildren()];
        }
        currentNode=currentNode.getChild(character); 
      }
      else{
        suggestedCharacters=null;
        break;
      }
    }
    return suggestedCharacters;
  }
  deleteWord(word){
    let currentNode=this.head;
    let result=[];
    if(!this.doesWordExist(word))
      return ;

    for(let i=0;i<word.length;i++){
      let character=word.substring(i,i+1);
      if(!currentNode.hasChild(character)){
        break;
      }
      let childNode=currentNode.getChild(character);
      if(i===word.length-1){
        result.push(currentNode);
        result.push(childNode);
        break;
      }
      result.push(currentNode);
      currentNode=currentNode.getChild(character);
    }
    result[result.length-1].isWordComplete=false;
    
  }  
}