// let obj = {
//     model: "GM",
//     name: "Malibu",
//     color: "black",
//     price: "20000",
// }

// console.log("=======1-SAVOL=============");
// 

// function arzonlashdi(obj){
//     for(let key in obj) {
//         if (key === "price") obj [key] = obj[key] - (obj[key] * 15) / 100
//     }
//     return obj;
// }
// console.log(arzonlashdi(obj));

// console.log("=======2-SAVOL===========");
// let obj = {
//     name: "Coca cola",
//     Width: "2l",
//     oldprice: 15000,
//     newprice: 18000,
// }

// for (let key in obj) {
//     if (key === "oldprice") {
//         let qqs = (obj.newprice * 100) / obj[key] - 100;
//         console.log(qqs);
//     }
// }
// console.log("=======2.2-SAVOL===========");

let obj = {
    name: "macbook",
    chip: "M4",
    oldprice: 900,
    newprice:800,
}

for (let key in obj) {
    if (key === "oldprice") {
        let qqs = (obj.newprice * 100) / obj[key] - 100;
        console.log(qqs);
    }
}
// console.log("=======3-SAVOL===========");


