
var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = true;
var elevatorStuckwhileonit =true;
var elevatorNumber = 13;

if (elevatorUp === true) {
	console.log("going up!");
} else {
	console.log("going down!");
}

if (elevatorBroken === true) {
	console.log("Looks like your taking the stairs.");
} else {
	console.log("what floor are you going to.");
}

if (elevatorStuckwhileonit) 
	console.log("Oh no we are stuck!");

if (elevatorBroken || elevatorDown) {
	console.log("Oh no!!!");
}

if (elevatorNumber === 13 && elevatorStuckwhileonit) {
	console.log(" I think this place might be hunted! ");
}


var coltsWins = 2.5;
var patriotsWins = 2.5;

if (coltsWins > patriotsWins) {
	console.log("Of course we won there was no other option!");
} else {
	console.log("Deflating balls must be fun.");
}

if (coltsWins === patriotsWins) {
	console.log("they'er both great teams.")
}



