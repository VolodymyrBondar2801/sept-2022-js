// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'hello world';
// console.log(str.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = 'dirty string';
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.


// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

//     let str = 'Ревуть воли як ясла повні';
// str.split(' ');
// console.log(strings);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// const arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let strings = arr.map(value => value.toString());
// console.log(strings);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11, 21, 3];
// const sortNums = (direction, arr) => {
//     if (direction === 'asccending') {
//         arr.sort((a, b) => a - b);
//     }else if(direction==='descending'){
//         arr.sort((a, b) => b - a);
//     }
//     return aarr;
//     console.log(sortNums('as', nums));
//     console.log(sortNums('des', nums));
// };

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// // -- відсортувати його за спаданням за monthDuration
//
// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// coursesAndDurationArray.filter (value => value.monthDuration>5)
// console.log(filter);


// описати колоду карт
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// const suits = [
//     {cardSuits: 'heart', color: 'red'},
//     {cardSuits: 'diamond', color: 'red'},
//     {cardSuits: 'spade', color: 'black'},
//     {cardSuits: 'clubs', color: 'black'},
// ]
// const cardNames = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
// const deck = [];
// for (const suit of suits) {
//     for (const cardName of cardNames) {
//         const card = {
//             cardSuit: suit.cardSuits
//             value:cardName,
//             color:suit.color
//         }
//         deck.push(card);
//     }
// }
// console.log(deck);

// - знайти піковий туз

// deck.filter(value => value.cardSuit === 'spade' && value.value === 'ace');
// console.log(filter);


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }