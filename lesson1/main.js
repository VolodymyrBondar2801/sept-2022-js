"use strict"

// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let a = 'hello'
console.log('hello')

let b = 'owu'
console.log(b);

let c = 'com'
console.log(c);

let d = 'ua'
console.log(d);

let e = '1'
console.log(e)

let f = '10'
console.log(f);

let g = '-999'
console.log(g);

let h = '123'
console.log(h);

const PI = 3.14
console.log(PI);

const X = 2.7
console.log(X);

let i = 16
console.log(i)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
// EXAMPLE1

let firstname = 'Volodymyr'

let middlename = 'Anatoliyovych'

let lastname = 'Bondar'

let user = firstname + ' ' + middlename + ' ' + lastname
console.log(user);

// EXAMPLE2

let user2 = (`${firstname} ${middlename} ${lastname}`)
console.log(user2);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;

let o = 100
console.log (typeof o)

let p = `100`
console.log(typeof p)

let l = true
console.log(typeof l)

