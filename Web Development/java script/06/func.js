//functions


function sayHello()
{
    console.log('hey shanu')
}

sayHello() // calling the functions

//              arguements
function add(a, b)
{
console.log(a+b)
}
// parameters
add(6,15)// we can reuse it 
add(7 , 55) 


//good practice
function multiply(a,b)
{
    let ans = a * b
    return ans
}

let a = multiply(5,5)
console.log('your result is  ', a)

//ulimate arguements accept
function addnumbers()
{
 let ans = 0
 for(let i = 0; i < arguments.length; i++)
 {
 ans = ans + arguments[i]   
 }
 return ans
}

let result = addnumbers(10,12,13,14,15,16)
console.log(result)

//spread operators
function adddnumberv2(...numbers)
{
    let ans = 0
    for(let i = 0; i < numbers.length; i++)
     {
        ans = ans + numbers[i]

     }
     return ans
    }

let result1 =  adddnumberv2(2,3,4,5,5,3,32,3)
console.log(result1)

