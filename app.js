//! Personal Contact Book
//? Create a simple contact book where you can add, view, and search for contacts by name.
 
//TODO Define a Contact Object: Each contact should be represented as an object with properties like name, phone number, and email.
let contact = [
    {name: "Hieu", phoneNum: "(228)-234-9582", email: "hieu.khong@mscoding.org"},
    {name: "John", phoneNum: "(228)-123-4567", email: "Johndoe@gmail.coom" },
    {name: "Jane", phoneNum: "(228)-891-0112", email: "Janedoe@gmail.coom" }
];
//TODO Store Contacts in an Array: Use an array to store multiple contact objects.
//TODO Create Functions: Craeate functions to add a contact, view all contacts, and search for a contact by name.
function addContacts(arr){ // Adds a contact to the array
  arr.push({name: "Jones", phoneNum: "228-131-4156", email: "JohnJones@gmail.com" })
}
function searchContacts(arr){
  let result = arr.find(item => item.name === "Hieu") // Finds the item name in the variable results when found in the array.
  console.log(result)
}

//* Output Results: Use console.log to display the contacts and search results.
searchContacts(contact) // displays searched contact
addContacts(contact) // adds the contact to the array of elements
console.log(contact) // views all contacts.




//! Student Grade Management
//? Create a program to manage student grades, where you can calculate the average grade for the class and identify students who need to improve.
 
//TODO Predefine Student Objects: Each student should be an object with properties like name and grade, stored inside an array.
let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 76 },
    { name: "Charlie", grade: 92 },
    { name: "David", grade: 63 },
    { name: "Eve", grade: 78 }
  ];
 
//TODO Calculate Average Grade: Write a function to calculate the average grade of the class.
function averageGrade(arr){
  let avr = arr.reduce((a , b) => a + b.grade, 0)
  return avr / students.length
}

let average = averageGrade(students) // Places the function's answer into a variable
console.log(`The average is : ${average}`) // Shows the average 78.8

//TODO Identify Students Below Average: Write a function to find and list students with grades below the class average.
function belowAverage(arr){ // Determines who have below average: 78.8
  for (let i = 0; i < students.length; i++){
    if (arr[i].grade <= average){
      console.log(arr[i].name + " have below the average.")
    }
}
}
belowAverage(students)



 
 
//! Movie Collection Tracker
//? Create a program that allows you to manage a collection of movies, including adding movies, rating them, and viewing your collection.
 
//TODO Define a Movie Object: Each movie should be represented as an object with properties like title, genre, and rating.
//TODO Store Movies in an Array: Use an array to store multiple movie objects.
let movies = [
  {title: "Blue Streak", rating: 4.7, genre: "Action"},
  {title: "Stuart Little 3: Call of The Wild", rating: 4.3, genre: "Comedy"},
  {title: "Hercules", rating: 4.8, genre: "Romance"}
];
//TODO Create Functions: Create functions to add a movie, rate a movie, and view your entire collection.
function addMovie(arr){
  arr.push({title: "The Twilight Saga", rating: 4.7, genre: "Romance"})
}
addMovie(movies)

//* Output Results: Use console.log to display the movie collection and ratings.
 console.log(movies)



 
//! Library Book Tracker
//? Create a program to manage a small library, where you can check which books are available or borrowed, and filter the books by their status.
 
 
//TODO Predefine Book Objects: Each book should be an object with properties like title and status (available or borrowed), stored inside an array.
let books = [
    { title: "The Great Gatsby", status: "available" },
    { title: "1984", status: "borrowed" },
    { title: "To Kill a Mockingbird", status: "available" },
    { title: "The Catcher in the Rye", status: "borrowed" },
    { title: "Moby-Dick", status: "available" }
  ];
//TODO Filter Available Books: Write a function to list all available books.
//TODO Filter Borrowed Books: Write a function to list all borrowed books.
function availableBooks(arr){
  for (let i = 0; i < books.length; i++){ // Determines if book status = "available"
    if (books[i].status === "available"){
      console.log(`Available books: ${books[i].title}`)
    }
}
}


function borrowedBooks(arr){ // Determines if book status = "borrowed"
  for (i = 0; i < books.length; i++){
    if (books[i].status === "borrowed")
      console.log(`Books that are borrowed: ${books[i].title}`)
  }
}

availableBooks(books) // Displays the available books
borrowedBooks(books) // Displays the unavailable books




//! Recipe Organizer
//? Create a program to manage recipes, where some recipes are predefined, and the user can add or update recipes.

//TODO  Each recipe should have properties like title, ingredients (an array of strings), and instructions.
let recipes = [
  { title: "Pancakes", ingredients: ["Flour", "Eggs", "Milk"], instructions: "Mix and cook on a griddle." },
  { title: "Salad", ingredients: ["Lettuce", "Tomatoes", "Cucumbers"], instructions: "Chop and toss with dressing." }
];
//TODO Add a New Recipe: Allow the user to input a new recipe's title, ingredients, and instructions, then add it to the list.
function addNewRecipe(arr){
  arr.push({title: "PB Sandwich", ingredients: ["Bread", "Peanut Butter", "Jelly"], instructions: "Place peanut butter and jelly between buns."})
}
//TODO Update Recipe Instructions: Enable the user to update the instructions of an existing recipe.
addNewRecipe(recipes);
let update = "Take peanut butter and jelly out of the jar and place between buns"
recipes[2].instructions = update; // changes the array element to the update

//* Display All Recipes: Write a function to display all recipes with their details.
console.log(recipes)




//! Car Dealership Inventory
//? Create a program to manage a car dealership inventory, where some cars are predefined, and the user can add or update car details.
let cars = [
  { make: "Toyota", model: "Camry", year: 2020, price: 24000 },
  { make: "Honda", model: "Civic", year: 2019, price: 22000 }
];
//TODO Each car should have properties like make, model, year, and price.
//TODO Add a New Car: Allow the user to input a new car's make, model, year, and price, then add it to the inventory.
function addCar(arr){
  arr.push({make: "Toyota", model: "Tacoma", year: 2013, price: 22000})
}
addCar(cars)
//TODO Update Car Price: Enable the user to update the price of an existing car.
let carupdate = 16000;
cars[2].price = carupdate;
//* Display All Cars: Write a function to display all cars in the inventory.
console.log(cars);


//! Pet Names with Details
//TODO Create a program that manages a list of pet names, where each pet has a name, type (e.g., dog, cat), and age.
//TODO Each object should contain name, type, and age.
let petNames = [
  {name: "Finn", type: "Dog", age: "6 years"},
  {name: "Ace" , type: "Dog", age: "3 years"},
  {name: "Leo" , type: "Cat", age: "2 years"},
  {name: "Nibbles", type: "Hamster", age: "1 years"}
];
//TODO  Add a New Pet: Allow the user to input a new pet's name, type, and age, then add it to the list.
function newPet(arr){
  arr.push({name: "Peter", type: "Parrot", age: "2 years"})
}
newPet(petNames)
//* Display All Pet Names: Write a function to display all pets with their details.
console.log(petNames)

 