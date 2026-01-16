

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

const ERROR_STR_DIV = "Teilen durch 0 nicht möglich!";
const ERROR_STR_GEN = "Irgendwas ging schief!";

/** Dateneingabe */

const prompt = require('prompt-sync')({sigint: true});

startApp();

function startApp() {
	output(calculator(getNum1(),getNum2(),getOp()));
}

function getNum1() {
	return parseInt(prompt("Zahl1?: "));
}

function getNum2() {
	return parseInt(prompt("Zahl2?: "));
}

function getOp() {
	return prompt("OP?: ");
}

/** WAS soll gemacht werden? */

// module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));
function calculator(a,b,op) {
	switch (op) {
		case "+": // Addition
			return add(a,b);
		case "-": // Subtraktion
			return subtract(a,b);
		case "*": // Multiplikation
			return multiply(a,b);
		case ":": // Division
		case "/":
			return divide(a,b);
		default:
			return ERROR_STR_GEN
	}
}

/** WIE sollen die Aufgaben gelöst werden? */

// module: division a / b |  test:
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(0,2));
// output(divide(3,0));
// output(divide(0,0));
function divide(a,b) {

	// 1. Iteration
	// if (b==0) {
	// 	return "Teilen durch 0 nicht möglich!";
	// } else {
	// 	return a/b;
	// }

	// 2. Iteration

	// Ausnahme
	if (b==0) {
		return ERROR_STR_DIV;
	} 
	
	// Regel
	return a/b;
	
}

// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) {
	return  a*b;
}

// module: subtraction a - b |  test:
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
// output(subtract(0,2));
function subtract(a,b) {
	return a-b;
}

// module: addition a + b |  test:
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));
function add(a,b) {
	return a+b;
}

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  