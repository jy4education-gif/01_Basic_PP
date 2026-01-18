// Rechenprogramm mit Auswahl der Rechenart + Eingabe via prompt-sync
const prompt = require('prompt-sync')({sigint: true});
console.log("10_02_funktionen_II");
// 1. Rechenlogik 
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => b == 0 ? "Fehler: Division durch Null" : a / b;

// 2. Lookup-Objekt (Mapping)
const operations = {
    '+': add,
    '-': sub,
    '*': mul,
    '/': div,
    ':': div,
};

// 3. Führt die Rechenoperation dynamisch per Key-Lookup aus (ersetz hier den switch /Case)
const taschenRechner = (op, a, b) => operations[op] ? operations[op](a, b) : "Ungültiger Operator";   // tenäre Schreibweise

// 4. Steuerung (Eingabe und Ablauf)
const a = parseFloat(prompt("Wert für a eingeben: "));
const b = parseFloat(prompt("Wert für b eingeben: "));
const op = prompt("Operator eingeben (+, -, *, /): ");

const result = taschenRechner(op, a, b);

console.log(`-------------------`);
console.log(`Ergebnis: ${result}`);

// Beispiel: Switch-Case

function getStatus(code) {
    switch (code) {
        case 'success': return 'Erfolgreich';
        case 'error': return 'Fehler aufgetreten';
        case 'loading': return 'Lädt noch...';
        default: return 'Unbekannter Status';
    }
}

console.log(getStatus(prompt("Geben Sie einen Statuscode ein (success, error, loading): ")));

// Beispiel: Lookup-Objekt

const statusLookup = {
    'success': 'Erfolgreich',
    'error': 'Fehler aufgetreten',
    'loading': 'Lädt noch...'
};  

function getStatusLookup(code) {
    return statusLookup[code] || 'Unbekannter Status';
}   

console.log(getStatusLookup(prompt("Geben Sie einen Statuscode ein (success, error, loading): ")));