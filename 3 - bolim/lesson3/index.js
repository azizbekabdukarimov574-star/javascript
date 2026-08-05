// let arr = ["Olma", "Anor", "Uzum", "Nok"]
// let len = arr.find((value, index, a) => {
//     if (value === "Uzum") return value;
// })
// console.log(length.length);

// let arr = [5, 2, 7, 9, 5, 10, 1, 4];

// let katta = Math.max(...arr)
// let max = arr.findIndex((value, index, a) => {
//   if (katta === value) return true
// })
// console.log(max);

// let arr = ["Olma", "Anor", "Shaftoli", "Uzum", "Nok"]
// let len = 0;
// let v = "";
// arr.forEach((value, index, a) => {
//     if (value.length > len) {
//         len = value.length;
//         v = value
//     }
// })
// console.log(v);

let arr = ["scratch", "python", "Html", "Css", "scratch", "JS", "react JS"]
let i = arr.findLastIndex((value, index, a) => {
    return "scratch" === value;
});
console.log(i);
