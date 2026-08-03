// .2 cwil - kasr sonni tepaga yahlitlaydi
// 3.floor kasr soni pastga yahlitlaydi
// 4. round - kasr sonni yuqariga yaqin bolsayuqoriga qarab
// pastga yaqin bolsa pastga qarab yahlitlaydi.
// let a = 7.7;
// let c = 7.9;
// let b = 7.4;
// let d = 7.1;
// let e = 7.5;
// console.log(Math.round(a));
// console.log(Math.round(c));
// console.log(Math.round(b));
// console.log(Math.round(d));
// console.log(Math.round(e));

// 5.tranc - kars sonni faqat butun joyini oladi.
// let a = 3.12;
// let b = 3.988;
// console.log(Math.trunc(a));
// console.log(Math.trunc(b));

// 6. random - 0 va 1 orasidagi ihtiyoriy kasr son chiqarib beradi.
// telefon raqam yaratish masalasi.
// +998 99 777 77 77
function getPhone() {
    let arr = [77, 99, 98, 95, 94, 93, 91, 90, 50, 33, 88, 78, 70]
    let code = Math.trunc(Math.random() * 100)
    let a = Math.trunc(Math.random() * 10)
    let b = Math.trunc(Math.random() * 10)
    let c = Math.trunc(Math.random() * 10)
    let d = Math.trunc(Math.random() * 10)
    let e = Math.trunc(Math.random() * 10)
    let f = Math.trunc(Math.random() * 10)
    let g = Math.trunc(Math.random() * 10)
    if (code < 10 || !arr.includes(code))return getPhone();
    return `+998 ${code} ${a}${b}${c} ${d}${e} ${f}${g}`
}   
console.log(getPhone());
