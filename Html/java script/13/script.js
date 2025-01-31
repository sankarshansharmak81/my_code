function add(...args) {
    return args[0] + args[1]
}
function sqaure(val) {
    return val * val
}

function multiply(args)
{
    return args[0] * args[1]
}


function composeTwoFunc(fn1, fn2) {
    return function (a, b) {
        return fn2(fn1(a, b))
    }
}

function compose(...fns) {
    return function (...value) {
      return  fns.reduce((a, b) => b(a), value)
    }
}
const composeAll = (...fns) => (...val) => fns.reduce((a, b) => b(a), val)



const c2f = (fn1, fn2) => (a, b) => fn2(fn1(a, b))

const task = composeAll(multiply, sqaure)
console.log(task(2, 3))