
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */

/*** 02. Theorie: Array */
let arr;
// arr = new Array();
arr = []; // leeres Array
arr = [2,11,7,8,10,20]; // Array mit Zahlen
arr[0] = 99; // Wert an Index 0 ändern
console.log(arr);
console.log("Länge des Arrays:", arr.length); // Länge des Arrays
console.log(`Wert an der Stelle ${arr.indexOf(arr[2])} ist ${arr[2]}`); // Wert an Index 2 ausgeben
/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4,word5) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   word1 + GAP +
                word2 + GAP +
                word3 + GAP +
                word4 + GAP +
                word5 +
                PUNCT;

    return str;
}




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


