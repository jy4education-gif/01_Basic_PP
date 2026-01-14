// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
// const ageJohn = 30;
// const ageMark = 30;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// // Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// // Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if(true)
// if(false)
// if(isJohnOlder)
// if(ageJohn > ageMark)
// {
//     console.log("John ist älter.");
// }

/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

// if (true) 
// if(false)
// if(isJohnOlder)
// if(ageJohn > ageMark)
// {
//    console.log("John ist älter.");  
// } 
// else 
// {
//    console.log("John ist jünger.");  
// }

/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

// if(isJohnOlder)
// {
//     console.log("John ist älter.");  
// } 
// else if(isJohnEqual)  // alternative Zweig
// {
//     console.log("John ist gleich alt.");  
// }
// else 
// {
//    console.log("John ist jünger.");  
// }

/****** Fallunterscheidung / SWITCH|CASE 1 ******/

// const firstName = "Jane";
// let job;

// job = "driver";      // .. fährt TAXI! / UBER
// job = "diver";       // .. taucht im Rhein!
// job = "artist";      // .. malt ein Bild!
// job = "pilot";       // .. fliieegggt!!! --> default
// job = "teacher";     // .. unterrichtet!
// job = "instructor";  // .. unterrichtet!

// switch(job)
// {
//     case "driver":   // job === "driver"    
//         console.log(firstName + " fährt TAXI!");
//         break;
//     case "diver":    // job === "diver"
//         console.log(firstName + " taucht im Rhein!");
//         break;
//     case "artist":   // job === "artist"
//         console.log(firstName + " kann wahrscheinlich nicht bezahlen!");
//         break;
//     case "pilot":    // job === "pilot"
//         console.log(firstName + " fliieegggt!!!");
//         break;
//     case "teacher":  // job === "teacher"
//         console.log(firstName + " unterrichtet!");
//         break;
//     case "instructor":  // job === "instructor"
//         console.log(firstName + " unterrichtet auch!");
//         break;
//     default:
//         console.log(firstName + " macht etwas anderes!");
// }   


// Iteration II:
// Bessere Datenhaltung mit Arrays  

// Wir initialisieren ein leeres Array für die Daten
// let jobData = []; 

// job = "driver";      // .. fährt TAXI! / UBER
// job = "diver";       // .. taucht im Rhein!
// job = "artist";      // .. malt ein Bild!
// job = "pilot";       // .. fliieegggt!!! --> default
// job = "teacher";     // .. unterrichtet!
// job = "instructor";  // .. unterrichtet!

// switch(job) {
//     case "driver":
//         jobData = ["Taxi-Fahrerin", "fährt TAXI oder UBER"];
//         break;
//     case "diver":
//         jobData = ["Taucherin", "taucht im Rhein"];
//         break;
//     case "artist":
//         jobData = ["Künstlerin", "malt ein Bild"];
//         break;
//     case "pilot":
//         jobData = ["Pilotin", "fliegt hoch hinaus"];
//         break;
//     case "teacher":
//     case "instructor":
//         jobData = ["Lehrkraft", "unterrichtet"];
//         break;
//     default:
//         jobData = ["Berufstätige", "macht etwas anderes"];
// }

// Ausgabe über die Indizes des Arrays
// console.log(`${firstName} ist ${jobData[0]} und ${jobData[1]}.`);

// Iteration III:
// Elegantere Ausgabe mit Refactoring

const firstName = "Jane";
let job = "instructor";

// 1. Definition der Daten in einem Lookup-Objekt
const jobMap = {
    driver:     ["Fahrerin", "fährt TAXI oder UBER"],
    diver:      ["Taucherin", "taucht im Rhein"],
    artist:     ["Künstlerin", "malt ein Bild"],
    pilot:      ["Pilotin", "fliegt hoch hinaus"],
    teacher:    ["Lehrkraft", "unterrichtet"],
    instructor: ["Lehrkraft", "unterrichtet"]
};

// 2. Daten abrufen mit Fallback (entspricht dem 'default')
// Wir nutzen Destructuring, um die zwei Strings direkt in Variablen zu laden
const [title, description] = jobMap[job] || ["Berufstätige", "macht etwas anderes"];

// 3. Ausgabe
console.log(`${firstName} ist ${title} und ${description}.`);