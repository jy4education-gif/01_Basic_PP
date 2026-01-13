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

// Lösung mit Funktionen und Typkonvertierung

"use strict";

//const prompt = require('prompt-sync')({ sigint: true });

/**
 * Berechnet das Alter basierend auf dem Geburtsjahr.
 * Verwendet das aktuelle Systemjahr automatisch.
 */
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age >= 0 ? age : null;
}

function main() {
    console.clear();

    // Eingabe mit expliziter Typkonvertierung
    const name1 = prompt("Name der ersten Person: ");
    const birthYear1 = Number(prompt(`Geburtsjahr von ${name1}: `));

    const name2 = prompt("Name der zweiten Person: ");
    const birthYear2 = Number(prompt(`Geburtsjahr von ${name2}: `));

    // Validierung und Berechnung
    if (isNaN(birthYear1) || isNaN(birthYear2)) {
        console.error("Fehler: Bitte geben Sie gültige Jahreszahlen ein.");
        return;
    }

    const age1 = calculateAge(birthYear1);
    const age2 = calculateAge(birthYear2);

    // Ausgabe
    console.log(`\nErgebnis:`);
    console.log(`${name1} ist ${age1} Jahre alt.`);
    console.log(`${name2} ist ${age2} Jahre alt.`);
}

main();