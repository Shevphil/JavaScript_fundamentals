//Create a function that, when invoked, lists out the numbers between 1-10;

let printNumbers = function () {
    for (let i=2;i<10;i++) {
        console.log(i);
    }
}
printNumbers();

console.log(printNumbers);

//IIFE
(function () {console.log('Why is this working')}) ();