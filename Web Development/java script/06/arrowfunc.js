//array function

// 1. syntax
const sayHello = () => // arrow
{
    console.log('Hey')
}

sayHello()

const add = (a ,b) => a + b // one liner
console.log(add(5,4))


// 2.arguments keyword
const addnumber3 = (...nums) => 
{
console.log(nums)
}
addnumber3(2,3,4,5,4,5)

// 3.hoisting
// you can hoist in arrow function

sayHey()

function sayHey() {
    console.log('Hey there')
}

// 4. This Keyword

const obj = {
    value: 20,
    myFunction: function()
    {
        console.log("value is " + this.value)
    }
}

obj.myFunction()