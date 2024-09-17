/*============Assingment Number Two --> START=============*/

// 1.Write a function named calculateDifference that takes two arguments and returns
//  the difference between the first and second argument.

const calculateDifference = (a, b) => {
    return a - b;
};

console.log(calculateDifference(8, 4));
console.log(calculateDifference(6, 3));


// 2.Write a function named isOdd that takes one argument and returns true
// if the number is odd, and false if it is not. 

function isOdd(number) {
    return number % 2 !== 0;
}
console.log(isOdd(7));
console.log(isOdd(8));



// 3.Write a function named findMin that takes an array of 
// numbers and returns the smallest number in the array.

let numbers = [20, 25, 15, 34, 1, 5, 10]
const findMin = Math.min(...numbers)

console.log(findMin)


// 4.Write a function named filterEvenNumbers that takes an array of 
// numbers and returns a new array containing only the even numbers.

let number = [14, 33, 45, 75, 70, 20];

let evenNumbers = number.filter(function (element) {
    return element % 2 === 0;
});

console.log(`Even numbers in an array are: ${evenNumbers}`);


// 5) Write a function named sortArrayDescending that takes an array of 
// numbers and returns a new array sorted in descending order.

const points = [40, 100, 1, 75, 25, 15];

const sortArrayDescending = points.sort(function (a, b) { return b - a });

console.log(sortArrayDescending)


// 6) Write a function named lowercaseFirstLetter that takes a string 
// and returns the same string with the first letter lowercased.

function Firstword(str) {
    return str[0].toLowerCase() + str.slice(1);
}

console.log(Firstword('Hello'));

// 7) Write a function named countVowels that takes a string and returns the number of vowels 
// (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string

function countVowels(sentance) {
    const vowles = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let counter = 0;
    const letters = Array.from(sentance);
    letters.forEach(function (value, index, array) {
        if (vowles.includes(value)) {
            counter++;
        }
    });

    return counter;
}

console.log(
    countVowels("Hey. iam a  nayon, full stack developer")
);

console.log(countVowels("Assigment number Two"));

// 8) Write a function named findAverage that takes an array of 
// numbers and returns the average of all elements.

let array = [10, 13, 18, 22, 16, 30, 24];

let sum = array.reduce((acc, curr) => acc + curr, 0);

let average = sum / array.length;

console.log("Average: " + average);


/*============Assingment Number Two --> END=============*/