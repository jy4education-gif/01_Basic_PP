const prompt = require('prompt-sync')({sigint: true});

// 1. Datenstrukturen (Lookups)
const MENU = {
    food: {
        "1": "Hamburger",
        "2": "Cheeseburger",
        "3": "Chilliburger"
    },
    drinks: {
        "1": "Cola",
        "2": "Fanta",
        "3": "Sprite"
    }
};

// 2. Spezialisierte Funktionen mit Rückgabewerten
function getSelection(type, message, defaultMsg) {
    const selection = prompt(message);
    // Lookup-Logik: Falls Key nicht existiert, nimm defaultMsg
    return MENU[type][selection] || defaultMsg;
}

/**
 * Hauptfunktion für den Bestellvorgang
 */
function order() {
    console.log("\nHerzlich Willkommen bei MD, Ihre Bestellung bitte!");

    // Essen bestellen
    const food = getSelection(
        "food", 
        "Hamburger (1), Cheeseburger (2) oder Chilliburger (3)? ", 
        "unbekanntes Gericht"
    );

    // Getränk-Logik
    let drink = "";
    const wantDrink = prompt("Möchten Sie ein Getränk dazu bestellen? (j/n) ");

    if (wantDrink.toLowerCase() === "j") {
        drink = getSelection(
            "drinks", 
            "Cola (1), Fanta (2), Sprite (3)? ", 
            "unbekanntes Getränk"
        );
    }

    // Finale Ausgabe (Ternary für die String-Zusammensetzung)
    const orderSummary = drink 
        ? `${food} und ${drink}` 
        : food;

    console.log(`\n--- Ihre Bestellung ---\nHier ist Ihre Bestellung: ${orderSummary}`);
    console.log("Vielen Dank, und Auf Wiedersehen!");
}
console.log('09_codechallenge_III_var_lookup');
order();