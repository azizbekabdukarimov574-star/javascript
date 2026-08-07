// let arr = [4, 2, 5, 1, 7, 3, 10, 8, 9, 20, 6]
// let sortArr = arr.sort()
// let sortArr = arr.sort((a, b) => a - b)
// let sortArr = arr.sort((a, b) => b - a)
// console.log(sortArr);

// let arr = ["Olma", "Uzum", "Nok", "anor"]
// let sortArr = arr.sort((a, b) => a.localeCompare(b))
// let sortArr = arr.sort((a, b) => b.localeCompare(a))
// console.log(sortArr);

// let arr = [1, "Algoritm", { ism: "Eshmat" }, true, null, undefined]
// let arr = [1, "Algoritm", { ism: "Eshmat" }, true]
// let arr = [1, 2, 3, 4, 5 -1]
// let isTruesy = arr.every((value) => value)
// let isTruesy = arr.every((value) => value > 0)
// console.log(isTruesy);

// some bu (\\ - or) operatoriga ohshab ishlaydi.
// qiymatlar ichidan 1 ta qiymat shartga mos tshushsa yakuniy javob true boladi.
// aks holda false boladi.

// let arr = [-1, -2, -3, -4, -5]
// let or = arr.some((value) => value > 0)
// let or = arr.some((value) => value > 0)
// console.log();

// flat let nestedArr = [1, 2, [3, 4 [5, 6 [7, 8]]]]
// let arr = nestedArr.flat(0)
// let arr = nestedArr.flat()
// let arr = nestedArr.flat(infinity)
// console.log(arr);

// flatmap = flat + map - bu returnga qaytarilgan arrayni parchalaydi va
//  1 ta arrayni yaratib beradi.

// let arr = [1, 2, 3, 4, 5];
// let NewArr = arr.map((value) => [value ** 2])
// console.log(NewArr);
// let NewArr = arr.flatmap((value) => [value ** 2])
// console.log(NewArr);

// fill

// 1 [] ✔️
// 2 Array() ✔️
// 3 new Array() ❌

// let arr1 = [3]
// console.log(arr1);
// let arr2 = Array(3)
// let arr = arr2.fill("Algoritm")
// console.log(arr);

// copywithin - arrayning bir qismini copy qilib boshqa qismga joylab beradi
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// [6, 7, 8, 9, 5, 6, 7, 8, 9]
// [1, 2, 3, 4, 5, 1, 2, 3, 4]
// let copyArr = arr.copyWithin(5, 0, 5);
// console.log(copyArr);
