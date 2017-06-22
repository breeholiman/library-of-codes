
function hello() {
	console.log("hello!!!");
}


hello();



var hey = function () {
	console.log("hey!!");
}


hey();

function bbsisName() {
	console.log("AAyanna")
}

bbsisName();


function addTwos() {
	var x = 2;
	var y = 2;
	console.log(x + y);
}

addTwos();


function multiplyTenandTwos() {
	var x = 10;
	var y = 2;
	console.log(x * y);
}

multiplyTenandTwos();


function numberEntered(x) {
	console.log("the number entered is: ", x);
}

numberEntered(5);
numberEntered(3);
numberEntered(1000);


function addingNumbers(x) {
	console.log(25 + x);
}

addingNumbers(5);
addingNumbers(100);

function addingNumbersTheRightWay(x, y) {
	console.log("the sum is: ", x + y)
}

addingNumbersTheRightWay(30, 5)

function fullName(first, last) {
	console.log(first + " " + last);
}

fullName("Bree", "Holiman");



function petNameandBreed(name, breed) {
	var details = name + ", " + breed;
	console.log(details);
	return details;
}

petNameandBreed("Rufus", "weiner dog");




function productTaxe(x, y) {
	var produceCost = x
	var numberOfProduct = y
	console.log("The product cost plus tax is ", x * y *0.07 + x * y)
}

productTaxe(1, 4)
