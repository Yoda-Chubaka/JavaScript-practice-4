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
