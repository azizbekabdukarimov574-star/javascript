// sqrt - Kvadrat ildiz
// 9 -> 3
// 25 -> 5
// 16 -> 4

let a = Math.sqrt(9);
let b = Math.sqrt(25);
let c = Math.sqrt(16);
let d = Math.sqrt(32);
let f = Math.sqrt(55);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(f);

// cbrt - Kub ildiz
// 27 -> 3
// 512 -> 8

let kub1 = Math.cbrt(1024);
console.log(kub1);

let kub2 = Math.cbrt(512);
console.log(kub2);

let kub3 = Math.cbrt(256);
console.log(kub3);

let kub4 = Math.cbrt(128);
console.log(kub4);

let kub5 = Math.cbrt(64);
console.log(kub5);

// toString() - sonni stringga aylantiradi

let raqam2 = 500;
raqam2 = raqam2.toString();
console.log(raqam2);
console.log(typeof raqam2);

let raqam3 = 100;
raqam3 = raqam3.toString();
console.log(raqam3);
console.log(typeof raqam3);

let raqam4 = 200;
raqam4 = raqam4.toString();
console.log(raqam4);
console.log(typeof raqam4);

let raqam5 = 300;
raqam5 = raqam5.toString();
console.log(raqam5);
console.log(typeof raqam5);

let raqam6 = 400;
raqam6 = raqam6.toString();
console.log(raqam6);
console.log(typeof raqam6);

// toFixed() - kasr sonni belgilangan xonagacha yaxlitlaydi

let kars1 = 100 / 3;
console.log(kars1.toFixed(1));

let kars2 = 31 / 3;
console.log(kars2.toFixed(1));

let kars3 = 100 / 3;
console.log(kars3.toFixed(1));

let kars4 = 601 / 6;
console.log(kars4.toFixed(1));

let kars5 = 401 / 4;
console.log(kars5.toFixed(1));
