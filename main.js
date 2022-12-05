///////////////////////lab1////////////////

// function num(arr){
//     var sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// let result = num([1,2,3]);
// console.log(result)

//////////////////lab2//////////////////

// let rev = 0;
// let num = prompt("enter number");

// rev = Number(String(num).split('').reverse().join(''));
// console.log(rev);

////////////////lab3////////////

// let rev = 0;
// var inp = prompt("enter number");
// rev = Number(String(inp).split('').reverse().join(''));

// if(rev == inp){
//     console.log("true")
// }else{
//     console.log("false")
// }

///////////////lab4////////////


///////////////lab5////////////////

// let n = prompt("enter number");
// let list = prompt("enter list");
// let arr=[];
// for (let i = 0; i < list.length; i++) {
//     arr[i]= list[i];
// }
// arr.splice(n,1)
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

/////////////////lab6/////////////

// var str = 'itiaswan';
// var substring = str.substring(0, 2);
// var slice = str.slice(-2);
// console.log(str);
// console.log(substring +slice);

///////////////////lab7///////////
let str = prompt("input");
let z = 0;
while (str[z] === 'z') {
z++;
}
let o = z;
while (str[o] === 'o') {
    o++;
}
console.log(z * 2 === o - z ? "yes" : "no");
