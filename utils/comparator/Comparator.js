export default class Comparator{
  constructor(compareFunction){
    if(compareFunction)
      this.compare=compareFunction;
    
    this.compare=this.defaultCompareFunction;
  }
  defaultCompareFunction(a,b){
    let result=null;
    if(a===b)
      result=0;
    else if(a<b)
      result=-1;
    else if(a>b)
      result=1;
    
    return result;
  }
  equal(a,b){
    return this.compare(a,b)===0;
  }
  lessThan(a,b){
    return this.compare(a,b)<0;
  }
  greaterThan(a,b){
    return this.compare(a,b)>0;
  }
  lessThanOrEqual(a,b){
    return this.compare(a,b)<=0;
  }
  greaterThanOrEqual(a,b){
    return this.compare(a,b)>=0;
  }
  reverse(a,b){
    let compareFunction=this.compare;
    this.compare=(a,b)=>compareFunction(b,a);
  }

}