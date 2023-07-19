// form array in different type 

// array literal 
var myarray = ['jiya','riya','piya','siya'];
console.log(myarray)

//// directly array using new keyword

var emp = new Array();
emp[0]='jiya',
emp[1]='piya',
emp[2]='tiya',
emp[3]='dipti'

console.log(emp);

//// array constructor

var cake = new Array("chocolate","strawberry","red velvet","pineapple","fruit");
console.log(cake);

//property
console.log(cake.length,"-- length of cake array");
console.log(cake[2],"--access using index");

// inbuilt method:::
myarray.push("cake");
emp.push("Push");
cake.push("cake")// add on last element

console.log(myarray);
console.log(emp);
console.log(cake);

cake.pop(); /// remove last element
console.log(cake);

console.log(cake.shift()) // return first element 

myarray.unshift("add using unshift") // return array after adding in first position
console.log(myarray)


const merged = emp.concat(cake); // return new merged array
console.log(merged,"-----");

merged.sort();
console.log(merged)  /// return array in sorted manner

const result = Array.isArray(emp); // return true and false 
console.log(result);

const indexIs = emp.indexOf("dipti"); // give index of first find 
console.log(indexIs);

const num = [10,20,30,40,50,60,70,80,90];

num.forEach((element)=>{
    console.log(element,"****");
})

num.map((ele)=>{
    console.log(ele);
})

delete num[0] // delete and give empty in array--

console.log(num);

const ne_num = [[1,2],[3,4],[5,6],[7,8]];

const MY_new = ne_num.flat(); /// merged nested array---
console.log(MY_new)


num.splice(2,0,"LIK","FGH") 

// first parameter - position where element add
// second parameter - how many elements should be removed
// rest added 

num.slice(3) // first three element removed ----
num.slice(1,3) // start parameter and before second parameter removed