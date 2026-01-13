/* Berechnung Alter */

// Deklaration 
let aktuellesJahr, ersterName, zweiterName, geburtsJahrErsterName, geburtsJahrZweiterName;
const prompt = require('prompt-sync')({sigint: true});

// Eingabe
ersterName = prompt("Bitte geben Sie den Namen der ersten Person ein: ");
zweiterName = prompt("Bitte geben Sie den Namen der zweiten Person ein: ");

geburtsJahrErsterName = prompt(`Geben Sie das Geburtsjahr von ${ersterName} ein: `);
geburtsJahrZweiterName = prompt(`Geben Sie das Geburtsjahr von ${zweiterName} ein: `);

aktuellesJahr = prompt("Bitte geben Sie das aktuelle Jahr ein: ");

// Berechnung Alter
let alterErsterName = aktuellesJahr - geburtsJahrErsterName;
let alterZweiterName = aktuellesJahr - geburtsJahrZweiterName;

// Ausgabe
console.clear();
console.log(`Das Alter von ${ersterName} ist: ${alterErsterName}`);
console.log(`Das Alter von ${zweiterName} ist: ${alterZweiterName}`);
