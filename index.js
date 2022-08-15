// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
    
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     console.log(gifts);
// }

function writeCards(array, eventName) {
    let newArray = [...array];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = `Thank you, ${array[i]}, for the wonderful ${eventName} gift!`;
    }
    return newArray;
}

function countDown(integer) {
while (integer >= 0) {
    console.log(integer);
    integer--;
    }
}

// writeCards(["Charlie", "Samip", "Ali"], "birthday");

// wrapGifts(gifts);