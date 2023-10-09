// Task 1
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = makePizza();
// const pointer = makePizza;

// Task 2
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
  
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// makeMessage("Ultracheese", deliverPizza);

// Task 3
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

// Task 4
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     return this.pizzas.includes(pizzaName) ? onSuccess(pizzaName)
//     : onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// Task 5
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//   orderedItems.forEach(function (orderedItem){
// totalPrice += orderedItem;
//   })

//         return totalPrice;
// }

// Task 6
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
 
// numbers.forEach(function(number) {
//   if (number > value) {
//       filteredNumbers.push(number);
//     }
// })
 
//   return filteredNumbers;
// }

// Task 7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
 
// firstArray.forEach(element => {
//      if (secondArray.includes(element)) {
//         commonElements.push(element);
//      }
//    });

//   return commonElements;
// }



// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   })
//   return commonElements;
// }

// Task 8
// const calculateTotalPrice = (quantity, pricePerItem) => {
  
//   return quantity * pricePerItem;
// }

// Task 9
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// Task 10
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// Task 11
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// Task 12
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
// }

// Task 13
// function changeEven(numbers, value) {

//   const newArray = [];
//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       newArray.push(element + value)
//     }else newArray.push(element)

//   });
//   return newArray
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10))
// console.log(changeEven([17, 24, 68, 31, 42], 100))

// Task 14
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map(planet => planet.length);

// Task 15
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(book => book.title);

// Task 16
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap(book => book.genres);

// Task 17
// const getUserNames = users => users.map(user => user.name);

// Task 18
// const getUserEmails = users => users.map(user => user.email);

// Task 19
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number %2 ===0);
// const oddNumbers = numbers.filter(number => number %2 !==0);

// Task 20
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// const allGenres = books.flatMap( book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, books) => books.indexOf(genre) === index
//   );

// Task 21
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// Task 22
// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

// Task 23
// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age > minAge && user.age < maxAge)

// Task 24
// const getFriends = (users) => {
//   let friends = new Set();
//   for (const user of users) {
//     for (const friend of user.friends) {
//       friends.add(friend);
//     }
//   }
//   return Array.from(friends);
// }



// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(({ friends }) => friends.includes(friendName));
// }


// Task 25
// const getFriends = (users) => {
//     let friends = new Set();
//     for(const user of users) {
//         for(const friend of user.friends) {
//             friends.add(friend);
//         }
//     }
//     return Array.from(friends);
// }

// Task 26
// const getActiveUsers = (users) => {
//     return users.filter(user => user.isActive === true);
// }

// Task 27
// const getInactiveUsers = (users) => users.filter(user => user.isActive !== true);

// Task 28
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books.find((books) => books.title === BOOK_TITLE);
// const bookByAuthor = books.find((books) => books.author === AUTHOR);


// Task 29
// const getUserWithEmail = (users, email) => users.find(user => user.email === email);

// Task 30
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every((value) => value %2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value %2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value %2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value %2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value %2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value %2 !== 0);

// Task 31
// const isEveryUserActive = (users) => users.every(user => user.isActive);

// Task 32
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const anyElementInFirstIsEven = firstArray.some((value) => value %2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value %2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((value) => value %2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((value) => value %2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((value) => value %2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((value) => value %2 !== 0);

// Task 33
// const isAnyUserActive = users => users.some(user => user.isActive);

// Task 34
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players);

// const totalPlayTime = playtimes.reduce((totalTime, player) => {
//   return totalTime + player;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// Task 35
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => acc += player.playtime / player.gamesPlayed, 0);


// Task 36
// const calculateTotalBalance = users => users.reduce((totalBalance, user) => totalBalance + user.balance,0);

// Task 37
// const getTotalFriendCount = users => users.reduce((totalFriends, user) => totalFriends + user.friends.length,0);

// Task 38
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// Task 39
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// Task 40
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// Task 41
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const sortedByAuthorName = [...books].sort((a,b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a,b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a,b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a,b) => b.rating - a.rating);

// Task 42
// const sortByAscendingBalance = users => [...users].sort((a, b) => a.balance - b.balance);

// Task 43
// const sortByDescendingFriendCount = users => [...users].sort((a, b) => b.friends.length - a.friends.length);

// Task 44
// const sortByName = users => [...users].sort((a,b) => a.name.localeCompare(b.name));

// Task 45
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(rating => rating.author).sort((a, b) => a.localeCompare(b));

// Task 46
// const getNamesSortedByFriendCount = users => [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);

// Task 47
// const getSortedFriends = users => {
//   return [...users].filter(user => user.friends).map(user => user.friends).flatMap(user => user).filter((user, index, array) => array.indexOf(user) === index).sort((a,b) => a.localeCompare(b))
// };

// Task 48
// const getTotalBalanceByGender = (users, gender) => {
// return [...users].filter(user => user.gender === gender).reduce((totalBalance, user) => {
//   return totalBalance += user.balance}, 0)
// };