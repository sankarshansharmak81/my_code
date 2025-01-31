function add(a)
{
    return function(b)
    {
        return function(c){
            return a + b + c
        }
    }
}



// function sendAutoEmail(to)
// {
//   return function(subject){
//     return function(body)
//     {
//         console.log(`Sending email to ${to} with subject ${subject}: ${body} `)
//     }
//   }
// }

const sendAutoEmail = (to) => (subject) => (body) => `Sending email to ${to} with subject ${subject}: ${body} `

let step1 = sendAutoEmail("piyusgarg@gmail.com")
let step2 = step1("New Order Confirmation")

console.log(step2("hey Piyush ,Here is something for you"))
console.log(add(2)(3)(5))