// high order functions and callback

function addnum4 (a, b, callback)
{
    let ans = a + b
    callback(ans)

    return ()=> console.log(ans)
}

// addnum4(2,4 , function(val)
// {
//     console.log(val)
// })

let final = addnum4(2,4 , () => {})
final()