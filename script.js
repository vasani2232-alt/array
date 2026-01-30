// let marks = [97, 82, 75, 64, 36];
// console.log(marks);
// console.log(marks.length); //property

// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];
// //for loop
// // for(let i=0; i<heroes.length; i++){
// //     console.log(heroes[i]);
// // }

// //for of
// for(let hero of heroes){
//     console.log(hero.toUpperCase());
// }
//practice que1
// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for(let val of marks){
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

//practice que2
// let items = [250, 645, 300, 900, 50];

// let i = 0;
// for (let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`)
//     i++;
// }

// for (let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);

// let foodItems = ["potato", "apple", "litchi", "tomato"];
// // foodItems.push("chips", "burger", "panner");
// console.log(foodItems);
// console.log(foodItems.toString());
// console.log(foodItems);
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];

// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);
// let marvelHeroes.unshift("antman");
// let val = marvelHeroes.shift();
// console.log("deleted", val);
// let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr,strange"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice());

// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 2, 101, 102);

//add element
// arr.splice(2, 0, 101);

//delete element
// arr.splice(3, 1);

//replace element
// arr.splice(3, 1, 101);

//Practice que1
let companies = ["Bloomberg", "Microsoft", "Uber", "Goggle", "IBM", "Netflix"];
// companies.shift();
// companies.splice(2, 1, "Ola");
companies.push("Amazon");