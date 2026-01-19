
/***** Codechallenge III *****/

// ControlFlow / Funktionen

// Erstellen Sie ein JS-Programm, dass einen Bestellvorgane bei MD
// simuliert. Orientieren Sie sich dabei am Struktogramm in der Datei
// bestellung.json  - Datei bitte in den online-Editor STRUCTOG laden
// https://ddi.education/struktog/

// Repo: https://github.com/archive-Basic-P-25-09/02a_Bestellung

// Variante II m. Funktionen

let choice;
let  food   = "kein Essen";
let  drink  = "kein Getränk";

const prompt = require('prompt-sync')({sigint: true});

order();

function order() {

    // Begrüßung
    output("------");
    output("Herzlich Willkommen bei MD, Ihre Bestellung bitte!");

    // Auswahl Essen
    food = orderFood();

    // Option Gertränk
    output("------");
    output("Möchten Sie ein Getränk dazu bestellen?");

    if (hasChoosenDrink()){
        drink = orderDrink();
    }

    // Ausgabe 
    output("------");
    output("Hier ist Ihre Bestellung:");
    output("-- " + food + " und " + drink + " --");
    output("Auf Wiedersehen und noch einen schönen Tag!");
}



// Essen
function orderFood() {
    output("Hamburger(1), Cheeseburger(2), oder Chilliburger(3)?");
    choice = getChoice();

    switch (choice) {
    case 1:
        return "Hamburger";
    case 2:
        return "Cheeseburger";
    case 3:
        return "Chilliburger";
    default:
        return "kein Essen";
    }
}

// Getränke
function orderDrink(choice) {
    output("------");
    output("Cola(1), Fanta(2) oder Sprite(3)?");
    choice = getChoice();

    switch (choice) {
    case 1:
        return "Cola";
    case 2:
        return "Fanta";
    case 3:
        return "Sprite";
    default:
        return "kein Getränk";
    }
}

// Getränk ?
function hasChoosenDrink() {
  return (prompt("y/n?: ").toLowerCase() == "y");
}

// Auswahl
function getChoice() {
    return parseInt(prompt("Ihre Auswahl?: "));
}

// Ausgabe
function output(outputData) {
   console.log(outputData); 
}
