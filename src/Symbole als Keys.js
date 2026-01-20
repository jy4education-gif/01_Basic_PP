// 1. Symbole erstellen (die Beschreibung in den Klammern dient nur dem Debugging)
const internalID = Symbol("id");
const securityLevel = Symbol("level");

let user = {
    firstName: "Max",
    lastName: "Mustermann",
    [internalID]: 98234, // Symbol als Key nutzen (Klammerschreibweise notwendig)
    [securityLevel]: "High"
};

// --- Zugriff und Sichtbarkeit ---

// Direkter Zugriff über das Symbol-Objekt funktioniert
output(user[internalID]); // 98234

// Aber: Symbole tauchen in Standard-Iterationen NICHT auf
output(Object.keys(user)); // ["firstName", "lastName"] -> Symbole fehlen!
output(JSON.stringify(user)); // '{"firstName":"Max","lastName":"Mustermann"}' -> Symbole werden ignoriert

// Um sie zu finden, benötigt man spezielle Methoden
output(Object.getOwnPropertySymbols(user)); // [Symbol(id), Symbol(level)]

/*
Wann ist das nützlich?
In der professionellen Softwareentwicklung nutzt man Symbole primär für drei Szenarien:

1. Vermeidung von Namenskollisionen (Collision Avoidance)
Stell dir vor, du entwickelst eine Library, die fremde Objekte erweitert (z.B. ein Plugin).
Wenn du einfach user.id = 123 schreibst, überschreibst du vielleicht eine bereits
existierende id des Hauptprogramms.

Lösung: Mit einem Symbol stellst du sicher, 
dass dein Key niemals mit einem anderen Key kollidiert, da dein Symbol einzigartig ist.

2. "Versteckte" Metadaten (Privacy)
Symbole sind nicht echt privat (man kann sie über getOwnPropertySymbols finden), 
aber sie sind nicht versehentlich erreichbar.

Sie erscheinen nicht in Schleifen (for...in).
Sie werden beim Versenden von Daten per API (JSON.stringify) ignoriert.

Nutzen: Man kann interne Status-Informationen an ein Objekt hängen,
ohne dass diese beim Speichern in einer Datenbank oder beim Anzeigen in der UI stören.

3. "Well-Known Symbols" (System-Hooks)
JavaScript nutzt Symbole intern, um das Verhalten von Objekten zu steuern.

Beispiel: Wenn du möchtest, dass dein Objekt mit einer for...of-Schleife
durchlaufen werden kann, musst du die Methode Symbol.iterator implementieren.

Da dies ein Symbol ist, weiß JavaScript sicher:
"Das ist keine normale Funktion, das ist die Anweisung für die Schleife."

Zusammenfassung :
Symbole sind ein Werkzeug für Spezialfälle, in denen man
sicherstellen kann, dass Datenstrukturen robust und gegen
Überschreiben geschützt sind. Für die tägliche Datenverwaltung
(Name, Alter, Adresse) bleibst du bei Strings.
*/