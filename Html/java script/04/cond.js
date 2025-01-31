//conditions
const age = 2

if (age >= 40) {
    console.log('yes, you can vote ')
}
else if (age <= 40) {
    console.log('you are idiot')
}

else {
    console.log('no, you cant vote')
}

// ternary operators
//if you conditon of yes or not

const age2 = 18

age2 >= 18 ? console.log('yes') : console.log('no')
let string = age2 >= 18 ? 'yes' : 'no'

console.log(string)

// switch statements

const option = 4

switch (option) {
    case 1:
        console.log('Namaste')
        break;
    case 2:
        console.log('Hello')
        break;
    case 3:
        console.log('ayyy')
        break;
    case 4:
        console.log('Ayoooo')
        break;
    default : console.log('invalid option')
}