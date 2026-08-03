let a7 = 1
let a8 = 5;
function f4(a, b) {
    let s = 0;
    for (let i = a; i <= b; i++) if (i > 0) s += i;
    return s;
}
console.log(f4(a7, a8));
let a9 = 1
let a10 = 5;
function f5(a, b) {
    let s = 0;
    for (let i = b; i >= a; i--) s += i;
    return s;
}
console.log(f5(a9, a10));
let a11 = 1
let a12 = 5;
const f6 = function (a, b) {
    let s = 0;
    for (let i = a; i <= b; i++) s += i;
    return s;
}
console.log(f6(a11, a12));
let a13 = 1
let a14 = 5;
const f7 = function (a, b) {
    let c = 0;
    for (let i = a; i <= b; i++) if (i % 2 === 0) c++;
    return c;
}
console.log(f7(a13, a14));
let a15 = 1, a16 = 5;
const f8 = function (a, b) {
    let c = 0;
    for (let i = a; i <= b; i++) if (i % 2 !== 0) c++;
    return c;
}
console.log(f8(a15, a16));
let a21 = 1, a22 = 5;
const f11= function (a, b) {
    let s = 0;
    for (let i = a; i <= b; i++) s += i * i;
    return s;
}  
console.log(f11(a21, a22));
let a23 = 1, a24 = 5;
const f12 = function (a, b) {
    let r = 1;
    for (let i = a; i <= b; i++) r *= i;
    return r;
}
console.log(f12(a23, a24));
let a25 = 1, a26 = 5;
const f13 = function (a, b) {
    let s = 0;
    for (let i = a; i <= b; i++) if (i < 0) s += i;
    return s;
}
console.log(f13(a25, a26));
let a27 = 1, a28 = 5;
const f24 = function (a, b) {
    let s = 0;
    for (let i = b; i >= a; i--) s += i;
    return s;
}
console.log(f24(a27, a28));
let a29 = 1, a30 = 5;
const f25 = (a, b) => {
    let s = 0;
    for (let i = a; i <= b; i++) s += i;
    return s;
}
console.log(f25(a29, a30));
let a31= 1, a32 = 5;
const f26 = (a, b) => {
    let c = 0;
    for (let i = a; i <= b; i++) if (i % 2 === 0) c++;
    return c;
}
console.log(f26(a31, a32));
let a33 = 1, a34 = 5;
const f27 = (a, b) => {
    let c = 0;
    for (let i = a; i <= b; i++) if (i % 2 !== 0) c++;
    return c;
}
console.log(f27(a33, a34));
let a37 = 1, a38 = 5;
const f28 = (a, b) => {
    let s = 0;
    for (let i = a; i <= b; i++) s += i * i;
    return s;
}
console.log(f28(a37, a38));
let a39 = 1, a40 = 5;
const f30 = (a, b) => {
    let m = a;
    for (let i = a; i <= b; i++) if (i > m) m = i;
    return m;
}
console.log(f30(a39, a40));
let a41 = 1, a42 = 5;
const f31 = (a, b) => {
    let r = 1;
    for (let i = a; i <= b; i++) r *= i;
    return r;
}
