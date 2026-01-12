const { setTimeout } = require('node:timers/promises');
const prompt = require('prompt-sync')({sigint: true});

async function main() {
    let a = prompt("Zahl 1: ");
    let b = prompt("Zahl 2: ");
    let summe = Number(a) + Number(b);

    console.log(`\nDas Ergebnis ist: ${summe}`);
    console.log("Der Bildschirm wird in 3 Sekunden geleert...");

    // Warte 3000 Millisekunden (3 Sekunden)
    await setTimeout(3000);

    console.clear();
    console.log("Bereit für die nächste Aufgabe!");
}

main();