

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : check!
*/


// module: multiplication a * b |  test:
// output(mul(3,2));
// output(mul(3,-2));
// output(mul(3,0));
// function mul(a,b) {
// 	return `Multiplikation: ${a} * ${b} = ${a*b}`;
// }

// module: subion a - b |  test:
// output(sub(3,2));
// output(sub(3,-2));
// output(sub(3,0));
// output(sub(0,2));
// function sub(a,b) {
// 	return `Subtraktion: ${a} - ${b} = ${a - b}`;
// }

// module: division a / b |  test:
// output(div(3,2));
// output(div(3,-2));
// output(div(3,0));
// output(div(0,2));
// function div(a,b) {
// 	return `Division: ${a} / ${b} = ${a/b}`;
// }

//** WIE sollen die Aufgaben gelöst werden? **/

// module: division a / b |  test:
// output(div(4,2));
// output(div(3,2));
// output(div(3,-2));
// output(div(0,2));
// output(div(3,0));
// output(div(0,0));

//1. Iteration:  a / b  --> c | Ausgabe: "Division: a / b = c"
// output(div(4,2));
// output(div(3,2));
// output(div(3,-2));
// output(div(0,2));
// output(div(3,0));
// output(div(0,0));

// function div(a, b) {
//     // 1. Guard Clause: Fehler sofort abfangen
//     if (b === 0) {
//         return `Division: ${a} / ${b} = Fehler: Division durch Null!`;
//     }
//     // 2. Der "Happy Path": Kein else nötig, da b=0 oben bereits abgehandelt wurde
//     return `Division: ${a} / ${b} = ${a / b}`;
// }

// function divElse(a, b) {
//     // 1. Fehlerabfrage mit else
//     if (b === 0) {
//         return `Division: ${a} / ${b} = Fehler: Division durch Null!`;
//     }
//     else {
//         return `Division: ${a} / ${b} = ${a / b}`;
//     }
// }
 

// module: addition a + b |  test:
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));
// function add(a, b) {
// 	return `Addition: ${a} + ${b} = ${a + b}`;
// }	

// module: output | test:
// output("hello");
// output(2);
// function output(outputData) {
// 	console.log(outputData);
// }



// Rechenprogramm mit Auswahl der Rechenart + Eingabe via prompt-sync
const prompt = require('prompt-sync')({sigint: true});

// 1. Rechenlogik 
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => b == 0 ? "Fehler: Division durch Null" : a / b;

// 2. Lookup-Objekt (Mapping)
const operations = {
    '+': add,
    '-': sub,
    '*': mul,
    '/': div,
    ':': div,
};

// 3. Führt die Rechenoperation dynamisch per Key-Lookup asu (ersetz hier den switch /Case)
const taschenRechner = (op, a, b) => operations[op] ? operations[op](a, b) : "Ungültiger Operator";   // tenäre Schreibweise

// 4. Steuerung (Eingabe und Ablauf)
const a = parseFloat(prompt("Wert für a eingeben: "));
const b = parseFloat(prompt("Wert für b eingeben: "));
const op = prompt("Operator eingeben (+, -, *, /): ");

const result = taschenRechner(op, a, b);

console.log(`-------------------`);
console.log(`Ergebnis: ${result}`);

// :-) :-) :-) :-) 
// :-) :-) :-) :-) 
// :-) :-) :-) :-) 
// :-) :-) :-) :-) 
// :-) :-) :-) :-) 
