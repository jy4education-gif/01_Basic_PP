
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call
// test();

// Funktionsrumpf | (callee)
// Funktionsdeklaration
function test()
{
    console.log("Hallo, Simonas!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// call
// ausgabeNamen();

// Funktionalität
function ausgabeNamen() {
    // interne Variable | What happens in VEGAS ...
    let firstName = "Yasin";
    console.log("Hallo, " + firstName  + "!");
}

// console.log(firstName); // Fehler: Scope

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamen2();
// ausgabeNamen2("Yasin"); // Argument --> Daten für Parameter
// ausgabeNamen2("Tarik");
// ausgabeNamen2("Sandra");

// function ausgabeNamen2(firstName) { // Parameter
//     console.log("Hallo, " + firstName  + "!");
// }

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

// ausgabeNamen3();
// ausgabeNamen3("Max", "Mützerich");

// Argumente werden von prompt() geliefert --> Input
// const prompt = require('prompt-sync')({sigint: true});
// ausgabeNamen3(prompt("Vorname: "),prompt("Name: "));

// function ausgabeNamen3(firstName, familyName) {  // Parameter mit Mehrfachbelegung, Argumente: Vorname 
//     console.log("Hallo, " + firstName + " " + familyName + "!");
// }

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Verantwortlichkeiten | Kapselung
// Postulat: one fnction = one job (uncle Bob) | „Es sollte immer nur einen Grund geben eine Klasse zu ändern” |Für typografisch korrekte deutsche Anführungszeichen („unten“, “oben“) nutzen Sie unter Windows die ALT-Codes: Alt + 0132 für „ (unten), Alt + 0147 oder Alt + 0148 für “ (oben)
// SRP single responsibility principle
