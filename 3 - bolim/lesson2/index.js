// let arr1 = [3, 7, 8, 12, 15, 20, 9];
// let newArr1 = arr1.find(num => num > 10 && num % 2 === 0);
// console.log(newArr1);

// let arr2 = [10, 15, 21, 30, 45, 9];
// let newArr2 = arr2.find(num => num % 3 === 0 && num % 5 === 0 && num > 15);
// console.log(newArr2); 

// let arr3 = [5, 8, 12, -3, 7, -9, 2];
// let newArr3 = arr3.findIndex(num => num < 0);
// console.log(newArr3);

// let arr4 = [10, 18, 16, 22, 30, 25];
// let newArr4 = arr4.findIndex(num => Number.isInteger(Math.sqrt(num)));
// console.log(newArr4); 

// let arr5 = [12, 60, 9, 45, 100, 33, 80];
// let newArr5 = arr5.findLastIndex(num => num < 50 && num % 3 === 0);
// console.log(newArr5);

// wideo dars

// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.map ((value, index, a) => value * 2)
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newArr = arr.filter((value, index, a) => value % 2 === 1)
// console.log(newArr);

// let arr = ["olma", "Nok", "Uzum", "Shaftoli"]
// let sum = 0
// arr.forEach((value, index, a) => (sum += value.length))
// console.log(sum);

// let arr = ["olma", "Nok", "Uzum", "Shaftoli"]
// let newArr = arr.filter((value, index, a) => value.length <= 4)
// console.log(newArr);

// let arr = ["olma", "Nok", "Uzum", "Shaftoli"]
// let newArr = arr.map((value, index, a) => {
// return value.length+" "+value
// }) 
// console.log(newArr);

// let arr = [1, 20, 14, 7, 2, 5, 18, 17];
// let newArr = arr.filter
//  ((value, index, a) => value >= 10 && value < 100)
//  console.log(newArr);
 
// let arr = ["olma", "Nok", "Uzum", "Shaftoli"]
// let newArr = arr.map((value, index, a) => {
//   return `*${value.slice(1)}`
// })
// console.log(newArr);

// find() - array ichidagi  qiymat qidiradi. topsa qiymatni qaytaradi.
// topa olmasa undefined qaytaradi

// let arr = ["Olma", "Uzum", "Nok", "Olcha", "Gilos", "Nok"]
// let newValue = arr.find((value, index, a) => {
// if (value === "Apelsin") return value;
// })
// console.log(newValue);

// findindex()

// let arr = ["Olma", "Uzum", "Nok", "Olcha", "Gilos", "Nok"]
// arr.findIndex((value, index, a) => value === "Olma")

// let i = arr.findLastIndex((value, index, a) => {
//     if (value === "Nok") return index
// })

// console.log(i);
