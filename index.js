const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// function totalBatteries(arr){
//     let sum = arr.reduce((total, element) => total + element)
//     console.log(`answer: ${sum}`)
//     return sum
// }

let totalBatteries = batteryBatches.reduce((total, element) => total + element)
console.log(totalBatteries) 