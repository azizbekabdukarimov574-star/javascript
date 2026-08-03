// let toq_yigindi = 0
// let juft_yigindi = 0

// for (let raqam = 1; raqam <= 10; raqam++) {
//     if (raqam % 2 === 1) {
//         toq_yigindi += raqam;
//     } else {
//         juft_yigindi += raqam;
//     }
// }


// console.log(toq_yigindi);
// console.log(toq_yigindi);
// console.log("============================================");
// let toq_yigindi2 = 0
// let juft_yigindi2 = 0

// let raqam2 = 1
// while (raqam2 <= 10) {
//     for (let raqam2 = 1; raqam2 <= 10; raqam2++) {
//         if (raqam2 % 2 === 1) {
//             toq_yigindi2 += raqam2;
//         } else {
//             juft_yigindi2 += raqam2;
//         }
//     }

//     console.log(toq_yigindi2);
//     console.log(juft_yigindi2);


// let obj = {
//     ID:1,
//     ism: "Ali",
//     familiya:"Valiyev",
//     yosh:20,
//     phone_price:1000,
// }
// const xisobla = (obj) => {
//     for (let key in obj) {
//         if (key === "phone_price") {
//             obj[key] = [key] - (obj[key] * 15) / 100;
//         }
//     }
//     return obj;
// }

// console.log(xisobla(obj));

// console.log("============================================");

// let obj2 = {
//     ID:1,
//     ism: "Ali",
//     familiya:"Valiyev",
//     yosh:20,
//     phone_price:1000,
// }
// function xisobla2 (obj){
//     for (let key in obj) {
//         if (key === "phone_price") {
//             obj[key] = [key] - (obj[key] * 15) / 100;
//         }
//     }
//     return obj;
// }

// console.log(xisobla2(obj2));

let obj = {
    id: 1,
    ism: "ALi",
    familiya: "Valiyev",
    child: {
        id: 2,
        ism: "Vali",
        familiya: "Aliyev",
    }
}
const {
    id,
    ism,
    familiya,
    child: { id: id2, ism: ism2, familiya: familiya2 },
} = obj;
console.log(id, ism, familiya);
console.log(id2, ism2, familiya2);
