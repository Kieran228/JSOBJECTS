//! Personal Contact Book
//? Create a simple contact book where you can add, view, and search for contacts by name.
 
//TODO Define a Contact Object: Each contact should be represented as an object with properties like name, phone number, and email.
//TODO Store Contacts in an Array: Use an array to store multiple contact objects.

let contacts = [
    {
        name: "Bob Billy",
        phoneNumber: 2324555677,
        email: "billybob@gmail.com"
    },
    {
        name: "Fred Warner",
        phoneNumber: 2894565677,
        email: "fwarner@gmail.com"
    },
    {
        name: "Mickey Mouse",
        phoneNumber: 2894565677,
        email: "disneyrules@gmail.com"
    }
];
//TODO Create Functions: Create functions to add a contact, view all contacts, and search for a contact by name.

function addContact(newName, newPhoneNumber, newEmail) {
     let newContact = {
        name: newName,
        phoneNumber: newPhoneNumber,
        email: newEmail
     };
     contacts.push(newContact);
}

//* Output Results: Use console.log to display the contacts and search results.
addContact("Mike Wizaozki", "2282232222", "bigEye@gmail.com");
console.log(contacts);

 
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
function calcGradeAverage() {
    //* Grades added together then / by array.length (5)
    let sum = 0;
    let classAverage = 0;
    for (i = 0; i < students.length; i++) {
        sum += students[i].grade;
        classAverage = sum / students.length;
    }
    return classAverage;
}
let classGradeAverage = calcGradeAverage()
console.log(`The average grades of the students is: ${classGradeAverage.toFixed(0)}`)

//TODO Identify Students Below Average: Write a function to find and list students with grades below the class average.

function belowAverageFinder() {
    //* If a student's grade is less than (<) the class average (classGradeAverage) display the name of student
    for (i = 0; i < students.length; i++) {
        if (students[i].grade < classGradeAverage) {
            console.log(`${students[i].name} has a below average grade.`);
        } 
    }
}

let belowAverageStudents = belowAverageFinder()
console.log(belowAverageStudents)
 
//! Movie Collection Tracker
//? Create a program that allows you to manage a collection of movies, including adding movies, rating them, and viewing your collection.
 
//TODO Define a Movie Object: Each movie should be represented as an object with properties like title, genre, and rating.
//TODO Store Movies in an Array: Use an array to store multiple movie objects.

let Movie = [
    {
        title: "Man of Steel",
        genre: ["Superhero", "Action", "Adventure"],
        rating: "7/10"
    },
    {
        title: "I am legend",
        genre: ["Horror", "Action", "Science Fiction"],
        rating: "7/10"
    }
];

//TODO Create Functions: Create functions to add a movie, rate a movie, and view your entire collection.

function addMovie(movieTitle, movieGenre, movieRating) {
    let addMovie = {
        title: movieTitle,
        genre: movieGenre,
        rating: movieRating
    };
    Movie.push(addMovie);
}

addMovie("Spirited Away", "Anime", "10/10");

function rateMovie(targetMovie, personalRating) {
    for (i = 0; i < Movie.length; i++) {
        if (targetMovie == Movie[i].title) {
            Movie[i].rating = personalRating;
        }
    } return personalRating;
}

//* Output Results: Use console.log to display the movie collection and ratings.
rateMovie("Man of Steel", "10/10");
console.log(Movie)
 
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
function displayAvailablebook() {
    let availBooks = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].status === "available") {
            availBooks.push(books[i]);
        }
    } return availBooks;
};

let availableBooksList = displayAvailablebook()
for (let i = 0; i < availableBooksList.length; i++) {
    console.log(`This book is available: ${availableBooksList[i].title}`)
}

//TODO Filter Borrowed Books: Write a function to list all borrowed books.
function displayBorrowedBooks() {
    let borrowedBooks = []
    for (i = 0; i < books.length; i++) {
        if (books[i].status === "borrowed") {
            borrowedBooks.push(books[i])
        }
    } return borrowedBooks;
}

