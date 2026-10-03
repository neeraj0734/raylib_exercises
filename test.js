// const person = {
//     name: "Ansh",
//     age: 21,
//     city: "BNK",
// };

const { YELLOW, ColorAlpha } = require("raylib");

// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

// const person = {
//     name: "Asha",
//     age: 20,
// };
// person.age = 21;
// console.log(person);
// person.country = "India";
// console.log(person);

// const book = {
//     title: "The Hobbit",
//     pages: 310,
// };
// const prop = "title";
// console.log(book[prop]);
// console.log(book.title);
// console.log(book.pages);

// const person = {
//     name: "Asha",
// };

// console.log(person.name);
// console.log(person["name"]);

// const person = {
//     name: "Asha",
//     age: 20,
// };

// function birthday(person) {
//     return (person = {
//         name: person.name,
//         age: person.age + 1,
//     });
// }

// const olderPerson = birthday(person);

// console.log("Person age: ", person.age);
// console.log("olderPerson age: ", olderPerson.age);

// const person = {
//     name: "Asha",
// };

// function test() {
//     const person = {
//         name: "Ravi",
//     };

//     console.log(person.name);
// }

// test();

// console.log(person.name);

// const country = {
//     India: "New Delhi",
//     ShriLanka: "Shri jayvardhanpura kotte",
//     China: "Beijing",
//     Japan: "Tokyo",
//     France: "Peris",
// };

// function capitalOf(countryName) {
//     return country[countryName];
// }
// const c = "Japan";

// console.log(capitalOf(c));

// const months = {
//     January: 1,
//     Febuary: 2,
//     March: 3,
//     April: 4,
//     May: 5,
//     June: 6,
//     July: 7,
//     August: 8,
//     September: 9,
//     Octber: 10,
//     November: 11,
//     December: 12,
// };

// const weekends = {
//     Monday: 1,
//     Tuesday: 2,
//     Wednesday: 3,
//     Thursday: 4,
//     Friday: 5,
//     Saturday: 6,
//     Sunday: 7,
// };

// const country = {
//     Afghanistan: "Asia",
//     Algeria: "Europe",
//     Angola: "Africa",
//     Aruba: "North America",
// };

// const colour = {
//     Red: 700,
//     Orange: 610,
//     Yellow: 590,
//     Green: 520,
//     Blue: 460,
// };

// const language = {
//     Hindi: "Ram Ram",
//     Urdu: "Valukuslam",
//     Japanese: "Konnichiva",
// };

// function getContinentOfCountry(countryName) {
//     return country[countryName];
// }
// function getColourWaveLength(colr) {
//     return colour[colr];
// }
// function getMonthNumber(month) {
//     return months[month];
// }
// function getLanguageGreeting(lang) {
//     return language[lang];
// }
// function getNumberOfDay(day) {
//     return weekends[day];
// }

// console.log(getColourWaveLength("Red"));
// console.log(getContinentOfCountry("Aruba"));
// console.log(getMonthNumber("January"));
// console.log(getLanguageGreeting("Hindi"));
// console.log(getNumberOfDay("Monday"));

let a = {
    value: 10,
};

let b = a;

function change(x) {
    x.value = 20;

    x = {
        value: 30,
    };

    x.value = 40;

    return x;
}

const c = change(b);

console.log(a.value);
console.log(b.value);
console.log(c.value);
