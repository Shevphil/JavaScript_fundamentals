

let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
}

let person2 = {
    name: 'Nicolas',
    age: 40,
    canVote: true
}

let person3 = {
    name: 'Argyle',
    age: 15,
    canVote: false
}

//let person1 = createPerson('Macy, 24, true');

//function createPerson (name, age, canVote) {
    //let person={
        //name: name
        //age: age
        //canVote: canVote
 //   }
   // return person;
//}


function Person (name, age) {
    this.name = name;
    this.age = age;
    this.canVote = age >=18;

    this.greeting = () =>  `Hello, my name is ${ this.name }`;

    return 'abc'
}
//Instances of a Person object
let person1 = new Person('Macy', 24);
let sseth = new Person('Seth', 54);
let troy = new Person('Troy', 12);

console.log( sseth.greeting() )
console.log(troy.greeting() )

function Array (item1, item2, item3...)
    this.items = {
        0: item1,
        1: item2,
        2: item3
    }
//neew does not work with 'this"- attaches keys to specifically called function
    let myList = [1,2,3];