let borrowedBooksList = displayBorrowedBooks()
for (i = 0; i < borrowedBooksList.length; i++) {
    console.log(`This book is borrowed at the moment: ${borrowedBooksList[i].title}`)
}

//! Recipe Organizer
//? Create a program to manage recipes, where some recipes are predefined, and the user can add or update recipes.

//TODO  Each recipe should have properties like title, ingredients (an array of strings), and instructions.
let recipes = [
    { title: "Pancakes", ingredients: ["Flour", "Eggs", "Milk"], instructions: "Mix and cook on a griddle." },
    { title: "Salad", ingredients: ["Lettuce", "Tomatoes", "Cucumbers"], instructions: "Chop and toss with dressing." }
  ];

//TODO Add a New Recipe: Allow the user to input a new recipe's title, ingredients, and instructions, then add it to the list.
function addNewRecipe(addTitle, addIngredients, addInstructions) {
    let newRecipe = { title: addTitle, ingredients: addIngredients, instructions: addInstructions }
    recipes.push(newRecipe);
};

//TODO Update Recipe Instructions: Enable the user to update the instructions of an existing recipe.
function updateInstructions(targetRecipe, newInstructions) {
    for (i = 0; i < recipes.length; i++) {
        if (recipes[i].title === targetRecipe) {
            recipes[i].instructions = newInstructions;
        };
    };
};

//* Display All Recipes: Write a function to display all recipes with their details.
function displayRecipes() {
    console.log(recipes);
};

addNewRecipe("Cookies and Milk", ["Milk", "Cookies", "Glass"], "Dip Cookies in Milk and Enjoy!")
updateInstructions("Cookies and Milk", "Eat Cookie then swallow milk")
displayRecipes()

//! Car Dealership Inventory
//? Create a program to manage a car dealership inventory, where some cars are predefined, and the user can add or update car details.
let cars = [
    { make: "Toyota", model: "Camry", year: 2020, price: 24000 },
    { make: "Honda", model: "Civic", year: 2019, price: 22000 }
  ];
//TODO Each car should have properties like make, model, year, and price.
//TODO Add a New Car: Allow the user to input a new car's make, model, year, and price, then add it to the inventory.
function addNewCar(addedMake, addedModel, addedYear, addedPrice) {
    let newcar = { make: addedMake, model: addedModel, year: addedYear, price: addedPrice};
    cars.push(newcar);
};

//TODO Update Car Price: Enable the user to update the price of an existing car.
function updateCarPrice(targetCarMake, targetCarModel, targetCarYear, updatedPrice) {
    for (i = 0; i < cars.length; i++) {
        if (cars[i].make === targetCarMake && cars[i].model === targetCarModel &&  cars[i].year === targetCarYear) {
            cars[i].price = updatedPrice;
        };
    };
};

//* Display All Cars: Write a function to display all cars in the inventory.
function displayCars() {
    console.log(cars)
}

addNewCar("Toyota", "Corolla", "2024", "25000")
updateCarPrice("Toyota", "Corolla", "2024", "30000")
displayCars()


//! Pet Names with Details
//TODO Create a program that manages a list of pet names, where each pet has a name, type (e.g., dog, cat), and age.

//TODOEach object should contain name, type, and age.
let Pets = [
    {
        name: "",
        type: "",
        age: ""
    },
]


//TODO  Add a New Pet: Allow the user to input a new pet's name, type, and age, then add it to the list.
function addNewPet(petName, petType, petAge) {
    if (Pets.length === 1) {
        Pets[0].name = petName
        Pets[0].type = petType
        Pets[0].age = petAge
    } 
    if (Pets[0].name != petName) {
        let newPet = {
            name: petName,
            type: petType,
            age: petAge
        }
        Pets.push(newPet)
    }
    
}

//* Display All Pet Names: Write a function to display all pets with their details.
function displayPets() {
    console.log(Pets)
}

addNewPet("Sampson", "Dog", "8");
addNewPet("Louie", "Dog", "12");
displayPets();
