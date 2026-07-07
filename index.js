// function numbers() {
//     let total = 0
//     const number=[23,3,4,5,6,7,8]
//     function sum() {
//         for (const num of number) {
//         total = total + num
        
//     }
//     console.log(total);
//     }
//     return sum
// }

// const calculation = numbers()
// calculation() 

function outer() {
    let count = 0
    function inner() {
        count++
        console.log(count);
    }
    return  inner
}
const counter1 = outer()
const counter2 = outer()
counter1()
counter1()
counter2()
counter1()
counter2()
counter2()