

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : check!
*/


// module: multiplication a * b |  test:
output(mul(3,2));
output(mul(3,-2));
output(mul(3,0));
function mul(a,b) {
	return `Multiplikation: ${a} * ${b} = ${a*b}`;
}

// module: subion a - b |  test:
output(sub(3,2));
output(sub(3,-2));
output(sub(3,0));
output(sub(0,2));
function sub(a,b) {
	return `Subtraktion: ${a} - ${b} = ${a - b}`;
}

// module: division a / b |  test:
output(div(3,2));
output(div(3,-2));
output(div(3,0));
output(div(0,2));
function div(a,b) {
	return `Division: ${a} / ${b} = ${a/b}`;
}

//** WIE sollen die Aufgaben gelöst werden? **/

// module: division a / b |  test:
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(0,2));
// output(divide(3,0));
// output(divide(0,0));



// module: addition a + b |  test:
output(add(2,2));
output(add(2,-2));
output(add(2,0));
function add(a, b) {
	return `Addition: ${a} + ${b} = ${a + b}`;
}	

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  