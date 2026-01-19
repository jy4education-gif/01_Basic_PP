
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

/* 02a. Theorie: Schleifen (for-schleife) */
/* For -Schleifen als allg. Wiederholungs-Struktur */

// Inkrement (untere Grenze --> obere Grenze)
for (let i = 0; i > 100 ; i++) {
    output("index :" + i);  // i --> Schleifen-Index
}


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4,word5,word6) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   word1 + GAP +
                word2 + GAP +
                word3 + GAP +
                word4 + GAP +
                word5 + GAP +
                word6 +
                PUNCT;

    return str;
}




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}

/*** 01a. Funktionalität mit Array 1 */
// Kritik | Überlegung
// word1,word2, .... wordN :: Semantische Struktur
// arr[0],arr[1] ... arr[n-1] :: Numerische Struktur (0,1,2,3 ... n)
// --> Transformation: semantisches Problem --> numerisches Problem
output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));
function getSentenceArr(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   arr[0] + GAP +
                arr[1] + GAP +
                arr[2] + GAP +
                arr[3] + GAP +
                arr[4] + GAP +
                arr[5] + 
                PUNCT;

    return str;
}
// Elegante Lösung über join:
output(getSentenceArr(["Ich","bin","die","coole","und","elegante","Maxine","Mützerich"]));

function getSentenceArr(arr) {
  const GAP = " ";
  const PUNCT = ".";
  return arr.join(GAP) + PUNCT;
}

