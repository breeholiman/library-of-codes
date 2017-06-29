// 1.Write a for loop that counts from 0 to 100 by 10’s. When it reaches 60, print the word “sixty” instead of the number.

var counter = 0;
while(counter < 100){
	counter += 10;
	if (counter === 60) {
		console.log("sixty");
	}else {
		console.log(counter);
	}
}


// 2.Create an array of your friends. Then create a for loop to print out each of those friends to the console.
var friends = ["Kaycee", "Trent", "Alex", "Grasi"]
for (var i = 0; i < friends.length; i ++) {
	console.log(friends[i])
}

// 3.Write a function with two parameters, length and width. When you run the function, it should calculate the product of those two numbers. 
function lengthWidth(length, width) {
	console.log("The parameter is "+ length * width)
}
lengthWidth(5, 10)


// 4.Write a conditional that prints 1 to 50. For multiples of two, print “Mizz”. For multiples of three, print “Muzz”. For multiples of both two and three, print “MizzMuzz”.
var counter = 0
while(counter < 50){
	counter++;
	if (counter % 2) {
		console.log(counter + " Mizz");
	} else {
		console.log(counter + " Muzz"
	}
}
		
// 5.Create an array of five programming languages. Print the third item in the array to the console.

var PL = ["html", "css", "js", "JQuery", "http"]
console.log( PL[2])

// 6.Create an if, else, else-if statement that has multiple conditions. Imagine you are racing cars against an opponent. Create variables for your speed and their speed. If you are going faster, trash talk (just a little). If they are going faster, make up an excuse. If you are going the same speed, just talk more trash. 
var my speed 


// 7.Create an animal object with different properties describing that animal. Add methods that return the value of the property (I.E. getType() returns the type of animal).

var animal = {
	fur  : true
	scales : false
	height : 4
	hasclaws : true

}
