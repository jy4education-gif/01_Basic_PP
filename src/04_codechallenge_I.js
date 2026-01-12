
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/
// Variante 1:
console.clear();
console.log("\n---- Code Challenge 01 - Variante 1 ----");
let summe;
const prompt = require('prompt-sync')({sigint: true});
let ersteZahl = prompt("Erste Zahl?: ");
let zweiteZahl = prompt("Zweite Zahl?: ");
summe = parseInt(ersteZahl) + parseInt(zweiteZahl);
//summe = ersteZahl + zweiteZahl;
console.log("Die Summe der Zahlen ist: " + summe);

const prompt2 = require('prompt-sync')({sigint: true});

// Variante 2:
console.log("\n---- Code Challenge 01 - Variante 2 ----");
// Eingabe der beiden Zahlen
let a = prompt2("Bitte Zahl a eingeben: ");
let b = prompt2("Bitte Zahl b eingeben: ");

// WICHTIG: Umwandlung von String zu Number
// prompt() liefert immer Text (String) zurück.
let summe2 = Number(a) + Number(b);

// Ausgabe des Ergebnisses
console.log(`Die Summe von ${a} und ${b} ist: ${summe2}`);

// Variante 3:
console.log("\n---- Code Challenge 01 - Variante 3 ----");
// Experimentieren mit parseInt()
// const prompt = require('prompt-sync')({sigint: true});

// 1. Eingabe der Werte als Text
let zahl1Text = prompt("Erste Zahl?: ");
let zahl2Text = prompt("Zweite Zahl?: ");

// 2. Abfrage der Basen
// Beispiel: 2 für Binär, 10 für Dezimal, 16 für Hexadezimal
let eingabeBasis = prompt("In welcher Basis liegen die Zahlen vor? (z.B. 2, 10, 16): ");
let ausgabeBasis = prompt("In welcher Basis soll die Summe ausgegeben werden? (z.B. 2, 10, 16): ");

// 3. Verarbeitung mit parseInt(string, radix)
// parseInt wandelt den Text basierend auf der eingabeBasis in eine interne Dezimalzahl um
let num1 = parseInt(zahl1Text, eingabeBasis);
let num2 = parseInt(zahl2Text, eingabeBasis);

// Berechnung der Summe (intern immer dezimal)
let summeDezimal = num1 + num2;

// 4. Umwandlung für die Ausgabe mit .toString(radix)
// Um eine Zahl in einer bestimmten Basis darzustellen, nutzen wir .toString()
let summeFormatiert = summeDezimal.toString(ausgabeBasis);

console.log("-----------------------------------------");
console.log(`Rechnung: ${zahl1Text} + ${zahl2Text} (Basis ${eingabeBasis})`);
console.log(`Die Summe in Basis ${ausgabeBasis} ist: ${summeFormatiert}`);

// URL am Ende aufrufen
// const open = require('open');
// open('https://youtu.be/dapqMeQCdcs?si=53FY_KDam1Lj4rkX');

// müsste lokal funktionieren ...
const { exec } = require('child_process');

let url = 'https://youtu.be/dapqMeQCdcs?si=53FY_KDam1Lj4rkX';
let startCommand = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';

exec(`${startCommand} ${url}`);

console.log("\n-----------------------------------------");
console.log("Challenge abgeschlossen! Schau dir zur Belohnung das Video an:");
console.log("\x1b[36m%s\x1b[0m", url); // Gibt die URL in Cyan aus
console.log("-----------------------------------------");