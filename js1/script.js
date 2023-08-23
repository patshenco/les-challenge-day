// task1
var age = 24; 
var isStudent = true; 
var favoriteColors = ['blue', 'green', 'purple']; 
// task2
var mixedQuotesString = 'This is a string with both single and double quotes';
console.log(mixedQuotesString);
// task3
var name = "anas"; 
var age = 24; 
var isStudent = true; 
var sentence = name + " is " + age + " years old and is a " + (isStudent ? "student" : "non-student") + '.';
console.log(sentence);
// task5
var myFavoriteAnimal = "dog";
var myFavoriteColor = "red";
var userFavoriteAnimal = prompt("What is your favorite animal?");
var userFavoriteColor = prompt("What is your favorite color?");
if (userFavoriteAnimal.toLowerCase() === myFavoriteAnimal && userFavoriteColor.toLowerCase() === myFavoriteColor) {
    console.log("We have the same favorite animal and color!");
} else {
    console.log("Our favorite animal and/or color are different.");
}
//task6
var userInput = prompt("Please enter a number:");
var number = parseFloat(userInput); // Convert user input to a number

if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}
//task8
var userInput = prompt("Please enter a value:");
var parsedInput = Boolean(userInput);

if (parsedInput) {
    console.log("The value is truthy.");
} else {
    console.log("The value is falsy.");
}


