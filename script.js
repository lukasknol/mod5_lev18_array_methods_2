// A
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }
];

const findSpiderMan = function (superheroes) {
    return superheroes.find(function (superhero) {
        return superhero.name === "Spiderman";
    });
};
console.log(findSpiderMan(superheroes))
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


// B
const doubleArrayValues = function (array) {
    return array.map(number => {
        return number + number;
    });
};

console.log(doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]


// C
const containsNumberBiggerThan10 = function (array) {
    return array.some(number => {
        return number > 10;
    });
};

console.log("Larger than 10:", containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
);
// result should be true
console.log("Larger than 10:", containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 8])
);
// result should be false


// D
function isItalyInTheGreat7(array) {
    return array.includes("Italy");
};

console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'])
);
// result should be true


// E
const tenfold = function (array) {
    let newArray = [];
    array.forEach(number => {
        newArray.push(number * 10);
    });
    return newArray;
};
console.log(tenfold([1, 4, 3, 6, 9, 7, 11])
);
// result should be [10, 40, 30, 60, 90, 70, 110]


// F
const isBelow100 = function (array) {
    return array.every(number => {
        return number < 100;
    });
};
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);
// result should be: false

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 55, 11, 77, 84, 98])
);
// result should be: true


// G
const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const bigSum = function (array) {
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
};

console.log(bigSum(numbers)
);
// result should be 1118