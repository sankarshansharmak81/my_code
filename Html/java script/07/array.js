const students = ['Piysuh', 'lola', 'hehheeh']
// students [0] = 'koka'
// //heterogenous arrays in js as you can diff type pf date elements
// const arr = [1,true,'lomu', '❤️']
// arr.push({name: 'shanu'})
// arr.pop()
// students.push('choka')
// students.reverse()
// console.log(students)
// console.log(arr)

// function print(n)
// {
//     console.log(n)
// }
// or
// students.forEach(val => console.log(val + 'sharma'))

const num = [1, 2, 3, 4, 5, 6, 7]

// function double(n)
// {
//     return n * 2
// }
// let newNum = num.map(double)

// console.log(newNum)
// console.log(num)

// let a = num.find(num => num == 4)
// console.log(a)

// let b = num.includes(3)

// console.log(b)
 let a = num.filter(num => num % 2 != 0)

 console.log(a)

 let b = num.slice(1, 5)
 console.log(b)

 let c = num.splice(1 , 4)
 console.log(c) 
 console.log(num)