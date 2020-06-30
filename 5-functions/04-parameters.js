let greeting = function (name) {
    console.log(`Hello, ${ name}!`);
}

greeting('Becky');


let printMyName = function (fName, lName) {
    let fullName = fName + " "+ lName;
    console.log(`Hello, my name is ${ fullName }.`);
}

printMyName(`Sheena`, `Phillips`);

let calculateBalance = function (debits, credits) {
    //parameter debits =[numbers]
    //parameter credits = [numbers]
    let total = 0;
    for (debit of debits) {
        total-=debit;
    }
    for (credit of credits) {
        total+=credit;
    }
    console.log(total);
}


//             0       2      3
let myDeb = [150.00, 34.00, 23.98]
let myCred = [1000.00, 50.00, 25.00]

calculateBalance(myDeb, myCred)