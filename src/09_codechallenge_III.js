
/***** Codechallenge III *****/

// ControlFlow / Funktionen

// Erstellen Sie ein JS-Programm, dass einen Bestellvorgane bei MD
// simuliert. Orientieren Sie sich dabei am Struktogramm in der Datei
// bestellung.json  - Datei bitte in den online-Editor STRUCTOG laden
// https://ddi.education/struktog/
// https://github.com/archive-Basic-P-25-09/02a_Bestellung


/**
 * Codechallenge III - Bestellvorgang bei MD
 * Simuliert einen Bestellvorgang basierend auf einem Struktogramm.
 */

// Variablendeklaration
let food = "";
let drink = "";
const prompt = require('prompt-sync')({sigint: true});

/**
 * Funktion zur Essensbestellung
 */
function orderFood() {
    // console.log("Hamburger (1), Cheeseburger (2) oder Chilliburger (3)?");
    // // In einer echten Browser-Umgebung würde hier prompt() verwendet werden.
    // // Für die Simulation setzen wir einen Beispielwert oder nutzen ein Argument.
    // let selection = "1"; // Beispiel: Hamburger gewählt

    let selection = prompt("Hamburger (1), Cheeseburger (2) oder Chilliburger (3)?");

    switch (selection) {
        case "1":
            food = "Hamburger";
            break;
        case "2":
            food = "Cheeseburger";
            break;
        case "3":
            food = "Chilliburger";
            break;
        default:
            food = "unbekanntes Gericht";
            break;
    }
}

/**
 * Funktion zur Getränkebestellung
 */
function orderDrink() {
    console.log("Cola (1), Fanta (2), Sprite (3)?");
    let selection = "2"; // Beispiel: Fanta gewählt

    switch (selection) {
        case "1":
            drink = "Cola";
            break;
        case "2":
            drink = "Fanta";
            break;
        case "3":
            drink = "Sprite";
            break;
        default:
            drink = "unbekanntes Getränk";
            break;
    }
}

/**
 * Hauptfunktion für den Bestellvorgang
 */
function order() {
    console.log("Herzlich Willkommen bei MD, Ihre Bestellung bitte!");
    
    // Essensbestellung aufrufen
    orderFood();
    
    console.log("Möchten Sie ein Getränk dazu bestellen? (j/n)");
    let wantDrink = "j"; // Beispiel: Ja gewählt
    
    if (wantDrink === "j") {
        // Getränkebestellung aufrufen
        orderDrink();
        console.log(`Hier ist Ihre Bestellung: ${food} und ${drink}`);
    } else {
        console.log(`Hier ist Ihre Bestellung: ${food}`);
    }
    
    console.log("Vielen Dank, und Auf Wiedersehen!");
}

// Programm starten
order();
