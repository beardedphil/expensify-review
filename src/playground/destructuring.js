// Object Destructuring

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temperature: 92
//     }
// };
//
// const {name: firstName = 'Anonymous', age} = person;
//
// console.log(`${firstName} is ${age}.`);
//
// const {city, temperature: temp} = person.location;
//
// if (city && typeof(temp) === 'number') {
//     console.log(`It's ${temp} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const { name: publisherName = "Self-Published" } = book.publisher;
//
// console.log(publisherName);

// Array destructuring

// const address = [
//     '1299 S. Juniper Street',
//     'Philadelphia',
//     'Pennsylvania',
//     '19147'
// ];
//
// const [, city, state = 'Missouri'] = address;
//
// console.log(`You are in ${city}, ${state}`);

const menu = [
    'Coffee (iced)',
    '$3.00',
    '$3.50',
    '$3.75'
];

const [itemName, , mediumPrice] = menu;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);
