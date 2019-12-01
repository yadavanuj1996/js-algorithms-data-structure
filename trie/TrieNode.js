import HashTable from '../hash-table/HashTable';

export default class TrieNode{
  constructor(character,isWordComplete=false){
    this.character=character;
    this.isWordComplete=isWordComplete;
    this.children=new HashTable();
    return this;
  }
  addChild(character,isWordComplete=false){
    if(!this.children.has(character)){
      this.children.set(character,new TrieNode(character,isWordComplete));
    }
    let childNode=this.children.get(character);
       /**
     * We have used this.isWordComplete to check of it already 
     * has a word complete if false then check present
     * isWordComplete as the sample ex provided if carpet existe and
     * car is entered  later as complete work 
     * 
     */  
    childNode.isWordComplete=childNode.isWordComplete || isWordComplete;
    return childNode;
  }
  getChild(character){
    return this.children.get(character);
  }
  suggestChildren() {
    return [...this.children.getKeys()];
  }
  hasChild(character){
    return this.children.has(character);
  }
  // check whether trie node has one or more than one children
  hasChildren(){
    return this.children.getKeys().length>0;
  }
  removeChild(character){
    let childNode=this.getChild(character);
    if(childNode && !childNode.hasChildren() && !childNode.isWordComplete)
      this.children.delete(character);

    return this;  
  }
  toString() {
    let childrenAsString = this.suggestChildren().toString();
    childrenAsString = childrenAsString ? `:${childrenAsString}` : '';
    const isCompleteString = this.isWordComplete ? '*' : '';

    return `${this.character}${isCompleteString}${childrenAsString}`;
  }
}