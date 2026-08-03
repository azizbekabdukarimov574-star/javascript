let str1 = ["Ali", "Vali", "Sami", "Olim"];
str1.forEach((value, index, a) => {
    console.log(`${str3 + 1}. ${str2}`);
});

let str3 = ["olma", "anor", "banan"];
str3.forEach((str3) => {
    console.log(str3.toUpperCase());
});

let str4 = [15, 18, 20, 25];
let str5 = str4.map(str3 => str3 + 1);
console.log(str5);

let str6 = ["Ali", "Vali", "Sami"];
let str7 = str6.map(str3 => str3 + "bek");
console.log(str7);

let str8 = [12, 18, 25, 16, 30];
let str9 = str8.filter(str3 => str3 >= 18);
console.log(str9);

let str10 = [-5, 0, 7, -2, 10];
let str11 = str10.filter(str3 => str3 >= 0);
console.log(str11);