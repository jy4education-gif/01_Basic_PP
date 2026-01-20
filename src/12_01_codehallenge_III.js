/*** Mini-Challenge: Satzbau + variable Punktuation */

/**
 * Erstellt einen Satz aus einem Wort-Array und fügt das passende Satzzeichen an.
 * * @param {string[]} arr - Array mit den einzelnen Wörtern des Satzes.
 * @param {string} op - Kennung für den Satztyp ("S", "Q", "E").
 * @returns {string} - Der fertig formatierte Satz.
 */
function getSentence(arr, op) {
    // 1. Array-Elemente mit einem Leerzeichen verbinden
    // Die join-Methode ist hier effizienter als eine manuelle Schleife.
    let baseSentence = arr.join(" ");

    // 2. Zuordnung der Satzzeichen über ein Mapping-Objekt (Alternative zu Switch-Case)
    // Dies erhöht die Wartbarkeit, falls weitere Typen hinzukommen.
    const punctuationMap = {
        "S": ".", // Sentence
        "Q": "?", // Question
        "E": "!"  // Exclamation
    };

    // 3. Das entsprechende Satzzeichen basierend auf dem Parameter 'op' wählen
    // Falls 'op' nicht existiert, wird ein leerer String als Fallback genutzt.
    let punctuation = punctuationMap[op] || "";

    // 4. Den zusammengesetzten Satz zurückgeben
    return baseSentence + punctuation;
}

/**
 * Modul: Ausgabe in Konsole
 * @param {any} outputData - Die auszugebenden Daten.
 */
function output(outputData) {
    console.log(outputData);
}

/*** Test-Aufrufe */
output(getSentence(["Ich", "bin", "Max"], "S"));
output(getSentence(["Bist", "du", "Max"], "Q"));
output(getSentence(["Ich", "bin"], "E"));
output(getSentence(["Ich", "hätt", "gern", "die", "Platt", "von", "dene", "zwei", "diwodaso", "Spass", "mache,", "habbe", "Sie", "die"], "Q"));