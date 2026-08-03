// 1. ''
// 2. ""
// 3. ``
// 4. String()
// 5. toString()

// let str = "aaaaaaaaaaaa\naaaaaaaaaaa";
// console.log(str);

// let str = "Sa\tlom";
// console.log(str);

// let str = "Algoritm";
// console.log(str[0]);

// let count = 0;
// for (let value of str) {
//     console.log((value));
//     count++
// }
// console.log(count);

// # string metodlari

// 1. length
// let uzunlik = str.length;
// console.log(uzunlik);

// 2.charAt(), at()

// console.log(str.charAt(0));
// console.log(str[0]);
// console.log(str.at(0));
// console.log("=============");
// console.log(str.charAt(-1));
// console.log(str[-1]);
// console.log(str.at(-1));

// 3. charCodeAt()
// console.log(structuredClone.);

// 4. connet()
// let matn1 = "Salom";
// let matn2 = "Alik";
// let matn3 = "nima gap";
// let matn = matn1.connet(" ", matn2, " ", matn3,)

// 5. includes()
// if (str.incl
// udes(i)) {
//     str = str.replaceAll(i, "va");
// } else {
//     console.log("Yo'q, mavjud emas.");
// }

// console.log(str);

// 6. startsWith(), endswith()
let str = "Algoritm and Oxford"
// let s = "Alg";
// let isStart = str.startsWith(s);
// console.log(isStart);
// let e = "rd";
// let isEnd = str.endsWith(e)
// console.log(isEnd);

// 7. search(), indexof(), lastIndexOf()
let isAlpha = str.search("and")
console.log(isAlpha);
console.log(str.indexOf("o"));
console.log(str.lastIndexOf("o"));

// 8. pedstart(), pedend()
let phone = "90 111 22 33"
let newphone = padstart(phone.length + 5, "+998 ")
console.log(newphone);

let name = "90 111 22 33"
let email = padend(name.length + 10, "@gmail.com")
console.log(email);
