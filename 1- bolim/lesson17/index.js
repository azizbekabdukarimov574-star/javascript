// let obj = {
//     ism:"Ali",
//     familiya:"Valiyev",
//     yosh:15,
//     tel_raqam:"+998 99 111 22 33",
//     manzil:"Namangan shahar"
// }


// let newobj = Object.assign({}, obj)
// obj.ism = "Salim"
// obj.familiya = "alimov"
// obj.yosh = 15
// obj.tel_raqam = "+998 99 333 22 11"
// obj.manzil = "Namangan shahar"

// console.log(obj)


// let products = {
//     pen: {
//         color: "black",
//         price: 2000,
//     },
//     pencil: {
//         color: "blue",
//   price: 5000,
//     },      
//     book: {
//         page_count: 200,
//         price: 50000,
//     },
// };
// let summa = 0
// for (let key in products) {
//     summa += products[key].price;
// }
// console.log(summa)    





// let products = {
//     pen: {
//         color: "black",
//         price: 2000,
//     },
//     pencil: {
//         color: "blue",
//         price: 5000,
//     },
//     book: {
//         page_count: 200,
//         price: 50000,
//     },
//     sumka: {
//         color: "red",
//         price: 100000,
//     },
//     laptop: {
//         name: "Macbook",
//         price: 10000000,
//     },
// }



// for (let key in products) {
//     if (products[key].price >= 50000) {
//         // console.log(products[key]);

//         summa += products[key].price;
//     }
// }
// console.log(summa);



// let parent = {
//     ism: "Eshmat",
//     yosh: 50,
//     child: {
//         ism: "toshmat",
//         yosh: 20,
//     }
// }
// let newparent = structuredClone(parent)

// parent.ism = "Eshmat"
// parent.yosh = 50,
// parent.child.ism = "Gulmat"
// parent.child.yosh = 25

// console.log( newparent);
// console.log(parent);


let obj = {
    name: "Algoritm",
    status: "IT Center",
    year:2016,
    filial: {
        name:"Algoritm chust filial",
        status:"IT Center",
        year:2026,
    },
};

let {
    name, 
    status,
    year,
    filial: {name: chustfilial, status: statuschust, year: yearchust },
} = obj

console.log(name); 

