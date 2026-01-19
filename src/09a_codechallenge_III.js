
/***** Codechallenge III *****/

// ControlFlow / Funktionen

// Erstellen Sie ein JS-Programm, dass einen Bestellvorgane bei MD
// simuliert. Orientieren Sie sich dabei am Struktogramm in der Datei
// bestellung.json  - Datei bitte in den online-Editor STRUCTOG laden
// https://ddi.education/struktog/

// Repo: https://github.com/archive-Basic-P-25-09/02a_Bestellung

// Variante I linear

let choice;
let  food   = "kein Essen";
let  drink  = "kein Getränk";

const prompt = require('prompt-sync')({sigint: true});

console.log("------");
console.log("Herzlich Willkommen bei MD, Ihre Bestellung bitte!");
console.log("Hamburger(1), Cheeseburger(2), oder Chilliburger(3)?");
choice = parseInt(prompt("Ihre Auswahl?: "));

switch (choice) {
    case 1:
        food = "Hamburger";
        break;
    case 2:
        food = "Cheeseburger";
        break;
    case 3:
        food = "Chilliburger";
        break;
    default:
        food = "kein Essen";
        break;
}

console.log("------");
console.log("Möchten Sie ein Getränk dazu bestellen?");
choice =  prompt("y/n?: ").toLowerCase();

if (choice == "y") {

    console.log("------");
    console.log("Cola(1), Fanta(2) oder Sprite(3)?");
    choice = parseInt(prompt("Ihre Auswahl?: "));

    switch (choice) {
        case 1:
            drink = "Cola";
            break;
        case 2:
            drink = "Fanta";
            break;
        case 3:
            drink = "Sprite";
            break;
        default:
            drink = "kein Getränk";
            break;
    }
} 

console.log("------");
console.log("Hier ist Ihre Bestellung:");
console.log("-- " + food + " und " + drink + " --");
console.log("Auf Wiedersehen und noch einen schönen Tag!");









