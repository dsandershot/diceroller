function rollDice(quantity,modifier,diceNumber){
	// casting to numbers for Math
	let theQuantity = Number(quantity);
	let theModifier = Number(modifier);

	if(Number.isNaN(theQuantity)){
		alert(quantity+' is not a valid number of dice. How the heck does one roll '+quantity+' dice?');
		console.log('quantity fail');
	}else if(Number.isNaN(theModifier)){
		alert(modifier+' is not a valid modifier');
		console.log('mod fail');
	}else{
		// rolling each die individually instead of using multiplication is more accurate to the intention of rolling dice
		// user may check the console to see individual dice rolls
		let total = 0;
		console.log('rolling '+quantity+' d'+diceNumber+' plus '+modifier);
		for(i=0;i<theQuantity;i++){
			let result = Math.floor(Math.random()*diceNumber)+1;
			total += result;
			console.log(result);
		}
		total += theModifier;
		console.log('plus '+modifier);
		console.log('total is '+total);
		document.getElementById('d'+diceNumber+'Result').innerHTML = total;
	}
}

function getDiceRoll(diceNumber,callback){
	// read in values here
	let quantity1 = document.getElementById('d'+diceNumber+'quantity').value;
	let modifier1 = document.getElementById('d'+diceNumber+'modifier').value;
	
	// confirming function
	if(typeof callback === 'function'){
		callback(quantity1,modifier1,diceNumber);
	}else{
		console.log('not a function');
	}
}

// listeners
let d4 = document.getElementById('d4Form');
d4.addEventListener('submit', function(event){getDiceRoll(4,rollDice); event.preventDefault();} );

let d6 = document.getElementById('d6Form');
d6.addEventListener('submit', function(event){getDiceRoll(6,rollDice); event.preventDefault();} );

let d8 = document.getElementById('d8Form');
d8.addEventListener('submit', function(event){getDiceRoll(8,rollDice); event.preventDefault();} );

let d10 = document.getElementById('d10Form');
d10.addEventListener('submit', function(event){getDiceRoll(10,rollDice); event.preventDefault();} );

let d12 = document.getElementById('d12Form');
d12.addEventListener('submit', function(event){getDiceRoll(12,rollDice); event.preventDefault();} );

let d20 = document.getElementById('d20Form');
d20.addEventListener('submit', function(event){getDiceRoll(20,rollDice); event.preventDefault();} );

let d100 = document.getElementById('d100Form');
d100.addEventListener('submit', function(event){getDiceRoll(100,rollDice); event.preventDefault();} );