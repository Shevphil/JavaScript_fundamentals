//FAT ARROW FUNCTION

let fatArrow = () => {
    console.log('I reside in the NEW way of writing functions.')
}

fatArrow();

//Concise body only allows a single statement in the function body;

let conciseBody= () => console.log('I am concise');

conciseBody();


//Block body allows for multiple line statements
let blockBody = () => {
    let y=0;
    y+=4;
    console.log(y);
}

blockBody();