// EX 3.1
let shoppingList = ["Milk", "Bread", "Apples"];
console.log("Length of shopping list:", shoppingList.length);
shoppingList[1] = "Bananas";
console.log("Updated shopping list:", shoppingList);



// EX 3.3
let originalArray = [1, 2, 3];
let nestedArrays = [originalArray, originalArray, originalArray];
console.log(nestedArrays[1][1]);


// EX 3.4
let myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
    isAutomatic: true,
    mileage: 15000
};

let propertyToChange = 'color';
myCar[propertyToChange] = 'Blue';
propertyToChange = 'forSale';
myCar[propertyToChange] = true;
console.log("Make:", myCar.make);
console.log("Model:", myCar.model);
console.log("For Sale:", myCar.forSale);

// EX 3.5

let people = {
    friends: []
};

let friend1 = {
    firstName: "John",
    lastName: "Doe",
    ID: 1
};

let friend2 = {
    firstName: "Jane",
    lastName: "Smith",
    ID: 2
};

let friend3 = {
    firstName: "Bob",
    lastName: "Johnson",
    ID: 3
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
