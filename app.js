let favoriteCharacter = {
    fName: "Bob",
    lname: "Ross",
    hobbies: ["painting", "Animal Caring"],
    occupations: ["Drill Sargent", "Tv personality"],
    currentHealth: "Dead",
    catchPhrase: quoter(),
};

//* This calls the entire object data.
console.log(favoriteCharacter);
//* Calling one of the property values;
console.log(`My favorite character's first name is ${favoriteCharacter.fName}`);
//* Calling a property that has an ARRAY data type
console.log(`Some of my favorite character's hobbies are ${favoriteCharacter.hobbies[0]} and ${favoriteCharacter.hobbies[1]}`);

//* This will update a property value 
favoriteCharacter.currentHealth = "Alive and well in spirit!";

console.log(favoriteCharacter.currentHealth);

//* This will add a new propety to the object
favoriteCharacter.paintingSkills = "HE WAS SO GOOOOOOOD";

console.log(favoriteCharacter.paintingSkills);

//* Objects can store functions
function quoter () {
    let quote = "There are no mistakes only happy accidents";
    return quote;
}

let listOfMusic = [
    {
        title: 'never gonna give you up',
        artist: 'Rick Astley',
        year: 1987,
    },
    {
        title: 'Black Magic Woman',
        artist: 'Santana',
        year: 1960
    }
];

//* Format nameofVar[#] 
console.log(`${listOfMusic[0].title} will grab the object's title`);

//* This calls the array index ([0]) and THEN the property (title) of the object (listOfMusic)
console.log(listOfMusic[0].title);

console.log(listOfMusic[1]); //* returns the whole object as long as it's not in a string

console.log(`${listOfMusic[1]} will grab the second item in the array`);

//* Gives you the length of Properties in an object
let currentObjectLength = Object.keys(listOfMusic[0]).length;
console.log(`${currentObjectLength} is the number of properties`)

//* This will return object object. Specify what you need from this object!
console.log(`${listOfMusic[1]} will return object object in a template literal`)

//? Classes

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.speed = 0;
    }

    accerlerate(mph) {
        this.speed += mph;
        console.log(`this car is going ${this.speed}`)
    }

    brake(mph) {
        this.speed -= mph;
        console.log(`This car is going ${this.speed} mph`);
    }
}

const shitbox = new Car("Toyota", "Camry");

console.log(`this car is going ${shitbox.speed} mph`)
shitbox.accerlerate(20)

//? New Class
class Employee {
    constructor(name, title, catchPhrase) {
        this.name = name,
        this.title = title,
        this.catchPhrase = catchPhrase
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I am a ${this.title}, ${this.catchPhrase}`)
    }
}

const spongebob = new Employee("spongebob", "frycook", "I'm Ready");
const squirdward = new Employee("squirdward", "cashier", "I hate everyone");

spongebob.introduce();
squirdward.introduce();

class Animal {
    speak() {
        console.log("Some animal noise")
    }
    nap() {
        console.log("zzzzzzzz")
    }
}

class Dog extends animal {
    speak() {
        console.log("Bark Bark")
    }    
}

class Cat extends animal {
    speak() {
        console.log("Meow")
    }    
}

