// --> installiern mit: npm i prompt-sync - ruft aus der Bibliothek das Modul prompt-sync auf    

const neuerPrompt = require('prompt-sync')({sigint: true});

// Alles muss man selber machen lassen! ...
let firstName = neuerPrompt("Vorname?: ");
let familyName = neuerPrompt("Name?: ");
console.log("Hallo, " + firstName + " " + familyName +"!");
console.log("Ein Markt belohnt nicht Fleiß, sondern Positionierung!");

// npm i prompt -sync
// npm init -y
// https://www.npmjs.com/package/prompt-sync