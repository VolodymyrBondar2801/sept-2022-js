// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = ['footbal', 123, 'tenis', 'golf', 'basketball', '[qwerty]', true, false, 'cat', 'dog']
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])
console.log(arr.length)

let innerArray = arr[5]
console.log(innerArray)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title,pageCount, genre.

let book_one = {
    title: 'django',
    pageCount: 260,
    genre: 'the comic book'}
console.log(book_one)

let book_two = {
    title: 'bones',
    pageCount: 235,
    genre:  'detective'}
console.log(book_two)

let book_three = {
    title: 'Harry Potter',
    pageCount: 450,
    genre: 'fantasy'
}
console.log(book_three)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age


let book_1 = {
    title: 'django',
    pageCount: 260,
    genre: 'the comic book',
    author:[{
        name:'quentin tarantino',
        age: 59
    }]
}
console.log(book_1)
console.log(book_1.author)
// ============================================================================
let book_2 = {
    title: 'bones',
    pageCount: 235,
    genre:  'detective',
    author:[{
        name:'vasya hryasya',
        age: 29
    }]
}
console.log(book_2)
console.log(book_2.author)
//=============================================================================
let book_3 = {
    title: 'Harry Potter',
    pageCount: 450,
    genre: 'fantasy',
    author: [{
        name:'harryk',
        age:20
    }]
}
console.log(book_3)
console.log(book_3.author)


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {id:1, name:'misha', username:'miha', password:12},
    {id:2, name:'oleksandr', username:'sanya', password:123},
    {id:3, name:'oleg', username:'alezhka', password:1234},
    {id:4, name:'irina', username:'irka', password:12345},
    {id:5, name:'klavdiia', username:'klava', password:123456},
    {id:6, name:'marusya', username:'mashka', password:456789},
    {id:7, name:'igor', username:'igorek', password:654},
    {id:8, name:'frenk', username:'frenki', password:321},
    {id:9, name:'jonathan', username:'jony', password:654321},
    {id:10, name:'emily', username:'emi', password:123987}
]
console.log(users);
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)


// let user0 = users[0];
// console.log(user0.password)
//
// user1 = users[1]
// console.log(user1.password)
//
// user2 = users[2]
// console.log(user2.password)
