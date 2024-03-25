// Student Name : Uzma Azam
// Registration no : 00330608
// Day : Tuesday (9:am)
// Class Assignment _ 3
// Obects, Nested Obects and Arrays of OBjects
// Task 1 _ Objects
var regularStudent = {
    Name: "Miral",
    Age: 18,
    Grade: "A",
    Sport: "Football",
    Honors: true,
};
console.log(regularStudent);
// Conditional Statement "if, else, if-else";
var temperature = 25;
var isRaining = true;
if (temperature > 30) {
    if (isRaining) {
        console.log("It's hot and raining outside!");
    }
    else {
        console.log("It's hot outside!");
    }
}
else if (temperature > 20) {
    if (isRaining) {
        console.log("It's warm and raining outside.");
    }
    else {
        console.log("It's warm outside.");
    }
}
else {
    if (isRaining) {
        console.log("It's cold and raining outside.");
    }
    else {
        console.log("It's cold outside.");
    }
}
// Task 2 _ Nested Objects
var book = {
    title: "The Forty Rules of Love",
    author: "Elif Shafak",
    genre: "Historical Fiction",
    details: {
        publisher: "Penguin Books",
        yearPublished: "March 2009",
        rating: {
            goodBooks: 4.8,
            amazon: 4.5,
        }
    }
};
console.log(book);
// Task 3 _ Arrays of Object
var books = [
    { title: "The Forty Rules of Love", author: "Elif Shafak", year: 2009 },
    { title: "Ten Thousand Doors of January", author: "Alix E. Harrow", year: 2019 },
    { title: "Think and Rich Grow", author: "Napoleon Hill", year: 1937 }
];
console.log(books);
var Countries = [
    { name: "Pakistan", nationalLanguage: "Urdu", capital: "Islamabad" },
    { name: "Bangladesh", nationalLanguage: "Bengali", capital: "Dhaka" },
    { name: "Saudi Arabia", nationalLanguage: "Arabic", capital: "Riyadh" },
];
console.log(Countries);
