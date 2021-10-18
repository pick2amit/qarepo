var f_name = prompt("Hello and Welcome, Please enter your first name")
console.log(f_name);

var l_name = prompt("Hello and Welcome, Please enter your last name")
console.log(l_name);

var age = prompt("How old are you")
console.log(age);

var height = prompt("Your height in cm")
console.log(height);

var pet = prompt("What is your pet name")
console.log(pet);


if (f_name[0] == l_name[0] && ( age > 20 && age < 30) && height>=170 && pet[pet.length-1] == "y" ) {
console.log("Welcome Comrade! You have passed the spy test.");
}
