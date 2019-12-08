/*
	Coded in Node.js env
	This solution is for printing all the permutaions of a given string 
	Note: This will print all the permutations including non-distinct ones 
	ex:- abc will print
		abc,acb,bac,bca,cab,cba
	    aab
		aab,aba,aab,aba,baa,baa
 
		
*/

process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here


let swap=(str,index1,index2)=>{
    let stringArray=str.split('');
    let temp=stringArray[index1];
    stringArray[index1]=stringArray[index2];
    stringArray[index2]=temp;
    return stringArray.join('');
};

let permute=(str,l,r)=>{
    if(l===r){
        
        console.log(str);
        return;
    }
    for(let i=l;i<=r;i++){
        str=swap(str,l,i);
        permute(str,(l+1),r);
        str=swap(str,l,i); 
    }
};
let inputString="abc";
permute(inputString,0,inputString.length-1);
